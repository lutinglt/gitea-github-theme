import { saturate } from "polished";
import { scaleColorLight } from "src/functions";
import { type GithubColor } from "./github";

export type DisplayColor = {
  num0: string;
  num1: string;
  num2: string;
  num3: string;
  num4: string;
  num5: string;
  num6: string;
  num7: string;
  num8: string;
  num9: string;
};

export function display2GithubColor(
  displayColor: DisplayColor,
  baseGithubColor: GithubColor,
  soft?: boolean
): GithubColor {
  return {
    ...baseGithubColor,
    diffBlob: {
      ...baseGithubColor.diffBlob,
      hunkNum: { bgColor: { rest: soft ? displayColor.num2 : displayColor.num1 } },
    },
    fgColor: {
      ...baseGithubColor.fgColor,
      accent: soft ? displayColor.num7 : displayColor.num6,
    },
    bgColor: {
      ...baseGithubColor.bgColor,
      accent: {
        emphasis: soft ? saturate(-0.1, scaleColorLight(displayColor.num5, -2)) : displayColor.num5,
        muted: soft ? displayColor.num1 : displayColor.num0,
      },
    },
    borderColor: {
      ...baseGithubColor.borderColor,
      accent: {
        emphasis: soft ? displayColor.num6 : displayColor.num5,
      },
    },
    button: {
      ...baseGithubColor.button,
      primary: {
        ...baseGithubColor.button.primary,
        fgColor: {
          ...baseGithubColor.button.primary.fgColor,
          accent: soft ? displayColor.num7 : displayColor.num6,
        },
        bgColor: {
          ...baseGithubColor.button.primary.bgColor,
          rest: soft ? saturate(-0.1, scaleColorLight(displayColor.num5, -2)) : displayColor.num5,
          hover: soft ? saturate(-0.1, scaleColorLight(displayColor.num5, -7)) : scaleColorLight(displayColor.num5, 5),
        },
      },
      star: {
        iconColor: soft
          ? scaleColorLight(displayColor.num6, -2)
          : saturate(0.1, scaleColorLight(displayColor.num6, -2)),
      },
    },
    underlineNav: {
      borderColor: {
        active: soft ? scaleColorLight(saturate(0.1, displayColor.num6), -5) : saturate(0.2, displayColor.num6),
      },
    },
    contribution: {
      ...baseGithubColor.contribution,
      default: {
        ...baseGithubColor.contribution.default,
        bgColor: {
          num0: baseGithubColor.contribution.default.bgColor.num0,
          num1: soft ? displayColor.num2 : displayColor.num1,
          num2: soft ? displayColor.num3 : displayColor.num2,
          num3: soft ? displayColor.num5 : displayColor.num4,
          num4: soft ? displayColor.num7 : displayColor.num6,
        },
      },
    },
  };
}
