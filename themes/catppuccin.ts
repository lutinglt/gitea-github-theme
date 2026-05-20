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

import { flavors } from "@catppuccin/palette";
import { catppuccin2ThemeColor, defineTheme } from "src";
import { giteaDarkSyntax } from "./giteaDark";
import { giteaLightSyntax } from "./giteaLight";

/** Gitea GitHub Theme 拓展 GitHub 粉色深色主题 */
export const catppuccinLatteTheme = defineTheme({
  colorType: "theme",
  themeColor: catppuccin2ThemeColor(flavors.latte),
  syntaxColor: giteaLightSyntax,
});
/** Gitea GitHub Theme 拓展 GitHub 粉色柔和深色主题 */
export const catppuccinFrappeTheme = defineTheme({
  colorType: "theme",
  themeColor: catppuccin2ThemeColor(flavors.frappe),
  syntaxColor: giteaDarkSyntax,
});
/** Gitea GitHub Theme 拓展 GitHub 粉色浅色主题 */
export const catppuccinMacchiatoTheme = defineTheme({
  colorType: "theme",
  themeColor: catppuccin2ThemeColor(flavors.macchiato),
  syntaxColor: giteaDarkSyntax,
});
/** Gitea GitHub Theme 拓展 GitHub 粉色浅色主题 */
export const catppuccinMochaTheme = defineTheme({
  colorType: "theme",
  themeColor: catppuccin2ThemeColor(flavors.mocha),
  syntaxColor: giteaDarkSyntax,
});

export default {
  catppuccinLatteTheme,
  catppuccinFrappeTheme,
  catppuccinMacchiatoTheme,
  catppuccinMochaTheme,
};
