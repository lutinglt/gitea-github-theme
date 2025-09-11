/**
 * @author lutinglt
 */

import { defineTheme } from "src";
import { display2GithubColor } from "src/core/display";
import { github2ThemeColor } from "src/core/github";
import { softDarkGithubColors } from "themes/soft-dark";
import { pinkDarkDisplayColors } from "./pink-dark.css";

export const pinkSoftDarkGithubColors = display2GithubColor(pinkDarkDisplayColors, softDarkGithubColors, true);
export const pinkSoftDarkColors = github2ThemeColor(pinkSoftDarkGithubColors);

export default defineTheme(pinkSoftDarkColors);
