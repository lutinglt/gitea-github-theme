import { createGlobalTheme, globalKeyframes, globalStyle } from "@vanilla-extract/css";
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

export const overlayAppear = "overlay-appear";
export const animation = `200ms cubic-bezier(0.33, 1, 0.68, 1) 0s 1 normal none running ${overlayAppear}`;

const emoji = `
.emoji[aria-label="check mark"],
.emoji[aria-label="currency exchange"],
.emoji[aria-label="TOP arrow"],
.emoji[aria-label="END arrow"],
.emoji[aria-label="ON! arrow"],
.emoji[aria-label="SOON arrow"],
.emoji[aria-label="heavy dollar sign"],
.emoji[aria-label="copyright"],
.emoji[aria-label="registered"],
.emoji[aria-label="trade mark"],
.emoji[aria-label="multiply"],
.emoji[aria-label="plus"],
.emoji[aria-label="minus"],
.emoji[aria-label="divide"],
.emoji[aria-label="curly loop"],
.emoji[aria-label="double curly loop"],
.emoji[aria-label="wavy dash"],
.emoji[aria-label="paw prints"],
.emoji[aria-label="musical note"],
.emoji[aria-label="musical notes"]
`;

export function createTheme(theme: Theme): void {
  const isDarkTheme = stringToBoolean(theme.isDarkTheme, "isDarkTheme");
  if (isDarkTheme) {
    globalStyle(emoji, { filter: "invert(100%) hue-rotate(180deg)" });
  }
  createGlobalTheme(":root", themeVars, theme);
  createGlobalTheme(":root", otherThemeVars, {
    git: "#f05133",
    light: {
      mimicEnabled: isDarkTheme
        ? "rgba(0, 0, 0, calc(40 / 255 * 222 / 255 / var(--opacity-disabled)))"
        : "rgba(0, 0, 0, calc(6 / 255 * 222 / 255 / var(--opacity-disabled)))",
    },
    border: {
      radius: "6px",
    },
  });
  globalStyle(":root", {
    accentColor: themeVars.color.accent,
    colorScheme: isDarkTheme ? "dark" : "light",
  });
  globalKeyframes(overlayAppear, {
    "0%": { opacity: 0, transform: "translateY(-12px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  });
}
