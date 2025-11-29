/**
 * @author lutinglt
 */

import { defineTheme, themeVars, type Chroma } from "src";
import { github2ThemeColor, type GithubColor } from "src/core/github";
import { prettylights2Chroma, type prettylightsColor } from "src/core/prettylights";
import { darkGithubColors } from "themes/dark";

export const softDarkGithubColors: GithubColor = {
  isDarkTheme: true,
  avatar: {
    bgColor: "#cdd9e51a",
    borderColor: "#cdd9e526",
  },
  display: darkGithubColors.display,
  diffBlob: {
    addtionNum: { bgColor: "#57ab5a4d" },
    addtionWord: { bgColor: "#46954a66" },
    deletionNum: { bgColor: "#e5534b4d" },
    deletionWord: { bgColor: "#e5534b66" },
    hunkNum: { bgColor: { rest: "#143d79" } },
  },
  fgColor: {
    accent: "#478be6",
    attention: "#c69026",
    danger: "#e5534b",
    default: "#d1d7e0",
    disabled: "#656c76",
    done: "#986ee2",
    muted: "#9198a1",
    neutral: "#9198a1",
    severe: "#cc6b2c",
    sponsors: "#c96198",
    success: "#57ab5a",
    black: "#010409",
    white: "#cdd9e5",
    onEmphasis: "#ffffff",
  },
  bgColor: {
    accent: { emphasis: "#316dca", muted: "#4184e41a" },
    attention: { emphasis: "#966600", muted: "#ae7c1426" },
    danger: { emphasis: "#c93c37", muted: "#e5534b1a" },
    default: "#212830",
    done: { emphasis: "#8256d0" },
    emphasis: "#3d444d",
    muted: "#262c36",
    neutral: { muted: "#656c7633" },
    success: { emphasis: "#347d39", muted: "#46954a26" },
    inset: "#151b23",
  },
  borderColor: {
    accent: { emphasis: "#316dca" },
    attention: { emphasis: "#966600" },
    default: "#3d444d",
    done: { emphasis: "#8256d0" },
    success: { emphasis: "#347d39" },
    muted: "#3d444db3",
    translucent: "#cdd9e526",
  },
  button: {
    primary: {
      fgColor: { accent: "#57ab5a", rest: "#ffffff" },
      bgColor: { rest: themeVars.github.bgColor.success.emphasis, hover: "#3b8640" },
    },
    danger: { fgColor: { rest: "#ea5c53", hover: "#ffffff" }, bgColor: { hover: "#ad2e2c" } },
    star: { iconColor: "#daaa3f" },
  },
  control: {
    bgColor: { active: "#3d444d", hover: "#2f3742", rest: "#2a313c" },
    transparent: { bgColor: { active: "#656c7633", hover: "#656c7626", selected: "#656c761a" } },
  },
  shadow: { floating: { small: "#01040966" }, resting: { small: "#01040999" } },
  overlay: { backdrop: { bgColor: "#262c3666" }, bgColor: "#2a313c" },
  underlineNav: { borderColor: { active: "#ec775c" } },
  contribution: {
    default: {
      bgColor: { num0: "#2a313c", num1: "#1b4721", num2: "#2b6a30", num3: "#46954a", num4: "#6bc46d" },
      borderColor: { num0: "#0104090d" },
    },
  },
};

export const softDarkPrettylights: prettylightsColor = {
  syntax: {
    brackethighlighter: { angle: "#9198a1", unmatched: "#e5534b" },
    carriage: { return: { bg: "#ad2e2c", text: "#f0f6fc" } },
    comment: "#9198a1",
    constant: "#6cb6ff",
    constantOtherReferenceLink: "#96d0ff",
    entity: "#dcbdfb",
    entityTag: "#8ddb8c",
    invalid: { illegal: { bg: "#922323", text: "#f0f6fc" } },
    keyword: "#f47067",
    markup: {
      bold: "#f0f6fc",
      changed: { bg: "#682d0f", text: "#ffddb0" },
      deleted: { bg: "#78191b", text: "#ffd8d3" },
      heading: "#316dca",
      ignored: { bg: "#255ab2", text: "#f0f6fc" },
      inserted: { bg: "#1b4721", text: "#b4f1b4" },
      italic: "#f0f6fc",
      list: "#eac55f",
    },
    metaDiffRange: "#dcbdfb",
    storageModifierImport: "#f0f6fc",
    string: "#96d0ff",
    stringRegexp: "#8ddb8c",
    sublimelinterGutterMark: "#3d444d",
    variable: "#f69d50",
  },
};

export const softDarkColors = github2ThemeColor(softDarkGithubColors);
export const softDarkChroma: Chroma = prettylights2Chroma(softDarkPrettylights);

export default defineTheme(softDarkColors, softDarkChroma);
