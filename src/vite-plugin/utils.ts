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

import type { ThemeSeries } from "./themeConfig";

/** 按 "-" 分割字符串并首字母大写 */
function kebabToTitle(str: string): string {
  return str
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
/** 将主题名称转为正式主题名称 */
export function buildFullThemeName(themeSeries: ThemeSeries, themeName: string): string {
  return `theme-github-${themeSeries.themeSeriesName !== "default" ? `${themeSeries.themeSeriesName}-` : ""}${themeName}`;
}
/** 将显示名称转为正式名称 */
export function buildFullDisplayName(themeSeries: ThemeSeries, displayName: string): string {
  return `GitHub ${kebabToTitle(themeSeries.themeSeriesName)} ${kebabToTitle(displayName)}`;
}
