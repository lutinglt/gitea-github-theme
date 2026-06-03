/*!
 * Copyright (c) https://github.com/lutinglt
 *
 * See the NOTICE file distributed with this work for additional
 * information regarding copyright ownership.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { removeAdapter, setAdapter } from "@vanilla-extract/css/adapter";
import { endFileScope, setFileScope } from "@vanilla-extract/css/fileScope";
import { transformCss } from "@vanilla-extract/css/transformCss";
import * as lightningcss from "lightningcss";
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { rolldown } from "rolldown";
import type { PluginOption } from "vite";
import type { Theme } from "./core";
import { createTheme } from "./core";
import { flushCSS } from "./css";
import type { ColorblindType, GiteaThemeMeta } from "./styles";
import { createThemeMetaInfo } from "./styles";

interface Composition {
  identifier: string;
  classList: string;
}

type ThemeEntry = {
  /** 主题名称 */
  themeName: string;
  /** Gitea 主题 元数据 */
  meta: GiteaThemeMeta;
  /** 主题颜色 */
  theme: Theme;
};

type AutoThemeEntry = { darkThemeName: string; lightThemeName: string };

type ThemeConfig = {
  /** 主题名称, 用于生成文件名, 未指定时取 themes 中的键名 */
  themeName?: string;
  /** 显示名称, 用于 Gitea UI 显示的名称
   * - 未指定时根据 themeName 生成
   * - 指定时将覆盖生成的名称, 仅包含主题插件前缀, 不包含主题系列名称
   */
  displayName?: string;
  /** 色盲类型, 仅用于声明主题为色盲主题 */
  colorblindType?: ColorblindType;
  theme: Theme;
};

type Themes =
  | {
      /** 主题系列的深色模式主题 */
      dark: ThemeConfig;
      [themeKeyName: string]: ThemeConfig;
    }
  | {
      /** 主题系列的浅色模式主题 */
      light: ThemeConfig;
      [themeKeyName: string]: ThemeConfig;
    };

type ThemeSeries = {
  /** 主题系列名称, 做为前缀用于生成文件名和显示名称  */
  themeSeriesName: string;
  /** 主题系列自动颜色主题配置 */
  autoTheme?: {
    /** 自动颜色主题用于 Gitea UI 显示的名称 */
    displayName?: string;
    /** 色盲类型, 仅用于声明主题为色盲主题 */
    colorblindType?: ColorblindType;
  };
  /** 必须至少声明 dark/light 其中一个, 如果 dark & light 都声明了, 会生成自动颜色主题 */
  themes: Themes;
};

/** 定义主题配置 */
export function defineThemeConfig(config: ThemeSeries[]): ThemeSeries[] {
  // 检查主题系列名称是否重复
  const names = config.map(c => c.themeSeriesName);
  const duplicates = names.filter((name, index) => names.indexOf(name) !== index);
  if (duplicates.length > 0) {
    throw new Error(`Duplicate themeSeriesName found: ${[...new Set(duplicates)].join(", ")}`);
  }
  return config;
}

/** 使用 Vanilla Extract 的 adapter + transformCss 在 Node.js 中编译主题 CSS */
function compileThemeCSS(compileFn: () => void): string {
  const capturedCssObjs: Parameters<typeof transformCss>[0]["cssObjs"] = [];
  const localClassNames = new Set<string>();
  const composedClassLists: Composition[] = [];

  setAdapter({
    appendCss: css => capturedCssObjs.push(css),
    registerClassName: className => localClassNames.add(className),
    registerComposition: composition => composedClassLists.push(composition),
    markCompositionUsed: () => {},
    onEndFileScope: () => {},
    getIdentOption:
      () =>
      ({ debugId }) =>
        `${debugId}`,
  });
  setFileScope("theme.css.ts");

  compileFn();

  endFileScope();
  removeAdapter();

  return transformCss({
    localClassNames: Array.from(localClassNames),
    composedClassLists,
    cssObjs: capturedCssObjs,
  }).join("\n");
}

