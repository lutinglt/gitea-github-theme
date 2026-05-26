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

import type { Primer } from "@gitea-github-theme/primer";
import type { GitHubColor } from "./github";
import type { GitHubSyntax } from "./githubSyntax";

export function primer2GitHubColor(primer: Primer, dark: boolean = false): GitHubColor {
  return {
    isDarkTheme: dark,
    ...primer,
    button: {
      ...primer.button,
      primary: {
        ...primer.button.primary,
        fgColor: {
          ...primer.button.primary.fgColor,
          // 此为主题自定义值, 特殊绿色按钮颜色
          accent: primer.fgColor.success,
        },
      },
    },
    shadow: {
      ...primer.shadow,
      // 特殊的阴影颜色, 因 Gitea 实现无法使用原始值, 提取对应值交给后续生成
      floating: { ...primer.shadow.floating, small: dark ? "#01040966" : "#25292e0a" },
      resting: { ...primer.shadow.resting, medium: dark ? "#010409cc" : "#25292e1f" },
    },
  };
}

export function primer2GitHubSyntax(primer: Primer): GitHubSyntax {
  return {
    prettyLights: primer.prettylights,
    codeMirror: primer.codeMirror,
  };
}
