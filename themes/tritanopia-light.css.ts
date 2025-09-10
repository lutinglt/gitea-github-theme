import { defineTheme, type Chroma } from "src";
import { lightPrettylights } from "src/core/chroma";
import { github2ThemeColor, type GithubColor } from "src/core/github";
import { prettylights2Chroma, type prettylightsColor } from "src/core/prettylights";
import { colorblindLightGithubColors, colorblindLightPrettylights } from "themes/colorblind-light";
import { lightGithubColors } from "themes/light";

export const tritanopiaLightGithubColors: GithubColor = {
  ...colorblindLightGithubColors,
  diffBlob: {
    ...colorblindLightGithubColors.diffBlob,
    deletionNum: lightGithubColors.diffBlob.deletionNum,
    deletionWord: lightGithubColors.diffBlob.deletionWord,
  },
  fgColor: {
    ...colorblindLightGithubColors.fgColor,
    danger: lightGithubColors.fgColor.danger,
  },
  bgColor: {
    ...colorblindLightGithubColors.bgColor,
    danger: lightGithubColors.bgColor.danger,
  },
  button: {
    ...colorblindLightGithubColors.button,
    danger: lightGithubColors.button.danger,
  },
};

export const tritanopiaLightPrettylights: prettylightsColor = {
  syntax: {
    ...lightPrettylights.syntax,
    markup: {
      ...lightPrettylights.syntax.markup,
      changed: { bg: "#ffcecb", text: "#a40e26" },
      inserted: colorblindLightPrettylights.syntax.markup.inserted,
    },
    stringRegexp: colorblindLightPrettylights.syntax.stringRegexp,
    variable: "#a40e26",
  },
};

export const tritanopiaLightColors = github2ThemeColor(tritanopiaLightGithubColors);
export const tritanopiaLightChroma: Chroma = prettylights2Chroma(tritanopiaLightPrettylights);

export default defineTheme(tritanopiaLightColors, tritanopiaLightChroma);
