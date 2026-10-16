// SPDX-License-Identifier: Apache-2.0 AND MIT

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

/*!
 * MIT License
 *
 * Copyright (c) 2024 lsd-techno
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * @copyright lsd-techno
 * @source https://github.com/lsd-techno/gitea-theme
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
  Series16,
  Syntax,
} from "@lutinglt/gitea-github-theme/core";
import { defineTheme, themeVars } from "@lutinglt/gitea-github-theme/core";

const primary: Primary = {
  self: "#87ab63",
  contrast: "#ffffff",
  dark: {
    num1: "#93b373",
    num2: "#9fbc82",
    num3: "#abc492",
    num4: "#b7cda1",
    num5: "#cfddc1",
    num6: "#e7eee0",
    num7: "#f8faf6",
  },
  light: {
    num1: "#7a9e55",
    num2: "#6c8c4c",
    num3: "#5f7b42",
    num4: "#516939",
    num5: "#364626",
    num6: "#1b2313",
    num7: "#080b06",
  },
  alpha: {
    num10: "#87ab6319",
    num20: "#87ab6333",
    num30: "#87ab634b",
    num40: "#87ab6366",
    num50: "#87ab6380",
    num60: "#87ab6399",
    num70: "#87ab63b3",
    num80: "#87ab63cc",
    num90: "#87ab63e1",
  },
  hover: themeVars.color.primary.light.num1,
  active: themeVars.color.primary.light.num2,
};
const secondary: Secondary = {
  self: "#525767",
  dark: {
    num1: "#5c6374",
    num2: "#666e81",
    num3: "#7c8497",
    num4: "#8990a1",
    num5: "#959cab",
    num6: "#a2a8b5",
    num7: "#afb4c0",
    num8: "#bcc0ca",
    num9: "#c9cbd4",
    num10: "#d6d7de",
    num11: "#e2e3e8",
    num12: "#eeeff2",
    num13: "#fbfbfc",
  },
  light: {
    num1: "#454a57",
    num2: "#383c47",
    num3: "#2c2f37",
    num4: "#1f2226",
  },
  alpha: {
    num10: "#52576719",
    num20: "#52576733",
    num30: "#5257674b",
    num40: "#52576766",
    num50: "#52576780",
    num60: "#52576799",
    num70: "#525767b3",
    num80: "#525767cc",
    num90: "#525767e1",
  },
  button: themeVars.color.secondary.dark.num4,
  hover: themeVars.color.secondary.dark.num3,
  active: themeVars.color.secondary.dark.num2,
};
const console: Console = {
  fg: {
    self: "#eeeff2",
    subtle: "#959cab",
  },
  bg: "#262936",
  activeBg: "#454a57",
  hoverBg: "#ffffff16",
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
  black: { self: "#2e323e", light: "#3f4555", dark: { num1: "#292d38", num2: "#252832" } },
  grey: { self: "#505665", light: "#a1a6b7" },
  gold: "#b1983b",
  white: "#ffffff",
};
const ansi: Ansi = {
  black: themeVars.color.black.self,
  red: themeVars.color.red.self,
  green: themeVars.color.green.self,
  yellow: themeVars.color.yellow.self,
  blue: themeVars.color.blue.self,
  magenta: themeVars.color.pink.self,
  cyan: themeVars.color.teal.self,
  white: themeVars.color.console.fg.subtle,
  bright: {
    black: themeVars.color.black.light,
    red: themeVars.color.red.light,
    green: themeVars.color.green.light,
    yellow: themeVars.color.yellow.light,
    blue: themeVars.color.blue.light,
    magenta: themeVars.color.pink.light,
    cyan: themeVars.color.teal.light,
    white: themeVars.color.console.fg.self,
  },
};
const diff: Diff = {
  added: {
    fg: themeVars.color.green.self,
    linenum: { bg: "#3c653c" },
    row: { bg: "#283e2d", border: "#314a37" },
    word: { bg: "#3c653c" },
  },
  moved: {
    row: { bg: "#818044", border: "#bcca6f" },
  },
  removed: {
    fg: themeVars.color.red.self,
    linenum: { bg: "#6f3333" },
    row: { bg: "#3c2626", border: "#634343" },
    word: { bg: "#6f3333" },
  },
  inactive: "#353846",
};
const message: Message = {
  error: {
    bg: { self: "#552222", active: "#774444", hover: "#663333" },
    border: "#a04141",
    text: "#f9cbcb",
  },
  success: {
    bg: "#284034",
    border: "#458a57",
    text: "#6cc664",
  },
  warning: {
    bg: "#3a3a30",
    border: "#bb9d00",
    text: "#fbbd08",
  },
  info: {
    bg: "#26354c",
    border: "#306090",
    text: "#38a8e8",
  },
  // 源主题 CSS 中未提供优先级提示色, 这里按主题的紫色系推导
  priority: {
    bg: "#281e38",
    border: "#522a92",
    text: "#b89de4",
  },
};
const other: Other = {
  logo: "#609926",
  body: "#2e323e",
  footer: "#232834",
  timeline: "#4c525e",
  box: {
    header: "#303340",
    body: { self: "#222733", highlight: "#262b36" },
  },
  text: {
    self: "#cbd0da",
    light: { self: "#bbbfca", num1: "#aaafb9", num2: "#9a9ea9", num3: "#8a8e99" },
    dark: "#dbe0ea",
  },
  input: {
    text: "#dfe3ec",
    background: "#1e252e",
    toggleBackground: "#454a57",
    border: themeVars.color.secondary.self,
  },
  light: { self: "#00000028", border: "#ffffff28" },
  hover: { self: "#ffffff19", opaque: "#434651" },
  active: "#ffffff24",
  menu: "#1e252e",
  card: "#1e252e",
  markup: {
    tableRow: "#ffffff06",
    code: { block: "#ffffff16", inline: "#2e4433" },
  },
  button: "#1e252e",
  codeBg: "#222733",
  shadow: { self: "#00000058", opaque: "#000000" },
  secondaryBg: "#2a2e3a",
  expandButton: "#3c404d",
  placeholderText: "#8a8e99",
  editor: {
    lineHighlight: themeVars.color.primary.light.num5,
    selection: themeVars.color.primary.alpha.num50,
  },
  projectColumnBg: themeVars.color.secondary.light.num2,
  caret: themeVars.color.text.self,
  reaction: {
    bg: "#ffffff12",
    hoverBg: themeVars.color.primary.light.num4,
    activeBg: themeVars.color.primary.light.num5,
  },
  tooltip: { text: "#ffffff", bg: "#000000f0" },
  nav: {
    bg: "#232834",
    hoverBg: "#383c47",
    text: themeVars.color.text.self,
  },
  secondaryNavBg: "#232834",
  label: {
    text: "#dfe3ec",
    bg: "#7c84974b",
    hoverBg: "#7c8497a0",
    activeBg: "#7c8497ff",
  },
  accent: themeVars.color.primary.light.num1,
  smallAccent: themeVars.color.primary.light.num5,
  highlight: { fg: "#7a9e55", bg: "#364626" },
  overlayBackdrop: "#080808c0",
  danger: themeVars.color.red.self,
  transparency: { grid: { light: "#3a3e4a", dark: "#2a2e3a" } },
  // workflowEdgeHover: "#5c6374",
  // 此颜色在 Gitea 中使用在 1.27 版本中出现偏差, CSS 高亮使用 primary 覆盖, 这里还原视觉效果与主题文件有偏差
  workflowEdgeHover: primary.self,
};

const series16: Series16 = {
  num0: "#7db233",
  num1: "#499a37",
  num2: "#ce4751",
  num3: "#8f9121",
  num4: "#ac32a6",
  num5: "#7445e9",
  num6: "#c67d28",
  num7: "#4db392",
  num8: "#aa4d30",
  num9: "#2a6f84",
  num10: "#c45327",
  num11: "#3d965c",
  num12: "#792a93",
  num13: "#439d73",
  num14: "#103aad",
  num15: "#982e85",
};

export const arcGreenColor: GiteaColor = {
  isDarkTheme: true,
  primary,
  secondary,
  named,
  message,
  ansi,
  console,
  diff,
  other,
  series16,
};

export const arcGreenSyntax: Syntax = {
  keyword: "#ff7540",
  bool: "#649bc4",
  control: "#ffaa10",
  name: "#fabd2f",
  type: "#ff7b72",
  number: "#649bc4",
  operator: "#ff7540",
  regexp: "#9075cd",
  string: "#b8bb26",
  comment: "#777e94",
  invalid: "#ff4433",
  link: themeVars.color.primary.self,
  tag: "#ff7540",
  attribute: "#fabd2f",
  property: "#a0cc75",
  variable: "#ebdbb2",
  stringSpecial: "#ffaa10",
  escape: "#ff8540",
  entity: "#fabd2f",
  preproc: "#8ec07c",
  preprocFile: "#649bc4",
  decorator: "#8ec07c",
  namespace: "#c9d1d9",
  namePseudo: "#fabd2f",
  commentSpecial: "#9075cd",
  text: "#c9d1d9",
  textAlt: "#b6bac5",
  punctuation: "#d2d4db",
  whitespace: "#7f8699",
  diffFg: "#ffffff",
  deletedBg: "#5f3737",
  insertedBg: "#3a523a",
  emph: "#ddee30",
  strong: "#ebdbb2",
  heading: "#ffaa10",
  subheading: "#b8bb26",
  output: "#777e94",
  prompt: "#ebdbb2",
  traceback: "#ff7540",
  matchingBracketBg: "#00918a48",
  nonmatchingBracketBg: "#cc484848",
};

export const arcGreenTheme = defineTheme({
  colorType: "gitea",
  themeColor: arcGreenColor,
  syntaxColor: arcGreenSyntax,
});
