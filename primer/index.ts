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

import type { MapLeafNodes } from "@gitea-github-theme/core";

import dark from "./dark";
import darkColorblind from "./dark-colorblind";
import darkColorblindHighContrast from "./dark-colorblind-high-contrast";
import darkDimmed from "./dark-dimmed";
import darkDimmedHighContrast from "./dark-dimmed-high-contrast";
import darkHighContrast from "./dark-high-contrast";
import darkTritanopia from "./dark-tritanopia";
import darkTritanopiaHighContrast from "./dark-tritanopia-high-contrast";

import light from "./light";
import lightColorblind from "./light-colorblind";
import lightColorblindHighContrast from "./light-colorblind-high-contrast";
import lightHighContrast from "./light-high-contrast";
import lightTritanopia from "./light-tritanopia";
import lightTritanopiaHighContrast from "./light-tritanopia-high-contrast";

export type Primer = MapLeafNodes<typeof dark, string>;

export default {
  dark,
  darkColorblind,
  darkColorblindHighContrast,
  darkDimmed,
  darkDimmedHighContrast,
  darkHighContrast,
  darkTritanopia,
  darkTritanopiaHighContrast,
  light,
  lightColorblind,
  lightColorblindHighContrast,
  lightHighContrast,
  lightTritanopia,
  lightTritanopiaHighContrast,
};
