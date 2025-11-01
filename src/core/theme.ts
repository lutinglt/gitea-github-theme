import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";
import fs from "node:fs";
import path from "node:path";
import { otherThemeVars, themeInfoVars, themeVars } from "src/types/vars";
import type { MapLeafNodes, WithOptionalLayer } from "./types";

export type Theme = WithOptionalLayer<MapLeafNodes<typeof themeVars, string>>;

export const overlayAppear = "overlay-appear";
export const animation = `200ms cubic-bezier(0.33, 1, 0.68, 1) 0s 1 normal none running ${overlayAppear}`;
export const overlayAppearDown = "overlay-appear-down";
export const animationDown = `200ms cubic-bezier(0.33, 1, 0.68, 1) 0s 1 normal none running ${overlayAppearDown}`;
export const overlayAppearUp = "overlay-appear-up";
export const animationUp = `200ms cubic-bezier(0.33, 1, 0.68, 1) 0s 1 normal none running ${overlayAppearUp}`;

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

// 版本号: 版本号.YYMMDD
const now = new Date();
const year = now.getFullYear().toString().slice(-2);
const month = (now.getMonth() + 1).toString().padStart(2, "0");
const day = now.getDate().toString().padStart(2, "0");

const pkgPath = path.join(__dirname, "../..", "package.json");
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
const version = `"${pkg.version}.${year}${month}${day}"`;

export function createTheme(theme: Theme): void {
  const isDarkTheme: boolean = JSON.parse(theme.isDarkTheme);
  createGlobalTheme(":root", themeInfoVars, { version });
  createGlobalTheme(":root", themeVars, theme);
  createGlobalTheme(":root", otherThemeVars, {
    border: { radius: "6px" },
    color: {
      git: "#f05133",
      light: {
        mimicEnabled: isDarkTheme
          ? "rgba(0, 0, 0, calc(40 / 255 * 222 / 255 / var(--opacity-disabled)))"
          : "rgba(0, 0, 0, calc(6 / 255 * 222 / 255 / var(--opacity-disabled)))",
      },
    },
  });
  globalStyle(":root", {
    accentColor: themeVars.color.accent,
    colorScheme: isDarkTheme ? "dark" : "light",
  });
  if (isDarkTheme) globalStyle(emoji, { filter: "invert(100%) hue-rotate(180deg)" });
}
