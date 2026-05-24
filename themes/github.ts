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

import type { GitHubColor, GitHubSyntax } from "src";
import { defineTheme, primer, primer2GitHubColor, primer2GitHubSyntax } from "src";

const rawDarkColor = primer2GitHubColor(primer.dark, true);
export const githubDarkColor: GitHubColor = {
  ...rawDarkColor,
  // 不同步 GitHub 样式, 对调 --controlKnob-bgColor-rest 和 --controlTrack-bgColor-rest 的颜色
  // 激活颜色与背景色更一致, 在仪表板仓库/组织切换按钮中与菜单颜色一致
  controlKnob: { bgColor: { rest: rawDarkColor.controlTrack.bgColor.rest } },
  controlTrack: { bgColor: { rest: rawDarkColor.controlKnob.bgColor.rest } },
};
export const githubSoftDarkColor: GitHubColor = primer2GitHubColor(primer.darkDimmed, true);
export const githubColorblindDarkColor: GitHubColor = primer2GitHubColor(primer.darkColorblind, true);
export const githubTritanopiaDarkColor: GitHubColor = primer2GitHubColor(primer.darkTritanopia, true);
export const githubLightColor: GitHubColor = primer2GitHubColor(primer.light);
export const githubColorblindLightColor: GitHubColor = primer2GitHubColor(primer.lightColorblind);
export const githubTritanopiaLightColor: GitHubColor = primer2GitHubColor(primer.lightTritanopia);

export const githubDarkSyntax: GitHubSyntax = primer2GitHubSyntax(primer.dark);
export const githubSoftDarkSyntax: GitHubSyntax = primer2GitHubSyntax(primer.darkDimmed);
export const githubColorblindDarkSyntax: GitHubSyntax = primer2GitHubSyntax(primer.darkColorblind);
export const githubTritanopiaDarkSyntax: GitHubSyntax = primer2GitHubSyntax(primer.darkTritanopia);
export const githubLightSyntax: GitHubSyntax = primer2GitHubSyntax(primer.light);
export const githubColorblindLightSyntax: GitHubSyntax = primer2GitHubSyntax(primer.lightColorblind);
export const githubTritanopiaLightSyntax: GitHubSyntax = primer2GitHubSyntax(primer.lightTritanopia);

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

export default {
  githubDarkTheme,
  githubSoftDarkTheme,
  githubColorblindDarkTheme,
  githubTritanopiaDarkTheme,
  githubLightTheme,
  githubColorblindLightTheme,
  githubTritanopiaLightTheme,
};
