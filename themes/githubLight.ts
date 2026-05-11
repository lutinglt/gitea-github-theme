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

import type { GitHubColor, GitHubSyntax } from "src";
import { defineTheme, themeVars } from "src";

/** GitHub 浅色主题 */
export const githubLightColor: GitHubColor = {
  isDarkTheme: false,
  avatar: { bgColor: "#ffffff", borderColor: "#1f232826" },
  display: {
    blue: { fgColor: "#0969da" },
    brown: { fgColor: "#755f43" },
    cyan: { fgColor: "#006a80" },
    indigo: { fgColor: "#494edf" },
    lemon: { fgColor: "#786002" },
    olive: { fgColor: "#56682c" },
    teal: { fgColor: "#106e75" },
  },
  diffBlob: {
    addtionNum: { bgColor: "#aceebb" },
    addtionWord: { bgColor: "#aceebb" },
    deletionNum: { bgColor: "#ffcecb" },
    deletionWord: { bgColor: "#ffcecb" },
    hunkNum: { bgColor: { rest: "#b6e3ff" } },
  },
  fgColor: {
    accent: "#0969da",
    attention: "#9a6700",
    danger: "#d1242f",
    default: "#1f2328",
    disabled: "#818b98",
    done: "#8250df",
    muted: "#59636e",
    neutral: "#59636e",
    severe: "#bc4c00",
    sponsors: "#bf3989",
    success: "#1a7f37",
    black: "#1f2328",
    white: "#ffffff",
    onEmphasis: "#ffffff",
  },
  bgColor: {
    accent: { emphasis: "#0969da", muted: "#ddf4ff" },
    attention: { emphasis: "#9a6700", muted: "#fff8c5" },
    danger: { emphasis: "#cf222e", muted: "#ffebe9" },
    default: "#ffffff",
    done: { emphasis: "#8250df" },
    emphasis: "#25292e",
    muted: "#f6f8fa",
    neutral: { muted: "#818b981f", emphasis: "#59636e" },
    success: { emphasis: "#1f883d", muted: "#dafbe1" },
    inset: "#f6f8fa",
  },
  borderColor: {
    accent: { emphasis: "#0969da" },
    attention: { emphasis: "#9a6700" },
    default: "#d1d9e0",
    done: { emphasis: "#8250df" },
    success: { emphasis: "#1a7f37" },
    muted: "#d1d9e0b3",
    translucent: "#1f232826",
    emphasis: "#818b98",
  },
  button: {
    primary: {
      fgColor: { accent: "#1a7f37", rest: "#ffffff" },
      bgColor: { rest: themeVars.github.bgColor.success.emphasis, hover: "#1c8139", active: "#197935" },
    },
    danger: { fgColor: { rest: "#d1242f", hover: "#ffffff" }, bgColor: { hover: "#cf222e", active: "#a40e26" } },
    star: { iconColor: "#eac54f" },
  },
  control: {
    bgColor: { active: "#e6eaef", hover: "#eff2f5", rest: "#f6f8fa" },
    transparent: { bgColor: { active: "#818b9826", hover: "#818b981a", selected: "#818b9826" } },
  },
  controlTrack: { bgColor: { rest: "#e6eaef" } },
  controlKnob: { bgColor: { rest: "#ffffff" } },
  shadow: {
    floating: { small: "#25292e0a" },
    inset: "#1f23280a",
    resting: { small: "#1f23280f", medium: "#25292e1f" },
  },
  overlay: { backdrop: { bgColor: "#c8d1da66" }, bgColor: "#ffffff" },
  underlineNav: { borderColor: { active: "#fd8c73" } },
  contribution: {
    default: {
      bgColor: { num0: "#eff2f5", num1: "#aceebb", num2: "#4ac26b", num3: "#2da44e", num4: "#116329" },
      borderColor: { num0: "#1f23280d" },
    },
  },
};
/** GitHub 浅色主题语法高亮 */
export const githubLightSyntax: GitHubSyntax = {
  prettyLights: {
    syntax: {
      brackethighlighter: { angle: "#59636e", unmatched: "#82071e" },
      carriage: { return: { bg: "#cf222e", text: "#f6f8fa" } },
      comment: "#59636e",
      constant: "#0550ae",
      constantOtherReferenceLink: "#0a3069",
      entity: "#6639ba",
      entityTag: "#0550ae",
      invalid: { illegal: { bg: "#82071e", text: "#f6f8fa" } },
      keyword: "#cf222e",
      markup: {
        bold: "#1f2328",
        changed: { bg: "#ffd8b5", text: "#953800" },
        deleted: { bg: "#ffebe9", text: "#82071e" },
        heading: "#0550ae",
        ignored: { bg: "#0550ae", text: "#d1d9e0" },
        inserted: { bg: "#dafbe1", text: "#116329" },
        italic: "#1f2328",
        list: "#3b2300",
      },
      metaDiffRange: "#8250df",
      storageModifierImport: "#1f2328",
      string: "#0a3069",
      stringRegexp: "#116329",
      sublimelinterGutterMark: "#818b98",
      variable: "#953800",
    },
  },
  codeMirror: {
    syntax: {
      fgColor: {
        comment: "#1f2328",
        constant: "#0550ae",
        entity: "#8250df",
        keyword: "#cf222e",
        storage: "#cf222e",
        string: "#0a3069",
        support: "#0550ae",
        variable: "#953800",
      },
    },
  },
};
/** GitHub 浅色主题 红绿色盲变体 */
export const githubColorblindLightColor: GitHubColor = {
  isDarkTheme: false,
  avatar: githubLightColor.avatar,
  display: githubLightColor.display,
  diffBlob: {
    addtionNum: { bgColor: "#b6e3ff" },
    addtionWord: { bgColor: "#b6e3ff" },
    deletionNum: { bgColor: "#ffd8b5" },
    deletionWord: { bgColor: "#ffd8b5" },
    hunkNum: { bgColor: { rest: "#e6eaef" } },
  },
  fgColor: {
    ...githubLightColor.fgColor,
    danger: "#bc4c00",
    success: "#0969da",
  },
  bgColor: {
    ...githubLightColor.bgColor,
    danger: { emphasis: "#bc4c00", muted: "#fff1e5" },
    success: { emphasis: "#0969da", muted: "#ddf4ff" },
  },
  borderColor: {
    ...githubLightColor.borderColor,
    success: { emphasis: "#0969da" },
  },
  button: {
    primary: {
      fgColor: { accent: "#0969da", rest: "#ffffff" },
      bgColor: { rest: themeVars.github.bgColor.success.emphasis, hover: "#0864d1", active: "#075fc8" },
    },
    danger: { fgColor: { rest: "#bc4c00", hover: "#ffffff" }, bgColor: { hover: "#bc4c00", active: "#953800" } },
    star: githubLightColor.button.star,
  },
  control: githubLightColor.control,
  controlTrack: githubLightColor.controlTrack,
  controlKnob: githubLightColor.controlKnob,
  shadow: githubLightColor.shadow,
  overlay: githubLightColor.overlay,
  underlineNav: githubLightColor.underlineNav,
  contribution: githubLightColor.contribution,
};
/** GitHub 浅色主题 红绿色盲变体语法高亮 */
export const githubColorblindLightSyntax: GitHubSyntax = {
  prettyLights: {
    syntax: {
      brackethighlighter: { angle: "#59636e", unmatched: "#762c00" },
      carriage: { return: { bg: "#bc4c00", text: "#f6f8fa" } },
      comment: "#59636e",
      constant: "#0550ae",
      constantOtherReferenceLink: "#0a3069",
      entity: "#6639ba",
      entityTag: "#0550ae",
      invalid: { illegal: { bg: "#762c00", text: "#f6f8fa" } },
      keyword: "#bc4c00",
      markup: {
        bold: "#1f2328",
        changed: { bg: "#ffd8b5", text: "#953800" },
        deleted: { bg: "#fff1e5", text: "#762c00" },
        heading: "#0550ae",
        ignored: { bg: "#0550ae", text: "#d1d9e0" },
        inserted: { bg: "#ddf4ff", text: "#0550ae" },
        italic: "#1f2328",
        list: "#3b2300",
      },
      metaDiffRange: "#8250df",
      storageModifierImport: "#1f2328",
      string: "#0a3069",
      stringRegexp: "#0550ae",
      sublimelinterGutterMark: "#818b98",
      variable: "#953800",
    },
  },
  codeMirror: {
    syntax: {
      fgColor: {
        comment: "#1f2328",
        constant: "#0550ae",
        entity: "#8250df",
        keyword: "#bc4c00",
        storage: "#bc4c00",
        string: "#0a3069",
        support: "#0550ae",
        variable: "#953800",
      },
    },
  },
};
/** GitHub 浅色主题 蓝黄色盲变体 */
export const githubTritanopiaLightColor: GitHubColor = {
  ...githubColorblindLightColor,
  diffBlob: {
    ...githubColorblindLightColor.diffBlob,
    deletionNum: githubLightColor.diffBlob.deletionNum,
    deletionWord: githubLightColor.diffBlob.deletionWord,
  },
  fgColor: {
    ...githubColorblindLightColor.fgColor,
    danger: githubLightColor.fgColor.danger,
  },
  bgColor: {
    ...githubColorblindLightColor.bgColor,
    danger: githubLightColor.bgColor.danger,
  },
  button: {
    ...githubColorblindLightColor.button,
    danger: githubLightColor.button.danger,
  },
};
/** GitHub 浅色主题 蓝黄色盲变体语法高亮 */
export const githubTritanopiaLightSyntax: GitHubSyntax = {
  prettyLights: {
    syntax: {
      ...githubLightSyntax.prettyLights.syntax,
      markup: {
        ...githubLightSyntax.prettyLights.syntax.markup,
        changed: { bg: "#ffcecb", text: "#a40e26" },
        inserted: githubColorblindLightSyntax.prettyLights.syntax.markup.inserted,
      },
      stringRegexp: githubColorblindLightSyntax.prettyLights.syntax.stringRegexp,
      variable: "#a40e26",
    },
  },
  codeMirror: {
    syntax: {
      fgColor: {
        ...githubLightSyntax.codeMirror.syntax.fgColor,
        variable: "#a40e26",
      },
    },
  },
};

/** GitHub 浅色主题 */
export const githubLightTheme = defineTheme({
  colorType: "github",
  themeColor: githubLightColor,
  syntaxColor: githubLightSyntax,
});
/** GitHub 浅色主题 红绿色盲变体 */
export const githubColorblindLightTheme = defineTheme({
  colorType: "github",
  themeColor: githubColorblindLightColor,
  syntaxColor: githubColorblindLightSyntax,
});
/** GitHub 浅色主题 蓝黄色盲变体 */
export const githubTritanopiaLightTheme = defineTheme({
  colorType: "github",
  themeColor: githubTritanopiaLightColor,
  syntaxColor: githubTritanopiaLightSyntax,
});
