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

import type { DisplayColor } from "src";
import { defineTheme, display2GithubColor, github2ThemeColor } from "src";
import {
  githubDarkGithubColors,
  githubDarkSyntax,
  githubSoftDarkGithubColors,
  githubSoftDarkSyntax,
} from "themes/githubDark";
import { githubLightGithubColors, githubLightSyntax } from "themes/githubLight";

/** GitHub 粉色深色主题色阶 */
export const githubPinkDarkDisplayColors: DisplayColor = {
  num0: "#2d1524",
  num1: "#451c35",
  num2: "#65244a",
  num3: "#842a5d",
  num4: "#ac2f74",
  num5: "#d34591",
  num6: "#e57bb2",
  num7: "#ec8dbd",
  num8: "#f4a9cd",
  num9: "#f9bed9",
};
/** GitHub 粉色深色主题 */
export const githubPinkDarkGithubColors = display2GithubColor(githubPinkDarkDisplayColors, githubDarkGithubColors);
/** GitHub 粉色柔和深色主题 */
export const pinkSoftDarkGithubColors = display2GithubColor(
  githubPinkDarkDisplayColors,
  githubSoftDarkGithubColors,
  true
);
/** GitHub 粉色浅色主题色阶*/
export const githubPinkLightDisplayColors: DisplayColor = {
  num0: "#ffe5f1",
  num1: "#fdc9e2",
  num2: "#f8a5cf",
  num3: "#f184bc",
  num4: "#e55da5",
  num5: "#ce2c85",
  num6: "#b12f79",
  num7: "#8e2e66",
  num8: "#6e2b53",
  num9: "#4d233d",
};
/** GitHub 粉色浅色主题*/
export const githubPinkLightGithubColors = display2GithubColor(githubPinkLightDisplayColors, githubLightGithubColors);

/** GitHub 粉色深色主题颜色 */
export const githubPinkDarkColors = github2ThemeColor(githubPinkDarkGithubColors);
export const pinkSoftDarkColors = github2ThemeColor(pinkSoftDarkGithubColors);
/** GitHub 粉色浅色主题颜色 */
export const githubPinkLightColors = github2ThemeColor(githubPinkLightGithubColors);

/** Gitea GitHub Theme 拓展 GitHub 粉色深色主题 */
export const githubPinkDark = defineTheme({
  themeColor: githubPinkDarkColors,
  syntaxType: "github",
  syntaxColors: githubDarkSyntax,
  githubColors: githubPinkDarkGithubColors,
});
/** Gitea GitHub Theme 拓展 GitHub 粉色柔和深色主题 */
export const githubPinkSoftDark = defineTheme({
  themeColor: pinkSoftDarkColors,
  syntaxType: "github",
  syntaxColors: githubSoftDarkSyntax,
  githubColors: pinkSoftDarkGithubColors,
});
/** Gitea GitHub Theme 拓展 GitHub 粉色浅色主题 */
export const githubPinkLight = defineTheme({
  themeColor: githubPinkLightColors,
  syntaxType: "github",
  syntaxColors: githubLightSyntax,
  githubColors: githubPinkLightGithubColors,
});
