import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";
import { otherThemeVars, themeVars } from "src/types/vars";
import type { MapLeafNodes, WithOptionalLayer } from "./types";

export type Theme = WithOptionalLayer<MapLeafNodes<typeof themeVars, string>>;

function stringToBoolean(str: string, name: string): boolean {
  try {
    return JSON.parse(str);
  } catch (error) {
    console.error(error);
    throw new Error(`Invalid boolean value(${name}): ${str}`);
  }
}

export function createTheme(theme: Theme): void {
  createGlobalTheme(":root", themeVars, theme);
  createGlobalTheme(":root", otherThemeVars, {
    git: "#f05133",
    light: {
      mimicEnabled: theme.isDarkTheme
        ? "rgba(0, 0, 0, calc(40 / 255 * 222 / 255 / var(--opacity-disabled)))"
        : "rgba(0, 0, 0, calc(6 / 255 * 222 / 255 / var(--opacity-disabled)))",
    },
    border: {
      radius: "6px",
    },
  });
  globalStyle(":root", {
    accentColor: themeVars.color.accent,
    colorScheme: stringToBoolean(theme.isDarkTheme, "isDarkTheme") ? "dark" : "light",
  });
}
