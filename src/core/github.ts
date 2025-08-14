import { saturate } from "polished";
import type { Console, Diff, Other } from "src";
import { scaleColorLight } from "src/functions";
import type { Github } from "src/types";
import { themeVars } from "src/types/vars";
import { type ThemeColor } from "./color";

export type GithubColor = {
  isDarkTheme: boolean;
  display: {
    brown: { fgColor: string };
    cyan: { fgColor: string };
    indigo: { fgColor: string };
    lemon: { fgColor: string };
    olive: { fgColor: string };
    teal: { fgColor: string };
  };
  diffBlob: {
    addtionNum: { bgColor: string };
    addtionWord: { bgColor: string };
    deletionNum: { bgColor: string };
    deletionWord: { bgColor: string };
    hunkNum: { bgColor: { rest: string } };
  };
  fgColor: {
    accent: string;
    attention: string;
    danger: string;
    default: string;
    disabled: string;
    done: string;
    neutral: string;
    severe: string;
    sponsors: string;
    success: string;
    black: string;
    white: string;
    muted: string;
  };
  bgColor: {
    accent: { emphasis: string; muted: string };
    attention: { muted: string };
    success: { emphasis: string; muted: string };
    danger: { muted: string };
    done: { emphasis: string };
    default: string;
    inset: string;
    muted: string;
    neutral: { muted: string };
  };
  borderColor: {
    accent: { emphasis: string };
    attention: { emphasis: string };
    default: string;
    success: { emphasis: string };
    done: { emphasis: string };
    muted: string;
    translucent: string;
  };
  button: {
    primary: { fgColor: { rest: string }; bgColor: { hover: string } };
    danger: { fgColor: { rest: string; hover: string }; bgColor: { hover: string } };
  };
  control: {
    bgColor: { active: string; hover: string; rest: string };
    transparent: { bgColor: { active: string; hover: string; selected: string } };
  };
  shadow: { floating: { small: string } };
  overlay: { backdrop: { bgColor: string } };
  underlineNav: { borderColor: { active: string } };
  contribution: {
    default: {
      bgColor: { num0: string; num1: string; num2: string; num3: string; num4: string };
      borderColor: { num0: string };
    };
  };
};

