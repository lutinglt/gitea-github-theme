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

import type { StyleRule } from "@vanilla-extract/css";
import { globalStyle } from "@vanilla-extract/css";
import { removeAdapter, setAdapter } from "@vanilla-extract/css/adapter";
import { endFileScope, setFileScope } from "@vanilla-extract/css/fileScope";
import { transformCss } from "@vanilla-extract/css/transformCss";
import { getCallerInfo } from "./utils";

type CSS = Parameters<typeof transformCss>[0]["cssObjs"][number];
type Composition = Parameters<typeof transformCss>[0]["composedClassLists"][number];

/** 执行 vanilla-extract API 并序列化为 CSS 字符串 */
export function compileCSS(compileFn: () => void): string {
  const capturedCssObjs: CSS[] = [];
  const localClassNames = new Set<string>();
  const composedClassLists: Composition[] = [];

  setAdapter({
    appendCss: css => capturedCssObjs.push(css),
    registerClassName: className => localClassNames.add(className),
    registerComposition: composition => composedClassLists.push(composition),
    markCompositionUsed: () => {},
    onEndFileScope: () => {},
    getIdentOption:
      () =>
      ({ debugId }) =>
        `${debugId}`,
  });
  setFileScope(getCallerInfo(1));

  compileFn();

  endFileScope();
  removeAdapter();

  return transformCss({
    localClassNames: Array.from(localClassNames),
    composedClassLists,
    cssObjs: capturedCssObjs,
  }).join("\n");
}

/** 使用 vanilla-extract 适配器序列化一个扁平 StyleRule 为 CSS 属性行 */
export function captureStyle(style: StyleRule): string {
  const css = compileCSS(() => globalStyle("_CAPTURED_STYLE", style));
  const inner = css
    .replace(/^_CAPTURED_STYLE\s*\{/, "")
    .replace(/\}\s*$/, "")
    .trim();
  return inner ? inner + ";" : "";
}
