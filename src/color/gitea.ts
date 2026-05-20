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

import type { ThemeVars } from "src/core";
import { themeVars2GitHub } from "src/functions";
import type { Ansi, Console, Diff, Message, Named, Other, Primary, Secondary } from "src/types";

export type GiteaColor = {
  isDarkTheme: boolean;
  primary: Primary;
  secondary: Secondary;
  named: Named;
  message: Message;
  ansi: Ansi;
  console: Console;
  diff: Diff;
  other: Other;
};

export function gitea2ThemeVars(giteaColor: GiteaColor): ThemeVars {
  return {
    isDarkTheme: giteaColor.isDarkTheme,
    color: {
      ...giteaColor.other,
      ...giteaColor.message,
      ...giteaColor.named,
      primary: giteaColor.primary,
      secondary: giteaColor.secondary,
      ansi: giteaColor.ansi,
      console: giteaColor.console,
      diff: giteaColor.diff,
    },
    github: themeVars2GitHub(giteaColor.isDarkTheme, {
      primary: giteaColor.primary.self,
      red_badge_bg: giteaColor.named.red.badge.bg,
    }),
  };
}
