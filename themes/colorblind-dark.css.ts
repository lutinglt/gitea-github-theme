/**
 * @author lutinglt
 */

import { defineTheme, themeVars, type Chroma } from "src";
import { github2ThemeColor, type GithubColor } from "src/core/github";
import { prettylights2Chroma, type prettylightsColor } from "src/core/prettylights";
import { darkGithubColors } from "themes/dark";

export const colorblindDarkGithubColors: GithubColor = {
  isDarkTheme: true,
  avatar: darkGithubColors.avatar,
  display: darkGithubColors.display,
  diffBlob: {
    addtionNum: { bgColor: "#58a6ff4d" },
    addtionWord: { bgColor: "#388bfd66" },
    deletionNum: { bgColor: "#db6d284d" },
    deletionWord: { bgColor: "#db6d2866" },
    hunkNum: { bgColor: { rest: "#2f3742" } },
  },
  fgColor: {
    ...darkGithubColors.fgColor,
    danger: "#f0883e",
    success: "#58a6ff",
  },
  bgColor: {
    ...darkGithubColors.bgColor,
    danger: { emphasis: "#bd561d", muted: "#db6d281a" },
    success: { emphasis: "#1f6feb", muted: "#388bfd33" },
  },
  borderColor: {
    ...darkGithubColors.borderColor,
    success: { emphasis: "#1f6feb" },
  },
  button: {
    primary: {
      fgColor: { accent: "#58a6ff", rest: "#ffffff" },
      bgColor: { rest: themeVars.github.bgColor.success.emphasis, hover: "#2a7aef" },
    },
    danger: { fgColor: { rest: "#f0883e", hover: "#ffffff" }, bgColor: { hover: "#9b4215" } },
    star: darkGithubColors.button.star,
  },
  control: darkGithubColors.control,
  shadow: darkGithubColors.shadow,
  overlay: darkGithubColors.overlay,
  underlineNav: darkGithubColors.underlineNav,
  contribution: darkGithubColors.contribution,
};

export const colorblindDarkPrettylights: prettylightsColor = {
  syntax: {
    brackethighlighter: { angle: "#9198a1", unmatched: "#db6d28" },
    carriage: { return: { bg: "#9b4215", text: "#f0f6fc" } },
    comment: "#9198a1",
    constant: "#79c0ff",
    constantOtherReferenceLink: "#a5d6ff",
    entity: "#d2a8ff",
    entityTag: "#a5d6ff",
    invalid: { illegal: { bg: "#762d0a", text: "#f0f6fc" } },
    keyword: "#f0883e",
    markup: {
      bold: "#f0f6fc",
      changed: { bg: "#5a1e02", text: "#ffdfb6" },
      deleted: { bg: "#5a1e02", text: "#ffdfb6" },
      heading: "#1f6feb",
      ignored: { bg: "#1158c7", text: "#f0f6fc" },
      inserted: { bg: "#0c2d6b", text: "#cae8ff" },
      italic: "#f0f6fc",
      list: "#f2cc60",
    },
    metaDiffRange: "#d2a8ff",
    storageModifierImport: "#f0f6fc",
    string: "#a5d6ff",
    stringRegexp: "#a5d6ff",
    sublimelinterGutterMark: "#3d444d",
    variable: "#ffa657",
  },
};

export const colorblindDarkColors = github2ThemeColor(colorblindDarkGithubColors);
export const colorblindDarkChroma: Chroma = prettylights2Chroma(colorblindDarkPrettylights);

export default defineTheme(colorblindDarkColors, colorblindDarkChroma);
