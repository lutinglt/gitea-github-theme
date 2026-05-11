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

import type { GithubColor, GitHubSyntax } from "src";
import { defineTheme, themeVars } from "src";

/** GitHub 深色主题 */
export const githubDarkGithubColors: GithubColor = {
  isDarkTheme: true,
  avatar: { bgColor: "#ffffff1a", borderColor: "#ffffff26" },
  display: {
    blue: { fgColor: "#4493f8" },
    brown: { fgColor: "#b69a6d" },
    cyan: { fgColor: "#07ace4" },
    indigo: { fgColor: "#9899ec" },
    lemon: { fgColor: "#ba9b12" },
    olive: { fgColor: "#a2a626" },
    teal: { fgColor: "#1cb0ab" },
  },
  diffBlob: {
    addtionNum: { bgColor: "#3fb9504d" },
    addtionWord: { bgColor: "#2ea04366" },
    deletionNum: { bgColor: "#f851494d" },
    deletionWord: { bgColor: "#f8514966" },
    hunkNum: { bgColor: { rest: "#0c2d6b" } },
  },
  fgColor: {
    accent: "#4493f8",
    attention: "#d29922",
    danger: "#f85149",
    default: "#f0f6fc",
    disabled: "#656c76",
    done: "#ab7df8",
    muted: "#9198a1",
    neutral: "#9198a1",
    severe: "#db6d28",
    sponsors: "#db61a2",
    success: "#3fb950",
    black: "#010409",
    white: "#ffffff",
    onEmphasis: "#f0f6fc",
  },
  bgColor: {
    accent: { emphasis: "#1f6feb", muted: "#388bfd1a" },
    attention: { emphasis: "#9e6a03", muted: "#bb800926" },
    danger: { emphasis: "#da3633", muted: "#f851491a" },
    default: "#0d1117",
    done: { emphasis: "#8957e5" },
    emphasis: "#3d444d",
    muted: "#151b23",
    neutral: { muted: "#656c7633", emphasis: "#656c76" },
    success: { emphasis: "#238636", muted: "#2ea04326" },
    inset: "#010409",
  },
  borderColor: {
    accent: { emphasis: "#1f6feb" },
    attention: { emphasis: "#9e6a03" },
    default: "#3d444d",
    done: { emphasis: "#8957e5" },
    success: { emphasis: "#238636" },
    muted: "#3d444db3",
    translucent: "#ffffff26",
    emphasis: "#656c76",
  },
  button: {
    primary: {
      fgColor: { accent: "#3fb950", rest: "#ffffff" },
      bgColor: { rest: themeVars.github.bgColor.success.emphasis, hover: "#29903b", active: "#2e9a40" },
    },
    danger: {
      fgColor: { rest: "#fa5e55", hover: "#ffffff" },
      bgColor: { hover: "#b62324", active: themeVars.github.bgColor.danger.emphasis },
    },
    star: { iconColor: "#e3b341" },
  },
  control: {
    bgColor: { active: "#2a313c", hover: "#262c36", rest: "#212830" },
    transparent: { bgColor: { active: "#656c7640", hover: "#656c7633", selected: "#656c761a" } },
  },
  // 不同步 GitHub 样式, 对调 --controlKnob-bgColor-rest 和 --controlTrack-bgColor-rest 的颜色
  // 激活颜色与背景色更一致, 在仪表板仓库/组织切换按钮中与菜单颜色一致
  controlKnob: { bgColor: { rest: "#010409" } },
  controlTrack: { bgColor: { rest: "#262c36" } },
  shadow: {
    floating: { small: "#01040966" },
    inset: "#0104093d",
    resting: { small: "#01040999", medium: "#010409cc" },
  },
  overlay: { backdrop: { bgColor: "#21283066" }, bgColor: "#010409" },
  underlineNav: { borderColor: { active: "#f78166" } },
  contribution: {
    default: {
      bgColor: { num0: "#151b23", num1: "#033a16", num2: "#196c2e", num3: "#2ea043", num4: "#56d364" },
      borderColor: { num0: "#0104090d" },
    },
  },
};
/** GitHub 深色主题语法高亮 */
export const githubDarkSyntax: GitHubSyntax = {
  prettyLights: {
    syntax: {
      brackethighlighter: { angle: "#9198a1", unmatched: "#f85149" },
      carriage: { return: { bg: "#b62324", text: "#f0f6fc" } },
      comment: "#9198a1",
      constant: "#79c0ff",
      constantOtherReferenceLink: "#a5d6ff",
      entity: "#d2a8ff",
      entityTag: "#7ee787",
      invalid: { illegal: { bg: "#8e1519", text: "#f0f6fc" } },
      keyword: "#ff7b72",
      markup: {
        bold: "#f0f6fc",
        changed: { bg: "#5a1e02", text: "#ffdfb6" },
        deleted: { bg: "#67060c", text: "#ffdcd7" },
        heading: "#1f6feb",
        ignored: { bg: "#1158c7", text: "#f0f6fc" },
        inserted: { bg: "#033a16", text: "#aff5b4" },
        italic: "#f0f6fc",
        list: "#f2cc60",
      },
      metaDiffRange: "#d2a8ff",
      storageModifierImport: "#f0f6fc",
      string: "#a5d6ff",
      stringRegexp: "#7ee787",
      sublimelinterGutterMark: "#3d444d",
      variable: "#ffa657",
    },
  },
  codeMirror: {
    syntax: {
      fgColor: {
        comment: "#656c76",
        constant: "#79c0ff",
        entity: "#d2a8ff",
        keyword: "#ff7b72",
        storage: "#ff7b72",
        string: "#a5d6ff",
        support: "#79c0ff",
        variable: "#ffa657",
      },
    },
  },
};
/** GitHub 柔和深色主题 */
export const githubSoftDarkGithubColors: GithubColor = {
  isDarkTheme: true,
  avatar: { bgColor: "#cdd9e51a", borderColor: "#cdd9e526" },
  display: githubDarkGithubColors.display,
  diffBlob: {
    addtionNum: { bgColor: "#57ab5a4d" },
    addtionWord: { bgColor: "#46954a66" },
    deletionNum: { bgColor: "#e5534b4d" },
    deletionWord: { bgColor: "#e5534b66" },
    hunkNum: { bgColor: { rest: "#143d79" } },
  },
  fgColor: {
    accent: "#478be6",
    attention: "#c69026",
    danger: "#e5534b",
    default: "#d1d7e0",
    disabled: "#656c76",
    done: "#986ee2",
    muted: "#9198a1",
    neutral: "#9198a1",
    severe: "#cc6b2c",
    sponsors: "#c96198",
    success: "#57ab5a",
    black: "#010409",
    white: "#cdd9e5",
    onEmphasis: "#f0f6fc",
  },
  bgColor: {
    accent: { emphasis: "#316dca", muted: "#4184e41a" },
    attention: { emphasis: "#966600", muted: "#ae7c1426" },
    danger: { emphasis: "#c93c37", muted: "#e5534b1a" },
    default: "#212830",
    done: { emphasis: "#8256d0" },
    emphasis: "#3d444d",
    muted: "#262c36",
    neutral: githubDarkGithubColors.bgColor.neutral,
    success: { emphasis: "#347d39", muted: "#46954a26" },
    inset: "#151b23",
  },
  borderColor: {
    accent: { emphasis: "#316dca" },
    attention: { emphasis: "#966600" },
    default: "#3d444d",
    done: { emphasis: "#8256d0" },
    success: { emphasis: "#347d39" },
    muted: "#3d444db3",
    translucent: "#cdd9e526",
    emphasis: "#656c76",
  },
  button: {
    primary: {
      fgColor: { accent: "#57ab5a", rest: "#ffffff" },
      bgColor: { rest: themeVars.github.bgColor.success.emphasis, hover: "#3b8640", active: "#428f46" },
    },
    danger: {
      fgColor: { rest: "#ea5c53", hover: "#ffffff" },
      bgColor: { hover: "#ad2e2c", active: themeVars.github.bgColor.danger.emphasis },
    },
    star: { iconColor: "#daaa3f" },
  },
  control: {
    bgColor: { active: "#3d444d", hover: "#2f3742", rest: "#2a313c" },
    transparent: { bgColor: { active: "#656c7633", hover: "#656c7626", selected: "#656c761a" } },
  },
  controlTrack: { bgColor: { rest: "#151b23" } },
  controlKnob: { bgColor: { rest: "#2a313c" } },
  shadow: githubDarkGithubColors.shadow,
  overlay: { backdrop: { bgColor: "#262c3666" }, bgColor: "#2a313c" },
  underlineNav: { borderColor: { active: "#ec775c" } },
  contribution: {
    default: {
      bgColor: { num0: "#2a313c", num1: "#1b4721", num2: "#2b6a30", num3: "#46954a", num4: "#6bc46d" },
      borderColor: { num0: "#0104090d" },
    },
  },
};
/** GitHub 柔和深色主题语法高亮 */
export const githubSoftDarkSyntax: GitHubSyntax = {
  prettyLights: {
    syntax: {
      brackethighlighter: { angle: "#9198a1", unmatched: "#e5534b" },
      carriage: { return: { bg: "#ad2e2c", text: "#f0f6fc" } },
      comment: "#9198a1",
      constant: "#6cb6ff",
      constantOtherReferenceLink: "#96d0ff",
      entity: "#dcbdfb",
      entityTag: "#8ddb8c",
      invalid: { illegal: { bg: "#922323", text: "#f0f6fc" } },
      keyword: "#f47067",
      markup: {
        bold: "#f0f6fc",
        changed: { bg: "#682d0f", text: "#ffddb0" },
        deleted: { bg: "#78191b", text: "#ffd8d3" },
        heading: "#316dca",
        ignored: { bg: "#255ab2", text: "#f0f6fc" },
        inserted: { bg: "#1b4721", text: "#b4f1b4" },
        italic: "#f0f6fc",
        list: "#eac55f",
      },
      metaDiffRange: "#dcbdfb",
      storageModifierImport: "#f0f6fc",
      string: "#96d0ff",
      stringRegexp: "#8ddb8c",
      sublimelinterGutterMark: "#3d444d",
      variable: "#f69d50",
    },
  },
  codeMirror: {
    syntax: {
      fgColor: {
        comment: "#656c76",
        constant: "#6cb6ff",
        entity: "#dcbdfb",
        keyword: "#f47067",
        storage: "#f47067",
        string: "#96d0ff",
        support: "#6cb6ff",
        variable: "#f69d50",
      },
    },
  },
};
/** GitHub 深色主题红绿色盲变体 */
export const githubColorblindDarkGithubColors: GithubColor = {
  isDarkTheme: true,
  avatar: githubDarkGithubColors.avatar,
  display: githubDarkGithubColors.display,
  diffBlob: {
    addtionNum: { bgColor: "#58a6ff4d" },
    addtionWord: { bgColor: "#388bfd66" },
    deletionNum: { bgColor: "#db6d284d" },
    deletionWord: { bgColor: "#db6d2866" },
    hunkNum: { bgColor: { rest: "#2f3742" } },
  },
  fgColor: {
    ...githubDarkGithubColors.fgColor,
    danger: "#f0883e",
    success: "#58a6ff",
  },
  bgColor: {
    ...githubDarkGithubColors.bgColor,
    danger: { emphasis: "#bd561d", muted: "#db6d281a" },
    success: { emphasis: "#1f6feb", muted: "#388bfd33" },
  },
  borderColor: {
    ...githubDarkGithubColors.borderColor,
    success: { emphasis: "#1f6feb" },
  },
  button: {
    primary: {
      fgColor: { accent: "#58a6ff", rest: "#ffffff" },
      bgColor: { rest: themeVars.github.bgColor.success.emphasis, hover: "#2a7aef", active: "#3685f3" },
    },
    danger: {
      fgColor: { rest: "#f0883e", hover: "#ffffff" },
      bgColor: { hover: "#9b4215", active: themeVars.github.bgColor.danger.emphasis },
    },
    star: githubDarkGithubColors.button.star,
  },
  control: githubDarkGithubColors.control,
  controlTrack: githubDarkGithubColors.controlTrack,
  controlKnob: githubDarkGithubColors.controlKnob,
  shadow: githubDarkGithubColors.shadow,
  overlay: githubDarkGithubColors.overlay,
  underlineNav: githubDarkGithubColors.underlineNav,
  contribution: githubDarkGithubColors.contribution,
};
/** GitHub 深色主题红绿色盲变体语法高亮 */
export const githubColorblindDarkSyntax: GitHubSyntax = {
  prettyLights: {
    syntax: {
      brackethighlighter: { angle: "#9198a1", unmatched: "#db6d28" },
      carriage: { return: { bg: "#9b4215", text: "#f0f6fc" } },
      comment: "#9198a1",
      constant: "#79c0ff",
      constantOtherReferenceLink: "#a5d6ff",
      entity: "#d2a8ff",
      entityTag: "#a5d6ff",
      invalid: { illegal: { bg: "#762d0a", text: "#f0f6fc" } },
      keyword: "#f0883e",
      markup: {
        bold: "#f0f6fc",
        changed: { bg: "#5a1e02", text: "#ffdfb6" },
        deleted: { bg: "#5a1e02", text: "#ffdfb6" },
        heading: "#1f6feb",
        ignored: { bg: "#1158c7", text: "#f0f6fc" },
        inserted: { bg: "#0c2d6b", text: "#cae8ff" },
        italic: "#f0f6fc",
        list: "#f2cc60",
      },
      metaDiffRange: "#d2a8ff",
      storageModifierImport: "#f0f6fc",
      string: "#a5d6ff",
      stringRegexp: "#a5d6ff",
      sublimelinterGutterMark: "#3d444d",
      variable: "#ffa657",
    },
  },
  codeMirror: {
    syntax: {
      fgColor: {
        ...githubDarkSyntax.codeMirror.syntax.fgColor,
        variable: "#ffa657",
      },
    },
  },
};
/** GitHub 深色主题蓝黄色盲变体 */
export const githubTritanopiaDarkGithubColors: GithubColor = {
  ...githubColorblindDarkGithubColors,
  diffBlob: {
    ...githubColorblindDarkGithubColors.diffBlob,
    deletionNum: githubDarkGithubColors.diffBlob.deletionNum,
    deletionWord: githubDarkGithubColors.diffBlob.deletionWord,
  },
  fgColor: {
    ...githubColorblindDarkGithubColors.fgColor,
    danger: githubDarkGithubColors.fgColor.danger,
  },
  bgColor: {
    ...githubColorblindDarkGithubColors.bgColor,
    danger: githubDarkGithubColors.bgColor.danger,
  },
  button: {
    ...githubColorblindDarkGithubColors.button,
    danger: githubDarkGithubColors.button.danger,
  },
};
/** GitHub 深色主题蓝黄色盲变体语法高亮 */
export const githubTritanopiaDarkSyntax: GitHubSyntax = {
  prettyLights: {
    syntax: {
      ...githubDarkSyntax.prettyLights.syntax,
      markup: {
        ...githubDarkSyntax.prettyLights.syntax.markup,
        changed: { bg: "#67060c", text: "#ffdcd7" },
        inserted: githubColorblindDarkSyntax.prettyLights.syntax.markup.inserted,
      },
      stringRegexp: githubColorblindDarkSyntax.prettyLights.syntax.stringRegexp,
      variable: "#ffa198",
    },
  },
  codeMirror: {
    syntax: {
      fgColor: {
        comment: "#656c76",
        constant: "#79c0ff",
        entity: "#d2a8ff",
        keyword: "#ff7b72",
        storage: "#ff7b72",
        string: "#a5d6ff",
        support: "#79c0ff",
        variable: "#ffa198",
      },
    },
  },
};

/** GitHub 深色主题 */
export const githubDark = defineTheme({
  colorType: "github",
  themeColor: githubDarkGithubColors,
  syntaxColor: githubDarkSyntax,
});

/** GitHub 柔和深色主题 */
export const githubSoftDark = defineTheme({
  colorType: "github",
  themeColor: githubSoftDarkGithubColors,
  syntaxColor: githubSoftDarkSyntax,
});
/** GitHub 深色主题 红绿色盲变体*/
export const githubColorblindDark = defineTheme({
  colorType: "github",
  themeColor: githubColorblindDarkGithubColors,
  syntaxColor: githubColorblindDarkSyntax,
});
/** GitHub 深色主题 蓝黄色盲变体 */
export const githubTritanopiaDark = defineTheme({
  colorType: "github",
  themeColor: githubTritanopiaDarkGithubColors,
  syntaxColor: githubTritanopiaDarkSyntax,
});
