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

import selectors from "./selectors";

export { display2GitHubColor, github2ThemeColor, catppuccin2ThemeColor } from "./palette";
export type { DisplayColor, GitHubColor, GitHubSyntax, GiteaColor, ThemeColor } from "./palette";
export { createTheme, defineTheme } from "./core";
export { extractVarName, scaleColorLight } from "./functions";
export { createThemeMetaInfo } from "./styles";
export { chromaVars, customThemeVars, otherThemeVars, syntaxVars, themeVars } from "./types";
export type { Ansi, Chroma, Console, Diff, GitHub, Message, Named, Other, Primary, Secondary, Syntax } from "./types";
export { defineThemeConfig } from "./vite-plugin";
export { selectors };
