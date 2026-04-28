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
import { lightPrettylights } from "src/core/chroma";
import { github2ThemeColor, type GithubColor } from "src/core/github";
import { prettylights2Chroma, type prettylightsColor } from "src/core/prettylights";
import { colorblindLightGithubColors, colorblindLightPrettylights } from "themes/colorblind-light";
import { lightGithubColors } from "themes/light";

export const tritanopiaLightGithubColors: GithubColor = {
  ...colorblindLightGithubColors,
  diffBlob: {
    ...colorblindLightGithubColors.diffBlob,
    deletionNum: lightGithubColors.diffBlob.deletionNum,
    deletionWord: lightGithubColors.diffBlob.deletionWord,
  },
  fgColor: {
    ...colorblindLightGithubColors.fgColor,
    danger: lightGithubColors.fgColor.danger,
  },
  bgColor: {
    ...colorblindLightGithubColors.bgColor,
    danger: lightGithubColors.bgColor.danger,
  },
  button: {
    ...colorblindLightGithubColors.button,
    danger: lightGithubColors.button.danger,
  },
};

export const tritanopiaLightPrettylights: prettylightsColor = {
  syntax: {
    ...lightPrettylights.syntax,
    markup: {
      ...lightPrettylights.syntax.markup,
      changed: { bg: "#ffcecb", text: "#a40e26" },
      inserted: colorblindLightPrettylights.syntax.markup.inserted,
    },
    stringRegexp: colorblindLightPrettylights.syntax.stringRegexp,
    variable: "#a40e26",
  },
};

export const tritanopiaLightColors = github2ThemeColor(tritanopiaLightGithubColors);
export const tritanopiaLightChroma: Chroma = prettylights2Chroma(tritanopiaLightPrettylights);

export default defineTheme(tritanopiaLightColors, tritanopiaLightChroma);
