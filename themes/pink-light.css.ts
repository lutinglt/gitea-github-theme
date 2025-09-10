import { defineTheme } from "src";
import { display2GithubColor, type DisplayColor } from "src/core/display";
import { github2ThemeColor } from "src/core/github";
import { lightGithubColors } from "themes/light";

export const pinkLightDisplayColors: DisplayColor = {
  num0: "#ffe5f1",
  num1: "#fdc9e2",
  num2: "#f8a5cf",
  num3: "#f184bc",
  num4: "#e55da5",
  num5: "#ce2c85",
  num6: "#b12f79",
  num7: "#8e2e66",
  num8: "#6e2b53",
  num9: "#4d233d",
};

export const pinkLightGithubColors = display2GithubColor(pinkLightDisplayColors, lightGithubColors);
export const pinkLightColors = github2ThemeColor(pinkLightGithubColors);

export default defineTheme(pinkLightColors);
