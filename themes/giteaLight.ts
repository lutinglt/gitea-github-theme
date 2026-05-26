/*!
 * Copyright (c) https://github.com/lutinglt
 *
 * See the NOTICE file distributed with this work for additional
 * information regarding copyright ownership.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @author lutinglt
 */

import type {
  Ansi,
  Console,
  Diff,
  GiteaColor,
  Message,
  Named,
  Other,
  Primary,
  Secondary,
  Syntax,
} from "@gitea-github-theme/core";
import { defineTheme, themeVars } from "@gitea-github-theme/core";

const primary: Primary = {
  self: "#4183c4",
  contrast: "#ffffff",
  dark: {
    num1: "#3876b3",
    num2: "#31699f",
    num3: "#2b5c8b",
    num4: "#254f77",
    num5: "#193450",
    num6: "#0c1a28",
    num7: "#04080c",
  },
  light: {
    num1: "#548fca",
    num2: "#679cd0",
    num3: "#7aa8d6",
    num4: "#8db5dc",
    num5: "#b3cde7",
    num6: "#d9e6f3",
    num7: "#f4f8fb",
  },
  alpha: {
    num10: "#4183c419",
    num20: "#4183c433",
    num30: "#4183c44b",
    num40: "#4183c466",
    num50: "#4183c480",
    num60: "#4183c499",
    num70: "#4183c4b3",
    num80: "#4183c4cc",
    num90: "#4183c4e1",
  },
  hover: themeVars.color.primary.dark.num1,
  active: themeVars.color.primary.dark.num2,
};
const secondary: Secondary = {
  self: "#d0d7de",
  dark: {
    num1: "#c7ced5",
    num2: "#b9c0c7",
    num3: "#99a0a7",
    num4: "#899097",
    num5: "#7a8188",
    num6: "#6a7178",
    num7: "#5b6269",
    num8: "#4b5259",
    num9: "#3c434a",
    num10: "#2c333a",
    num11: "#1d242b",
    num12: "#0d141b",
    num13: "#00040b",
  },
  light: {
    num1: "#dee5ec",
    num2: "#e4ebf2",
    num3: "#ebf2f9",
    num4: "#f1f8ff",
  },
  alpha: {
    num10: "#d0d7de19",
    num20: "#d0d7de33",
    num30: "#d0d7de4b",
    num40: "#d0d7de66",
    num50: "#d0d7de80",
    num60: "#d0d7de99",
    num70: "#d0d7deb3",
    num80: "#d0d7decc",
    num90: "#d0d7dee1",
  },
  button: themeVars.color.secondary.dark.num4,
  hover: themeVars.color.secondary.dark.num5,
  active: themeVars.color.secondary.dark.num6,
};
const console: Console = {
  fg: {
    self: "#0d1117",
    subtle: "#40474d",
  },
  bg: "#ffffff",
  border: "#d0d7de",
  activeBg: "#d0d7de",
  hoverBg: "#f1f3f5",
  menu: {
    bg: "#f8f9fb",
    border: "#d0d7de",
  },
  link: "#5c656d",
};
const named: Named = {
  red: {
    self: "#db2828",
    light: "#e45e5e",
    dark: { num1: "#c82121", num2: "#b11e1e" },
    badge: { self: "#db2828", bg: "#db28281a", hover: { bg: "#db28284d" } },
  },
  orange: {
    self: "#f2711c",
    light: "#f59555",
    dark: { num1: "#e6630d", num2: "#cc580c" },
    badge: { self: "#f2711c", bg: "#f2711c1a", hover: { bg: "#f2711c4d" } },
  },
  yellow: {
    self: "#fbbd08",
    light: "#fcce46",
    dark: { num1: "#e5ac04", num2: "#cc9903" },
    badge: { self: "#fbbd08", bg: "#fbbd081a", hover: { bg: "#fbbd084d" } },
  },
  olive: { self: "#b5cc18", light: "#d3e942", dark: { num1: "#a3b816", num2: "#91a313" } },
  green: {
    self: "#21ba45",
    light: "#46de6a",
    dark: { num1: "#1ea73e", num2: "#1a9537" },
    badge: { self: "#21ba45", bg: "#21ba451a", hover: { bg: "#21ba454d" } },
  },
  teal: { self: "#00b5ad", light: "#08fff4", dark: { num1: "#00a39c", num2: "#00918a" } },
  blue: { self: "#2185d0", light: "#51a5e3", dark: { num1: "#1e78bb", num2: "#1a6aa6" } },
  violet: { self: "#6435c9", light: "#8b67d7", dark: { num1: "#5a30b5", num2: "#502aa1" } },
  purple: { self: "#a333c8", light: "#bb64d8", dark: { num1: "#932eb4", num2: "#8229a0" } },
  pink: { self: "#e03997", light: "#e86bb1", dark: { num1: "#db228a", num2: "#c21e7b" } },
  brown: { self: "#a5673f", light: "#c58b66", dark: { num1: "#955d39", num2: "#845232" } },
  black: { self: "#1d2328", light: "#4b5b68", dark: { num1: "#2c3339", num2: "#131619" } },
  grey: { self: "#697077", light: "#7c838a" },
  gold: "#a1882b",
  white: "#ffffff",
};
const ansi: Ansi = {
  black: "#1e2327",
  red: "#cc4848",
  green: "#87ab63",
  yellow: "#cc9903",
  blue: "#3a8ac6",
  magenta: "#d22e8b",
  cyan: "#00918a",
  white: themeVars.color.console.fg.subtle,
  bright: {
    black: "#46494d",
    red: "#d15a5a",
    green: "#93b373",
    yellow: "#eaaf03",
    blue: "#4e96cc",
    magenta: "#d74397",
    cyan: "#00b6ad",
    white: themeVars.color.console.fg.self,
  },
};
const diff: Diff = {
  added: {
    fg: "#21ba45",
    linenum: { bg: "#d1f8d9" },
    row: { bg: "#e6ffed", border: "#e6ffed" },
    word: { bg: "#acf2bd" },
  },
  moved: {
    row: { bg: "#f1f8d1", border: "#d0e27f" },
  },
  removed: {
    fg: "#db2828",
    linenum: { bg: "#ffcecb" },
    row: { bg: "#ffeef0", border: "#f1c0c0" },
    word: { bg: "#fdb8c0" },
  },
  inactive: "#f0f2f4",
};
const message: Message = {
  error: {
    bg: { self: "#ffebe9", active: "#ffcecb", hover: "#ffdcd7" },
    border: "#ff818266",
    text: "#d1242f",
  },
  success: {
    bg: "#dafbe1",
    border: "#4ac26b66",
    text: "#1a7f37",
  },
  warning: {
    bg: "#fff8c5",
    border: "#d4a72c66",
    text: "#9a6700",
  },
  info: {
    bg: "#ddf4ff",
    border: "#54aeff66",
    text: "#0969da",
  },
  priority: {
    bg: "#f3e7ff",
    border: "#b9a1ff66",
    text: "#8250df",
  },
};
const other: Other = {
  logo: "#609926",
  body: "#ffffff",
  footer: themeVars.color.nav.bg,
  timeline: "#d0d7de",
  box: {
    header: "#f1f3f5",
    body: { self: "#ffffff", highlight: "#ecf5fd" },
  },
  text: {
    self: "#181c21",
    light: { self: "#30363b", num1: "#40474d", num2: "#5b6167", num3: "#747c84" },
    dark: "#01050a",
  },
  input: {
    text: themeVars.color.text.dark,
    background: "#fff",
    toggleBackground: "#d0d7de",
    border: themeVars.color.secondary.dark.num1,
  },
  light: { self: "#00001706", border: "#0000171d" },
  hover: { self: "#00001708", opaque: "#f1f3f5" },
  active: "#00001714",
  menu: "#f8f9fb",
  card: "#f8f9fb",
  markup: {
    tableRow: "#0030600a",
    code: { block: "#00306010", inline: "#00306012" },
  },
  button: "#f8f9fb",
  codeBg: "#fafdff",
  shadow: { self: "#00001726", opaque: "#c7ced5" },
  secondaryBg: "#f2f5f8",
  expandButton: "#cfe8fa",
  placeholderText: themeVars.color.text.light.num3,
  editor: {
    lineHighlight: themeVars.color.secondary.alpha.num30,
    selection: themeVars.color.primary.alpha.num30,
  },
  projectColumnBg: themeVars.color.secondary.light.num4,
  caret: themeVars.color.text.dark,
  reaction: {
    bg: "#0000170a",
    hoverBg: themeVars.color.primary.light.num5,
    activeBg: themeVars.color.primary.light.num6,
  },
  tooltip: { text: "#fbfdff", bg: "#000017f0" },
  nav: {
    bg: "#f6f7fa",
    hoverBg: themeVars.color.secondary.light.num1,
    text: themeVars.color.text.self,
  },
  secondaryNavBg: "#f9fafb",
  label: {
    text: themeVars.color.text.self,
    bg: "#949da64b",
    hoverBg: "#949da6a0",
    activeBg: "#949da6ff",
  },
  accent: themeVars.color.primary.light.num1,
  smallAccent: themeVars.color.primary.light.num6,
  highlight: { fg: "#eed200", bg: "#f5efc5" },
  overlayBackdrop: "#080808c0",
  danger: themeVars.color.red.self,
  transparency: { grid: { light: "#fafafa", dark: "#e2e2e2" } },
  workflowEdgeHover: "#b1b7bd",
};

