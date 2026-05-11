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
import * as githubDark from "./themes/githubDark";
import * as githubLight from "./themes/githubLight";
import * as githubPink from "./themes/githubPink";

export default defineThemeConfig([
  {
    themeSeriesName: "base",
    themes: {
      dark: { theme: githubDark.githubDarkTheme },
      light: { theme: githubLight.githubLightTheme },
      "soft-dark": { theme: githubDark.githubSoftDarkTheme },
    },
  },
  {
    themeSeriesName: "colorblind",
    autoTheme: { displayName: "Auto Protanopia And Deuteranopia", colorblindType: "red-green" },
    themes: {
      dark: {
        displayName: "Dark Protanopia And Deuteranopia",
        colorblindType: "red-green",
        theme: githubDark.githubColorblindDarkTheme,
      },
      light: {
        displayName: "Light Protanopia And Deuteranopia",
        colorblindType: "red-green",
        theme: githubLight.githubColorblindLightTheme,
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
        theme: githubDark.githubTritanopiaDarkTheme,
      },
      light: {
        displayName: "Light Tritanopia",
        colorblindType: "blue-yellow",
        theme: githubLight.githubTritanopiaLightTheme,
      },
    },
  },
  {
    themeSeriesName: "pink",
    themes: {
      dark: { theme: githubPink.githubPinkDarkTheme },
      light: { theme: githubPink.githubPinkLightTheme },
      "soft-dark": { theme: githubPink.githubPinkSoftDarkTheme },
    },
  },
]);
