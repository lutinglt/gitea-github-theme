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

import { createGlobalThemeContract } from "@vanilla-extract/css";
import color from "./color";

function varMapper(prefix: string | null = null) {
  return (value: string | null, path: string[]) => {
    if (value === null) {
      path = path.filter(item => item !== "self");
      path = path.map(item => item.replace(/^num/, ""));
      value = path.join("-");
    }
    if (prefix) value = `${prefix}-${value}`;
    return value;
  };
}

const vars = {
  /** Gitea 主题的属性 */
  color: {
    ...color.other,
    ...color.message,
    ...color.named,
    primary: color.primary,
    secondary: color.secondary,
    /** Actions 日志 ANSI 颜色 */
    ansi: color.ansi,
    console: color.console,
    diff: color.diff,
    series: { num16: color.series16 },
  },
  github: color.github,
};

const otherVars = {
  border: { radius: null },
  color: { ...color.otherAuto },
  checkbox: { size: null },
  gap: { inline: null, block: null },
};

const customVars = {
  branchMenuWidth: "branch-menu-width",
  cloneMenuWidth: "clone-menu-width",
  userMenuWidth: "user-menu-width",
  explore: { repolistColumns: "explore-repolist-columns", userlistColumns: "explore-userlist-columns" },
  userRepolistColumns: "user-repolist-columns",
  org: { repolistColumns: "org-repolist-columns", userlistColumns: "org-userlist-columns" },
};

export const themeVars = createGlobalThemeContract(vars, varMapper());
export const otherThemeVars = createGlobalThemeContract(otherVars, varMapper());
export const customThemeVars = createGlobalThemeContract(customVars, varMapper("custom"));
export const chromaVars = createGlobalThemeContract(color.chroma, varMapper("chroma"));
export const codeMirrorVars = createGlobalThemeContract(color.codeMirror, varMapper("codeMirror"));
export const syntaxVars = createGlobalThemeContract(color.syntax, varMapper("color-syntax"));
