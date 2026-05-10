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

import { createGlobalTheme, globalKeyframes, globalStyle } from "@vanilla-extract/css";
import { selectors } from "src";
import { createChroma, createCodeMirror } from "src/styles";
import { otherThemeVars, syntaxVars, themeVars, type Syntax } from "src/types";
import type { GithubColor } from "./github";
import { githubSyntax2CodeMirror, prettylights2Chroma, type GitHubSyntax } from "./githubSyntax";
import type { MapLeafNodes } from "./types";

/** 语法高亮配置
 * - "github": 使用 GitHub Syntax 代码高亮配色
 * - "gitea": 使用 Gitea Syntax 代码高亮配色
 */
export type SyntaxConfig =
  | { syntaxType: "github"; syntaxColors: GitHubSyntax; githubColors: GithubColor }
  | { syntaxType: "gitea"; syntaxColors: Syntax };

export type Theme = {
  isDarkTheme: boolean;
  themeColors: MapLeafNodes<typeof themeVars, string>;
} & SyntaxConfig;

// vite define 编译时注入的常量
declare const __THEME_VERSION__: string;

export function createTheme(theme: Theme): void {
  // 注入主题标识版本号
  createGlobalTheme(selectors.root, { theme: { version: `"${__THEME_VERSION__}"` } });
  // 全局主题变量
  createGlobalTheme(selectors.root, themeVars, theme.themeColors);
  createGlobalTheme(selectors.root, otherThemeVars, {
    border: { radius: "6px" },
    color: { git: "#f05133" },
    checkbox: { size: "14px" },
  });
  // 全局样式
  globalStyle(selectors.root, {
    accentColor: themeVars.color.accent,
    colorScheme: theme.isDarkTheme ? "dark" : "light",
  });
  if (theme.isDarkTheme) globalStyle(selectors.emoji, { filter: "invert(100%) hue-rotate(180deg)" });
  // 全局动画
  globalKeyframes(selectors.overlayAppear, {
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
  });
  globalKeyframes(selectors.overlayAppearDown, {
    "0%": { opacity: 0, transform: "translateY(-8px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  });
  globalKeyframes(selectors.overlayAppearUp, {
    "0%": { opacity: 0, transform: "translateY(8px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  });
  // 代码高亮
  if (theme.syntaxType === "github") {
    createChroma(prettylights2Chroma(theme.syntaxColors.prettyLights));
    createCodeMirror(githubSyntax2CodeMirror(theme.syntaxColors, theme.githubColors));
  } else {
    createGlobalTheme(selectors.root, syntaxVars, theme.syntaxColors);
  }
}
