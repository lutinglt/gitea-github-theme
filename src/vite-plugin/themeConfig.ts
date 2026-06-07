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

import type { ColorblindType, CSSString, Theme } from "../core";

type ThemeSpec = {
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
  /** 主题追加的样式, 优先级高于默认样式和主题系列样式 */
  styles?: CSSString;
};
type Themes =
  | {
      /** 主题系列的深色模式主题 */
      dark: ThemeSpec;
      [themeKeyName: string]: ThemeSpec;
    }
  | {
      /** 主题系列的浅色模式主题 */
      light: ThemeSpec;
      [themeKeyName: string]: ThemeSpec;
    };
export type ThemeSeries = {
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
  /** 主题系列追加的样式, 优先级高于默认样式 */
  styles?: CSSString;
};

export type ThemeConfig = {
  /** 全局样式 */
  globalStyles?: CSSString;
  /** 主题系列 */
  themeSeries: ThemeSeries[];
};

/** 定义主题配置 */
export function defineThemeConfig(themeConfig: ThemeConfig): ThemeConfig {
  // 检查主题系列名称是否重复
  const names = themeConfig.themeSeries.map(c => c.themeSeriesName);
  const duplicates = names.filter((name, index) => names.indexOf(name) !== index);
  if (duplicates.length > 0) {
    throw new Error(`Duplicate themeSeriesName found: ${[...new Set(duplicates)].join(", ")}`);
  }
  return themeConfig;
}
