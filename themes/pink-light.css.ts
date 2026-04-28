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
import { lightGithubColors } from "themes/light";

export const pinkLightDisplayColors: DisplayColor = {
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

export const pinkLightGithubColors = display2GithubColor(pinkLightDisplayColors, lightGithubColors);
export const pinkLightColors = github2ThemeColor(pinkLightGithubColors);

export default defineTheme(pinkLightColors);
