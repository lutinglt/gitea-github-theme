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

import { defineThemeConfig } from "src";
import themes from "themes";

export default defineThemeConfig([
  {
    themeSeriesName: "base",
    themes: {
      dark: { theme: themes.github.dark },
      light: { theme: themes.github.light },
      "soft-dark": { theme: themes.github.softDark },
    },
  },
  {
    themeSeriesName: "colorblind",
    autoTheme: { displayName: "Auto Protanopia And Deuteranopia", colorblindType: "red-green" },
    themes: {
      dark: {
        displayName: "Dark Protanopia And Deuteranopia",
        colorblindType: "red-green",
        theme: themes.github.colorblind.dark,
      },
      light: {
        displayName: "Light Protanopia And Deuteranopia",
        colorblindType: "red-green",
        theme: themes.github.colorblind.light,
      },
    },
  },
  {
    themeSeriesName: "tritanopia",
    autoTheme: { displayName: "Auto Tritanopia", colorblindType: "blue-yellow" },
    themes: {
      dark: {
        displayName: "Dark Tritanopia",
        colorblindType: "blue-yellow",
        theme: themes.github.tritanopia.dark,
      },
      light: {
        displayName: "Light Tritanopia",
        colorblindType: "blue-yellow",
        theme: themes.github.tritanopia.light,
      },
    },
  },
  {
    themeSeriesName: "pink",
    themes: {
      dark: { theme: themes.github.pink.dark },
      light: { theme: themes.github.pink.light },
      "soft-dark": { theme: themes.github.pink.softDark },
    },
  },
  {
    themeSeriesName: "gitea",
    themes: {
      dark: { theme: themes.gitea.dark },
      light: { theme: themes.gitea.light },
    },
  },
  {
    themeSeriesName: "catppuccin",
    themes: {
      dark: { themeName: "mocha", theme: themes.catppuccin.mocha },
      light: { themeName: "latte", theme: themes.catppuccin.latte },
      frappe: { theme: themes.catppuccin.frappe },
      macchiato: { theme: themes.catppuccin.macchiato },
    },
  },
]);
