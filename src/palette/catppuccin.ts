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

import type { CatppuccinFlavor } from "@catppuccin/palette";
import { darken, lighten, mix, rgba, saturate } from "polished";
import { scaleColorLight } from "src/functions";
import type { Ansi, Console, Diff, GitHub, Other } from "src/types";
import { themeVars } from "src/types";
import type { ThemeColor } from "./theme";

// 颜色映射标准: https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md
// 颜色映射参考: https://github.com/catppuccin/gitea/blob/main/src/_theme.scss
export function catppuccin2ThemeColor(flavor: CatppuccinFlavor): ThemeColor {
  const brightDir = flavor.dark ? -1 : 1;
  const accentColor = flavor.colors.mauve.hex;
  const lv1Color = flavor.dark ? flavor.colors.crust.hex : flavor.colors.base.hex;
  const lv2Color = flavor.colors.mantle.hex;
  // const lv3Color = flavor.dark ? flavor.colors.base.hex : flavor.colors.crust.hex;

  const ansi: Ansi = {
    black: flavor.ansiColors.black.normal.hex,
    red: flavor.ansiColors.red.normal.hex,
    green: flavor.ansiColors.green.normal.hex,
    yellow: flavor.ansiColors.yellow.normal.hex,
    blue: flavor.ansiColors.blue.normal.hex,
    magenta: flavor.ansiColors.magenta.normal.hex,
    cyan: flavor.ansiColors.cyan.normal.hex,
    white: flavor.ansiColors.white.normal.hex,
    bright: {
      black: flavor.ansiColors.black.bright.hex,
      red: flavor.ansiColors.red.bright.hex,
      green: flavor.ansiColors.green.bright.hex,
      yellow: flavor.ansiColors.yellow.bright.hex,
      blue: flavor.ansiColors.blue.bright.hex,
      magenta: flavor.ansiColors.magenta.bright.hex,
      cyan: flavor.ansiColors.cyan.bright.hex,
      white: flavor.ansiColors.white.bright.hex,
    },
  };
  const console: Console = {
    fg: {
      self: flavor.colors.text.hex,
      subtle: flavor.colors.subtext0.hex,
    },
    bg: flavor.colors.base.hex,
    border: flavor.colors.overlay0.hex,
    activeBg: flavor.colors.overlay0.hex,
    hoverBg: rgba(flavor.colors.overlay0.hex, 0.2),
    menu: {
      bg: themeVars.color.menu,
      border: themeVars.color.secondary.self,
    },
    link: flavor.colors.blue.hex,
  };
  const diff: Diff = {
    added: {
      fg: flavor.colors.green.hex,
      linenum: { bg: rgba(flavor.colors.green.hex, 0.1) },
      row: { bg: rgba(flavor.colors.green.hex, 0.2), border: rgba(flavor.colors.green.hex, 0.2) },
      word: { bg: rgba(flavor.colors.green.hex, 0.1) },
    },
    removed: {
      fg: flavor.colors.red.hex,
      linenum: { bg: rgba(flavor.colors.red.hex, 0.1) },
      row: { bg: rgba(flavor.colors.red.hex, 0.2), border: rgba(flavor.colors.red.hex, 0.2) },
      word: { bg: rgba(flavor.colors.red.hex, 0.1) },
    },
    moved: {
      row: { bg: rgba(flavor.colors.yellow.hex, 0.2), border: rgba(flavor.colors.yellow.hex, 0.2) },
    },
    inactive: flavor.colors.overlay2.hex,
  };
  const other: Other = {
    logo: themeVars.color.primary.self,
    body: lv1Color,
    box: {
      header: lv2Color,
      body: { self: themeVars.color.body, highlight: rgba(accentColor, 0.2) },
    },
    text: {
      self: flavor.colors.text.hex,
      light: {
        self: flavor.colors.subtext1.hex,
        num1: flavor.colors.subtext1.hex,
        num2: flavor.colors.subtext1.hex,
        num3: flavor.colors.subtext1.hex,
      },
      dark: flavor.colors.subtext0.hex,
    },
    footer: lv2Color,
    timeline: flavor.colors.surface0.hex,
    input: {
      text: themeVars.color.text.self,
      background: lv2Color,
      toggleBackground: lv2Color,
      border: flavor.colors.surface1.hex,
    },
    light: { self: themeVars.color.body, border: flavor.colors.surface2.hex },
    hover: { self: rgba(flavor.colors.overlay1.hex, 0.3), opaque: themeVars.color.box.header },
    active: rgba(flavor.colors.text.hex, 0.1),
    menu: flavor.colors.base.hex,
    card: flavor.colors.base.hex,
    markup: {
      tableRow: rgba(flavor.colors.text.hex, 0.02),
      code: { block: rgba(flavor.colors.text.hex, 0.05), inline: flavor.colors.surface0.hex },
    },
    button: mix(0.5, flavor.colors.base.hex, flavor.colors.surface0.hex),
    codeBg: "unset",
    shadow: { self: rgba(lv1Color, 0.1), opaque: themeVars.color.shadow.self },
    secondaryBg: "unset",
    expandButton: rgba(accentColor, 0.5),
    placeholderText: themeVars.color.text.light.num3,
    editor: {
      lineHighlight: rgba(flavor.colors.text.hex, 0.1),
      selection: themeVars.color.editor.lineHighlight,
    },
    projectColumnBg: themeVars.color.secondary.light.num2,
    caret: themeVars.color.text.self,
    reaction: { bg: "initial", hoverBg: themeVars.color.primary.self, activeBg: themeVars.color.primary.alpha.num40 },
    tooltip: { text: themeVars.color.text.self, bg: flavor.colors.overlay0.hex },
    nav: {
      bg: lv2Color,
      hoverBg: themeVars.color.hover.self,
      text: themeVars.color.text.self,
    },
    secondaryNavBg: themeVars.color.body,
    label: {
      text: flavor.colors.crust.hex,
      bg: accentColor,
      hoverBg: scaleColorLight(accentColor, 6 * brightDir),
      activeBg: scaleColorLight(accentColor, 3 * brightDir),
    },
    accent: accentColor,
    smallAccent: themeVars.color.primary.light.num5,
    highlight: { fg: flavor.colors.text.hex, bg: rgba(flavor.colors.teal.hex, 0.2) },
    overlayBackdrop: rgba(flavor.colors.overlay2.hex, 0.4),
    danger: themeVars.color.red.self,
    transparency: { grid: { light: "#ffffff", dark: "#e5e5e5" } },
    workflowEdgeHover: accentColor,
  };
  // 颜色映射参考: https://github.com/catppuccin/userstyles/blob/main/styles/github/catppuccin.user.less
  const github: GitHub = {
    avatar: { bgColor: rgba(flavor.colors.text.hex, 0.26), borderColor: flavor.colors.surface0.hex },
    fgColor: {
      accent: accentColor,
      success: flavor.colors.green.hex,
      done: flavor.colors.mauve.hex,
      onEmphasis: flavor.colors.base.hex,
    },
    bgColor: {
      accent: {
        emphasis: accentColor,
        muted: rgba(accentColor, 0.2),
      },
      success: { emphasis: flavor.colors.green.hex },
      attention: {
        emphasis: flavor.colors.yellow.hex,
      },
      danger: { emphasis: flavor.colors.red.hex },
      done: { emphasis: flavor.colors.mauve.hex },
      neutral: { emphasis: flavor.colors.subtext0.hex },
    },
    borderColor: {
      emphasis: "#484f58",
      accent: { emphasis: accentColor },
      attention: { emphasis: flavor.colors.flamingo.hex },
      success: { emphasis: flavor.colors.green.hex },
      done: { emphasis: flavor.colors.mauve.hex },
    },
    button: {
      default: { bgColor: { active: flavor.colors.surface2.hex } },
      primary: {
        fgColor: { accent: flavor.colors.green.hex, rest: flavor.colors.base.hex },
        bgColor: {
          rest: flavor.colors.green.hex,
          hover: lighten(0.05, flavor.colors.green.hex),
          active: saturate(0.05, flavor.colors.green.hex),
        },
        borderColor: { rest: flavor.colors.green.hex, hover: flavor.colors.green.hex },
      },
      danger: {
        fgColor: { rest: flavor.colors.red.hex, hover: flavor.colors.base.hex },
        bgColor: {
          rest: flavor.colors.surface0.hex,
          hover: flavor.colors.red.hex,
          active: darken(0.05, flavor.colors.red.hex),
        },
        borderColor: { hover: flavor.colors.red.hex },
      },
      star: { iconColor: flavor.colors.yellow.hex },
      invisible: { iconColor: { rest: flavor.colors.overlay2.hex } },
    },
    control: {
      bgColor: { rest: themeVars.color.timeline },
      transparent: {
        bgColor: { hover: rgba(flavor.colors.surface2.hex, 0.2), active: rgba(flavor.colors.overlay0.hex, 0.5) },
      },
      danger: { bgColor: { active: rgba(flavor.colors.red.hex, 0.3) } },
    },
    // 对调颜色映射, 倾向于个人标准(激活项颜色和菜单色一致)
    controlTrack: { bgColor: { rest: flavor.colors.surface0.hex } },
    controlKnob: { bgColor: { rest: flavor.colors.base.hex } },
    shadow: {
      floating: {
        small: `0px 0px 0px 1px ${flavor.colors.overlay0.hex}, 0px 6px 12px -3px ${flavor.colors.crust.hex}, 0px 6px 18px 0px ${flavor.colors.crust.hex};`,
      },
      inset: `inset 0px 1px 0px 0px ${flavor.colors.crust.hex}`,
      resting: {
        small: `0px 1px 1px 0px ${flavor.colors.crust.hex}, 0px 1px 3px 0px ${flavor.colors.crust.hex};`,
        // 此阴影用于工作流的流程图的节点悬浮效果, 该效果在 Gitea 中通过 svg, g 的 filter 实现, 而非 box-shadow
        medium: `drop-shadow(0 1px 1px ${flavor.colors.crust.hex}) drop-shadow(0 3px 6px ${flavor.colors.crust.hex})`,
      },
    },
    underlineNav: { borderColor: { active: accentColor } },
    contribution: {
      default: {
        bgColor: {
          num0: rgba(accentColor, 0.05),
          num1: rgba(accentColor, 0.25),
          num2: rgba(accentColor, 0.45),
          num3: rgba(accentColor, 0.65),
          num4: rgba(accentColor, 0.85),
          num5: accentColor,
        },
        borderColor: {
          num0: rgba(flavor.colors.overlay0.hex, 0.05),
          num1: themeVars.github.contribution.default.borderColor.num0,
          num2: themeVars.github.contribution.default.borderColor.num0,
          num3: themeVars.github.contribution.default.borderColor.num0,
          num4: themeVars.github.contribution.default.borderColor.num0,
          num5: themeVars.github.contribution.default.borderColor.num0,
        },
      },
    },
    workflowCardBg: flavor.colors.surface0.hex,
  };
  return {
    isDarkTheme: flavor.dark,
    primary: accentColor,
    primaryContrast: lv1Color,
    secondary: flavor.colors.overlay0.hex,
    base: {
      red: flavor.colors.red.hex,
      orange: flavor.colors.peach.hex,
      yellow: flavor.colors.yellow.hex,
      olive: flavor.colors.green.hex,
      green: flavor.colors.green.hex,
      teal: flavor.colors.teal.hex,
      cyan: flavor.colors.sky.hex,
      blue: flavor.colors.blue.hex,
      violet: flavor.colors.lavender.hex,
      purple: flavor.colors.mauve.hex,
      pink: flavor.colors.pink.hex,
      brown: flavor.colors.flamingo.hex,
      black: flavor.dark ? flavor.colors.crust.hex : flavor.colors.text.hex,
      grey: flavor.colors.overlay2.hex,
      gold: flavor.colors.rosewater.hex,
      white: "#f0f6fc",
    },
    console,
    diff,
    other,
    github,
    override: {
      ansi,
    },
  };
}
