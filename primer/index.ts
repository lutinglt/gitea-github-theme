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
