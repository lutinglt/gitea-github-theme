import type { Console, Diff, Other } from "src";
import { defineTheme, themeVars } from "src";

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
    addtionNum: {
      bgColor: "#3fb9504d",
    },
    addtionWord: {
      bgColor: "#2ea04366",
    },
    deletionNum: {
      bgColor: "#f851494d",
    },
    deletionWord: {
      bgColor: "#f8514966",
    },
    hunkNum: {
      /** diff 按钮色 */
      bgColorRest: "#0c2d6b",
    },
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
  },
  bgColor: {
    accent: {
      emphasis: "#1f6feb",
      muted: "#388bfd1a",
    },
    black: "#010409",
    success: {
      muted: "#2ea04326",
    },
    danger: {
      muted: "#f851491a",
    },
    muted: "#151b23",
  },
};

const console: Console = {
  fg: {
    self: "#f0f6fc",
    subtle: "#9198a1",
  },
  bg: github.bgColor.black,
  border: "#2b3139",
  activeBg: "#2a313c",
  hoverBg: "#15191f",
  menu: {
    bg: themeVars.color.body,
    border: themeVars.color.light.border,
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
      bg: "#818044",
      border: "#bcca6f",
    },
  },
  inactive: github.bgColor.muted,
};

const other: Other = {
  git: "#f05133",
  body: "#0d1117",
  box: {
    header: "#151b23",
    body: {
      self: "#0d1117",
      /** diff 按钮行行色 */
      highlight: github.bgColor.accent.muted,
    },
  },
  text: {
    self: github.fgColor.default,
    dark: "#dbe0ea",
    light: {
      self: "#a6aab5",
      num1: "rgb(125, 133, 144)",
      num2: "#8a8e99",
      num3: "#707687",
    },
  },
  footer: github.bgColor.black,
  timeline: "#4c525e",
  input: {
    text: "#d5dbe6",
    background: "#2c2f35",
    toggleBackgound: "#454a57",
    border: {
      self: themeVars.color.light.border,
      hover: themeVars.color.light.border,
    },
  },
  light: {
    self: "#00000028",
    mimicEnabled: "rgba(0, 0, 0, calc(40 / 255 * 222 / 255 / var(--opacity-disabled)))",
    border: "#3d444d",
  },
  hover: {
    self: "#656c7633",
    opaque: "#656c7666",
  },
  active: "#161a21",
  menu: "#0d1117",
  card: "#0d1117",
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
  expandButton: github.diffBlob.hunkNum.bgColorRest,
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
    bg: github.bgColor.black,
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
  isDarkTheme: true,
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
  github,
});
