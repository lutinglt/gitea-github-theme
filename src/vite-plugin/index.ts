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
import type { PluginOption } from "vite";
import { createTheme, createThemeMetaInfo, type GiteaThemeMeta, type Theme } from "../core";
import { compileCSS } from "../vanilla-extract";
import { buildFullDisplayName, buildFullThemeName } from "./utils";

const VIRTUAL_ID = "virtual:gitea-github-theme-placeholder";

type ThemeEntry = {
  themeName: string;
  meta: GiteaThemeMeta;
  theme?: Theme;
  autoTheme?: { darkThemeName: string; lightThemeName: string };
};

export function giteaGitHubTheme(): PluginOption {
  return {
    name: "lutinglt-gitea-github-theme",

    resolveId(id) {
      if (id === VIRTUAL_ID) return "\0" + VIRTUAL_ID;
    },
    load(id) {
      if (id === "\0" + VIRTUAL_ID) return "//" + VIRTUAL_ID;
    },
    config() {
      return { build: { rolldownOptions: { input: VIRTUAL_ID } } };
    },

    async generateBundle(this, _options, bundle) {
      // 清除占位入口产物
      for (const key of Object.keys(bundle)) {
        delete bundle[key];
      }

      // 1. 解析主题配置
      const themeConfig = (await import("@lutinglt/gitea-github-theme/theme.config.ts")).default;
      const themeEntries: ThemeEntry[] = [];

      for (const themeSeries of themeConfig) {
        for (const [themeKeyName, entry] of Object.entries(themeSeries.themes)) {
          const name = entry.themeName ?? themeKeyName;
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
        // 处理自动主题
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

      // 2. 编译公共样式
      const rawStyles = Buffer.from((await import("@lutinglt/gitea-github-theme/styles")).default);
      const styles = transform({ filename: "styles.css", code: rawStyles, minify: true }).code.toString();

      // 3. 编译每个主题的 CSS 并输出
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

        this.emitFile({ type: "asset", fileName: `${themeName}.css`, source });
      }
    },
  };
}
