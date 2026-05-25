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

import type { GitHubColor } from "src";
import { defineTheme, primer, primer2GitHubColor, primer2GitHubSyntax } from "src";
/** - 仅适用于 Dark 主题
 * - 不同步 GitHub 样式, 对调 --controlKnob-bgColor-rest 和 --controlTrack-bgColor-rest 的颜色
 * - 激活颜色与背景色更一致, 在仪表板仓库/组织切换按钮中与菜单颜色一致
 */
function swapKnobAndTrackBgColor(color: GitHubColor): GitHubColor {
  return {
    ...color,
    controlKnob: { bgColor: { rest: color.controlTrack.bgColor.rest } },
    controlTrack: { bgColor: { rest: color.controlKnob.bgColor.rest } },
  };
}

export const githubDarkColor = swapKnobAndTrackBgColor(primer2GitHubColor(primer.dark, true));
export const githubColorblindDarkColor = swapKnobAndTrackBgColor(primer2GitHubColor(primer.darkColorblind, true));
export const githubTritanopiaDarkColor = swapKnobAndTrackBgColor(primer2GitHubColor(primer.darkTritanopia, true));
export const githubSoftDarkColor = primer2GitHubColor(primer.darkDimmed, true);
export const githubLightColor = primer2GitHubColor(primer.light);
export const githubColorblindLightColor = primer2GitHubColor(primer.lightColorblind);
export const githubTritanopiaLightColor = primer2GitHubColor(primer.lightTritanopia);

export const githubDarkHighContrastColor = swapKnobAndTrackBgColor(primer2GitHubColor(primer.darkHighContrast, true));
export const githubDarkColorblindHighContrastColor = swapKnobAndTrackBgColor(
  primer2GitHubColor(primer.darkColorblindHighContrast, true)
);
export const githubDarkTritanopiaHighContrastColor = swapKnobAndTrackBgColor(
  primer2GitHubColor(primer.darkTritanopiaHighContrast, true)
);
export const githubSoftDarkHighContrastColor = primer2GitHubColor(primer.darkDimmedHighContrast, true);
export const githubLightHighContrastColor = primer2GitHubColor(primer.lightHighContrast);
export const githubLightColorblindHighContrastColor = primer2GitHubColor(primer.lightColorblindHighContrast);
export const githubLightTritanopiaHighContrastColor = primer2GitHubColor(primer.lightTritanopiaHighContrast);

export const githubDarkSyntax = primer2GitHubSyntax(primer.dark);
export const githubSoftDarkSyntax = primer2GitHubSyntax(primer.darkDimmed);
export const githubColorblindDarkSyntax = primer2GitHubSyntax(primer.darkColorblind);
export const githubTritanopiaDarkSyntax = primer2GitHubSyntax(primer.darkTritanopia);
export const githubLightSyntax = primer2GitHubSyntax(primer.light);
export const githubColorblindLightSyntax = primer2GitHubSyntax(primer.lightColorblind);
export const githubTritanopiaLightSyntax = primer2GitHubSyntax(primer.lightTritanopia);

export const githubDarkHighContrastSyntax = primer2GitHubSyntax(primer.darkHighContrast);
export const githubDarkColorblindHighContrastSyntax = primer2GitHubSyntax(primer.darkColorblindHighContrast);
export const githubDarkTritanopiaHighContrastSyntax = primer2GitHubSyntax(primer.darkTritanopiaHighContrast);
export const githubSoftDarkHighContrastSyntax = primer2GitHubSyntax(primer.darkDimmedHighContrast);
export const githubLightHighContrastSyntax = primer2GitHubSyntax(primer.lightHighContrast);
export const githubLightColorblindHighContrastSyntax = primer2GitHubSyntax(primer.lightColorblindHighContrast);
export const githubLightTritanopiaHighContrastSyntax = primer2GitHubSyntax(primer.lightTritanopiaHighContrast);

export const githubDarkTheme = defineTheme({
  colorType: "github",
  themeColor: githubDarkColor,
  syntaxColor: githubDarkSyntax,
});
export const githubSoftDarkTheme = defineTheme({
  colorType: "github",
  themeColor: githubSoftDarkColor,
  syntaxColor: githubSoftDarkSyntax,
});
export const githubColorblindDarkTheme = defineTheme({
  colorType: "github",
  themeColor: githubColorblindDarkColor,
  syntaxColor: githubColorblindDarkSyntax,
});
export const githubTritanopiaDarkTheme = defineTheme({
  colorType: "github",
  themeColor: githubTritanopiaDarkColor,
  syntaxColor: githubTritanopiaDarkSyntax,
});
export const githubLightTheme = defineTheme({
  colorType: "github",
  themeColor: githubLightColor,
  syntaxColor: githubLightSyntax,
});
export const githubColorblindLightTheme = defineTheme({
  colorType: "github",
  themeColor: githubColorblindLightColor,
  syntaxColor: githubColorblindLightSyntax,
});
export const githubTritanopiaLightTheme = defineTheme({
  colorType: "github",
  themeColor: githubTritanopiaLightColor,
  syntaxColor: githubTritanopiaLightSyntax,
});

export const githubDarkHighContrastTheme = defineTheme({
  colorType: "github",
  themeColor: githubDarkHighContrastColor,
  syntaxColor: githubDarkHighContrastSyntax,
});
export const githubDarkColorblindHighContrastTheme = defineTheme({
  colorType: "github",
  themeColor: githubDarkColorblindHighContrastColor,
  syntaxColor: githubDarkColorblindHighContrastSyntax,
});
export const githubDarkTritanopiaHighContrastTheme = defineTheme({
  colorType: "github",
  themeColor: githubDarkTritanopiaHighContrastColor,
  syntaxColor: githubDarkTritanopiaHighContrastSyntax,
});
export const githubSoftDarkHighContrastTheme = defineTheme({
  colorType: "github",
  themeColor: githubSoftDarkHighContrastColor,
  syntaxColor: githubSoftDarkHighContrastSyntax,
});
export const githubLightHighContrastTheme = defineTheme({
  colorType: "github",
  themeColor: githubLightHighContrastColor,
  syntaxColor: githubLightHighContrastSyntax,
});
export const githubLightColorblindHighContrastTheme = defineTheme({
  colorType: "github",
  themeColor: githubLightColorblindHighContrastColor,
  syntaxColor: githubLightColorblindHighContrastSyntax,
});
export const githubLightTritanopiaHighContrastTheme = defineTheme({
  colorType: "github",
  themeColor: githubLightTritanopiaHighContrastColor,
  syntaxColor: githubLightTritanopiaHighContrastSyntax,
});

export default {
  githubDarkTheme,
  githubSoftDarkTheme,
  githubColorblindDarkTheme,
  githubTritanopiaDarkTheme,
  githubLightTheme,
  githubColorblindLightTheme,
  githubTritanopiaLightTheme,
  githubDarkHighContrastTheme,
  githubDarkColorblindHighContrastTheme,
  githubDarkTritanopiaHighContrastTheme,
  githubSoftDarkHighContrastTheme,
  githubLightHighContrastTheme,
  githubLightColorblindHighContrastTheme,
  githubLightTritanopiaHighContrastTheme,
};