/** Gitea GitHub Theme 主题插件: 解析入口文件, 生成主题 */
export function giteaGitHubThemePlugin(): PluginOption {
  const PLUGIN_NAME = "GiteaGitHubThemePlugin";
  const PREFIX = "theme-github-";
  let themeEntries: ThemeEntry[];
  const autoThemeEntries = new Map<string, AutoThemeEntry>();
  let themeVersion = "";
  let styles = "";

  return {
    name: PLUGIN_NAME,

    async config(userConfig) {
      const root = userConfig.root || process.cwd();
      const entry = path.join(root, "theme.config.ts");
      const entryPath = path.isAbsolute(entry) ? entry : path.resolve(root, entry);

      // 提取 __THEME_VERSION__ 定义, 用于后续在 Node.js 中编译主题时注入
      const themeVersionDefine = userConfig.define?.__THEME_VERSION__;
      if (typeof themeVersionDefine === "string") {
        themeVersion = JSON.parse(themeVersionDefine);
      }

      // 1. 创建临时目录
      const hash = crypto.randomBytes(6).toString("hex");
      const tmpDir = path.join(userConfig.build?.outDir || "dist", `.gitea-theme-tmp-${hash}`);
      fs.mkdirSync(tmpDir, { recursive: true });

      // 2. 使用 rolldown 打包入口文件为 ESM, 以便在 Node.js 中 import
      // 第三方包标记为外部依赖, 运行时从项目的 node_modules 解析
      const resolveAlias: Record<string, string> = {};
      if (userConfig.resolve?.alias) {
        const aliases = userConfig.resolve.alias;
        if (Array.isArray(aliases)) {
          for (const alias of aliases) {
            if (typeof alias.find === "string") {
              resolveAlias[alias.find] = alias.replacement;
            }
          }
        } else {
          Object.assign(resolveAlias, aliases);
        }
      }

      const tmpBundle = path.join(tmpDir, "_themes_entry.mjs");
      const bundle = await rolldown({
        input: entryPath,
        platform: "node",
        // 第三方包标记为外部依赖, 运行时从项目的 node_modules 解析, 避免无谓打包提速
        external: id => {
          if (id.startsWith(".") || path.isAbsolute(id)) return false;
          // alias 路径 (如 "src/core", "themes/dark", "styles") 是项目内部模块, 需要打包
          if (Object.keys(resolveAlias).some(alias => id === alias || id.startsWith(alias + "/"))) return false;
          return true;
        },
        resolve: {
          alias: resolveAlias,
          extensions: [".ts", ".js"],
        },
      });
      const { output } = await bundle.generate({ format: "esm" });
      fs.writeFileSync(tmpBundle, output[0].code);
      await bundle.close();

      // 3. 动态导入打包后的入口文件, 获取主题配置
      const themeConfig: ThemeSeries[] = (await import(pathToFileURL(tmpBundle).href)).default;

      if (!themeConfig || typeof themeConfig !== "object") {
        throw new Error(`[${PLUGIN_NAME}] Entry file must default-export a defineThemeConfig result`);
      }

      /** 辅助函数: 按 "-" 分割字符串并首字母大写 */
      function kebabToTitle(str: string): string {
        return str
          .split("-")
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
      }
      /** 辅助函数: 将主题名称转为正式主题名称 */
      function buildFullThemeName(themeSeries: ThemeSeries, themeName: string): string {
        return `${PREFIX}${themeSeries.themeSeriesName !== "default" ? `${themeSeries.themeSeriesName}-` : ""}${themeName}`;
      }
      /** 辅助函数: 将显示名称转为正式名称 */
      function buildFullDisplayName(themeSeries: ThemeSeries, displayName: string): string {
        return `GitHub ${kebabToTitle(themeSeries.themeSeriesName)} ${kebabToTitle(displayName)}`;
      }

      // 4. 解析主题条目
      themeEntries = themeConfig.flatMap(themeSeries =>
        Object.entries(themeSeries.themes).map(([themeKeyName, entry]) => {
          const name = entry.themeName ?? themeKeyName;
          // 直接修改主题名用于自动主题生成使用, 避免重复计算
          entry.themeName = buildFullThemeName(themeSeries, name);
          return {
            themeName: entry.themeName,
            meta: {
              colorScheme: entry.theme.isDarkTheme ? "dark" : "light",
              displayName: entry.displayName ? `GitHub ${entry.displayName}` : buildFullDisplayName(themeSeries, name),
              colorblindType: entry.colorblindType,
            },
            theme: entry.theme,
          };
        })
      );

      // 5. 解析自动主题条目
      for (const themeSeries of themeConfig) {
        if (themeSeries.themes.dark && themeSeries.themes.light) {
          const themeName = buildFullThemeName(themeSeries, "auto");
          const meta: GiteaThemeMeta = {
            colorScheme: "auto",
            displayName: themeSeries.autoTheme?.displayName
              ? `GitHub ${themeSeries.autoTheme.displayName}`
              : buildFullDisplayName(themeSeries, "auto"),
            colorblindType: themeSeries.autoTheme?.colorblindType,
          };
          autoThemeEntries.set(themeName, {
            darkThemeName: themeSeries.themes.dark.themeName!,
            lightThemeName: themeSeries.themes.light.themeName!,
          });
          // 将自动主题也加入 themeEntries 以便编译 CSS
          themeEntries.push({ themeName, meta, theme: null as unknown as Theme });
        }
      }

      // 6. 编译公共样式 (替代 wyw-in-js)
      // 使用 jiti 直接执行源文件，无需 rolldown 打包，避免 tree-shaking
      const { createJiti } = await import("jiti");
      const jitiInstance = createJiti(import.meta.url, {
        alias: resolveAlias,
      });
      await jitiInstance.import(path.join(root, "styles/index.ts"));
      const rawStyles = flushCSS();
      // LightningCSS 展开嵌套 + 压缩
      styles = lightningcss
        .transform({
          filename: "styles.css",
          code: Buffer.from(rawStyles),
          targets: { chrome: 100 << 16 },
          minify: true,
        })
        .code.toString();

      // 7. 提供占位入口，Vite 需要至少一个输入才会触发 generateBundle
      const placeholder = path.join(tmpDir, "_placeholder.js");
      fs.writeFileSync(placeholder, "// placeholder\n");
      return { build: { rollupOptions: { input: placeholder } } };
    },

    generateBundle(this, _options, bundle) {
      // 清除占位入口产物
      for (const key of Object.keys(bundle)) {
        delete bundle[key];
      }

      // 注入 __THEME_VERSION__ 全局变量, createTheme 中使用
      (globalThis as Record<string, unknown>).__THEME_VERSION__ = themeVersion;

      // 编译每个主题的 CSS 并输出
      for (const entry of themeEntries) {
        const { themeName, meta } = entry;
        const autoTheme = autoThemeEntries.get(themeName);

        let themeCSS = compileThemeCSS(() => {
          createThemeMetaInfo(meta);
          // 自动主题不需要颜色变量, 只有 metaInfo
          if (!autoTheme) {
            createTheme(entry.theme);
          }
        });
        themeCSS = lightningcss
          .transform({ filename: themeName + ".css", code: Buffer.from(themeCSS), minify: true })
          .code.toString();
        const source = autoTheme
          ? [
              `@import "./${autoTheme.darkThemeName}.css" (prefers-color-scheme: dark);`,
              `@import "./${autoTheme.lightThemeName}.css" (prefers-color-scheme: light);`,
              themeCSS,
            ].join("\n")
          : `${themeCSS}${styles}`;

        this.emitFile({
          type: "asset",
          fileName: `${themeName}.css`,
          source,
        });
      }

      // 清理全局变量
      delete (globalThis as Record<string, unknown>).__THEME_VERSION__;
    },
  };
}
