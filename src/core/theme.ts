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
import pkg from "../../package.json";
import type { GiteaColor, GitHubColor, ThemeColor } from "../palette";
import { gitea2ThemeVars, github2ThemeColor, primer2Chroma, primer2CodeMirror, theme2ThemeVars } from "../palette";
import selectors from "../selectors";
import { otherThemeVars, syntaxVars, themeVars, type Syntax } from "../types";
import { createChroma } from "./chroma";
import { createCodeMirror } from "./codemirror";
import type { MapLeafNodes } from "./types";

function getThemeVersion(): string {
  // 版本号: 版本号.YYMMDD
  const now = new Date();
  const year = now.getFullYear().toString().slice(-2);
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");
  return `${pkg.version}.${year}${month}${day}`;
}

export type ThemeVars = { isDarkTheme: boolean } & MapLeafNodes<typeof themeVars, string>;
export type ThemeColors =
  | { colorType: "github"; themeColor: GitHubColor }
  | { colorType: "gitea"; themeColor: GiteaColor; syntaxColor: Syntax }
  | { colorType: "theme"; themeColor: ThemeColor; syntaxColor: Syntax };
export type Theme = {
  isDarkTheme: boolean;
} & ThemeColors;

/** 定义颜色, 用于生成颜色主题
 *
 * - "github": GitHub 配色和代码语法高亮配色
 * - "gitea": Gitea 配色和代码语法高亮配色
 * - "theme": GiteaGitHubTheme 用于简化 Gitea 颜色变量设置的配色, 使用 Gitea 的代码语法高亮色
 *
 * @example
 * import type { Console, Diff, Other, Github, ThemeColor, Syntax } from "@lutinglt/gitea-github-theme/core";
 * import { defineTheme, themeVars } from "@lutinglt/gitea-github-theme/core";
 *
 * const console: Console = {
 *   fg: {
 *     self: "#f0f6fc", // self 表示本身等于 --color-console-fg: #f0f6fc, 所有键名为 self 的都将被忽略
 *     subtle: themeVars.color.body, // 引用别的CSS变量等于 --color-console-fg-subtle: var(--color-body)
 *     num1: "rgb(125, 133, 144)", // 由于纯数字无法在 TS 中使用点调用, 采用 num 前缀等于 --color-console-fg-1: rgb(125, 133, 144)
 *   },
 *   ...
 * }
 *...
 *
 * export const themeColor: ThemeColor = {
 *   isDarkTheme: true,
 *   primary: "#0969da",
 *   ...
 *   console,
 *   diff,
 *   other,
 *   github,
 * }
 * ...
 * export const dark = defineTheme({
 *   colorType: "theme",
 *   themeColor: themeColor,
 *   syntaxColor: syntaxColor,
 * })
 */
export function defineTheme(themeColors: ThemeColors): Theme {
  return {
    isDarkTheme: themeColors.themeColor.isDarkTheme,
    ...themeColors,
  };
}

export function createTheme(theme: Theme): void {
  const { isDarkTheme, ...themeVarsColor } =
    theme.colorType === "github"
      ? theme2ThemeVars(github2ThemeColor(theme.themeColor))
      : theme.colorType === "theme"
        ? theme2ThemeVars(theme.themeColor)
        : gitea2ThemeVars(theme.themeColor);

  // 注入主题标识和版本号
  createGlobalTheme(selectors.root, {
    theme: { version: `"${getThemeVersion()}"` },
    is: { dark: { theme: isDarkTheme.toString() } },
  });
  // 全局主题变量
  createGlobalTheme(selectors.root, themeVars, themeVarsColor);
  createGlobalTheme(selectors.root, otherThemeVars, {
    border: { radius: "6px" },
    color: { git: "#f05133" },
    checkbox: { size: "14px" },
  });
  // 全局样式
  globalStyle(selectors.root, {
    accentColor: themeVars.color.accent,
    colorScheme: isDarkTheme ? "dark" : "light",
  });
  if (isDarkTheme) globalStyle(selectors.emoji, { filter: "invert(100%) hue-rotate(180deg)" });
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
  if (theme.colorType === "github") {
    createChroma(primer2Chroma(theme.themeColor));
    createCodeMirror(primer2CodeMirror(theme.themeColor));
  } else {
    createGlobalTheme(selectors.root, syntaxVars, theme.syntaxColor);
  }
}
