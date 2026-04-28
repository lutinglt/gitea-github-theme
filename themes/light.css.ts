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

import { defineTheme, themeVars } from "src";
import { github2ThemeColor, type GithubColor } from "src/core/github";

export const lightGithubColors: GithubColor = {
  isDarkTheme: false,
  avatar: {
    bgColor: "#ffffff",
    borderColor: "#1f232826",
  },
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

export const lightColors = github2ThemeColor(lightGithubColors);

export default defineTheme(lightColors);
