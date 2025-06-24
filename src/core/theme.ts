import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";
import { otherThemeVars, themeVars } from "src/types/vars";
import type { MapLeafNodes, WithOptionalLayer } from "./types";

type Theme = WithOptionalLayer<MapLeafNodes<typeof themeVars, string>>;

function stringToBoolean(str: string, name: string): boolean {
  try {
    return JSON.parse(str);
  } catch (error) {
    console.error(error);
    throw new Error(`Invalid boolean value(${name}): ${str}`);
  }
}

/** 定义主题, 用于生成颜色主题
 * @example
 * 文件名: `color-dark.css.ts`
 * import type { Primary } from "src/types";
 * import { defineTheme, themeVars } from "src";
 *
 * const primary: Primary = {
 *   self: "#000000",
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
export const defineTheme = (theme: Theme) => theme;
export function createTheme(theme: Theme): void {
  createGlobalTheme(":root", themeVars, theme);
  createGlobalTheme(":root", otherThemeVars, {
    border: {
      radius: "6px",
    },
  });
  globalStyle(":root", {
    accentColor: themeVars.color.blue,
    colorScheme: stringToBoolean(theme.isDarkTheme, "isDarkTheme") ? "dark" : "light",
  });
}
