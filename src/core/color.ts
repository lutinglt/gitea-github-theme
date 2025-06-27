import { rgba } from "polished";
import { scaleColorLight } from "src/functions";
import type { Ansi, Based, Console, Diff, Message, Named, Primary, Secondary } from "src/types";
import { themeVars } from "src/types/vars";
import type { Theme } from "./theme";

interface ColorTheme {
  isDarkTheme: boolean;
  primary: string;
  primaryContrast: string;
  secondary: string;
  red: string;
  orange: string;
  yellow: string;
  olive: string;
  green: string;
  teal: string;
  blue: string;
  violet: string;
  purple: string;
  pink: string;
  brown: string;
  black: string;
  grey: string;
  gold: string;
  white: string;
  console: Console;
  diff: Diff;
  based: Based;
}

/** 定义颜色, 用于生成颜色主题
 * @example
 * 文件名: `color-dark.css.ts`
 * import type { Primary } from "src/types";
 * import { defineTheme, themeVars } from "src";
 *
 * const primary: Primary = {
 *   self: "#ffffff",
 *   contrast: themeVars.color.white,
 *   ...
 * }
 *
 * export default defineTheme({
 *   isDarkTheme: "true",
 *   color: {
 *     primary,
 *     ...
 *   }
 * })
 */
