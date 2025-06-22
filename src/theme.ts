import { createGlobalTheme, createGlobalThemeContract, globalStyle } from "@vanilla-extract/css";
import type { MapLeafNodes, WithOptionalLayer } from "src/types";
import { varMapper, vars } from "src/vars";

function stringToBoolean(str: string, name: string): boolean {
  try {
    return JSON.parse(str);
  } catch (error) {
    console.error(error);
    throw new Error(`Invalid boolean value(${name}): ${str}`);
  }
}

export const themeVars = createGlobalThemeContract(vars, varMapper);
export type Theme = WithOptionalLayer<MapLeafNodes<typeof themeVars, string>>;
export const defineTheme = (theme: Theme) => theme;

export function createTheme(theme: Theme): void {
  createGlobalTheme(":root", themeVars, theme);
  globalStyle(":root", {
    accentColor: themeVars.color.blue,
    colorScheme: stringToBoolean(theme.isDarkTheme, "isDarkTheme") ? "dark" : "light",
  });
}
