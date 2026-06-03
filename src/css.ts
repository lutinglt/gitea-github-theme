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

import * as lightningcss from "lightningcss";
import type { CSSObject } from "./toCSS";

const sharedCacheKey = "__GITEA_GITHUB_THEME_CSS_CACHE__";
const g = globalThis as Record<string, unknown>;
const cssCache: string[] = (g[sharedCacheKey] as string[]) || (g[sharedCacheKey] = []);

type CSSInterpolation = string | number | boolean | CSSObject | undefined | null;

function getCallerInfo(): string {
  const stack = new Error().stack?.split("\n") || [];
  // stack[0] = "Error"
  // stack[1] = "    at getCallerInfo (css.ts:...)"
  // stack[2] = "    at css (css.ts:...)"
  // stack[3] = "    at <caller> (styles/components/heatmap.ts:23:18)" ← 目标
  const frame = stack[3] || "";
  const match = frame.match(/\((.+?):(\d+):(\d+)\)/) ?? frame.match(/at\s+(.+?):(\d+):(\d+)/);
  return match ? `${match[1]}:${match[2]}` : frame.trim() || "unknown";
}

/**
 * css 模板字符串 —— 类式 linaria 的 css tag，用于 vscode-styled-components 高亮。
 * 运行时校验 CSS 语法，收集输出到缓存，供 flushCSS() 获取。
 */
export function css(strings: TemplateStringsArray, ...values: CSSInterpolation[]): string {
  const result = strings.reduce((acc, s, i) => acc + s + String(values[i] ?? ""), "");
  // 构建时校验 CSS 语法
  lightningcss.transform({ filename: getCallerInfo(), code: Buffer.from(result) });
  cssCache.push(result);
  return result;
}

/** 构建时一次性获取所有通过 css() 收集的 CSS */
export function flushCSS(): string {
  const all = cssCache.join("\n");
  cssCache.length = 0;
  return all;
}