export function defineTheme(theme: ColorTheme): Theme {
  const lighten = theme.isDarkTheme ? -1 : 1;

  const primary: Primary = {
    self: theme.primary,
    contrast: theme.primaryContrast,
    dark: {
      num1: scaleColorLight(theme.primary, -3 * lighten),
      num2: scaleColorLight(theme.primary, -6 * lighten),
      num3: scaleColorLight(theme.primary, -9 * lighten),
      num4: scaleColorLight(theme.primary, -12 * lighten),
      num5: scaleColorLight(theme.primary, -15 * lighten),
      num6: scaleColorLight(theme.primary, -18 * lighten),
      num7: scaleColorLight(theme.primary, -21 * lighten),
    },
    light: {
      num1: scaleColorLight(theme.primary, 3 * lighten),
      num2: scaleColorLight(theme.primary, 6 * lighten),
      num3: scaleColorLight(theme.primary, 9 * lighten),
      num4: scaleColorLight(theme.primary, 12 * lighten),
      num5: scaleColorLight(theme.primary, 15 * lighten),
      num6: scaleColorLight(theme.primary, 18 * lighten),
      num7: scaleColorLight(theme.primary, 21 * lighten),
    },
    alpha: {
      num10: rgba(theme.primary, 0.1),
      num20: rgba(theme.primary, 0.2),
      num30: rgba(theme.primary, 0.3),
      num40: rgba(theme.primary, 0.4),
      num50: rgba(theme.primary, 0.5),
      num60: rgba(theme.primary, 0.6),
      num70: rgba(theme.primary, 0.7),
      num80: rgba(theme.primary, 0.8),
      num90: rgba(theme.primary, 0.9),
    },
    hover: theme.isDarkTheme ? themeVars.color.primary.light.num1 : themeVars.color.primary.dark.num1,
    active: theme.isDarkTheme ? themeVars.color.primary.light.num2 : themeVars.color.primary.dark.num2,
  };

  const secondary: Secondary = {
    self: theme.secondary,
    dark: {
      num1: scaleColorLight(theme.secondary, -3 * lighten),
      num2: scaleColorLight(theme.secondary, -6 * lighten),
      num3: scaleColorLight(theme.secondary, -9 * lighten),
      num4: scaleColorLight(theme.secondary, -12 * lighten),
      num5: scaleColorLight(theme.secondary, -15 * lighten),
      num6: scaleColorLight(theme.secondary, -18 * lighten),
      num7: scaleColorLight(theme.secondary, -21 * lighten),
      num8: scaleColorLight(theme.secondary, -24 * lighten),
      num9: scaleColorLight(theme.secondary, -27 * lighten),
      num10: scaleColorLight(theme.secondary, -30 * lighten),
      num11: scaleColorLight(theme.secondary, -33 * lighten),
      num12: scaleColorLight(theme.secondary, -36 * lighten),
      num13: scaleColorLight(theme.secondary, -39 * lighten),
    },
    light: {
      num1: scaleColorLight(theme.secondary, 3 * lighten),
      num2: scaleColorLight(theme.secondary, 6 * lighten),
      num3: scaleColorLight(theme.secondary, 9 * lighten),
      num4: scaleColorLight(theme.secondary, 12 * lighten),
    },
    alpha: {
      num10: rgba(theme.secondary, 0.1),
      num20: rgba(theme.secondary, 0.2),
      num30: rgba(theme.secondary, 0.3),
      num40: rgba(theme.secondary, 0.4),
      num50: rgba(theme.secondary, 0.5),
      num60: rgba(theme.secondary, 0.6),
      num70: rgba(theme.secondary, 0.7),
      num80: rgba(theme.secondary, 0.8),
      num90: rgba(theme.secondary, 0.9),
    },
    button: themeVars.color.secondary.dark.num4,
    hover: theme.isDarkTheme ? themeVars.color.secondary.dark.num3 : themeVars.color.secondary.dark.num5,
    active: theme.isDarkTheme ? themeVars.color.secondary.dark.num2 : themeVars.color.secondary.dark.num6,
  };

  const named: Named = {
    red: {
      self: theme.red,
      light: theme.isDarkTheme ? scaleColorLight(theme.red, 10) : scaleColorLight(theme.red, 25),
      dark: {
        num1: scaleColorLight(theme.red, -10),
        num2: scaleColorLight(theme.red, -20),
      },
      badge: {
        self: theme.red,
        bg: rgba(theme.red, 0.1),
        hover: {
          bg: rgba(theme.red, 0.3),
        },
      },
    },
    orange: {
      self: theme.orange,
      light: theme.isDarkTheme ? scaleColorLight(theme.orange, 10) : scaleColorLight(theme.orange, 25),
      dark: {
        num1: scaleColorLight(theme.orange, -10),
        num2: scaleColorLight(theme.orange, -20),
      },
      badge: {
        self: theme.orange,
        bg: rgba(theme.orange, 0.1),
        hover: {
          bg: rgba(theme.orange, 0.3),
        },
      },
    },
    yellow: {
      self: theme.yellow,
      light: theme.isDarkTheme ? scaleColorLight(theme.yellow, 10) : scaleColorLight(theme.yellow, 25),
      dark: {
        num1: scaleColorLight(theme.yellow, -10),
        num2: scaleColorLight(theme.yellow, -20),
      },
      badge: {
        self: theme.yellow,
        bg: rgba(theme.yellow, 0.1),
        hover: {
          bg: rgba(theme.yellow, 0.3),
        },
      },
    },
    olive: {
      self: theme.olive,
      light: theme.isDarkTheme ? scaleColorLight(theme.olive, 10) : scaleColorLight(theme.olive, 25),
      dark: {
        num1: scaleColorLight(theme.olive, -10),
        num2: scaleColorLight(theme.olive, -20),
      },
    },
    green: {
      self: theme.green,
      light: theme.isDarkTheme ? scaleColorLight(theme.green, 10) : scaleColorLight(theme.green, 25),
      dark: {
        num1: scaleColorLight(theme.green, -10),
        num2: scaleColorLight(theme.green, -20),
      },
      badge: {
        self: theme.green,
        bg: rgba(theme.green, 0.1),
        hover: {
          bg: rgba(theme.green, 0.3),
        },
      },
    },
    teal: {
      self: theme.teal,
      light: theme.isDarkTheme ? scaleColorLight(theme.teal, 10) : scaleColorLight(theme.teal, 25),
      dark: {
        num1: scaleColorLight(theme.teal, -10),
        num2: scaleColorLight(theme.teal, -20),
      },
    },
    blue: {
      self: theme.blue,
      light: theme.isDarkTheme ? scaleColorLight(theme.blue, 10) : scaleColorLight(theme.blue, 25),
      dark: {
        num1: scaleColorLight(theme.blue, -10),
        num2: scaleColorLight(theme.blue, -20),
      },
    },
    violet: {
      self: theme.violet,
      light: theme.isDarkTheme ? scaleColorLight(theme.violet, 10) : scaleColorLight(theme.violet, 25),
      dark: {
        num1: scaleColorLight(theme.violet, -10),
        num2: scaleColorLight(theme.violet, -20),
      },
    },
    purple: {
      self: theme.purple,
      light: theme.isDarkTheme ? scaleColorLight(theme.purple, 10) : scaleColorLight(theme.purple, 25),
      dark: {
        num1: scaleColorLight(theme.purple, -10),
        num2: scaleColorLight(theme.purple, -20),
      },
    },
    pink: {
      self: theme.pink,
      light: theme.isDarkTheme ? scaleColorLight(theme.pink, 10) : scaleColorLight(theme.pink, 25),
      dark: {
        num1: scaleColorLight(theme.pink, -10),
        num2: scaleColorLight(theme.pink, -20),
      },
    },
    brown: {
      self: theme.brown,
      light: theme.isDarkTheme ? scaleColorLight(theme.brown, 10) : scaleColorLight(theme.brown, 25),
      dark: {
        num1: scaleColorLight(theme.brown, -10),
        num2: scaleColorLight(theme.brown, -20),
      },
    },
    black: {
      self: theme.black,
      light: theme.isDarkTheme ? scaleColorLight(theme.black, 10) : scaleColorLight(theme.black, 25),
      dark: {
        num1: scaleColorLight(theme.black, -10),
        num2: scaleColorLight(theme.black, -20),
      },
    },
    grey: {
      self: theme.grey,
      light: theme.isDarkTheme ? scaleColorLight(theme.grey, 10) : scaleColorLight(theme.grey, 25),
    },
    gold: theme.gold,
    white: theme.white,
  };

  const message: Message = {
    error: {
      bg: {
        self: rgba(theme.red, 0.1),
        active: rgba(theme.red, 0.5),
        hover: rgba(theme.red, 0.3),
      },
      border: scaleColorLight(theme.red, 30 * lighten),
      text: theme.red,
    },
    success: {
      bg: rgba(theme.green, 0.1),
      border: scaleColorLight(theme.green, 30 * lighten),
      text: theme.green,
    },
    warning: {
      bg: rgba(theme.yellow, 0.1),
      border: scaleColorLight(theme.yellow, 30 * lighten),
      text: theme.yellow,
    },
    info: {
      bg: rgba(theme.blue, 0.1),
      border: scaleColorLight(theme.blue, 30 * lighten),
      text: theme.blue,
    },
  };

  const ansi: Ansi = {
    black: themeVars.color.black.self,
    red: themeVars.color.red.self,
    green: themeVars.color.green.self,
    yellow: themeVars.color.yellow.self,
    blue: themeVars.color.blue.self,
    magenta: themeVars.color.pink.self,
    cyan: themeVars.color.teal.self,
    white: themeVars.color.console.fg.subtle,
    bright: {
      black: themeVars.color.black.light,
      red: themeVars.color.red.light,
      green: themeVars.color.green.light,
      yellow: themeVars.color.yellow.light,
      blue: themeVars.color.blue.light,
      magenta: themeVars.color.pink.light,
      cyan: themeVars.color.teal.light,
      white: themeVars.color.console.fg.self,
    },
  };

  return {
    isDarkTheme: theme.isDarkTheme.toString(),
    color: {
      primary,
      secondary,
      ...named,
      ansi,
      console: theme.console,
      diff: theme.diff,
      ...message,
      ...theme.based,
    },
  };
}
