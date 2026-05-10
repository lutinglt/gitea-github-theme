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

import { createGlobalTheme } from "@vanilla-extract/css";
import { selectors } from "src";

export type ColorblindType = "red-green" | "blue-yellow";
export type GiteaThemeMeta = {
  colorScheme: "dark" | "light" | "auto";
  displayName: string;
  colorblindType?: ColorblindType;
};
/** 创建 Gitea 主题元信息 */
export function createThemeMetaInfo(meta: GiteaThemeMeta) {
  createGlobalTheme(selectors.metaInfo, {
    theme: {
      color: {
        scheme: meta.colorScheme,
      },
      display: {
        name: meta.displayName,
      },
      ...(meta.colorblindType !== undefined
        ? {
            colorblind: {
              type: meta.colorblindType,
            },
          }
        : {}),
    },
  });
}
