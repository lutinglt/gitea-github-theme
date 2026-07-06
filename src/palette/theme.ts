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

import { saturate } from "color2k";
import type { ThemeVars } from "../core";
import { rgba, scaleColorLight } from "../functions";
import type { Ansi, Console, Diff, GitHub, Message, Named, Other, Primary, Secondary, Series16 } from "../types";
import { themeVars } from "../types";

type OverrideColor = {
  ansi?: Ansi;
  message?: Message;
  named?: Named;
  series16?: Series16;
};
export type ThemeColor = {
  /** 用于标识当前是否为暗色主题: `true` 暗色 `false` 亮色 */
  isDarkTheme: boolean;
  /** 主色调(强调色) */
  primary: string;
  /** 主色调的对比色, 一般用于 `color` 属性, primary 用于 `background-color` */
  primaryContrast: string;
  /** 副色调(边框色) */
  secondary: string;
  /** 基础颜色 */
  base: {
    /** 红色 */
    red: string;
    /** 橙色 */
    orange: string;
    /** 黄色 */
    yellow: string;
    /** 黄绿色/橄榄色 */
    olive: string;
    /** 绿色 */
    green: string;
    /** 蓝绿色/青色(偏绿) */
    teal: string;
    /** 蓝绿色/青色(偏蓝) */
    cyan: string;
    /** 蓝色 */
    blue: string;
    /** 蓝紫色/紫罗兰色 */
    violet: string;
    /** 紫色 */
    purple: string;
    /** 粉红色 */
    pink: string;
    /** 棕色 */
    brown: string;
    /** 黑色 */
    black: string;
    /** 灰色 */
    grey: string;
    /** 金色 */
    gold: string;
    /** 白色 */
    white: string;
  };
  /** Action 日志 */
  console: Console;
  /** 提交代码对比 */
  diff: Diff;
  /** 其他 */
  other: Other;
  /** 仅适用于本主题的全局变量, 取自 Github */
  github: GitHub;
  /** 覆盖默认生成的颜色 */
  override?: OverrideColor;
};
export function theme2ThemeVars(themeColor: ThemeColor): ThemeVars {
  const brightDir = themeColor.isDarkTheme ? -1 : 1;

  const primary: Primary = {
    self: themeColor.primary,
    contrast: themeColor.primaryContrast,
    dark: {
      num1: scaleColorLight(themeColor.primary, -12 * brightDir),
      num2: scaleColorLight(themeColor.primary, -24 * brightDir),
      num3: scaleColorLight(themeColor.primary, -36 * brightDir),
      num4: scaleColorLight(themeColor.primary, -48 * brightDir),
      num5: scaleColorLight(themeColor.primary, -60 * brightDir),
      num6: scaleColorLight(themeColor.primary, -72 * brightDir),
      num7: scaleColorLight(themeColor.primary, -84 * brightDir),
    },
    light: {
      num1: scaleColorLight(themeColor.primary, 12 * brightDir),
      num2: scaleColorLight(themeColor.primary, 24 * brightDir),
      num3: scaleColorLight(themeColor.primary, 36 * brightDir),
      num4: scaleColorLight(themeColor.primary, 48 * brightDir),
      num5: scaleColorLight(themeColor.primary, 60 * brightDir),
      num6: scaleColorLight(themeColor.primary, 72 * brightDir),
      num7: scaleColorLight(themeColor.primary, 84 * brightDir),
    },
    alpha: {
      num10: rgba(themeColor.primary, 0.1),
      num20: rgba(themeColor.primary, 0.2),
      num30: rgba(themeColor.primary, 0.3),
      num40: rgba(themeColor.primary, 0.4),
      num50: rgba(themeColor.primary, 0.5),
      num60: rgba(themeColor.primary, 0.6),
      num70: rgba(themeColor.primary, 0.7),
      num80: rgba(themeColor.primary, 0.8),
      num90: rgba(themeColor.primary, 0.9),
    },
    hover: themeColor.isDarkTheme ? themeVars.color.primary.light.num1 : themeVars.color.primary.dark.num1,
    active: themeColor.isDarkTheme ? themeVars.color.primary.light.num2 : themeVars.color.primary.dark.num2,
  };

  const secondary: Secondary = {
    self: themeColor.secondary,
    dark: {
      num1: scaleColorLight(themeColor.secondary, -6 * brightDir),
      num2: scaleColorLight(themeColor.secondary, -12 * brightDir),
      num3: scaleColorLight(themeColor.secondary, -18 * brightDir),
      num4: scaleColorLight(themeColor.secondary, -24 * brightDir),
      num5: scaleColorLight(themeColor.secondary, -30 * brightDir),
      num6: scaleColorLight(themeColor.secondary, -36 * brightDir),
      num7: scaleColorLight(themeColor.secondary, -42 * brightDir),
      num8: scaleColorLight(themeColor.secondary, -48 * brightDir),
      num9: scaleColorLight(themeColor.secondary, -54 * brightDir),
      num10: scaleColorLight(themeColor.secondary, -60 * brightDir),
      num11: scaleColorLight(themeColor.secondary, -66 * brightDir),
      num12: scaleColorLight(themeColor.secondary, -72 * brightDir),
      num13: scaleColorLight(themeColor.secondary, -80 * brightDir),
    },
    light: {
      num1: scaleColorLight(themeColor.secondary, 18 * brightDir),
      num2: scaleColorLight(themeColor.secondary, 36 * brightDir),
      num3: scaleColorLight(themeColor.secondary, 54 * brightDir),
      num4: scaleColorLight(themeColor.secondary, 72 * brightDir),
    },
    alpha: {
      num10: rgba(themeColor.secondary, 0.1),
      num20: rgba(themeColor.secondary, 0.2),
      num30: rgba(themeColor.secondary, 0.3),
      num40: rgba(themeColor.secondary, 0.4),
      num50: rgba(themeColor.secondary, 0.5),
      num60: rgba(themeColor.secondary, 0.6),
      num70: rgba(themeColor.secondary, 0.7),
      num80: rgba(themeColor.secondary, 0.8),
      num90: rgba(themeColor.secondary, 0.9),
    },
    button: themeVars.color.secondary.dark.num4,
    hover: themeColor.isDarkTheme ? themeVars.color.secondary.dark.num3 : themeVars.color.secondary.dark.num5,
    active: themeColor.isDarkTheme ? themeVars.color.secondary.dark.num2 : themeVars.color.secondary.dark.num6,
  };

  const named: Named = themeColor.override?.named ?? {
    red: {
      self: themeColor.base.red,
      light: themeColor.isDarkTheme
        ? scaleColorLight(themeColor.base.red, 15)
        : scaleColorLight(themeColor.base.red, 25),
      dark: {
        num1: scaleColorLight(themeColor.base.red, -10),
        num2: scaleColorLight(themeColor.base.red, -20),
      },
      badge: {
        self: themeColor.base.red,
        bg: rgba(themeColor.base.red, 0.1),
        hover: {
          bg: rgba(themeColor.base.red, 0.3),
        },
      },
    },
    orange: {
      self: themeColor.base.orange,
      light: themeColor.isDarkTheme
        ? scaleColorLight(themeColor.base.orange, 15)
        : scaleColorLight(themeColor.base.orange, 25),
      dark: {
        num1: scaleColorLight(themeColor.base.orange, -10),
        num2: scaleColorLight(themeColor.base.orange, -20),
      },
      badge: {
        self: themeColor.base.orange,
        bg: rgba(themeColor.base.orange, 0.1),
        hover: {
          bg: rgba(themeColor.base.orange, 0.3),
        },
      },
    },
    yellow: {
      self: themeColor.base.yellow,
      light: themeColor.isDarkTheme
        ? scaleColorLight(themeColor.base.yellow, 15)
        : scaleColorLight(themeColor.base.yellow, 25),
      dark: {
        num1: scaleColorLight(themeColor.base.yellow, -10),
        num2: scaleColorLight(themeColor.base.yellow, -20),
      },
      badge: {
        self: themeColor.base.yellow,
        bg: rgba(themeColor.base.yellow, 0.1),
        hover: {
          bg: rgba(themeColor.base.yellow, 0.3),
        },
      },
    },
    olive: {
      self: themeColor.base.olive,
      light: themeColor.isDarkTheme
        ? scaleColorLight(themeColor.base.olive, 15)
        : scaleColorLight(themeColor.base.olive, 25),
      dark: {
        num1: scaleColorLight(themeColor.base.olive, -10),
        num2: scaleColorLight(themeColor.base.olive, -20),
      },
    },
    green: {
      self: themeColor.base.green,
      light: themeColor.isDarkTheme
        ? scaleColorLight(themeColor.base.green, 15)
        : scaleColorLight(themeColor.base.green, 25),
      dark: {
        num1: scaleColorLight(themeColor.base.green, -10),
        num2: scaleColorLight(themeColor.base.green, -20),
      },
      badge: {
        self: themeColor.base.green,
        bg: rgba(themeColor.base.green, 0.1),
        hover: {
          bg: rgba(themeColor.base.green, 0.3),
        },
      },
    },
    teal: {
      self: themeColor.base.teal,
      light: themeColor.isDarkTheme
        ? scaleColorLight(themeColor.base.teal, 15)
        : scaleColorLight(themeColor.base.teal, 25),
      dark: {
        num1: scaleColorLight(themeColor.base.teal, -10),
        num2: scaleColorLight(themeColor.base.teal, -20),
      },
    },
    blue: {
      self: themeColor.base.blue,
      light: themeColor.isDarkTheme
        ? scaleColorLight(themeColor.base.blue, 15)
        : scaleColorLight(themeColor.base.blue, 25),
      dark: {
        num1: scaleColorLight(themeColor.base.blue, -10),
        num2: scaleColorLight(themeColor.base.blue, -20),
      },
    },
    violet: {
      self: themeColor.base.violet,
      light: themeColor.isDarkTheme
        ? scaleColorLight(themeColor.base.violet, 15)
        : scaleColorLight(themeColor.base.violet, 25),
      dark: {
        num1: scaleColorLight(themeColor.base.violet, -10),
        num2: scaleColorLight(themeColor.base.violet, -20),
      },
    },
    purple: {
      self: themeColor.base.purple,
      light: themeColor.isDarkTheme
        ? scaleColorLight(themeColor.base.purple, 15)
        : scaleColorLight(themeColor.base.purple, 25),
      dark: {
        num1: scaleColorLight(themeColor.base.purple, -10),
        num2: scaleColorLight(themeColor.base.purple, -20),
      },
    },
    pink: {
      self: themeColor.base.pink,
      light: themeColor.isDarkTheme
        ? scaleColorLight(themeColor.base.pink, 15)
        : scaleColorLight(themeColor.base.pink, 25),
      dark: {
        num1: scaleColorLight(themeColor.base.pink, -10),
        num2: scaleColorLight(themeColor.base.pink, -20),
      },
    },
    brown: {
      self: themeColor.base.brown,
      light: themeColor.isDarkTheme
        ? scaleColorLight(themeColor.base.brown, 15)
        : scaleColorLight(themeColor.base.brown, 25),
      dark: {
        num1: scaleColorLight(themeColor.base.brown, -10),
        num2: scaleColorLight(themeColor.base.brown, -20),
      },
    },
    black: {
      self: themeColor.base.black,
      light: themeColor.isDarkTheme
        ? scaleColorLight(themeColor.base.black, 15)
        : scaleColorLight(themeColor.base.black, 25),
      dark: {
        num1: scaleColorLight(themeColor.base.black, -10),
        num2: scaleColorLight(themeColor.base.black, -20),
      },
    },
    grey: {
      self: themeColor.base.grey,
      light: themeColor.isDarkTheme
        ? scaleColorLight(themeColor.base.grey, 15)
        : scaleColorLight(themeColor.base.grey, 25),
    },
    gold: themeColor.base.gold,
    white: themeColor.base.white,
  };

  const message: Message = themeColor.override?.message ?? {
    error: {
      bg: {
        self: rgba(themeColor.base.red, 0.1),
        active: rgba(themeColor.base.red, 0.5),
        hover: rgba(themeColor.base.red, 0.3),
      },
      border: rgba(themeColor.base.red, 0.4),
      text: saturate(themeColor.base.red, 0.2), // 饱和度提高
    },
    success: {
      bg: rgba(themeColor.base.green, 0.1),
      border: rgba(themeColor.base.green, 0.4),
      text: saturate(themeColor.base.green, 0.2),
    },
    warning: {
      bg: rgba(themeColor.base.yellow, 0.1),
      border: rgba(themeColor.base.yellow, 0.4),
      text: saturate(themeColor.base.yellow, 0.2),
    },
    info: {
      bg: rgba(themeColor.base.blue, 0.1),
      border: rgba(themeColor.base.blue, 0.4),
      text: saturate(themeColor.base.blue, 0.2),
    },
    priority: {
      bg: rgba(themeColor.base.purple, 0.1),
      border: rgba(themeColor.base.purple, 0.4),
      text: saturate(themeColor.base.purple, 0.2),
    },
  };

  const ansi: Ansi = themeColor.override?.ansi ?? {
    black: themeVars.color.black.self,
    red: themeVars.color.red.self,
    green: themeVars.color.green.self,
    yellow: themeVars.color.yellow.self,
    blue: themeVars.color.blue.self,
    magenta: themeVars.color.pink.self,
    cyan: themeColor.base.cyan,
    white: themeVars.color.console.fg.subtle,
    bright: {
      black: themeVars.color.black.light,
      red: themeVars.color.red.light,
      green: themeVars.color.green.light,
      yellow: themeVars.color.yellow.light,
      blue: themeVars.color.blue.light,
      magenta: themeVars.color.pink.light,
      cyan: themeColor.isDarkTheme
        ? scaleColorLight(themeColor.base.cyan, 10)
        : scaleColorLight(themeColor.base.cyan, 25),
      white: themeVars.color.console.fg.self,
    },
  };
  /** AI 仿照 Gitea 的色值映射 */
  const series16: Series16 = themeColor.override?.series16 ?? {
    num0: themeColor.base.green,
    num1: scaleColorLight(themeColor.base.green, -12),
    num2: themeColor.base.red,
    num3: themeColor.base.olive,
    num4: themeColor.base.pink,
    num5: themeColor.base.violet,
    num6: themeColor.base.orange,
    num7: themeColor.base.teal,
    num8: themeColor.base.brown,
    num9: themeColor.base.cyan,
    num10: scaleColorLight(themeColor.base.orange, -12),
    num11: scaleColorLight(themeColor.base.green, -24),
    num12: themeColor.base.purple,
    num13: scaleColorLight(themeColor.base.teal, -12),
    num14: themeColor.base.blue,
    num15: scaleColorLight(themeColor.base.pink, -12),
  };

  return {
    isDarkTheme: themeColor.isDarkTheme,
    color: {
      primary,
      secondary,
      ...named,
      ansi,
      console: themeColor.console,
      diff: themeColor.diff,
      series: { num16: series16 },
      ...message,
      ...themeColor.other,
    },
    github: themeColor.github,
  };
}
