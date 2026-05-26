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

import { assertVarName } from "@vanilla-extract/css";
import type { CSSVarFunction } from "../core";

type CSSVarName = `--${string}`;
/** 提取 CSS 变量名
 * @param cssvar `var(--${string})`
 * @returns `--${string}`
 */
export function extractVarName(cssvar: CSSVarFunction): CSSVarName {
  assertVarName(cssvar);
  const varName = cssvar.replace("var(--", "").replace(")", "");
  return `--${varName}`;
}
