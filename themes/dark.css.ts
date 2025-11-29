/**
 * @author lutinglt
 */

import { defineTheme, themeVars } from "src";
import { github2ThemeColor, type GithubColor } from "src/core/github";

export const darkGithubColors: GithubColor = {
  isDarkTheme: true,
  avatar: {
    bgColor: "#ffffff1a",
    borderColor: "#ffffff26",
  },
  display: {
    blue: { fgColor: "#4493f8" },
    brown: { fgColor: "#b69a6d" },
    cyan: { fgColor: "#07ace4" },
    indigo: { fgColor: "#9899ec" },
    lemon: { fgColor: "#ba9b12" },
    olive: { fgColor: "#a2a626" },
    teal: { fgColor: "#1cb0ab" },
  },
  diffBlob: {
    addtionNum: { bgColor: "#3fb9504d" },
    addtionWord: { bgColor: "#2ea04366" },
    deletionNum: { bgColor: "#f851494d" },
    deletionWord: { bgColor: "#f8514966" },
    hunkNum: { bgColor: { rest: "#0c2d6b" } },
  },
  fgColor: {
    accent: "#4493f8",
    attention: "#d29922",
    danger: "#f85149",
    default: "#f0f6fc",
    disabled: "#656c76",
    done: "#ab7df8",
    muted: "#9198a1",
    neutral: "#9198a1",
    severe: "#db6d28",
    sponsors: "#db61a2",
    success: "#3fb950",
    black: "#010409",
    white: "#ffffff",
    onEmphasis: "#ffffff",
  },
  bgColor: {
    accent: { emphasis: "#1f6feb", muted: "#388bfd1a" },
    attention: { emphasis: "#9e6a03", muted: "#bb800926" },
    danger: { emphasis: "#da3633", muted: "#f851491a" },
    default: "#0d1117",
    done: { emphasis: "#8957e5" },
    emphasis: "#3d444d",
    muted: "#151b23",
    neutral: { muted: "#656c7633" },
    success: { emphasis: "#238636", muted: "#2ea04326" },
    inset: "#010409",
  },
  borderColor: {
    accent: { emphasis: "#1f6feb" },
    attention: { emphasis: "#9e6a03" },
    default: "#3d444d",
    done: { emphasis: "#8957e5" },
    success: { emphasis: "#238636" },
    muted: "#3d444db3",
    translucent: "#ffffff26",
  },
  button: {
    primary: {
      fgColor: { accent: "#3fb950", rest: "#ffffff" },
      bgColor: { rest: themeVars.github.bgColor.success.emphasis, hover: "#29903b" },
    },
    danger: { fgColor: { rest: "#fa5e55", hover: "#ffffff" }, bgColor: { hover: "#b62324" } },
    star: { iconColor: "#e3b341" },
  },
  control: {
    bgColor: { active: "#2a313c", hover: "#262c36", rest: "#212830" },
    transparent: { bgColor: { active: "#656c7640", hover: "#656c7633", selected: "#656c761a" } },
  },
  shadow: { floating: { small: "#01040966" }, resting: { small: "#01040999" } },
  overlay: { backdrop: { bgColor: "#21283066" }, bgColor: "#010409" },
  underlineNav: { borderColor: { active: "#f78166" } },
  contribution: {
    default: {
      bgColor: { num0: "#151b23", num1: "#033a16", num2: "#196c2e", num3: "#2ea043", num4: "#56d364" },
      borderColor: { num0: "#0104090d" },
    },
  },
};

export const darkColors = github2ThemeColor(darkGithubColors);

export default defineTheme(darkColors);
