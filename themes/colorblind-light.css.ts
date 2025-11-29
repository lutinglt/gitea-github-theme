/**
 * @author lutinglt
 */

import { defineTheme, themeVars, type Chroma } from "src";
import { github2ThemeColor, type GithubColor } from "src/core/github";
import { prettylights2Chroma, type prettylightsColor } from "src/core/prettylights";
import { lightGithubColors } from "themes/light";

export const colorblindLightGithubColors: GithubColor = {
  isDarkTheme: false,
  avatar: lightGithubColors.avatar,
  display: lightGithubColors.display,
  diffBlob: {
    addtionNum: { bgColor: "#b6e3ff" },
    addtionWord: { bgColor: "#b6e3ff" },
    deletionNum: { bgColor: "#ffd8b5" },
    deletionWord: { bgColor: "#ffd8b5" },
    hunkNum: { bgColor: { rest: "#e6eaef" } },
  },
  fgColor: {
    ...lightGithubColors.fgColor,
    danger: "#bc4c00",
    success: "#0969da",
  },
  bgColor: {
    ...lightGithubColors.bgColor,
    danger: { emphasis: "#bc4c00", muted: "#fff1e5" },
    success: { emphasis: "#0969da", muted: "#ddf4ff" },
  },
  borderColor: {
    ...lightGithubColors.borderColor,
    success: { emphasis: "#0969da" },
  },
  button: {
    primary: {
      fgColor: { accent: "#0969da", rest: "#ffffff" },
      bgColor: { rest: themeVars.github.bgColor.success.emphasis, hover: "#0864d1" },
    },
    danger: { fgColor: { rest: "#bc4c00", hover: "#ffffff" }, bgColor: { hover: "#bc4c00" } },
    star: lightGithubColors.button.star,
  },
  control: lightGithubColors.control,
  shadow: lightGithubColors.shadow,
  overlay: lightGithubColors.overlay,
  underlineNav: lightGithubColors.underlineNav,
  contribution: lightGithubColors.contribution,
};

export const colorblindLightPrettylights: prettylightsColor = {
  syntax: {
    brackethighlighter: { angle: "#59636e", unmatched: "#762c00" },
    carriage: { return: { bg: "#bc4c00", text: "#f6f8fa" } },
    comment: "#59636e",
    constant: "#0550ae",
    constantOtherReferenceLink: "#0a3069",
    entity: "#6639ba",
    entityTag: "#0550ae",
    invalid: { illegal: { bg: "#762c00", text: "#f6f8fa" } },
    keyword: "#bc4c00",
    markup: {
      bold: "#1f2328",
      changed: { bg: "#ffd8b5", text: "#953800" },
      deleted: { bg: "#fff1e5", text: "#762c00" },
      heading: "#0550ae",
      ignored: { bg: "#0550ae", text: "#d1d9e0" },
      inserted: { bg: "#ddf4ff", text: "#0550ae" },
      italic: "#1f2328",
      list: "#3b2300",
    },
    metaDiffRange: "#8250df",
    storageModifierImport: "#1f2328",
    string: "#0a3069",
    stringRegexp: "#0550ae",
    sublimelinterGutterMark: "#818b98",
    variable: "#953800",
  },
};

export const colorblindLightColors = github2ThemeColor(colorblindLightGithubColors);
export const colorblindLightChroma: Chroma = prettylights2Chroma(colorblindLightPrettylights);

export default defineTheme(colorblindLightColors, colorblindLightChroma);
