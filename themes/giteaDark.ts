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

import type { Ansi, Console, Diff, GiteaColor, Message, Named, Other, Primary, Secondary, Syntax } from "src";
import { defineTheme, themeVars } from "src";

const primary: Primary = {
  self: "#4183c4",
  contrast: "#ffffff",
  dark: {
    num1: "#548fca",
    num2: "#679cd0",
    num3: "#7aa8d6",
    num4: "#8db5dc",
    num5: "#b3cde7",
    num6: "#d9e6f3",
    num7: "#f4f8fb",
  },
  light: {
    num1: "#3876b3",
    num2: "#31699f",
    num3: "#2b5c8b",
    num4: "#254f77",
    num5: "#193450",
    num6: "#0c1a28",
    num7: "#04080c",
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
  hover: themeVars.color.primary.light.num1,
  active: themeVars.color.primary.light.num2,
};
const secondary: Secondary = {
  self: "#3f4248",
  dark: {
    num1: "#46494f",
    num2: "#4f5259",
    num3: "#5e626a",
    num4: "#6f747d",
    num5: "#7d828c",
    num6: "#8b8f98",
    num7: "#999da4",
    num8: "#a8abb1",
    num9: "#aeb1b8",
    num10: "#bbbec3",
    num11: "#c8cacf",
    num12: "#d2d4d7",
    num13: "#d5d6d9",
  },
  light: {
    num1: "#35373c",
    num2: "#2c2e32",
    num3: "#1f2124",
    num4: "#191a1c",
  },
  alpha: {
    num10: "#3f424819",
    num20: "#3f424833",
    num30: "#3f42484b",
    num40: "#3f424866",
    num50: "#3f424880",
    num60: "#3f424899",
    num70: "#3f4248b3",
    num80: "#3f4248cc",
    num90: "#3f4248e1",
  },
  button: themeVars.color.secondary.dark.num4,
  hover: themeVars.color.secondary.dark.num3,
  active: themeVars.color.secondary.dark.num2,
};
const console: Console = {
  fg: {
    self: "#f8f8f8",
    subtle: "#c1c3c8",
  },
  bg: "#191a1c",
  border: "#313338",
  activeBg: "#313338",
  hoverBg: "#2a2c30",
  menu: {
    bg: "#292b2e",
    border: "#46494f",
  },
  link: "#969aa1",
};
const named: Named = {
  red: {
    self: "#cc4848",
    light: "#d15a5a",
    dark: { num1: "#c23636", num2: "#ad3030" },
    badge: { self: "#db2828", bg: "#db28281a", hover: { bg: "#db28284d" } },
  },
  orange: {
    self: "#cc580c",
    light: "#f6a066",
    dark: { num1: "#f38236", num2: "#f16e17" },
    badge: { self: "#f2711c", bg: "#f2711c1a", hover: { bg: "#f2711c4d" } },
  },
  yellow: {
    self: "#cc9903",
    light: "#eaaf03",
    dark: { num1: "#b88a03", num2: "#a37a02" },
    badge: { self: "#fbbd08", bg: "#fbbd081a", hover: { bg: "#fbbd084d" } },
  },
  olive: { self: "#91a313", light: "#abc016", dark: { num1: "#839311", num2: "#74820f" } },
  green: {
    self: "#87ab63",
    light: "#93b373",
    dark: { num1: "#7a9e55", num2: "#6c8c4c" },
    badge: { self: "#21ba45", bg: "#21ba451a", hover: { bg: "#21ba454d" } },
  },
  teal: { self: "#00918a", light: "#00b6ad", dark: { num1: "#00837c", num2: "#00746e" } },
  blue: { self: "#3a8ac6", light: "#4e96cc", dark: { num1: "#347cb3", num2: "#2e6e9f" } },
  violet: { self: "#906ae1", light: "#9b79e4", dark: { num1: "#7b4edb", num2: "#6733d6" } },
  purple: { self: "#b259d0", light: "#ba6ad5", dark: { num1: "#a742c9", num2: "#9834b9" } },
  pink: { self: "#d22e8b", light: "#d74397", dark: { num1: "#be297d", num2: "#a9246f" } },
  brown: { self: "#a47252", light: "#b08061", dark: { num1: "#94674a", num2: "#835b42" } },
  black: { self: "#202225", light: "#45484e", dark: { num1: "#2e3033", num2: "#292b2e" } },
  grey: { self: "#3d3f44", light: "#898d96" },
  gold: "#b1983b",
  white: "#ffffff",
};
const ansi: Ansi = {
  black: "#202225",
  red: "#cc4848",
  green: "#87ab63",
  yellow: "#cc9903",
  blue: "#3a8ac6",
  magenta: "#d22e8b",
  cyan: "#00918a",
  white: themeVars.color.console.fg.subtle,
  bright: {
    black: "#45484e",
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
    fg: "#87ab63",
    linenum: { bg: "#274227" },
    row: { bg: "#203224", border: "#314a37" },
    word: { bg: "#3c653c" },
  },
  moved: {
    row: { bg: "#818044", border: "#bcca6f" },
  },
  removed: {
    fg: "#cc4848",
    linenum: { bg: "#482121" },
    row: { bg: "#301e1e", border: "#634343" },
    word: { bg: "#6f3333" },
  },
  inactive: "#25272a",
};
const message: Message = {
  error: {
    bg: { self: "#322226", active: "#49262a", hover: "#3c2427" },
    border: "#763232",
    text: themeVars.color.text.self,
  },
  success: {
    bg: "#1c3329",
    border: "#225633",
    text: themeVars.color.text.self,
  },
  warning: {
    bg: "#342e1f",
    border: "#5f481a",
    text: themeVars.color.text.self,
  },
  info: {
    bg: "#1b283a",
    border: "#254a7e",
    text: themeVars.color.text.self,
  },
};
const other: Other = {
  logo: "#609926",
  body: "#1e1f20",
  footer: themeVars.color.nav.bg,
  timeline: "#383b40",
  box: {
    header: "#1b1c1e",
    body: { self: "#161718", highlight: "#202124" },
  },
  text: {
    self: "#d2d4d8",
    light: { self: "#c0c2c7", num1: "#aaadb4", num2: "#969aa1", num3: "#80858f" },
    dark: "#f8f8f8",
  },
  input: {
    text: themeVars.color.text.dark,
    background: "#191a1c",
    toggleBackground: "#323438",
    border: themeVars.color.secondary.dark.num1,
  },
  light: { self: "#0b0b0c28", border: "#f3f3f428" },
  hover: { self: "#f3f3f419", opaque: "#232528" },
  active: "#f3f3f424",
  menu: "#191a1c",
  card: "#191a1c",
  markup: {
    tableRow: "#f3f3f40f",
    code: { block: "#f3f3f412", inline: "#f3f3f428" },
  },
  button: "#191a1c",
  codeBg: "#161718",
  shadow: { self: "#0b0b0c58", opaque: "#0b0b0c" },
  secondaryBg: "#2e3033",
  expandButton: "#333539",
  placeholderText: themeVars.color.text.light.num3,
  editor: {
    lineHighlight: themeVars.color.secondary.alpha.num40,
    selection: themeVars.color.primary.alpha.num50,
  },
  projectColumnBg: themeVars.color.secondary.light.num2,
  caret: themeVars.color.text.self,
  reaction: {
    bg: "#f3f3f412",
    hoverBg: themeVars.color.primary.light.num4,
    activeBg: themeVars.color.primary.light.num5,
  },
  tooltip: { text: "#fafafa", bg: "#0b0b0cf0" },
  nav: {
    bg: "#18191b",
    hoverBg: themeVars.color.secondary.light.num1,
    text: themeVars.color.text.self,
  },
  secondaryNavBg: "#1a1b1e",
  label: {
    text: themeVars.color.text.self,
    bg: "#7a7f8a4b",
    hoverBg: "#7a7f8aa0",
    activeBg: "#7a7f8aff",
  },
  accent: themeVars.color.primary.light.num1,
  smallAccent: themeVars.color.primary.light.num5,
  highlight: { fg: "#87651e", bg: "#443a27" },
  overlayBackdrop: "#080808c0",
  danger: themeVars.color.red.self,
  transparency: { grid: { light: "#2a2a2a", dark: "#1a1a1a" } },
  workflowEdgeHover: "#666a73",
};

export const giteaDarkColor: GiteaColor = {
  isDarkTheme: true,
  primary,
  secondary,
  named,
  message,
  ansi,
  console,
  diff,
  other,
};

export const giteaDarkSyntax: Syntax = {
  keyword: "#ff8854",
  bool: "#25bbc9",
  control: "#dd9e17",
  name: "#c7a618",
  type: "#eb8cb3",
  number: "#63b2dd",
  operator: "#ff8854",
  regexp: "#b89de4",
  string: "#95b62a",
  comment: "#8898b0",
  invalid: "#ff8686",
  link: themeVars.color.primary.self,
  tag: "#ff8854",
  attribute: "#c792ff",
  property: "#55afff",
  variable: "#e29b33",
  stringSpecial: "#dd9e17",
  escape: "#c7a618",
  entity: "#c792ff",
  preproc: "#4cbe7a",
  preprocFile: "#63b2dd",
  decorator: "#4cbe7a",
  namespace: "#c9d1d9",
  namePseudo: "#c792ff",
  commentSpecial: "#b89de4",
  text: "#c9d1d9",
  textAlt: "#b9bcc7",
  punctuation: "#d2d4db",
  whitespace: "#7f8699",
  diffFg: "#ffffff",
  deletedBg: "#5f3737",
  insertedBg: "#3a523a",
  emph: "#d1a242",
  strong: "#e29b33",
  heading: "#dd9e17",
  subheading: "#95b62a",
  output: "#8898b0",
  prompt: "#e29b33",
  traceback: "#ff8686",
  matchingBracketBg: "#00918a48",
  nonmatchingBracketBg: "#cc484848",
};

export const giteaDarkTheme = defineTheme({
  colorType: "gitea",
  themeColor: giteaDarkColor,
  syntaxColor: giteaDarkSyntax,
});
