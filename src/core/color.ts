import { rgba, saturate } from "polished";
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
export function defineTheme(themeColor: ThemeColor): Theme {
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

  const named: Named = {
    red: {
      self: themeColor.red,
      light: themeColor.isDarkTheme ? scaleColorLight(themeColor.red, 10) : scaleColorLight(themeColor.red, 25),
      dark: {
        num1: scaleColorLight(themeColor.red, -10),
        num2: scaleColorLight(themeColor.red, -20),
      },
      badge: {
        self: themeColor.red,
        bg: rgba(themeColor.red, 0.1),
        hover: {
          bg: rgba(themeColor.red, 0.3),
        },
      },
    },
    orange: {
      self: themeColor.orange,
      light: themeColor.isDarkTheme ? scaleColorLight(themeColor.orange, 10) : scaleColorLight(themeColor.orange, 25),
      dark: {
        num1: scaleColorLight(themeColor.orange, -10),
        num2: scaleColorLight(themeColor.orange, -20),
      },
      badge: {
        self: themeColor.orange,
        bg: rgba(themeColor.orange, 0.1),
        hover: {
          bg: rgba(themeColor.orange, 0.3),
        },
      },
    },
    yellow: {
      self: themeColor.yellow,
      light: themeColor.isDarkTheme ? scaleColorLight(themeColor.yellow, 10) : scaleColorLight(themeColor.yellow, 25),
      dark: {
        num1: scaleColorLight(themeColor.yellow, -10),
        num2: scaleColorLight(themeColor.yellow, -20),
      },
      badge: {
        self: themeColor.yellow,
        bg: rgba(themeColor.yellow, 0.1),
        hover: {
          bg: rgba(themeColor.yellow, 0.3),
        },
      },
    },
    olive: {
      self: themeColor.olive,
      light: themeColor.isDarkTheme ? scaleColorLight(themeColor.olive, 10) : scaleColorLight(themeColor.olive, 25),
      dark: {
        num1: scaleColorLight(themeColor.olive, -10),
        num2: scaleColorLight(themeColor.olive, -20),
      },
    },
    green: {
      self: themeColor.green,
      light: themeColor.isDarkTheme ? scaleColorLight(themeColor.green, 10) : scaleColorLight(themeColor.green, 25),
      dark: {
        num1: scaleColorLight(themeColor.green, -10),
        num2: scaleColorLight(themeColor.green, -20),
      },
      badge: {
        self: themeColor.green,
        bg: rgba(themeColor.green, 0.1),
        hover: {
          bg: rgba(themeColor.green, 0.3),
        },
      },
    },
    teal: {
      self: themeColor.teal,
      light: themeColor.isDarkTheme ? scaleColorLight(themeColor.teal, 10) : scaleColorLight(themeColor.teal, 25),
      dark: {
        num1: scaleColorLight(themeColor.teal, -10),
        num2: scaleColorLight(themeColor.teal, -20),
      },
    },
    blue: {
      self: themeColor.blue,
      light: themeColor.isDarkTheme ? scaleColorLight(themeColor.blue, 10) : scaleColorLight(themeColor.blue, 25),
      dark: {
        num1: scaleColorLight(themeColor.blue, -10),
        num2: scaleColorLight(themeColor.blue, -20),
      },
    },
    violet: {
      self: themeColor.violet,
      light: themeColor.isDarkTheme ? scaleColorLight(themeColor.violet, 10) : scaleColorLight(themeColor.violet, 25),
      dark: {
        num1: scaleColorLight(themeColor.violet, -10),
        num2: scaleColorLight(themeColor.violet, -20),
      },
    },
    purple: {
      self: themeColor.purple,
      light: themeColor.isDarkTheme ? scaleColorLight(themeColor.purple, 10) : scaleColorLight(themeColor.purple, 25),
      dark: {
        num1: scaleColorLight(themeColor.purple, -10),
        num2: scaleColorLight(themeColor.purple, -20),
      },
    },
    pink: {
      self: themeColor.pink,
      light: themeColor.isDarkTheme ? scaleColorLight(themeColor.pink, 10) : scaleColorLight(themeColor.pink, 25),
      dark: {
        num1: scaleColorLight(themeColor.pink, -10),
        num2: scaleColorLight(themeColor.pink, -20),
      },
    },
    brown: {
      self: themeColor.brown,
      light: themeColor.isDarkTheme ? scaleColorLight(themeColor.brown, 10) : scaleColorLight(themeColor.brown, 25),
      dark: {
        num1: scaleColorLight(themeColor.brown, -10),
        num2: scaleColorLight(themeColor.brown, -20),
      },
    },
    black: {
      self: themeColor.black,
      light: themeColor.isDarkTheme ? scaleColorLight(themeColor.black, 10) : scaleColorLight(themeColor.black, 25),
      dark: {
        num1: scaleColorLight(themeColor.black, -10),
        num2: scaleColorLight(themeColor.black, -20),
      },
    },
    grey: {
      self: themeColor.grey,
      light: themeColor.isDarkTheme ? scaleColorLight(themeColor.grey, 10) : scaleColorLight(themeColor.grey, 25),
    },
    gold: themeColor.gold,
    white: themeColor.white,
  };

  const message: Message = {
    error: {
      bg: {
        self: rgba(themeColor.red, 0.1),
        active: rgba(themeColor.red, 0.5),
        hover: rgba(themeColor.red, 0.3),
      },
      border: rgba(themeColor.red, 0.4),
      text: saturate(0.2, themeColor.red), // 饱和度提高
    },
    success: {
      bg: rgba(themeColor.green, 0.1),
      border: rgba(themeColor.green, 0.4),
      text: saturate(0.2, themeColor.green),
    },
    warning: {
      bg: rgba(themeColor.yellow, 0.1),
      border: rgba(themeColor.yellow, 0.4),
      text: saturate(0.2, themeColor.yellow),
    },
    info: {
      bg: rgba(themeColor.blue, 0.1),
      border: rgba(themeColor.blue, 0.4),
      text: saturate(0.2, themeColor.blue),
    },
  };

  const ansi: Ansi = {
    black: themeVars.color.black.self,
    red: themeVars.color.red.self,
    green: themeVars.color.green.self,
    yellow: themeVars.color.yellow.self,
    blue: themeVars.color.blue.self,
    magenta: themeVars.color.pink.self,
    cyan: themeColor.cyan,
    white: themeVars.color.console.fg.subtle,
    bright: {
      black: themeVars.color.black.light,
      red: themeVars.color.red.light,
      green: themeVars.color.green.light,
      yellow: themeVars.color.yellow.light,
      blue: themeVars.color.blue.light,
      magenta: themeVars.color.pink.light,
      cyan: themeColor.isDarkTheme ? scaleColorLight(themeColor.cyan, 10) : scaleColorLight(themeColor.cyan, 25),
      white: themeVars.color.console.fg.self,
    },
  };

  return {
    isDarkTheme: themeColor.isDarkTheme.toString(),
    color: {
      primary,
      secondary,
      ...named,
      ansi,
      console: themeColor.console,
      diff: themeColor.diff,
      ...message,
      ...themeColor.other,
    },
    github: themeColor.github,
  };
}
