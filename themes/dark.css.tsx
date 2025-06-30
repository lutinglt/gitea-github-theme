import type { Console, Diff, Other } from "src";
import { defineTheme, themeVars } from "src";

const isDarkTheme = true;

const github = {
  display: {
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
    disabled: "#656c7699",
    done: "#ab7df8",
    neutral: "#9198a1",
    severe: "#db6d28",
    sponsors: "#db61a2",
    success: "#3fb950",
    black: "#010409",
    white: "#ffffff",
    muted: "#9198a1",
  },
  bgColor: {
    accent: {
      emphasis: "#1f6feb",
      muted: "#388bfd1a",
    },
    attention: {
      muted: "#bb800926",
    },
    success: {
      muted: "#2ea04326",
    },
    danger: {
      muted: "#f851491a",
    },
    default: "#0d1117",
    inset: "#010409",
    muted: "#151b23",
  },
  borderColor: {
    default: "#3d444d",
    muted: "#3d444db3",
  },
  control: {
    bgColor: {
      active: "#2a313c",
      hover: "#262c36",
    },
    transparent: {
      bgColor: {
        selected: "#656c761a",
        hover: "#656c7633",
      },
    },
  },
};

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
  git: "#f05133",
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
    mimicEnabled: "rgba(0, 0, 0, calc(40 / 255 * 222 / 255 / var(--opacity-disabled)))",
    border: github.borderColor.default,
  },
  hover: {
    self: github.control.bgColor.hover,
    opaque: themeVars.color.box.header,
  },
  active: github.control.transparent.bgColor.selected,
  menu: themeVars.color.body, // 此菜单项涉及太多, 不仅仅是下拉菜单, 默认使用 body 颜色
  card: themeVars.color.body,
  markup: {
    tableRow: "#ffffff06",
    code: {
      block: "#ffffff16",
      inline: "#ffffff26",
    },
  },
  button: "#212830",
  codeBg: "#0d1117",
  shadow: {
    self: "#00000060",
    opaque: "#00000080",
  },
  secondaryBg: "#ffffff26",
  expandButton: github.diffBlob.hunkNum.bgColor.rest,
  placeholderText: "#8a8e99",
  editorLineHighlight: themeVars.color.primary.light.num5,
  projectColumnBg: themeVars.color.secondary.light.num2,
  caret: themeVars.color.text.self,
  reaction: {
    bg: "#ffffff12",
    hoverBg: themeVars.color.primary.light.num4,
    activeBg: themeVars.color.primary.light.num5,
  },
  tooltip: {
    text: "#fff",
    bg: "#000000f0",
  },
  nav: {
    bg: github.bgColor.inset,
    hoverBg: themeVars.color.hover.self,
    text: themeVars.color.text.self,
  },
  secondaryNavBg: themeVars.color.nav.bg,
  label: {
    text: "#fff",
    bg: "#7c84974b",
    hoverBg: "#7c8497a0",
    activeBg: "#7c8497",
  },
  accent: themeVars.color.primary.light.num1,
  smallAccent: themeVars.color.primary.light.num5,
  highlight: {
    bg: "#87651e",
    fg: "#352c1c",
  },
  overlayBackdrop: "#080808c0",
};

export default defineTheme({
  isDarkTheme,
  primary: github.fgColor.accent,
  primaryContrast: github.fgColor.default,
  secondary: "#3d444d",
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
