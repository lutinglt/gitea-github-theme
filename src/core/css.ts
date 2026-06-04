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
import { transform } from "lightningcss";
import { getCallerInfo } from "../utils";
import { captureStyle } from "../vanilla-extract";

declare const CSSBrand: unique symbol;
type CSSObject = { [CSSBrand]: true };
type CSSPrimitive = string | number;
type CSSInterpolation = CSSPrimitive | CSSObject | undefined;
type SelectorStyleRule =
  | StyleRule
  | {
      [key: string]: StyleRule | SelectorStyleRule;
    };

const SHARED_CACHE_KEY = "__GITEA_GITHUB_THEME_CSS_CACHE__";
const g = globalThis as Record<string, unknown>;
const cssCache: string[] = (g[SHARED_CACHE_KEY] as string[]) || (g[SHARED_CACHE_KEY] = []);

/**
 * css 模板字符串 —— 类式 linaria 的 css tag，用于 vscode-styled-components 高亮。
 * 运行时校验 CSS 语法，收集输出到缓存，供 flushCSS() 获取。
 */
export function css(strings: TemplateStringsArray, ...values: CSSInterpolation[]): string {
  const result = strings.reduce((acc, s, i) => acc + s + String(values[i] ?? ""), "");
  // 构建时校验 CSS 语法
  transform({ filename: getCallerInfo(1), code: Buffer.from(result) });
  cssCache.push(result);
  return result;
}

/** 构建时一次性获取所有通过 css() 收集的 CSS */
export function flushCSS(): string {
  const all = cssCache.join("\n");
  cssCache.length = 0;
  return all;
}

/** cssStyle 用于 css 模板字符串的插值
 * 提取可复用的样式, 并保留 vanilla-extract 的类型检查
 * - 属性访问：保留原值（如 style.padding → "0px 6px"）
 * - 字符串插值：自动输出 CSS 片段（如 `${style}` → "padding:0px 6px;"）
 */
export function cssStyle<T extends SelectorStyleRule>(input: T): T & CSSObject {
  const flat: Record<string, CSSPrimitive> = {};
  const nested: Record<string, SelectorStyleRule> = {};

  // Object.entries 对无索引签名的 StyleRule 只能返回 any/unknown，
  // 这里做最小断言：entry 的值是 CSS 叶子值（string|number）或嵌套对象
  for (const [key, val] of Object.entries(input) as [string, CSSPrimitive | SelectorStyleRule][]) {
    if (val === null || val === undefined) continue;
    if (typeof val === "object") {
      nested[key] = cssStyle(val);
    } else {
      flat[key] = val;
    }
  }

  // 构建 CSS 字符串
  const cssParts: string[] = [];
  if (Object.keys(flat).length > 0) {
    cssParts.push(captureStyle(flat));
  }
  for (const [key, val] of Object.entries(nested)) {
    cssParts.push(`${key}{${String(val)}}`);
  }
  const cssText = cssParts.join("");
  input.toString = () => cssText;

  return input as T & CSSObject;
}