export function github2ThemeColor(githubColor: GithubColor): ThemeColor {
  const console: Console = {
    fg: {
      self: githubColor.fgColor.default,
      subtle: githubColor.fgColor.muted,
    },
    bg: githubColor.bgColor.inset,
    border: githubColor.borderColor.muted,
    activeBg: githubColor.control.bgColor.active,
    hoverBg: githubColor.control.transparent.bgColor.hover,
    menu: {
      bg: githubColor.bgColor.inset,
      border: githubColor.borderColor.muted,
    },
  };

  const diff: Diff = {
    added: {
      linenum: {
        bg: githubColor.diffBlob.addtionNum.bgColor,
      },
      row: {
        bg: githubColor.bgColor.success.muted,
        border: githubColor.bgColor.success.muted,
      },
      word: {
        bg: githubColor.diffBlob.addtionWord.bgColor,
      },
    },
    removed: {
      linenum: {
        bg: githubColor.diffBlob.deletionNum.bgColor,
      },
      row: {
        bg: githubColor.bgColor.danger.muted,
        border: githubColor.bgColor.danger.muted,
      },
      word: {
        bg: githubColor.diffBlob.deletionWord.bgColor,
      },
    },
    moved: {
      row: {
        bg: githubColor.bgColor.attention.muted,
        border: githubColor.bgColor.attention.muted,
      },
    },
    inactive: githubColor.bgColor.muted,
  };

  const other: Other = {
    body: githubColor.bgColor.default,
    box: {
      header: githubColor.bgColor.muted,
      body: {
        self: themeVars.color.body,
        highlight: githubColor.bgColor.accent.muted,
      },
    },
    text: {
      self: githubColor.fgColor.default,
      light: {
        self: githubColor.fgColor.default,
        num1: githubColor.fgColor.muted,
        num2: githubColor.fgColor.muted,
        num3: githubColor.fgColor.muted,
      },
      dark: githubColor.fgColor.default,
    },
    footer: githubColor.bgColor.inset,
    timeline: githubColor.borderColor.muted,
    input: {
      text: themeVars.color.text.self,
      background: githubColor.bgColor.muted,
      toggleBackgound: themeVars.color.body,
      border: {
        self: themeVars.color.light.border,
        hover: themeVars.color.light.border,
      },
    },
    light: {
      self: themeVars.color.body,
      border: githubColor.borderColor.default,
    },
    hover: {
      self: githubColor.control.bgColor.hover,
      opaque: themeVars.color.box.header,
    },
    active: githubColor.control.transparent.bgColor.selected,
    menu: githubColor.bgColor.inset,
    card: themeVars.color.body,
    markup: {
      tableRow: githubColor.bgColor.muted,
      code: {
        block: githubColor.bgColor.muted,
        inline: githubColor.bgColor.neutral.muted,
      },
    },
    button: githubColor.control.bgColor.rest,
    codeBg: "unset",
    shadow: {
      self: githubColor.shadow.floating.small,
      opaque: themeVars.color.shadow.self,
    },
    secondaryBg: "unset",
    expandButton: githubColor.diffBlob.hunkNum.bgColor.rest,
    placeholderText: themeVars.color.text.light.num3,
    editorLineHighlight: themeVars.color.primary.light.num5,
    projectColumnBg: githubColor.bgColor.inset,
    caret: themeVars.color.text.dark,
    reaction: {
      bg: "initial",
      hoverBg: githubColor.bgColor.accent.muted,
      activeBg: githubColor.bgColor.accent.muted,
    },
    tooltip: {
      text: githubColor.fgColor.default,
      bg: githubColor.bgColor.default,
    },
    nav: {
      bg: githubColor.bgColor.inset,
      hoverBg: githubColor.control.transparent.bgColor.hover,
      text: themeVars.color.text.self,
    },
    secondaryNavBg: themeVars.color.nav.bg,
    label: {
      text: themeVars.color.text.self,
      bg: githubColor.bgColor.neutral.muted,
      hoverBg: githubColor.control.transparent.bgColor.active,
      activeBg: themeVars.color.label.hoverBg,
    },
    accent: themeVars.color.primary.light.num1,
    smallAccent: themeVars.color.primary.light.num5,
    highlight: {
      fg: githubColor.fgColor.attention,
      bg: githubColor.bgColor.attention.muted,
    },
    overlayBackdrop: githubColor.overlay.backdrop.bgColor,
  };

  const github: Github = {
    fgColor: {
      accent: githubColor.fgColor.accent,
      success: githubColor.fgColor.success,
      done: githubColor.fgColor.done,
    },
    bgColor: {
      accent: {
        emphasis: githubColor.bgColor.accent.emphasis,
        muted: githubColor.bgColor.accent.muted,
      },
      success: {
        emphasis: githubColor.bgColor.success.emphasis,
      },
      done: {
        emphasis: githubColor.bgColor.done.emphasis,
      },
    },
    borderColor: {
      accent: {
        emphasis: githubColor.borderColor.accent.emphasis,
      },
      attention: {
        emphasis: githubColor.borderColor.attention.emphasis,
      },
      success: {
        emphasis: githubColor.borderColor.success.emphasis,
      },
      done: {
        emphasis: githubColor.borderColor.done.emphasis,
      },
    },
    button: {
      default: {
        bgColor: {
          active: githubColor.control.bgColor.active,
        },
      },
      primary: {
        fgColor: {
          accent: saturate(0.1, scaleColorLight(githubColor.fgColor.success, githubColor.isDarkTheme ? 10 : -10)),
          rest: githubColor.button.primary.fgColor.rest,
        },
        bgColor: {
          rest: themeVars.github.bgColor.success.emphasis,
          hover: githubColor.button.primary.bgColor.hover,
        },
        borderColor: {
          rest: githubColor.borderColor.translucent,
          hover: githubColor.borderColor.translucent,
        },
      },
      danger: {
        fgColor: {
          rest: githubColor.button.danger.fgColor.rest,
          hover: githubColor.button.danger.fgColor.hover,
        },
        bgColor: {
          rest: githubColor.control.bgColor.rest,
          hover: githubColor.button.danger.bgColor.hover,
        },
        borderColor: {
          hover: githubColor.borderColor.translucent,
        },
      },
    },
    control: {
      bgColor: {
        rest: githubColor.control.bgColor.rest,
      },
      transparent: {
        bgColor: {
          hover: githubColor.control.transparent.bgColor.hover,
        },
      },
    },
    shadow: {
      floating: {
        small: `0px 0px 0px 1px ${themeVars.color.light.border}, 0px 6px 12px -3px ${themeVars.color.shadow.self}, 0px 6px 18px 0px ${themeVars.color.shadow.self};`,
      },
    },
    underlineNav: {
      borderColor: {
        active: githubColor.underlineNav.borderColor.active,
      },
    },
    contribution: {
      default: {
        bgColor: {
          num0: githubColor.contribution.default.bgColor.num0,
          num1: githubColor.contribution.default.bgColor.num1,
          num2: githubColor.contribution.default.bgColor.num2,
          num3: githubColor.contribution.default.bgColor.num3,
          num4: githubColor.contribution.default.bgColor.num4,
          num5: saturate(
            0.2,
            scaleColorLight(githubColor.contribution.default.bgColor.num4, githubColor.isDarkTheme ? 58 : -58)
          ),
        },
        borderColor: {
          num0: githubColor.contribution.default.borderColor.num0,
          num1: themeVars.github.contribution.default.borderColor.num0,
          num2: themeVars.github.contribution.default.borderColor.num0,
          num3: themeVars.github.contribution.default.borderColor.num0,
          num4: themeVars.github.contribution.default.borderColor.num0,
          num5: themeVars.github.contribution.default.borderColor.num0,
        },
      },
    },
  };
  return {
    isDarkTheme: githubColor.isDarkTheme,
    primary: githubColor.fgColor.accent,
    primaryContrast: githubColor.fgColor.default,
    secondary: githubColor.borderColor.default,
    base: {
      red: githubColor.fgColor.danger,
      orange: githubColor.fgColor.severe,
      yellow: githubColor.fgColor.attention,
      olive: githubColor.display.olive.fgColor,
      green: githubColor.fgColor.success,
      cyan: githubColor.display.cyan.fgColor,
      teal: githubColor.display.teal.fgColor,
      blue: githubColor.fgColor.accent,
      violet: githubColor.display.indigo.fgColor,
      purple: githubColor.fgColor.done,
      pink: githubColor.fgColor.sponsors,
      brown: githubColor.display.brown.fgColor,
      black: githubColor.fgColor.black,
      grey: githubColor.fgColor.neutral,
      gold: githubColor.display.lemon.fgColor,
      white: githubColor.fgColor.white,
    },
    console,
    diff,
    other,
    github,
  };
}
