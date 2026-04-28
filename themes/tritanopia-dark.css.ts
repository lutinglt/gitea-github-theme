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

import { defineTheme, type Chroma } from "src";
import { darkPrettylights } from "src/core/chroma";
import { github2ThemeColor, type GithubColor } from "src/core/github";
import { prettylights2Chroma, type prettylightsColor } from "src/core/prettylights";
import { colorblindDarkGithubColors, colorblindDarkPrettylights } from "themes/colorblind-dark";
import { darkGithubColors } from "themes/dark";

export const tritanopiaDarkGithubColors: GithubColor = {
  ...colorblindDarkGithubColors,
  diffBlob: {
    ...colorblindDarkGithubColors.diffBlob,
    deletionNum: darkGithubColors.diffBlob.deletionNum,
    deletionWord: darkGithubColors.diffBlob.deletionWord,
  },
  fgColor: {
    ...colorblindDarkGithubColors.fgColor,
    danger: darkGithubColors.fgColor.danger,
  },
  bgColor: {
    ...colorblindDarkGithubColors.bgColor,
    danger: darkGithubColors.bgColor.danger,
  },
  button: {
    ...colorblindDarkGithubColors.button,
    danger: darkGithubColors.button.danger,
  },
};

export const tritanopiaDarkPrettylights: prettylightsColor = {
  syntax: {
    ...darkPrettylights.syntax,
    markup: {
      ...darkPrettylights.syntax.markup,
      changed: { bg: "#67060c", text: "#ffdcd7" },
      inserted: colorblindDarkPrettylights.syntax.markup.inserted,
    },
    stringRegexp: colorblindDarkPrettylights.syntax.stringRegexp,
    variable: "#ffa198",
  },
};

export const tritanopiaDarkColors = github2ThemeColor(tritanopiaDarkGithubColors);
export const tritanopiaDarkChroma: Chroma = prettylights2Chroma(tritanopiaDarkPrettylights);

export default defineTheme(tritanopiaDarkColors, tritanopiaDarkChroma);
