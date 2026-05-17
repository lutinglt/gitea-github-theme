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

import { saturate } from "polished";
import { scaleColorLight } from "src/functions";
import type { GitHubColor } from "./github";

export type DisplayColor = {
  num0: string;
  num1: string;
  num2: string;
  num3: string;
  num4: string;
  num5: string;
  num6: string;
  num7: string;
  num8: string;
  num9: string;
};

export function display2GitHubColor(
  displayColor: DisplayColor,
  baseGitHubColor: GitHubColor,
  soft?: boolean
): GitHubColor {
  return {
    ...baseGitHubColor,
    diffBlob: {
      ...baseGitHubColor.diffBlob,
      hunkNum: { bgColor: { rest: soft ? displayColor.num2 : displayColor.num1 } },
    },
    fgColor: {
      ...baseGitHubColor.fgColor,
      accent: soft ? displayColor.num7 : displayColor.num6,
    },
    bgColor: {
      ...baseGitHubColor.bgColor,
      accent: {
        emphasis: soft ? saturate(-0.1, scaleColorLight(displayColor.num5, -2)) : displayColor.num5,
        muted: soft ? displayColor.num1 : displayColor.num0,
      },
    },
    borderColor: {
      ...baseGitHubColor.borderColor,
      accent: {
        emphasis: soft ? displayColor.num6 : displayColor.num5,
      },
    },
    button: {
      ...baseGitHubColor.button,
      primary: {
        fgColor: {
          accent: soft ? displayColor.num7 : displayColor.num6,
          rest: baseGitHubColor.button.primary.fgColor.rest,
        },
        bgColor: {
          rest: soft ? saturate(-0.1, scaleColorLight(displayColor.num5, -2)) : displayColor.num5,
          hover: soft
            ? saturate(-0.1, scaleColorLight(displayColor.num5, 4))
            : baseGitHubColor.isDarkTheme
              ? scaleColorLight(displayColor.num5, 7)
              : scaleColorLight(displayColor.num5, -5),
          active: soft
            ? saturate(-0.1, scaleColorLight(displayColor.num5, 9))
            : baseGitHubColor.isDarkTheme
              ? scaleColorLight(displayColor.num5, 15)
              : scaleColorLight(displayColor.num5, -10),
        },
      },
      star: {
        iconColor: soft
          ? scaleColorLight(displayColor.num6, -2)
          : saturate(0.1, scaleColorLight(displayColor.num6, -2)),
      },
    },
    underlineNav: {
      borderColor: {
        active: soft ? scaleColorLight(saturate(0.1, displayColor.num6), -5) : saturate(0.2, displayColor.num6),
      },
    },
    contribution: {
      ...baseGitHubColor.contribution,
      default: {
        bgColor: {
          num0: baseGitHubColor.contribution.default.bgColor.num0,
          num1: soft ? displayColor.num2 : displayColor.num1,
          num2: soft ? displayColor.num3 : displayColor.num2,
          num3: soft ? displayColor.num5 : displayColor.num4,
          num4: soft ? displayColor.num7 : displayColor.num6,
        },
        borderColor: baseGitHubColor.contribution.default.borderColor,
      },
    },
  };
}
