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

import { type CatppuccinFlavor } from "@catppuccin/palette";
import { rgba } from "polished";
import { scaleColorLight } from "src/functions";
import { themeVars, type Ansi, type Console, type Diff, type Other } from "src/types";
import type { ThemeColor } from "./theme";

// 颜色映射标准: https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md
// 颜色映射参考: https://github.com/catppuccin/gitea/blob/main/src/_theme.scss
export function catppuccin2ThemeColor(catppuccinFlavor: CatppuccinFlavor): ThemeColor {
  const brightDir = catppuccinFlavor.dark ? -1 : 1;
  const accentColor = catppuccinFlavor.colors.mauve.hex;
  const lv1Color = catppuccinFlavor.dark ? catppuccinFlavor.colors.crust.hex : catppuccinFlavor.colors.base.hex;
  const lv2Color = catppuccinFlavor.colors.mantle.hex;
  // const lv3Color = catppuccinFlavor.dark ? catppuccinFlavor.colors.base.hex : catppuccinFlavor.colors.crust.hex;

  const ansi: Ansi = {
    black: catppuccinFlavor.ansiColors.black.normal.hex,
    red: catppuccinFlavor.ansiColors.red.normal.hex,
    green: catppuccinFlavor.ansiColors.green.normal.hex,
    yellow: catppuccinFlavor.ansiColors.yellow.normal.hex,
    blue: catppuccinFlavor.ansiColors.blue.normal.hex,
    magenta: catppuccinFlavor.ansiColors.magenta.normal.hex,
    cyan: catppuccinFlavor.ansiColors.cyan.normal.hex,
    white: catppuccinFlavor.ansiColors.white.normal.hex,
    bright: {
      black: catppuccinFlavor.ansiColors.black.bright.hex,
      red: catppuccinFlavor.ansiColors.red.bright.hex,
      green: catppuccinFlavor.ansiColors.green.bright.hex,
      yellow: catppuccinFlavor.ansiColors.yellow.bright.hex,
      blue: catppuccinFlavor.ansiColors.blue.bright.hex,
      magenta: catppuccinFlavor.ansiColors.magenta.bright.hex,
      cyan: catppuccinFlavor.ansiColors.cyan.bright.hex,
      white: catppuccinFlavor.ansiColors.white.bright.hex,
    },
  };
  const console: Console = {
    fg: {
      self: catppuccinFlavor.colors.text.hex,
      subtle: catppuccinFlavor.colors.subtext0.hex,
    },
    bg: catppuccinFlavor.colors.base.hex,
    border: catppuccinFlavor.colors.overlay0.hex,
    activeBg: rgba(catppuccinFlavor.colors.text.hex, 0.1),
    hoverBg: rgba(catppuccinFlavor.colors.overlay0.hex, 0.2),
    menu: {
      bg: themeVars.color.menu,
      border: themeVars.color.secondary.self,
    },
    link: catppuccinFlavor.colors.blue.hex,
  };
  const diff: Diff = {
    added: {
      fg: catppuccinFlavor.colors.green.hex,
      linenum: { bg: rgba(catppuccinFlavor.colors.green.hex, 0.1) },
      row: { bg: rgba(catppuccinFlavor.colors.green.hex, 0.2), border: rgba(catppuccinFlavor.colors.green.hex, 0.2) },
      word: { bg: rgba(catppuccinFlavor.colors.green.hex, 0.1) },
    },
    removed: {
      fg: catppuccinFlavor.colors.red.hex,
      linenum: { bg: rgba(catppuccinFlavor.colors.red.hex, 0.1) },
      row: { bg: rgba(catppuccinFlavor.colors.red.hex, 0.2), border: rgba(catppuccinFlavor.colors.red.hex, 0.2) },
      word: { bg: rgba(catppuccinFlavor.colors.red.hex, 0.1) },
    },
    moved: {
      row: { bg: rgba(catppuccinFlavor.colors.yellow.hex, 0.2), border: rgba(catppuccinFlavor.colors.yellow.hex, 0.2) },
    },
    inactive: catppuccinFlavor.colors.overlay2.hex,
  };
  const other: Other = {
    logo: themeVars.color.primary.self,
    body: lv1Color,
    box: {
      header: lv2Color,
      body: { self: themeVars.color.body, highlight: rgba(accentColor, 0.2) },
    },
    text: {
      self: catppuccinFlavor.colors.text.hex,
      light: {
        self: catppuccinFlavor.colors.subtext1.hex,
        num1: catppuccinFlavor.colors.subtext1.hex,
        num2: catppuccinFlavor.colors.subtext1.hex,
        num3: catppuccinFlavor.colors.subtext1.hex,
      },
      dark: catppuccinFlavor.colors.subtext0.hex,
    },
    footer: lv2Color,
    timeline: catppuccinFlavor.colors.surface0.hex,
    input: {
      text: themeVars.color.text.self,
      background: catppuccinFlavor.colors.surface0.hex,
      toggleBackground: catppuccinFlavor.colors.surface0.hex,
      border: catppuccinFlavor.colors.surface1.hex,
    },
    light: { self: themeVars.color.body, border: catppuccinFlavor.colors.surface2.hex },
    hover: { self: rgba(catppuccinFlavor.colors.overlay0.hex, 0.2), opaque: themeVars.color.box.header },
    active: rgba(catppuccinFlavor.colors.text.hex, 0.1),
    menu: catppuccinFlavor.colors.surface0.hex,
    card: catppuccinFlavor.colors.surface0.hex,
    markup: {
      tableRow: rgba(catppuccinFlavor.colors.text.hex, 0.02),
      code: { block: rgba(catppuccinFlavor.colors.text.hex, 0.05), inline: catppuccinFlavor.colors.surface0.hex },
    },
    button: catppuccinFlavor.colors.surface0.hex,
    codeBg: "unset",
    shadow: { self: rgba(lv1Color, 0.1), opaque: themeVars.color.shadow.self },
    secondaryBg: "unset",
    expandButton: catppuccinFlavor.colors.surface2.hex,
    placeholderText: themeVars.color.text.light.num3,
    editor: {
      lineHighlight: rgba(catppuccinFlavor.colors.text.hex, 0.1),
      selection: themeVars.color.editor.lineHighlight,
    },
    projectColumnBg: themeVars.color.secondary.light.num2,
    caret: themeVars.color.text.self,
    reaction: { bg: "initial", hoverBg: themeVars.color.primary.self, activeBg: themeVars.color.primary.alpha.num40 },
    tooltip: { text: themeVars.color.text.self, bg: catppuccinFlavor.colors.overlay0.hex },
    nav: {
      bg: lv2Color,
      hoverBg: themeVars.color.hover.self,
      text: themeVars.color.text.self,
    },
    secondaryNavBg: themeVars.color.body,
    label: {
      text: catppuccinFlavor.colors.crust.hex,
      bg: accentColor,
      hoverBg: scaleColorLight(accentColor, 6 * brightDir),
      activeBg: scaleColorLight(accentColor, 3 * brightDir),
    },
    accent: themeVars.color.primary.light.num1,
    smallAccent: themeVars.color.primary.light.num5,
    highlight: { fg: catppuccinFlavor.colors.text.hex, bg: rgba(catppuccinFlavor.colors.teal.hex, 0.2) },
    overlayBackdrop: catppuccinFlavor.colors.overlay2.hex,
    danger: themeVars.color.red.self,
    transparency: { grid: { light: "#ffffff", dark: "#e5e5e5" } },
    workflowEdgeHover: accentColor,
  };
  return {
    isDarkTheme: catppuccinFlavor.dark,
    primary: accentColor,
    primaryContrast: lv1Color,
    secondary: catppuccinFlavor.colors.overlay0.hex,
    base: {
      red: catppuccinFlavor.colors.red.hex,
      orange: catppuccinFlavor.colors.peach.hex,
      yellow: catppuccinFlavor.colors.yellow.hex,
      olive: catppuccinFlavor.colors.green.hex,
      green: catppuccinFlavor.colors.green.hex,
      teal: catppuccinFlavor.colors.teal.hex,
      cyan: catppuccinFlavor.colors.sky.hex,
      blue: catppuccinFlavor.colors.blue.hex,
      violet: catppuccinFlavor.colors.lavender.hex,
      purple: catppuccinFlavor.colors.mauve.hex,
      pink: catppuccinFlavor.colors.pink.hex,
      brown: catppuccinFlavor.colors.flamingo.hex,
      black: catppuccinFlavor.dark ? catppuccinFlavor.colors.crust.hex : catppuccinFlavor.colors.text.hex,
      grey: catppuccinFlavor.colors.overlay2.hex,
      gold: catppuccinFlavor.colors.rosewater.hex,
      white: catppuccinFlavor.dark ? catppuccinFlavor.colors.text.hex : catppuccinFlavor.colors.crust.hex,
    },
    console,
    diff,
    other,
    override: {
      ansi,
    },
  };
}
