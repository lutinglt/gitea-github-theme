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

import { opacify, saturate } from "color2k";
import type { ThemeVars } from "../core";
import { scaleColorLight } from "../functions";
import type { Ansi, Console, Diff, GitHub, Message, Named, Other, Primary, Secondary } from "../types";
import { themeVars } from "../types";

export type GiteaColor = {
  isDarkTheme: boolean;
  primary: Primary;
  secondary: Secondary;
  named: Named;
  message: Message;
  ansi: Ansi;
  console: Console;
  diff: Diff;
  other: Other;
};

export function gitea2ThemeVars(giteaColor: GiteaColor): ThemeVars {
  const github: GitHub = {
    avatar: { bgColor: giteaColor.other.body, borderColor: giteaColor.other.light.border },
    fgColor: {
      accent: giteaColor.isDarkTheme ? giteaColor.primary.dark.num2 : giteaColor.primary.self,
      success: giteaColor.named.green.self,
      done: giteaColor.named.purple.self,
      onEmphasis: giteaColor.named.white,
    },
    bgColor: {
      accent: {
        emphasis: giteaColor.primary.self,
        muted: giteaColor.isDarkTheme ? giteaColor.primary.light.num5 : giteaColor.primary.light.num6,
      },
      success: { emphasis: giteaColor.isDarkTheme ? giteaColor.named.green.dark.num1 : giteaColor.named.green.light },
      attention: {
        emphasis: giteaColor.isDarkTheme ? giteaColor.named.yellow.dark.num1 : giteaColor.named.yellow.self,
      },
      danger: { emphasis: giteaColor.named.red.light },
      done: { emphasis: giteaColor.isDarkTheme ? giteaColor.named.purple.dark.num1 : giteaColor.named.purple.self },
      neutral: { emphasis: giteaColor.secondary.self },
    },
    borderColor: {
      accent: { emphasis: giteaColor.isDarkTheme ? giteaColor.primary.light.num1 : giteaColor.primary.dark.num1 },
      attention: {
        emphasis: giteaColor.isDarkTheme ? giteaColor.named.yellow.dark.num1 : giteaColor.named.yellow.self,
      },
      success: { emphasis: giteaColor.isDarkTheme ? giteaColor.named.green.dark.num1 : giteaColor.named.green.light },
      done: { emphasis: giteaColor.isDarkTheme ? giteaColor.named.purple.dark.num1 : giteaColor.named.purple.self },
      emphasis: giteaColor.other.light.border,
    },
    button: {
      default: { bgColor: { active: giteaColor.other.active } },
      primary: {
        fgColor: {
          rest: giteaColor.named.white,
        },
        bgColor: giteaColor.isDarkTheme
          ? {
              rest: giteaColor.primary.self,
              hover: giteaColor.primary.light.num1,
              active: giteaColor.primary.light.num2,
            }
          : {
              rest: giteaColor.primary.self,
              hover: giteaColor.primary.dark.num1,
              active: giteaColor.primary.dark.num2,
            },
        borderColor: { rest: giteaColor.secondary.alpha.num20, hover: giteaColor.secondary.alpha.num20 },
      },
      danger: {
        fgColor: { rest: giteaColor.named.red.light, hover: giteaColor.named.white },
        bgColor: {
          rest: giteaColor.other.button,
          hover: giteaColor.named.red.self,
          active: giteaColor.named.red.dark.num1,
        },
        borderColor: { hover: giteaColor.secondary.alpha.num20 },
      },
      star: { iconColor: giteaColor.named.yellow.self },
      invisible: { iconColor: { rest: giteaColor.other.text.self } },
    },
    control: {
      bgColor: { rest: giteaColor.other.timeline },
      transparent: {
        bgColor: { hover: giteaColor.other.hover.self, active: giteaColor.other.active },
        borderColor: { active: "#0000" },
      },
      danger: {
        fgColor: { hover: giteaColor.named.red.light },
        bgColor: {
          hover: giteaColor.named.red.badge.bg,
          active: opacify(giteaColor.named.red.badge.bg, 0.3),
        },
      },
    },
    // 对调颜色映射, 倾向于个人标准(激活项颜色和菜单色一致)
    controlTrack: { bgColor: { rest: giteaColor.other.active } },
    controlKnob: { bgColor: { rest: giteaColor.other.menu } },
    shadow: {
      floating: {
        small: `0px 0px 0px 1px ${themeVars.color.light.border}, 0px 6px 12px -3px ${themeVars.color.shadow.self}, 0px 6px 18px 0px ${themeVars.color.shadow.self};`,
      },
      inset: `inset 0px 1px 0px 0px ${giteaColor.other.shadow.self}`,
      resting: {
        small: `0px 1px 1px 0px ${giteaColor.other.shadow.self}, 0px 1px 3px 0px ${giteaColor.other.shadow.self};`,
        // 此阴影用于工作流的流程图的节点悬浮效果, 该效果在 Gitea 中通过 svg, g 的 filter 实现, 而非 box-shadow
        medium: `drop-shadow(0 1px 1px ${giteaColor.other.shadow.self}) drop-shadow(0 3px 6px ${giteaColor.other.shadow.opaque})`,
      },
    },
    underlineNav: { borderColor: { active: giteaColor.other.text.dark } },
    contribution: {
      default: {
        bgColor: {
          num0: giteaColor.secondary.alpha.num60,
          num1: giteaColor.primary.light.num4,
          num2: giteaColor.primary.light.num2,
          num3: giteaColor.primary.self,
          num4: giteaColor.primary.dark.num2,
        },
        borderColor: {
          num0: giteaColor.secondary.alpha.num10,
          num1: themeVars.github.contribution.default.borderColor.num0,
          num2: themeVars.github.contribution.default.borderColor.num0,
          num3: themeVars.github.contribution.default.borderColor.num0,
          num4: themeVars.github.contribution.default.borderColor.num0,
        },
      },
    },
    workflowCardBg: giteaColor.other.button,
    counter: { borderColor: "#0000" },
    progressBar: { track: { bgColor: "#0000", borderColor: "#0000" } },
    topicTag: { borderColor: "#0000" },
    themeExtra: {
      button: {
        primary: {
          fgColor: {
            accent: saturate(scaleColorLight(giteaColor.primary.self, giteaColor.isDarkTheme ? 10 : -10), 0.1),
          },
        },
      },
      contribution: {
        default: {
          bgColor: { num5: giteaColor.primary.dark.num4 },
          borderColor: { num5: themeVars.github.contribution.default.borderColor.num0 },
        },
      },
    },
  };
  return {
    isDarkTheme: giteaColor.isDarkTheme,
    color: {
      ...giteaColor.other,
      ...giteaColor.message,
      ...giteaColor.named,
      primary: giteaColor.primary,
      secondary: giteaColor.secondary,
      ansi: giteaColor.ansi,
      console: giteaColor.console,
      diff: giteaColor.diff,
    },
    github,
  };
}
