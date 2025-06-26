import { createGlobalThemeContract } from "@vanilla-extract/css";
import * as color from "./color";

export function varMapper(value: string | null, path: string[]) {
  if (value === null) {
    path = path.filter(item => item !== "self");
    path = path.map(item => item.replace(/^num/, ""));
    return path.join("-");
  }
  return value;
}

const vars = {
  /** 用于标识当前是否为暗色主题: `"true"` 暗色 `"false"` 亮色 */
  isDarkTheme: "is-dark-theme",
  color: {
    primary: color.primary,
    secondary: color.secondary,
    self: {
      ...color.based,
      ...color.named,
    },
    ansi: color.ansi,
    console: color.console,
    diff: color.diff,
    error: color.error,
    success: color.success,
    warning: color.warning,
    info: color.info,
  },
};

const otherVars = {
  border: {
    radius: null,
  },
};

export const themeVars = createGlobalThemeContract(vars, varMapper);
export const otherThemeVars = createGlobalThemeContract(otherVars, varMapper);
