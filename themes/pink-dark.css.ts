/**
 * @author lutinglt
 */

import { defineTheme } from "src";
import { display2GithubColor, type DisplayColor } from "src/core/display";
import { github2ThemeColor } from "src/core/github";
import { darkGithubColors } from "themes/dark";

export const pinkDarkDisplayColors: DisplayColor = {
  num0: "#2d1524",
  num1: "#451c35",
  num2: "#65244a",
  num3: "#842a5d",
  num4: "#ac2f74",
  num5: "#d34591",
  num6: "#e57bb2",
  num7: "#ec8dbd",
  num8: "#f4a9cd",
  num9: "#f9bed9",
};

export const pinkDarkGithubColors = display2GithubColor(pinkDarkDisplayColors, darkGithubColors);
export const pinkDarkColors = github2ThemeColor(pinkDarkGithubColors);

export default defineTheme(pinkDarkColors);
