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
import { otherThemeVars, themeInfoVars, themeVars } from "src/types/vars";
import * as selectors from "./selectors";
import type { MapLeafNodes, WithOptionalLayer } from "./types";

export type Theme = WithOptionalLayer<MapLeafNodes<typeof themeVars, string>>;

// vite define 编译时注入的常量
declare const __THEME_VERSION__: string;

export function createTheme(theme: Theme): void {
  const isDarkTheme: boolean = JSON.parse(theme.isDarkTheme);
  // 全局主题变量
  createGlobalTheme(selectors.root, themeInfoVars, { version: `"${__THEME_VERSION__}"` });
  createGlobalTheme(selectors.root, themeVars, theme);
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
}
