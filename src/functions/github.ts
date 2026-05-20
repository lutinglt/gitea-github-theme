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

import { opacify, saturate } from "polished";
import { type GitHub, themeVars } from "src/types";
import { scaleColorLight } from "./scss";

type calculateColor = {
  primary: string;
  red_badge_bg: string;
};

export function themeVars2GitHub(dark: boolean, calColor: calculateColor): GitHub {
  return {
    avatar: { bgColor: themeVars.color.body, borderColor: themeVars.color.light.border },
    fgColor: {
      accent: dark ? themeVars.color.primary.dark.num2 : themeVars.color.primary.self,
      success: themeVars.color.green.self,
      done: themeVars.color.purple.self,
      onEmphasis: themeVars.color.white,
    },
    bgColor: {
      accent: {
        emphasis: themeVars.color.primary.self,
        muted: dark ? themeVars.color.primary.light.num5 : themeVars.color.primary.light.num6,
      },
      success: { emphasis: dark ? themeVars.color.green.dark.num1 : themeVars.color.green.light },
      attention: {
        emphasis: dark ? themeVars.color.yellow.dark.num1 : themeVars.color.yellow.self,
      },
      danger: { emphasis: themeVars.color.red.light },
      done: { emphasis: dark ? themeVars.color.purple.dark.num1 : themeVars.color.purple.self },
      neutral: { emphasis: themeVars.color.secondary.self },
    },
    borderColor: {
      accent: { emphasis: dark ? themeVars.color.primary.light.num1 : themeVars.color.primary.dark.num1 },
      attention: {
        emphasis: dark ? themeVars.color.yellow.dark.num1 : themeVars.color.yellow.self,
      },
      success: { emphasis: dark ? themeVars.color.green.dark.num1 : themeVars.color.green.light },
      done: { emphasis: dark ? themeVars.color.purple.dark.num1 : themeVars.color.purple.self },
      emphasis: themeVars.color.light.border,
    },
    button: {
      default: { bgColor: { active: themeVars.color.active } },
      primary: {
        fgColor: {
          accent: saturate(0.1, scaleColorLight(calColor.primary, dark ? 10 : -10)),
          rest: themeVars.color.white,
        },
        bgColor: dark
          ? {
              rest: themeVars.color.primary.self,
              hover: themeVars.color.primary.light.num1,
              active: themeVars.color.primary.light.num2,
            }
          : {
              rest: themeVars.color.primary.self,
              hover: themeVars.color.primary.dark.num1,
              active: themeVars.color.primary.dark.num2,
            },
        borderColor: { rest: themeVars.color.secondary.alpha.num20, hover: themeVars.color.secondary.alpha.num20 },
      },
      danger: {
        fgColor: { rest: themeVars.color.red.light, hover: themeVars.color.white },
        bgColor: {
          rest: themeVars.color.button,
          hover: themeVars.color.red.self,
          active: themeVars.color.red.dark.num1,
        },
        borderColor: { hover: themeVars.color.secondary.alpha.num20 },
      },
      star: { iconColor: themeVars.color.yellow.self },
      invisible: { iconColor: { rest: themeVars.color.text.self } },
    },
    control: {
      bgColor: { rest: themeVars.color.timeline },
      transparent: {
        bgColor: { hover: themeVars.color.hover.self, active: themeVars.color.active },
      },
      danger: {
        bgColor: {
          active: opacify(0.3, calColor.red_badge_bg),
        },
      },
    },
    // 对调颜色映射, 倾向于个人标准(激活项颜色和菜单色一致)
    controlTrack: { bgColor: { rest: themeVars.color.active } },
    controlKnob: { bgColor: { rest: themeVars.color.menu } },
    shadow: {
      floating: {
        small: `0px 0px 0px 1px ${themeVars.color.light.border}, 0px 6px 12px -3px ${themeVars.color.shadow.self}, 0px 6px 18px 0px ${themeVars.color.shadow.self};`,
      },
      inset: `inset 0px 1px 0px 0px ${themeVars.color.shadow.self}`,
      resting: {
        small: `0px 1px 1px 0px ${themeVars.color.shadow.self}, 0px 1px 3px 0px ${themeVars.color.shadow.self};`,
        // 此阴影用于工作流的流程图的节点悬浮效果, 该效果在 Gitea 中通过 svg, g 的 filter 实现, 而非 box-shadow
        medium: `drop-shadow(0 1px 1px ${themeVars.color.shadow.self}) drop-shadow(0 3px 6px ${themeVars.color.shadow.opaque})`,
      },
    },
    underlineNav: { borderColor: { active: themeVars.color.text.dark } },
    contribution: {
      default: {
        bgColor: {
          num0: themeVars.color.secondary.alpha.num60,
          num1: themeVars.color.primary.light.num4,
          num2: themeVars.color.primary.light.num2,
          num3: themeVars.color.primary.self,
          num4: themeVars.color.primary.dark.num2,
          num5: themeVars.color.primary.dark.num4,
        },
        borderColor: {
          num0: themeVars.color.secondary.alpha.num10,
          num1: themeVars.github.contribution.default.borderColor.num0,
          num2: themeVars.github.contribution.default.borderColor.num0,
          num3: themeVars.github.contribution.default.borderColor.num0,
          num4: themeVars.github.contribution.default.borderColor.num0,
          num5: themeVars.github.contribution.default.borderColor.num0,
        },
      },
    },
    workflowCardBg: themeVars.color.button,
  };
}
