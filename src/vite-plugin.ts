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

import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { rolldown } from "rolldown";
import type { PluginOption } from "vite";
import type { Theme } from "./core";
import type { ColorblindType, GiteaThemeMeta } from "./styles";

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

/** Gitea GitHub Theme 主题插件: 解析入口文件, 生成主题 */
export function giteaGitHubThemePlugin(): PluginOption[] {
  const PLUGIN_NAME = "GiteaGitHubThemePlugin";
  const PREFIX = "theme-github-";
  let themeEntries: ThemeEntry[];
  const autoThemeEntries = new Map<string, AutoThemeEntry>();

  return [
    // createGlobalTheme 直接创建变量时, 仅使用对象值
    vanillaExtractPlugin({ identifiers: "debug" }),
    {
      name: PLUGIN_NAME,

      async config(userConfig) {
        const root = userConfig.root || process.cwd();
        const entry = path.join(root, "theme.config.ts");
        const entryPath = path.isAbsolute(entry) ? entry : path.resolve(root, entry);

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
                displayName: entry.displayName
                  ? `GitHub ${entry.displayName}`
                  : buildFullDisplayName(themeSeries, name),
                colorblindType: entry.colorblindType,
              },
              theme: entry.theme,
            };
          })
        );

        // 5. 为每个主题生成临时文件
        const input: Record<string, string> = {};
        for (const entry of themeEntries) {
          const { themeName, theme } = entry;
          // 创建颜色主题的 css.ts 文件, vanilla-extract 需要这个文件后缀名并生成 css
          const tmpCssTs = `${themeName}.css.ts`;
          fs.writeFileSync(
            path.join(tmpDir, `${tmpCssTs}`),
            // 字符串导入代码
            [
              `import { createTheme, createThemeMetaInfo } from "@gitea-github-theme/core";`,
              `createThemeMetaInfo(${JSON.stringify(entry.meta)});`,
              `createTheme(${JSON.stringify(theme)});`,
            ].join("\n")
          );
          // 生成主题入口的 .ts 文件, 合并样式和颜色主题
          const tmpInputTs = path.join(tmpDir, `${themeName}.ts`);
          fs.writeFileSync(tmpInputTs, [`import "@gitea-github-theme/styles";`, `import "./${tmpCssTs}";`].join("\n"));

          input[themeName] = tmpInputTs;
        }

        // 6. 生成自动主题入口
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
            const tmpCssTs = `${themeName}.css.ts`;
            fs.writeFileSync(
              path.join(tmpDir, `${tmpCssTs}`),
              // 字符串导入代码
              [
                `import { createThemeMetaInfo } from "@gitea-github-theme/core";`,
                `createThemeMetaInfo(${JSON.stringify(meta)});`,
              ].join("\n")
            );
            const tmpInputTs = path.join(tmpDir, `${themeName}.ts`);
            fs.writeFileSync(tmpInputTs, `import "./${tmpCssTs}";`);
            autoThemeEntries.set(themeName, {
              darkThemeName: themeSeries.themes.dark.themeName!,
              lightThemeName: themeSeries.themes.light.themeName!,
            });

            input[themeName] = tmpInputTs;
          }
        }

        // 返回合并配置, 注入 rollup input
        return {
          build: {
            rolldownOptions: {
              input,
              output: { assetFileNames: "[name].[ext]" },
              checks: {
                // 主题构建一直过慢, 不再检查各插件消耗时间
                pluginTimings: false,
              },
            },
          },
        };
      },

      generateBundle(this, _, bundle) {
        let styles = "";
        for (const [key, value] of Object.entries(bundle)) {
          if (value.type === "chunk") {
            delete bundle[key]; // 删除 chunk
          } else {
            // 样式文件是通过入口导入的, 没有原始文件名
            if (value.originalFileNames.length === 0) {
              // 收集所有的样式文件(逻辑上只有一个)
              // vite 会在尾部添加注释, 后续会合并到颜色主题, 此处需要删除注释
              styles += value.source.toString().replace("/*$vite$:1*/", "");
              delete bundle[key];
            }
          }
        }
        // 生成所有的主题文件
        for (const [_key, value] of Object.entries(bundle)) {
          // 仅为了类型检查, 逻辑上输出中全是 asset 类型
          // vite8 中 bundle 删除后依旧有 styles.css, 追加判断需要有入口的原始文件名
          if (value.type === "asset" && value.originalFileNames.length > 0) {
            // 合并样式文件和主题信息
            const themeName = path.basename(value.fileName, ".css");
            const autoTheme = autoThemeEntries.get(themeName);
            if (autoTheme) {
              value.source = [
                `@import "./${autoTheme.darkThemeName}.css" (prefers-color-scheme: dark);`,
                `@import "./${autoTheme.lightThemeName}.css" (prefers-color-scheme: light);`,
                `${value.source.toString()}`,
              ].join("\n");
            } else {
              value.source = `${value.source.toString()}${styles}`;
            }
          }
        }
      },
    },
  ];
}