export const giteaLightColor: GiteaColor = {
  isDarkTheme: false,
  primary,
  secondary,
  named,
  message,
  ansi,
  console,
  diff,
  other,
};

export const giteaLightSyntax: Syntax = {
  keyword: "#a73a00",
  bool: "#076872",
  control: "#7d5700",
  name: "#785900",
  type: "#ae2368",
  number: "#105ead",
  operator: "#a73a00",
  regexp: "#773dc5",
  string: "#456800",
  comment: "#506070",
  invalid: "#c00000",
  link: themeVars.color.primary.self,
  tag: "#a73a00",
  attribute: "#6f41c5",
  property: "#2060a0",
  variable: "#944a00",
  stringSpecial: "#7d5700",
  escape: "#785900",
  entity: "#6f41c5",
  preproc: "#2d6a4b",
  preprocFile: "#105ead",
  decorator: "#2d6a4b",
  namespace: "#555555",
  namePseudo: "#6f41c5",
  commentSpecial: "#773dc5",
  text: "inherit",
  textAlt: "#47525b",
  punctuation: "inherit",
  whitespace: "#bbbbbb",
  diffFg: "#000000",
  deletedBg: "#ffdddd",
  insertedBg: "#ddffdd",
  emph: "#8b5000",
  strong: "inherit",
  heading: "#7d5700",
  subheading: "#456800",
  output: "#506070",
  prompt: "#944a00",
  traceback: "#c00000",
  matchingBracketBg: "#00b5ad38",
  nonmatchingBracketBg: "#db282838",
};

export const giteaLightTheme = defineTheme({
  colorType: "gitea",
  themeColor: giteaLightColor,
  syntaxColor: giteaLightSyntax,
});
