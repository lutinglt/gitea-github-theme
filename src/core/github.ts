import type { Console, Diff, Other } from "src";
import { themeVars } from "src/types/vars";
import { defineTheme } from "./color";
import type { Theme } from "./theme";

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
    accent: {
      emphasis: string;
      muted: string;
    };
    attention: {
      muted: string;
    };
    success: {
      muted: string;
    };
    danger: {
      muted: string;
    };
    default: string;
    inset: string;
    muted: string;
    neutral: {
      muted: string;
    };
  };
  borderColor: {
    default: string;
    muted: string;
  };
  control: {
    bgColor: {
      active: string;
      hover: string;
      rest: string;
    };
    transparent: {
      bgColor: {
        active: string;
        hover: string;
        selected: string;
      };
    };
  };
  shadow: {
    floating: string;
  };
};

export function defineGithubTheme(github: GithubColor): Theme {
  const console: Console = {
    fg: {
      self: github.fgColor.default,
      subtle: github.fgColor.muted,
    },
    bg: github.bgColor.inset,
    border: github.borderColor.muted,
    activeBg: github.control.bgColor.active,
    hoverBg: github.control.transparent.bgColor.hover,
    menu: {
      bg: github.bgColor.inset,
      border: github.borderColor.muted,
    },
  };

  const diff: Diff = {
    added: {
      linenum: {
        bg: github.diffBlob.addtionNum.bgColor,
      },
      row: {
        bg: github.bgColor.success.muted,
        border: github.bgColor.success.muted,
      },
      word: {
        bg: github.diffBlob.addtionWord.bgColor,
      },
    },
    removed: {
      linenum: {
        bg: github.diffBlob.deletionNum.bgColor,
      },
      row: {
        bg: github.bgColor.danger.muted,
        border: github.bgColor.danger.muted,
      },
      word: {
        bg: github.diffBlob.deletionWord.bgColor,
      },
    },
    moved: {
      row: {
        bg: github.bgColor.attention.muted,
        border: github.bgColor.attention.muted,
      },
    },
    inactive: github.bgColor.muted,
  };

  const other: Other = {
    body: github.bgColor.default,
    box: {
      header: github.bgColor.muted,
      body: {
        self: themeVars.color.body,
        highlight: github.bgColor.accent.muted,
      },
    },
    text: {
      self: github.fgColor.default,
      light: {
        self: github.fgColor.default,
        num1: github.fgColor.muted,
        num2: github.fgColor.muted,
        num3: github.fgColor.muted,
      },
      dark: github.fgColor.default,
    },
    footer: github.bgColor.inset,
    timeline: github.borderColor.muted,
    input: {
      text: themeVars.color.text.self,
      background: themeVars.color.body,
      toggleBackgound: themeVars.color.body,
      border: {
        self: themeVars.color.light.border,
        hover: themeVars.color.light.border,
      },
    },
    light: {
      self: themeVars.color.body,
      border: github.borderColor.default,
    },
    hover: {
      self: github.control.bgColor.hover,
      opaque: themeVars.color.box.header,
    },
    active: github.control.transparent.bgColor.selected,
    menu: github.bgColor.inset,
    card: themeVars.color.body,
    markup: {
      tableRow: github.bgColor.muted,
      code: {
        block: github.bgColor.muted,
        inline: github.bgColor.neutral.muted,
      },
    },
    button: github.control.bgColor.rest,
    codeBg: "unset",
    shadow: {
      self: github.shadow.floating,
      opaque: themeVars.color.shadow.self,
    },
    secondaryBg: "unset",
    expandButton: github.diffBlob.hunkNum.bgColor.rest,
    placeholderText: themeVars.color.text.light.num3,
    editorLineHighlight: themeVars.color.primary.light.num5,
    projectColumnBg: github.bgColor.inset,
    caret: themeVars.color.text.dark,
    reaction: {
      bg: "initial",
      hoverBg: github.bgColor.accent.muted,
      activeBg: github.bgColor.accent.muted,
    },
    tooltip: {
      text: github.fgColor.default,
      bg: github.bgColor.default,
    },
    nav: {
      bg: github.bgColor.inset,
      hoverBg: github.control.transparent.bgColor.hover,
      text: themeVars.color.text.self,
    },
    secondaryNavBg: themeVars.color.nav.bg,
    label: {
      text: themeVars.color.text.self,
      bg: github.bgColor.neutral.muted,
      hoverBg: github.control.transparent.bgColor.active,
      activeBg: themeVars.color.label.hoverBg,
    },
    accent: themeVars.color.primary.light.num1,
    smallAccent: themeVars.color.primary.light.num5,
    highlight: {
      fg: github.fgColor.attention,
      bg: github.bgColor.attention.muted,
    },
    overlayBackdrop: themeVars.color.body,
  };
  return defineTheme({
    isDarkTheme: github.isDarkTheme,
    primary: github.fgColor.accent,
    primaryContrast: github.fgColor.default,
    secondary: github.borderColor.default,
    red: github.fgColor.danger,
    orange: github.fgColor.severe,
    yellow: github.fgColor.attention,
    olive: github.display.olive.fgColor,
    green: github.fgColor.success,
    cyan: github.display.cyan.fgColor,
    teal: github.display.teal.fgColor,
    blue: github.fgColor.accent,
    violet: github.display.indigo.fgColor,
    purple: github.fgColor.done,
    pink: github.fgColor.sponsors,
    brown: github.display.brown.fgColor,
    black: github.fgColor.black,
    grey: github.fgColor.neutral,
    gold: github.display.lemon.fgColor,
    white: github.fgColor.white,
    console,
    diff,
    other,
    github: {
      fgColor: {
        accent: github.fgColor.accent,
        default: github.fgColor.default,
        muted: github.fgColor.muted,
      },
      bgColor: {
        accent: {
          emphasis: github.bgColor.accent.emphasis,
        },
      },
    },
  });
}
