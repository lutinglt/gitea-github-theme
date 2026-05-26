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

import type { DisplayColor } from "@gitea-github-theme/core";
import { defineTheme, display2GitHubColor } from "@gitea-github-theme/core";
import {
  githubDarkColor,
  githubDarkSyntax,
  githubLightColor,
  githubLightSyntax,
  githubSoftDarkColor,
  githubSoftDarkSyntax,
} from "./github";

/** GitHub 粉色深色主题色阶 */
export const githubPinkDarkDisplayColor: DisplayColor = {
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
/** GitHub 粉色浅色主题色阶*/
export const githubPinkLightDisplayColor: DisplayColor = {
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

/** GitHub 粉色深色主题 */
export const githubPinkDarkColor = display2GitHubColor(githubPinkDarkDisplayColor, githubDarkColor);
/** GitHub 粉色柔和深色主题 */
export const githubPinkSoftDarkColor = display2GitHubColor(githubPinkDarkDisplayColor, githubSoftDarkColor, true);
/** GitHub 粉色浅色主题*/
export const githubPinkLightColor = display2GitHubColor(githubPinkLightDisplayColor, githubLightColor);

/** Gitea GitHub Theme 拓展 GitHub 粉色深色主题 */
export const githubPinkDarkTheme = defineTheme({
  colorType: "github",
  themeColor: githubPinkDarkColor,
  syntaxColor: githubDarkSyntax,
});
/** Gitea GitHub Theme 拓展 GitHub 粉色柔和深色主题 */
export const githubPinkSoftDarkTheme = defineTheme({
  colorType: "github",
  themeColor: githubPinkSoftDarkColor,
  syntaxColor: githubSoftDarkSyntax,
});
/** Gitea GitHub Theme 拓展 GitHub 粉色浅色主题 */
export const githubPinkLightTheme = defineTheme({
  colorType: "github",
  themeColor: githubPinkLightColor,
  syntaxColor: githubLightSyntax,
});

export default {
  githubPinkDarkTheme,
  githubPinkSoftDarkTheme,
  githubPinkLightTheme,
};
