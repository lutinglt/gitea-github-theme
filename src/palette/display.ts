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

import type { Primer } from "@lutinglt/gitea-github-theme/primer";
import { saturate } from "polished";
import { scaleColorLight } from "../functions";
import { deepOverride } from "../utils";
import type { GitHubColor } from "./github";

export type DisplayColor = Primer["display"]["pink"]["scale"];

export function display2GitHubColor(
  displayColor: DisplayColor,
  baseGitHubColor: GitHubColor,
  soft?: boolean
): GitHubColor {
  return deepOverride(baseGitHubColor, {
    diffBlob: { hunkNum: { bgColor: { rest: soft ? displayColor[2] : displayColor[1] } } },
    fgColor: { accent: soft ? displayColor[7] : displayColor[6] },
    bgColor: {
      accent: {
        emphasis: soft ? saturate(-0.1, scaleColorLight(displayColor[5], -2)) : displayColor[5],
        muted: soft ? displayColor[1] : displayColor[0],
      },
    },
    borderColor: { accent: { emphasis: soft ? displayColor[6] : displayColor[5] } },
    button: {
      primary: {
        fgColor: {
          rest: baseGitHubColor.button.primary.fgColor.rest,
        },
        bgColor: {
          rest: soft ? saturate(-0.1, scaleColorLight(displayColor[5], -2)) : displayColor[5],
          hover: soft
            ? saturate(-0.1, scaleColorLight(displayColor[5], 4))
            : baseGitHubColor.isDarkTheme
              ? scaleColorLight(displayColor[5], 7)
              : scaleColorLight(displayColor[5], -5),
          active: soft
            ? saturate(-0.1, scaleColorLight(displayColor[5], 9))
            : baseGitHubColor.isDarkTheme
              ? scaleColorLight(displayColor[5], 15)
              : scaleColorLight(displayColor[5], -10),
        },
      },
      star: {
        iconColor: soft ? scaleColorLight(displayColor[6], -2) : saturate(0.1, scaleColorLight(displayColor[6], -2)),
      },
    },
    underlineNav: {
      borderColor: {
        active: soft ? scaleColorLight(saturate(0.1, displayColor[6]), -5) : saturate(0.2, displayColor[6]),
      },
    },
    contribution: {
      default: {
        bgColor: {
          "0": baseGitHubColor.contribution.default.bgColor[0],
          "1": soft ? displayColor[2] : displayColor[1],
          "2": soft ? displayColor[3] : displayColor[2],
          "3": soft ? displayColor[4] : displayColor[4],
          "4": soft ? displayColor[5] : displayColor[6],
        },
        borderColor: baseGitHubColor.contribution.default.borderColor,
      },
    },
    themeExtra: { button: { primary: { fgColor: { accent: soft ? displayColor[7] : displayColor[6] } } } },
  });
}
