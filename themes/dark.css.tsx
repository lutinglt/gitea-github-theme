import type { Other, Console, Diff } from "src";
import { defineTheme, themeVars } from "src";

const console: Console = {
  fg: {
    self: "#f0f6fc",
    subtle: "#9198a1",
  },
  bg: "#010409",
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
      bg: "#1c4428",
    },
    row: {
      bg: "#12261e",
      border: "#314a37",
    },
    word: {
      bg: "#1d572d",
    },
  },
  removed: {
    linenum: {
      bg: "#542426",
    },
    row: {
      bg: "#25171c",
      border: "#634343",
    },
    word: {
      bg: "#792e2d",
    },
  },
  moved: {
    row: {
      bg: "#818044",
      border: "#bcca6f",
    },
  },
  inactive: "#353846",
};

const other: Other = {
  git: "#f05133",
  body: "#0d1117",
  box: {
    header: "#151b23",
    body: {
      self: "#0d1117",
      highlight: "#262c36",
    },
  },
  text: {
    self: "#dce2e7",
    dark: "#dbe0ea",
    light: {
      self: "#a6aab5",
      num1: "rgb(125, 133, 144)",
      num2: "#8a8e99",
      num3: "#707687",
    },
  },
  footer: "#010409",
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
  expandButton: "#3c404d",
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
    bg: "#010409",
    hoverBg: themeVars.color.hover.self,
    text: themeVars.color.text.self,
  },
  secondaryNavBg: "#181c20",
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
  primary: "#4493f8",
  primaryContrast: "#fff",
  secondary: "#3d444d",
  red: "#da3737",
  orange: "#f17a2b",
  yellow: "#f3c640",
  olive: "#c8df36",
  green: "#39d353",
  teal: "#69d4cf",
  blue: "#4493f8",
  violet: "#754ad3",
  purple: "#8957e5",
  pink: "#e04b9f",
  brown: "#a86d45",
  black: "#141516",
  grey: "#505665",
  gold: "#b1983b",
  white: "#ffffff",
  console,
  diff,
  other,
});
