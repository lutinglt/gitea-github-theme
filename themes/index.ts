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

import {
  catppuccinFrappeTheme,
  catppuccinLatteTheme,
  catppuccinMacchiatoTheme,
  catppuccinMochaTheme,
} from "./catppuccin";
import { giteaDarkColor, giteaDarkTheme } from "./giteaDark";
import { giteaLightColor, giteaLightTheme } from "./giteaLight";
import {
  githubColorblindDarkTheme,
  githubColorblindLightTheme,
  githubDarkColorblindHighContrastTheme,
  githubDarkHighContrastTheme,
  githubDarkTheme,
  githubDarkTritanopiaHighContrastTheme,
  githubLightColorblindHighContrastTheme,
  githubLightHighContrastTheme,
  githubLightTheme,
  githubLightTritanopiaHighContrastTheme,
  githubPinkDarkTheme,
  githubPinkLightTheme,
  githubPinkSoftDarkTheme,
  githubSoftDarkHighContrastTheme,
  githubSoftDarkTheme,
  githubTritanopiaDarkTheme,
  githubTritanopiaLightTheme,
} from "./github";

export const giteaColor = {
  dark: giteaDarkColor,
  light: giteaLightColor,
};

export default {
  github: {
    dark: githubDarkTheme,
    light: githubLightTheme,
    softDark: githubSoftDarkTheme,
    colorblind: {
      dark: githubColorblindDarkTheme,
      light: githubColorblindLightTheme,
    },
    tritanopia: {
      dark: githubTritanopiaDarkTheme,
      light: githubTritanopiaLightTheme,
    },
    pink: {
      dark: githubPinkDarkTheme,
      light: githubPinkLightTheme,
      softDark: githubPinkSoftDarkTheme,
    },
    highContrast: {
      dark: githubDarkHighContrastTheme,
      light: githubLightHighContrastTheme,
      softDark: githubSoftDarkHighContrastTheme,
      colorblind: {
        dark: githubDarkColorblindHighContrastTheme,
        light: githubLightColorblindHighContrastTheme,
      },
      tritanopia: {
        dark: githubDarkTritanopiaHighContrastTheme,
        light: githubLightTritanopiaHighContrastTheme,
      },
    },
  },
  gitea: {
    dark: giteaDarkTheme,
    light: giteaLightTheme,
  },
  catppuccin: {
    latte: catppuccinLatteTheme,
    frappe: catppuccinFrappeTheme,
    macchiato: catppuccinMacchiatoTheme,
    mocha: catppuccinMochaTheme,
  },
};
