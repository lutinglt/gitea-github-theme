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

import type { GitHubColor } from "./github";
import type { CodeMirrorColor, GitHubSyntax, PrettylightsColor } from "./githubSyntax";

type PrimerTokens = Record<string, { $value: string | { color: string } }>;

function primerTokensGet(primerTokens: PrimerTokens): (key: string) => string {
  return (key: string) => {
    const entry = primerTokens[key];
    if (typeof entry.$value === "object") return entry.$value.color;
    return entry.$value;
  };
}

export function primer2GitHubColor(primerTokens: PrimerTokens, isDarkTheme: boolean = false): GitHubColor {
  // 安全获取色值: 从 $value 和 alpha 组合成最终 CSS 色值
  const $ = primerTokensGet(primerTokens);

  return {
    isDarkTheme,
    avatar: {
      bgColor: $("avatar-bgColor"),
      borderColor: $("avatar-borderColor"),
    },
    display: {
      blue: { fgColor: $("display-blue-fgColor") },
      brown: { fgColor: $("display-brown-fgColor") },
      cyan: { fgColor: $("display-cyan-fgColor") },
      indigo: { fgColor: $("display-indigo-fgColor") },
      lemon: { fgColor: $("display-lemon-fgColor") },
      olive: { fgColor: $("display-olive-fgColor") },
      teal: { fgColor: $("display-teal-fgColor") },
    },
    diffBlob: {
      addtionNum: { bgColor: $("diffBlob-additionNum-bgColor") },
      addtionWord: { bgColor: $("diffBlob-additionWord-bgColor") },
      deletionNum: { bgColor: $("diffBlob-deletionNum-bgColor") },
      deletionWord: { bgColor: $("diffBlob-deletionWord-bgColor") },
      hunkNum: { bgColor: { rest: $("diffBlob-hunkNum-bgColor-rest") } },
    },
    fgColor: {
      accent: $("fgColor-accent"),
      attention: $("fgColor-attention"),
      danger: $("fgColor-danger"),
      default: $("fgColor-default"),
      disabled: $("fgColor-disabled"),
      done: $("fgColor-done"),
      neutral: $("fgColor-neutral"),
      severe: $("fgColor-severe"),
      sponsors: $("fgColor-sponsors"),
      success: $("fgColor-success"),
      black: $("fgColor-black"),
      white: $("fgColor-white"),
      muted: $("fgColor-muted"),
      onEmphasis: $("fgColor-onEmphasis"),
    },
    bgColor: {
      accent: {
        emphasis: $("bgColor-accent-emphasis"),
        muted: $("bgColor-accent-muted"),
      },
      attention: {
        emphasis: $("bgColor-attention-emphasis"),
        muted: $("bgColor-attention-muted"),
      },
      emphasis: $("bgColor-emphasis"),
      success: {
        emphasis: $("bgColor-success-emphasis"),
        muted: $("bgColor-success-muted"),
      },
      danger: {
        emphasis: $("bgColor-danger-emphasis"),
        muted: $("bgColor-danger-muted"),
      },
      done: { emphasis: $("bgColor-done-emphasis") },
      default: $("bgColor-default"),
      inset: $("bgColor-inset"),
      muted: $("bgColor-muted"),
      neutral: {
        muted: $("bgColor-neutral-muted"),
        emphasis: $("bgColor-neutral-emphasis"),
      },
    },
    borderColor: {
      accent: { emphasis: $("borderColor-accent-emphasis") },
      attention: { emphasis: $("borderColor-attention-emphasis") },
      default: $("borderColor-default"),
      success: { emphasis: $("borderColor-success-emphasis") },
      done: { emphasis: $("borderColor-done-emphasis") },
      muted: $("borderColor-muted"),
      translucent: $("borderColor-translucent"),
      emphasis: $("borderColor-emphasis"),
    },
    button: {
      primary: {
        fgColor: {
          accent: $("fgColor-success"), // 此为主题自定义值, 特殊绿色按钮颜色
          rest: $("button-primary-fgColor-rest"),
        },
        bgColor: {
          rest: $("button-primary-bgColor-rest"),
          hover: $("button-primary-bgColor-hover"),
          active: $("button-primary-bgColor-active"),
        },
      },
      danger: {
        fgColor: {
          rest: $("button-danger-fgColor-rest"),
          hover: $("button-danger-fgColor-hover"),
        },
        bgColor: {
          hover: $("button-danger-bgColor-hover"),
          active: $("button-danger-bgColor-active"),
        },
      },
      star: { iconColor: $("button-star-iconColor") },
      invisible: { iconColor: { rest: $("button-invisible-iconColor-rest") } },
    },
    control: {
      bgColor: {
        active: $("control-bgColor-active"),
        hover: $("control-bgColor-hover"),
        rest: $("control-bgColor-rest"),
      },
      transparent: {
        bgColor: {
          active: $("control-transparent-bgColor-active"),
          hover: $("control-transparent-bgColor-hover"),
          selected: $("control-transparent-bgColor-selected"),
        },
      },
      danger: { bgColor: { active: $("control-danger-bgColor-active") } },
    },
    controlTrack: { bgColor: { rest: $("controlTrack-bgColor-rest") } },
    controlKnob: { bgColor: { rest: $("controlKnob-bgColor-rest") } },
    shadow: {
      floating: { small: isDarkTheme ? "#01040966" : "#25292e0a" }, // 特殊颜色, 因 Gitea 实现无法使用原始值, 提取对应值交给后续生成
      inset: $("shadow-inset"),
      resting: {
        small: $("shadow-resting-small"),
        medium: isDarkTheme ? "#010409cc" : "#25292e1f", // 特殊颜色, 因 Gitea 实现无法使用原始值, 提取对应值交给后续生成
      },
    },
    overlay: {
      backdrop: { bgColor: $("overlay-backdrop-bgColor") },
      bgColor: $("overlay-bgColor"),
    },
    underlineNav: { borderColor: { active: $("underlineNav-borderColor-active") } },
    contribution: {
      default: {
        bgColor: {
          num0: $("contribution-default-bgColor-0"),
          num1: $("contribution-default-bgColor-1"),
          num2: $("contribution-default-bgColor-2"),
          num3: $("contribution-default-bgColor-3"),
          num4: $("contribution-default-bgColor-4"),
        },
        borderColor: { num0: $("contribution-default-borderColor-0") },
      },
    },
  };
}
export function primer2GitHubSyntax(primerTokens: PrimerTokens): GitHubSyntax {
  const $ = primerTokensGet(primerTokens);

  const prettyLights: PrettylightsColor = {
    syntax: {
      brackethighlighter: {
        angle: $("color-prettylights-syntax-brackethighlighter-angle"),
        unmatched: $("color-prettylights-syntax-brackethighlighter-unmatched"),
      },
      carriage: {
        return: {
          bg: $("color-prettylights-syntax-carriage-return-bg"),
          text: $("color-prettylights-syntax-carriage-return-text"),
        },
      },
      comment: $("color-prettylights-syntax-comment"),
      constant: $("color-prettylights-syntax-constant"),
      constantOtherReferenceLink: $("color-prettylights-syntax-constant-other-reference-link"),
      entity: $("color-prettylights-syntax-entity"),
      entityTag: $("color-prettylights-syntax-entity-tag"),
      invalid: {
        illegal: {
          bg: $("color-prettylights-syntax-invalid-illegal-bg"),
          text: $("color-prettylights-syntax-invalid-illegal-text"),
        },
      },
      keyword: $("color-prettylights-syntax-keyword"),
      markup: {
        bold: $("color-prettylights-syntax-markup-bold"),
        changed: {
          bg: $("color-prettylights-syntax-markup-changed-bg"),
          text: $("color-prettylights-syntax-markup-changed-text"),
        },
        deleted: {
          bg: $("color-prettylights-syntax-markup-deleted-bg"),
          text: $("color-prettylights-syntax-markup-deleted-text"),
        },
        heading: $("color-prettylights-syntax-markup-heading"),
        ignored: {
          bg: $("color-prettylights-syntax-markup-ignored-bg"),
          text: $("color-prettylights-syntax-markup-ignored-text"),
        },
        inserted: {
          bg: $("color-prettylights-syntax-markup-inserted-bg"),
          text: $("color-prettylights-syntax-markup-inserted-text"),
        },
        italic: $("color-prettylights-syntax-markup-italic"),
        list: $("color-prettylights-syntax-markup-list"),
      },
      metaDiffRange: $("color-prettylights-syntax-meta-diff-range"),
      storageModifierImport: $("color-prettylights-syntax-storage-modifier-import"),
      string: $("color-prettylights-syntax-string"),
      stringRegexp: $("color-prettylights-syntax-string-regexp"),
      sublimelinterGutterMark: $("color-prettylights-syntax-sublimelinter-gutter-mark"),
      variable: $("color-prettylights-syntax-variable"),
    },
  };

  const codeMirror: CodeMirrorColor = {
    syntax: {
      fgColor: {
        comment: $("codeMirror-syntax-fgColor-comment"),
        constant: $("codeMirror-syntax-fgColor-constant"),
        entity: $("codeMirror-syntax-fgColor-entity"),
        keyword: $("codeMirror-syntax-fgColor-keyword"),
        storage: $("codeMirror-syntax-fgColor-storage"),
        string: $("codeMirror-syntax-fgColor-string"),
        support: $("codeMirror-syntax-fgColor-support"),
        variable: $("codeMirror-syntax-fgColor-variable"),
      },
    },
    matchingBracket: {
      fgColor: $("codeMirror-matchingBracket-fgColor"),
    },
  };

  return { prettyLights, codeMirror };
}

