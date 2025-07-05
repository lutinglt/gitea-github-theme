import type { Console, Diff, Other } from "src";
import type { Github } from "src/types";
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
      emphasis: string;
      muted: string;
    };
    danger: {
      muted: string;
    };
    done: {
      emphasis: string;
    };
    default: string;
    inset: string;
    muted: string;
    neutral: {
      muted: string;
    };
  };
  borderColor: {
    accent: {
      emphasis: string;
    };
    attention: {
      emphasis: string;
    };
    default: string;
    success: {
      emphasis: string;
    };
    done: {
      emphasis: string;
    };
    muted: string;
    translucent: string;
  };
  button: {
    primary: {
      fgColor: {
        accent: string;
        rest: string;
      };
      bgColor: {
        rest: string;
        hover: string;
      };
    };
    danger: {
      fgColor: {
        rest: string;
        hover: string;
      };
      bgColor: {
        hover: string;
      };
    };
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
  overlay: {
    backdrop: {
      bgColor: string;
    };
  };
};

export function defineGithubTheme(githubColor: GithubColor): Theme {
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
      self: githubColor.shadow.floating,
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
      default: githubColor.fgColor.default,
      muted: githubColor.fgColor.muted,
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
          accent: githubColor.button.primary.fgColor.accent,
          rest: githubColor.button.primary.fgColor.rest,
        },
        bgColor: {
          rest: githubColor.button.primary.bgColor.rest,
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
  };
  return defineTheme({
    isDarkTheme: githubColor.isDarkTheme,
    primary: githubColor.fgColor.accent,
    primaryContrast: githubColor.fgColor.default,
    secondary: githubColor.borderColor.default,
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
    console,
    diff,
    other,
    github,
  });
}
