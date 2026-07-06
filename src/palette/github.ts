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

import type { Primer } from "@lutinglt/gitea-github-theme/primer";
import { mix, saturate } from "color2k";
import { scaleColorLight } from "../functions";
import type { Ansi, Console, Diff, GitHub, Message, Other, Series16 } from "../types";
import { themeVars } from "../types";
import type { ThemeColor } from "./theme";

export type GitHubColor = {
  isDarkTheme: boolean;
  themeExtra: { button: { primary: { fgColor: { accent: string } } } };
} & Primer;

export function github2ThemeColor(githubColor: GitHubColor): ThemeColor {
  const ansi: Ansi = {
    black: githubColor.ansi.black,
    red: githubColor.ansi.red,
    green: githubColor.ansi.green,
    yellow: githubColor.ansi.yellow,
    blue: githubColor.ansi.blue,
    magenta: githubColor.ansi.magenta,
    cyan: githubColor.ansi.cyan,
    white: githubColor.ansi.white,
    bright: {
      black: githubColor.ansi.blackBright,
      red: githubColor.ansi.redBright,
      green: githubColor.ansi.greenBright,
      yellow: githubColor.ansi.yellowBright,
      blue: githubColor.ansi.blueBright,
      magenta: githubColor.ansi.magentaBright,
      cyan: githubColor.ansi.cyanBright,
      white: githubColor.ansi.whiteBright,
    },
  };
  const message: Message = {
    error: {
      bg: {
        self: githubColor.bgColor.danger.muted,
        active: githubColor.bgColor.danger.emphasis,
        hover: mix(githubColor.bgColor.danger.muted, githubColor.bgColor.danger.emphasis, 0.75),
      },
      border: githubColor.borderColor.danger.muted,
      text: githubColor.fgColor.danger, // Gitea 用处更多, 不与 GitHub 保持一致
    },
    success: {
      bg: githubColor.bgColor.success.muted,
      border: githubColor.borderColor.success.muted,
      text: githubColor.fgColor.success, // Gitea 用处更多, 不与 GitHub 保持一致
    },
    warning: {
      bg: githubColor.bgColor.attention.muted,
      border: githubColor.borderColor.attention.muted,
      text: githubColor.fgColor.attention, // Gitea 用处更多, 不与 GitHub 保持一致
    },
    info: {
      bg: githubColor.bgColor.accent.muted,
      border: githubColor.borderColor.accent.muted,
      text: githubColor.fgColor.accent, // Gitea 用处更多, 不与 GitHub 保持一致
    },
    priority: {
      bg: githubColor.bgColor.done.muted,
      border: githubColor.borderColor.done.muted,
      text: githubColor.fgColor.done, // Gitea 用处更多, 不与 GitHub 保持一致
    },
  };
  const console: Console = {
    fg: { self: githubColor.fgColor.default, subtle: githubColor.fgColor.muted },
    bg: githubColor.bgColor.inset,
    border: githubColor.borderColor.muted,
    activeBg: githubColor.control.bgColor.active,
    hoverBg: githubColor.control.transparent.bgColor.hover,
    menu: { bg: githubColor.overlay.bgColor, border: githubColor.borderColor.muted },
    link: githubColor.fgColor.muted,
  };

  const diff: Diff = {
    added: {
      fg: githubColor.fgColor.success,
      linenum: { bg: githubColor.diffBlob.additionNum.bgColor },
      row: { bg: githubColor.bgColor.success.muted, border: githubColor.bgColor.success.muted },
      word: { bg: githubColor.diffBlob.additionWord.bgColor },
    },
    removed: {
      fg: githubColor.fgColor.danger,
      linenum: { bg: githubColor.diffBlob.deletionNum.bgColor },
      row: { bg: githubColor.bgColor.danger.muted, border: githubColor.bgColor.danger.muted },
      word: { bg: githubColor.diffBlob.deletionWord.bgColor },
    },
    moved: {
      row: { bg: githubColor.bgColor.attention.muted, border: githubColor.bgColor.attention.muted },
    },
    inactive: githubColor.bgColor.muted,
  };

  const other: Other = {
    logo: themeVars.color.primary.self,
    body: githubColor.bgColor.default,
    box: {
      header: githubColor.bgColor.muted,
      body: { self: themeVars.color.body, highlight: githubColor.bgColor.accent.muted },
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
      toggleBackground: githubColor.bgColor.inset,
      border: themeVars.color.light.border,
    },
    light: { self: themeVars.color.body, border: githubColor.borderColor.default },
    hover: { self: githubColor.control.bgColor.hover, opaque: themeVars.color.box.header },
    active: githubColor.control.transparent.bgColor.selected,
    menu: githubColor.overlay.bgColor,
    card: themeVars.color.body,
    markup: {
      tableRow: githubColor.bgColor.muted,
      code: { block: githubColor.bgColor.muted, inline: githubColor.bgColor.neutral.muted },
    },
    button: githubColor.control.bgColor.rest,
    codeBg: "unset",
    shadow: { self: githubColor.shadow.floating.small, opaque: themeVars.color.shadow.self },
    secondaryBg: "unset",
    expandButton: githubColor.diffBlob.hunkNum.bgColor.rest,
    placeholderText: themeVars.color.text.light.num3,
    editor: { lineHighlight: themeVars.color.secondary.light.num1, selection: themeVars.color.editor.lineHighlight },
    projectColumnBg: githubColor.bgColor.inset,
    caret: themeVars.color.text.dark,
    reaction: { bg: "initial", hoverBg: githubColor.bgColor.accent.muted, activeBg: githubColor.bgColor.accent.muted },
    tooltip: { text: githubColor.tooltip.fgColor, bg: githubColor.tooltip.bgColor },
    nav: {
      bg: githubColor.bgColor.inset,
      hoverBg: githubColor.control.transparent.bgColor.hover,
      text: themeVars.color.text.self,
    },
    secondaryNavBg: themeVars.color.body,
    label: {
      text: themeVars.color.text.self,
      bg: githubColor.bgColor.neutral.muted,
      hoverBg: githubColor.control.transparent.bgColor.active,
      activeBg: themeVars.color.label.hoverBg,
    },
    accent: themeVars.color.primary.light.num1,
    smallAccent: themeVars.color.primary.light.num5,
    highlight: { fg: githubColor.fgColor.attention, bg: githubColor.bgColor.attention.muted },
    overlayBackdrop: githubColor.overlay.backdrop.bgColor,
    danger: themeVars.color.red.self,
    transparency: { grid: { light: "#ffffff", dark: "#e5e5e5" } },
    workflowEdgeHover: githubColor.bgColor.accent.emphasis,
  };

  const series16: Series16 = {
    num0: githubColor.display.lime.fgColor,
    num1: githubColor.display.green.fgColor,
    num2: githubColor.display.red.fgColor,
    num3: githubColor.display.olive.fgColor,
    num4: githubColor.display.pink.fgColor,
    num5: githubColor.display.purple.fgColor,
    num6: githubColor.display.orange.fgColor,
    num7: githubColor.display.teal.fgColor,
    num8: githubColor.display.orange.bgColor.emphasis,
    num9: githubColor.display.cyan.fgColor,
    num10: githubColor.display.orange.borderColor.emphasis,
    num11: githubColor.display.pine.fgColor,
    num12: githubColor.display.plum.fgColor,
    num13: githubColor.display.pine.bgColor.emphasis,
    num14: githubColor.display.blue.fgColor,
    num15: githubColor.display.pink.bgColor.emphasis,
  };

  const github: GitHub = {
    avatar: { bgColor: githubColor.avatar.bgColor, borderColor: githubColor.avatar.borderColor },
    fgColor: {
      accent: githubColor.fgColor.accent,
      success: githubColor.fgColor.success,
      done: githubColor.fgColor.done,
      onEmphasis: githubColor.fgColor.onEmphasis,
    },
    bgColor: {
      accent: { emphasis: githubColor.bgColor.accent.emphasis, muted: githubColor.bgColor.accent.muted },
      success: { emphasis: githubColor.bgColor.success.emphasis },
      attention: { emphasis: githubColor.bgColor.attention.emphasis },
      danger: { emphasis: githubColor.bgColor.danger.emphasis },
      done: { emphasis: githubColor.bgColor.done.emphasis },
      neutral: { emphasis: githubColor.bgColor.neutral.emphasis },
    },
    borderColor: {
      accent: { emphasis: githubColor.borderColor.accent.emphasis },
      attention: { emphasis: githubColor.borderColor.attention.emphasis },
      success: { emphasis: githubColor.borderColor.success.emphasis },
      done: { emphasis: githubColor.borderColor.done.emphasis },
      emphasis: githubColor.borderColor.emphasis,
    },
    button: {
      default: { bgColor: { active: githubColor.button.default.bgColor.active } },
      primary: {
        fgColor: {
          rest: githubColor.button.primary.fgColor.rest,
        },
        bgColor: {
          rest: githubColor.button.primary.bgColor.rest,
          hover: githubColor.button.primary.bgColor.hover,
          active: githubColor.button.primary.bgColor.active,
        },
        borderColor: {
          rest: githubColor.button.primary.borderColor.rest,
          hover: githubColor.button.primary.borderColor.hover,
        },
      },
      danger: {
        fgColor: { rest: githubColor.button.danger.fgColor.rest, hover: githubColor.button.danger.fgColor.hover },
        bgColor: {
          rest: githubColor.button.danger.bgColor.rest,
          hover: githubColor.button.danger.bgColor.hover,
          active: githubColor.button.danger.bgColor.active,
        },
        borderColor: { hover: githubColor.button.danger.borderColor.hover },
      },
      star: { iconColor: githubColor.button.star.iconColor },
      invisible: { iconColor: { rest: githubColor.button.invisible.iconColor.rest } },
    },
    control: {
      bgColor: { rest: githubColor.control.bgColor.rest },
      transparent: {
        bgColor: {
          hover: githubColor.control.transparent.bgColor.hover,
          active: githubColor.control.transparent.bgColor.active,
        },
        borderColor: { active: githubColor.control.transparent.borderColor.active },
      },
      danger: {
        fgColor: { hover: githubColor.control.danger.fgColor.hover },
        bgColor: {
          hover: githubColor.control.danger.bgColor.hover,
          active: githubColor.control.danger.bgColor.active,
        },
      },
    },
    controlTrack: { bgColor: { rest: githubColor.controlTrack.bgColor.rest } },
    controlKnob: { bgColor: { rest: githubColor.controlKnob.bgColor.rest } },
    shadow: {
      floating: {
        small: `0px 0px 0px 1px ${themeVars.color.light.border}, 0px 6px 12px -3px ${themeVars.color.shadow.self}, 0px 6px 18px 0px ${themeVars.color.shadow.self};`,
      },
      inset: githubColor.shadow.inset,
      resting: {
        small: githubColor.shadow.resting.small,
        // 此阴影用于工作流的流程图的节点悬浮效果, 该效果在 Gitea 中通过 svg, g 的 filter 实现, 而非 box-shadow
        medium: `drop-shadow(0 1px 1px ${githubColor.shadow.floating.small}) drop-shadow(0 3px 6px ${githubColor.shadow.resting.medium})`,
      },
    },
    counter: {
      borderColor: githubColor.counter.borderColor,
    },
    progressBar: {
      track: {
        bgColor: githubColor.progressBar.track.bgColor,
        borderColor: githubColor.progressBar.track.borderColor,
      },
    },
    topicTag: { borderColor: githubColor.topicTag.borderColor },
    underlineNav: { borderColor: { active: githubColor.underlineNav.borderColor.active } },
    contribution: {
      default: {
        bgColor: {
          num0: githubColor.contribution.default.bgColor[0],
          num1: githubColor.contribution.default.bgColor[1],
          num2: githubColor.contribution.default.bgColor[2],
          num3: githubColor.contribution.default.bgColor[3],
          num4: githubColor.contribution.default.bgColor[4],
        },
        borderColor: {
          num0: githubColor.contribution.default.borderColor[0],
          num1: githubColor.contribution.default.borderColor[1],
          num2: githubColor.contribution.default.borderColor[2],
          num3: githubColor.contribution.default.borderColor[3],
          num4: githubColor.contribution.default.borderColor[4],
        },
      },
    },
    workflowCardBg: githubColor.isDarkTheme ? githubColor.bgColor.muted : githubColor.bgColor.default,
    themeExtra: {
      button: {
        primary: {
          fgColor: {
            accent: saturate(
              scaleColorLight(githubColor.themeExtra.button.primary.fgColor.accent, githubColor.isDarkTheme ? 10 : -10),
              0.1
            ),
          },
        },
      },
      contribution: {
        default: {
          bgColor: {
            num5: saturate(
              scaleColorLight(githubColor.contribution.default.bgColor[4], githubColor.isDarkTheme ? 58 : -58),
              0.2
            ),
          },
          borderColor: { num5: githubColor.contribution.default.borderColor[4] },
        },
      },
    },
  };
  return {
    isDarkTheme: githubColor.isDarkTheme,
    primary: githubColor.fgColor.accent,
    primaryContrast: githubColor.fgColor.default,
    secondary: githubColor.borderColor.default,
    base: {
      red: githubColor.fgColor.danger,
      orange: githubColor.fgColor.severe,
      yellow: githubColor.fgColor.attention,
      olive: githubColor.display.olive.fgColor,
      green: githubColor.fgColor.success,
      cyan: githubColor.display.cyan.fgColor,
      teal: githubColor.display.teal.fgColor,
      blue: githubColor.display.blue.fgColor,
      violet: githubColor.display.indigo.fgColor,
      purple: githubColor.fgColor.done,
      pink: githubColor.fgColor.sponsors,
      brown: githubColor.display.brown.fgColor,
      black: githubColor.fgColor.black,
      grey: githubColor.fgColor.neutral,
      gold: githubColor.display.lemon.fgColor,
      white: githubColor.fgColor.white,
    },
    console,
    diff,
    other,
    github,
    override: { message, ansi, series16 },
  };
}