import darkColorblindHighContrast from "@primer/primitives/dist/styleLint/functional/themes/dark-colorblind-high-contrast.json" with { type: "json" };
import darkColorblind from "@primer/primitives/dist/styleLint/functional/themes/dark-colorblind.json" with { type: "json" };
import darkDimmedHighContrast from "@primer/primitives/dist/styleLint/functional/themes/dark-dimmed-high-contrast.json" with { type: "json" };
import darkDimmed from "@primer/primitives/dist/styleLint/functional/themes/dark-dimmed.json" with { type: "json" };
import darkHighContrast from "@primer/primitives/dist/styleLint/functional/themes/dark-high-contrast.json" with { type: "json" };
import darkTritanopiaHighContrast from "@primer/primitives/dist/styleLint/functional/themes/dark-tritanopia-high-contrast.json" with { type: "json" };
import darkTritanopia from "@primer/primitives/dist/styleLint/functional/themes/dark-tritanopia.json" with { type: "json" };
import dark from "@primer/primitives/dist/styleLint/functional/themes/dark.json" with { type: "json" };
import lightColorblindHighContrast from "@primer/primitives/dist/styleLint/functional/themes/light-colorblind-high-contrast.json" with { type: "json" };
import lightColorblind from "@primer/primitives/dist/styleLint/functional/themes/light-colorblind.json" with { type: "json" };
import lightHighContrast from "@primer/primitives/dist/styleLint/functional/themes/light-high-contrast.json" with { type: "json" };
import lightTritanopiaHighContrast from "@primer/primitives/dist/styleLint/functional/themes/light-tritanopia-high-contrast.json" with { type: "json" };
import lightTritanopia from "@primer/primitives/dist/styleLint/functional/themes/light-tritanopia.json" with { type: "json" };
import light from "@primer/primitives/dist/styleLint/functional/themes/light.json" with { type: "json" };

export default {
  dark,
  darkColorblind,
  darkTritanopia,
  darkDimmed,
  light,
  lightColorblind,
  lightTritanopia,
  darkHighContrast,
  darkColorblindHighContrast,
  darkTritanopiaHighContrast,
  darkDimmedHighContrast,
  lightHighContrast,
  lightColorblindHighContrast,
  lightTritanopiaHighContrast,
};
