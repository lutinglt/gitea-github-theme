/**
 * @author lutinglt
 */

import { defineTheme, type Chroma } from "src";
import { darkPrettylights } from "src/core/chroma";
import { github2ThemeColor, type GithubColor } from "src/core/github";
import { prettylights2Chroma, type prettylightsColor } from "src/core/prettylights";
import { colorblindDarkGithubColors, colorblindDarkPrettylights } from "themes/colorblind-dark";
import { darkGithubColors } from "themes/dark";

export const tritanopiaDarkGithubColors: GithubColor = {
  ...colorblindDarkGithubColors,
  diffBlob: {
    ...colorblindDarkGithubColors.diffBlob,
    deletionNum: darkGithubColors.diffBlob.deletionNum,
    deletionWord: darkGithubColors.diffBlob.deletionWord,
  },
  fgColor: {
    ...colorblindDarkGithubColors.fgColor,
    danger: darkGithubColors.fgColor.danger,
  },
  bgColor: {
    ...colorblindDarkGithubColors.bgColor,
    danger: darkGithubColors.bgColor.danger,
  },
  button: {
    ...colorblindDarkGithubColors.button,
    danger: darkGithubColors.button.danger,
  },
};

export const tritanopiaDarkPrettylights: prettylightsColor = {
  syntax: {
    ...darkPrettylights.syntax,
    markup: {
      ...darkPrettylights.syntax.markup,
      changed: { bg: "#67060c", text: "#ffdcd7" },
      inserted: colorblindDarkPrettylights.syntax.markup.inserted,
    },
    stringRegexp: colorblindDarkPrettylights.syntax.stringRegexp,
    variable: "#ffa198",
  },
};

export const tritanopiaDarkColors = github2ThemeColor(tritanopiaDarkGithubColors);
export const tritanopiaDarkChroma: Chroma = prettylights2Chroma(tritanopiaDarkPrettylights);

export default defineTheme(tritanopiaDarkColors, tritanopiaDarkChroma);
