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

import { transform } from "lightningcss";
import fs from "node:fs";
import path from "node:path";
import type { PluginOption } from "vite";
import type { GiteaThemeMeta, Theme } from "../core";
import { createTheme, createThemeMetaInfo, flushCSS } from "../core";
import { compileCSS } from "../vanilla-extract";
import { buildFullDisplayName, buildFullThemeName } from "./utils";

type ThemeEntry = {
  themeName: string;
  meta: GiteaThemeMeta;
  theme?: Theme;
  autoTheme?: { darkThemeName: string; lightThemeName: string };
};

export function giteaGitHubTheme(): PluginOption {
  const themeEntries: ThemeEntry[] = [];

  return {
    name: "lutinglt-gitea-github-theme",

    async config(userConfig) {
      // 1. 动态导入 theme.config.ts（Bun 原生 TS + exports 自引用）
      const themeConfig = (await import("@lutinglt/gitea-github-theme/theme.config.ts")).default;

      // 2. 解析主题条目 + 自动主题条目
      for (const themeSeries of themeConfig) {
        for (const [themeKeyName, entry] of Object.entries(themeSeries.themes)) {
          const name = entry.themeName ?? themeKeyName;
          // 直接修改主题名用于自动主题生成使用, 避免重复计算
          entry.themeName = buildFullThemeName(themeSeries, name);
          themeEntries.push({
            themeName: entry.themeName,
            meta: {
              colorScheme: entry.theme.isDarkTheme ? "dark" : "light",
              displayName: entry.displayName ? `GitHub ${entry.displayName}` : buildFullDisplayName(themeSeries, name),
              colorblindType: entry.colorblindType,
            },
            theme: entry.theme,
          });
        }

        if (themeSeries.themes.dark && themeSeries.themes.light) {
          const themeName = buildFullThemeName(themeSeries, "auto");
          themeEntries.push({
            themeName,
            meta: {
              colorScheme: "auto",
              displayName: themeSeries.autoTheme?.displayName
                ? `GitHub ${themeSeries.autoTheme.displayName}`
                : buildFullDisplayName(themeSeries, "auto"),
              colorblindType: themeSeries.autoTheme?.colorblindType,
            },
            autoTheme: {
              darkThemeName: themeSeries.themes.dark.themeName!,
              lightThemeName: themeSeries.themes.light.themeName!,
            },
          });
        }
      }

      // 4. 提供占位入口，Vite 需要至少一个输入才会触发 generateBundle
      const outDir = userConfig.build?.outDir || "dist";
      const placeholder = path.join(outDir, "_placeholder.js");
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(placeholder, "// placeholder\n");
      return { build: { outDir, rolldownOptions: { input: placeholder } } };
    },

    async generateBundle(this, _options, bundle) {
      // 清除占位入口产物
      for (const key of Object.keys(bundle)) {
        delete bundle[key];
      }

      // 1. 编译公共样式 (替代 wyw-in-js)
      // Bun 原生 TS + exports 自引用，导入即触发所有 css() 副作用
      await import("@lutinglt/gitea-github-theme/styles");
      const rawStyles = Buffer.from(flushCSS());
      const styles = transform({ filename: "styles.css", code: rawStyles, minify: true }).code.toString();

      // 编译每个主题的 CSS 并输出
      for (const entry of themeEntries) {
        const { themeName, meta, autoTheme } = entry;

        const rawThemeCSS = Buffer.from(
          compileCSS(() => {
            createThemeMetaInfo(meta);
            if (entry.theme) createTheme(entry.theme);
          })
        );
        const themeCSS = transform({ filename: themeName + ".css", code: rawThemeCSS, minify: true }).code.toString();
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
    },
  };
}
