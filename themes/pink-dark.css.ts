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

import { defineTheme } from "src";
import { display2GithubColor, type DisplayColor } from "src/core/display";
import { github2ThemeColor } from "src/core/github";
import { darkGithubColors } from "themes/dark";

export const pinkDarkDisplayColors: DisplayColor = {
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

export const pinkDarkGithubColors = display2GithubColor(pinkDarkDisplayColors, darkGithubColors);
export const pinkDarkColors = github2ThemeColor(pinkDarkGithubColors);

export default defineTheme(pinkDarkColors);
