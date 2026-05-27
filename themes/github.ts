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

/**
 * @author lutinglt
 */

import type { GitHubColor } from "@gitea-github-theme/core";
import { deepOverride, defineTheme, display2GitHubColor, primer2GitHubColor } from "@gitea-github-theme/core";
import { default as primer } from "@gitea-github-theme/primer";

/** - 仅适用于 Dark 主题的颜色转换 */
function darkConvert(color: GitHubColor) {
  return deepOverride(color, {
    // 不同步 GitHub 样式, 对调 --controlKnob-bgColor-rest 和 --controlTrack-bgColor-rest 的颜色
    // 激活颜色与背景色更一致, 在仪表板仓库/组织切换按钮中与菜单颜色一致
    controlKnob: { bgColor: { rest: color.controlTrack.bgColor.rest } },
    controlTrack: { bgColor: { rest: color.controlKnob.bgColor.rest } },
  });
}
// 普通主题
export const githubDarkColor = darkConvert(primer2GitHubColor(primer.dark, true));
export const githubColorblindDarkColor = darkConvert(primer2GitHubColor(primer.darkColorblind, true));
export const githubTritanopiaDarkColor = darkConvert(primer2GitHubColor(primer.darkTritanopia, true));
export const githubSoftDarkColor = primer2GitHubColor(primer.darkDimmed, true);
export const githubLightColor = primer2GitHubColor(primer.light);
export const githubColorblindLightColor = primer2GitHubColor(primer.lightColorblind);
export const githubTritanopiaLightColor = primer2GitHubColor(primer.lightTritanopia);
// 高对比度主题
export const githubDarkHighContrastColor = darkConvert(primer2GitHubColor(primer.darkHighContrast, true));
export const githubDarkColorblindHighContrastColor = darkConvert(primer2GitHubColor(primer.darkColorblindHighContrast, true));
export const githubDarkTritanopiaHighContrastColor = darkConvert(primer2GitHubColor(primer.darkTritanopiaHighContrast, true));
export const githubSoftDarkHighContrastColor = primer2GitHubColor(primer.darkDimmedHighContrast, true);
export const githubLightHighContrastColor = primer2GitHubColor(primer.lightHighContrast);
export const githubLightColorblindHighContrastColor = primer2GitHubColor(primer.lightColorblindHighContrast);
export const githubLightTritanopiaHighContrastColor = primer2GitHubColor(primer.lightTritanopiaHighContrast);
// 自定义主题
export const githubPinkDarkColor = display2GitHubColor(primer.dark.display.pink.scale, githubDarkColor);
export const githubPinkSoftDarkColor = display2GitHubColor(primer.dark.display.pink.scale, githubSoftDarkColor, true);
export const githubPinkLightColor = display2GitHubColor(primer.light.display.pink.scale, githubLightColor);

function defineGitHubTheme(color: GitHubColor) {
  return defineTheme({ colorType: "github", themeColor: color });
}

// 普通主题
export const githubDarkTheme = defineGitHubTheme(githubDarkColor);
export const githubSoftDarkTheme = defineGitHubTheme(githubSoftDarkColor);
export const githubColorblindDarkTheme = defineGitHubTheme(githubColorblindDarkColor);
export const githubTritanopiaDarkTheme = defineGitHubTheme(githubTritanopiaDarkColor);
export const githubLightTheme = defineGitHubTheme(githubLightColor);
export const githubColorblindLightTheme = defineGitHubTheme(githubColorblindLightColor);
export const githubTritanopiaLightTheme = defineGitHubTheme(githubTritanopiaLightColor);
// 高对比度主题
export const githubDarkHighContrastTheme = defineGitHubTheme(githubDarkHighContrastColor);
export const githubDarkColorblindHighContrastTheme = defineGitHubTheme(githubDarkColorblindHighContrastColor);
export const githubDarkTritanopiaHighContrastTheme = defineGitHubTheme(githubDarkTritanopiaHighContrastColor);
export const githubSoftDarkHighContrastTheme = defineGitHubTheme(githubSoftDarkHighContrastColor);
export const githubLightHighContrastTheme = defineGitHubTheme(githubLightHighContrastColor);
export const githubLightColorblindHighContrastTheme = defineGitHubTheme(githubLightColorblindHighContrastColor);
export const githubLightTritanopiaHighContrastTheme = defineGitHubTheme(githubLightTritanopiaHighContrastColor);
// 自定义主题
export const githubPinkDarkTheme = defineGitHubTheme(githubPinkDarkColor);
export const githubPinkSoftDarkTheme = defineGitHubTheme(githubPinkSoftDarkColor);
export const githubPinkLightTheme = defineGitHubTheme(githubPinkLightColor);

export default {
  // 普通主题
  githubDarkTheme,
  githubSoftDarkTheme,
  githubColorblindDarkTheme,
  githubTritanopiaDarkTheme,
  githubLightTheme,
  githubColorblindLightTheme,
  githubTritanopiaLightTheme,
  // 高对比度主题
  githubDarkHighContrastTheme,
  githubDarkColorblindHighContrastTheme,
  githubDarkTritanopiaHighContrastTheme,
  githubSoftDarkHighContrastTheme,
  githubLightHighContrastTheme,
  githubLightColorblindHighContrastTheme,
  githubLightTritanopiaHighContrastTheme,
  // 自定义主题
  githubPinkDarkTheme,
  githubPinkSoftDarkTheme,
  githubPinkLightTheme,
};
