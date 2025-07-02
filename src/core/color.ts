import { rgba } from "polished";
import { scaleColorLight } from "src/functions";
import type { Ansi, Console, Diff, Github, Message, Named, Other, Primary, Secondary } from "src/types";
import { themeVars } from "src/types/vars";
import type { Theme } from "./theme";

type ThemeColor = {
  /** 用于标识当前是否为暗色主题: `true` 暗色 `false` 亮色 */
  isDarkTheme: boolean;
  /** 主色调(强调色) */
  primary: string;
  /** 主色调的对比色, 一般用于 `color` 属性, primary 用于 `background-color` */
  primaryContrast: string;
  /** 副色调(边框色) */
  secondary: string;
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
  /** Action 日志 */
  console: Console;
  /** 提交代码对比 */
  diff: Diff;
  /** 其他 */
  other: Other;
  /** 仅适用于本主题的全局变量, 取自 Github */
  github: Github;
};

/** 定义颜色, 用于生成颜色主题
 * @example
 * 文件名: "dark.css.tsx"
 * import type { Console, Diff, Other } from "src/types";
 * import { defineTheme, themeVars } from "src";
 *
 * const console: Console = {
 *   fg: {
 *     self: "#f0f6fc", // self 表示本身等于 --color-console-fg: #f0f6fc, 所有键名为 self 的都将被忽略
 *     subtle: themeVars.color.body, // 引用别的CSS变量等于 --color-console-fg-subtle: var(--color-body)
 *     num1: "rgb(125, 133, 144)", // 由于纯数字无法在 TS 中使用点调用, 采用 num 前缀等于 --color-console-fg-1: rgb(125, 133, 144)
 *   },
 *   ...
 * }
 * ...
 * // 会经过 lightningcss 打包处理生成最终的 CSS
 * export default defineTheme({
 *   isDarkTheme: true,
 *   primary: "#0969da",
 *   ...
 *   console,
 *   diff,
 *   other,
 * })
 */
export function defineTheme(theme: ThemeColor): Theme {
  const lighten = theme.isDarkTheme ? -1 : 1;

  const primary: Primary = {
    self: theme.primary,
    contrast: theme.primaryContrast,
    dark: {
      num1: scaleColorLight(theme.primary, -12 * lighten),
      num2: scaleColorLight(theme.primary, -24 * lighten),
      num3: scaleColorLight(theme.primary, -36 * lighten),
      num4: scaleColorLight(theme.primary, -48 * lighten),
      num5: scaleColorLight(theme.primary, -60 * lighten),
      num6: scaleColorLight(theme.primary, -72 * lighten),
      num7: scaleColorLight(theme.primary, -84 * lighten),
    },
    light: {
      num1: scaleColorLight(theme.primary, 12 * lighten),
      num2: scaleColorLight(theme.primary, 24 * lighten),
      num3: scaleColorLight(theme.primary, 36 * lighten),
      num4: scaleColorLight(theme.primary, 48 * lighten),
      num5: scaleColorLight(theme.primary, 60 * lighten),
      num6: scaleColorLight(theme.primary, 72 * lighten),
      num7: scaleColorLight(theme.primary, 84 * lighten),
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
      num1: scaleColorLight(theme.secondary, -6 * lighten),
      num2: scaleColorLight(theme.secondary, -12 * lighten),
      num3: scaleColorLight(theme.secondary, -18 * lighten),
      num4: scaleColorLight(theme.secondary, -24 * lighten),
      num5: scaleColorLight(theme.secondary, -30 * lighten),
      num6: scaleColorLight(theme.secondary, -36 * lighten),
      num7: scaleColorLight(theme.secondary, -42 * lighten),
      num8: scaleColorLight(theme.secondary, -48 * lighten),
      num9: scaleColorLight(theme.secondary, -54 * lighten),
      num10: scaleColorLight(theme.secondary, -60 * lighten),
      num11: scaleColorLight(theme.secondary, -66 * lighten),
      num12: scaleColorLight(theme.secondary, -72 * lighten),
      num13: scaleColorLight(theme.secondary, -80 * lighten),
    },
    light: {
      num1: scaleColorLight(theme.secondary, 18 * lighten),
      num2: scaleColorLight(theme.secondary, 36 * lighten),
      num3: scaleColorLight(theme.secondary, 54 * lighten),
      num4: scaleColorLight(theme.secondary, 72 * lighten),
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
      border: rgba(theme.red, 0.4),
      text: theme.red,
    },
    success: {
      bg: rgba(theme.green, 0.1),
      border: rgba(theme.green, 0.4),
      text: theme.green,
    },
    warning: {
      bg: rgba(theme.yellow, 0.1),
      border: rgba(theme.yellow, 0.4),
      text: theme.yellow,
    },
    info: {
      bg: rgba(theme.blue, 0.1),
      border: rgba(theme.blue, 0.4),
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
    cyan: theme.cyan,
    white: themeVars.color.console.fg.subtle,
    bright: {
      black: themeVars.color.black.light,
      red: themeVars.color.red.light,
      green: themeVars.color.green.light,
      yellow: themeVars.color.yellow.light,
      blue: themeVars.color.blue.light,
      magenta: themeVars.color.pink.light,
      cyan: theme.isDarkTheme ? scaleColorLight(theme.cyan, 10) : scaleColorLight(theme.cyan, 25),
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
      ...theme.other,
    },
    github: theme.github,
  };
}
