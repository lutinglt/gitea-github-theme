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

/** 使用 vanilla-extract 适配器序列化一个扁平 StyleRule 为 CSS 属性行 */
function captureStyleRule(style: StyleRule): string {
  const captured: unknown[] = [];

  setAdapter({
    appendCss: css => captured.push(css),
    registerClassName: () => {},
    registerComposition: () => {},
    markCompositionUsed: () => {},
    onEndFileScope: () => {},
    getIdentOption: () => "short",
  });

  setFileScope("");
  globalStyle("_x", style);
  endFileScope();
  removeAdapter();

  const css = transformCss({
    localClassNames: [],
    composedClassLists: [],
    cssObjs: captured as Parameters<typeof transformCss>[0]["cssObjs"],
  }).join("");

  // 去掉 "_x { ... }" 外壳，只留内部属性
  const inner = css
    .replace(/^_x\s*\{/, "")
    .replace(/\}\s*$/, "")
    .trim();
  return inner ? inner + ";" : "";
}

// ─── toCSS ──────────────────────────────────────────────

type SelectorStyleRule = {
  [key: string]: StyleRule | SelectorStyleRule;
};

type SelectorsStyleRule = StyleRule | SelectorStyleRule;

declare const CSSBrand: unique symbol;
export type CSSObject = { [CSSBrand]: true };

/**
 * 将 SelectorsStyleRule 转为可复用的对象：
 * - 属性访问：保留原值（如 style.padding → "0px 6px"）
 * - 字符串插值：自动输出 CSS 片段（如 `${style}` → "padding:0px 6px;"）
 */
export function toCSS<T extends SelectorsStyleRule>(input: T): T & CSSObject {
  const flat: Record<string, string | number> = {};
  const nested: Record<string, SelectorsStyleRule> = {};

  // Object.entries 对无索引签名的 StyleRule 只能返回 any/unknown，
  // 这里做最小断言：entry 的值是 CSS 叶子值（string|number）或嵌套对象
  for (const [key, val] of Object.entries(input) as [string, string | number | SelectorsStyleRule][]) {
    if (val === null || val === undefined) continue;
    if (typeof val === "object") {
      nested[key] = toCSS(val);
    } else {
      flat[key] = val;
    }
  }

  // 构建 CSS 字符串
  const cssParts: string[] = [];
  if (Object.keys(flat).length > 0) {
    cssParts.push(captureStyleRule(flat));
  }
  for (const [key, val] of Object.entries(nested)) {
    cssParts.push(`${key}{${String(val)}}`);
  }
  const cssText = cssParts.join("");

  input.toString = () => cssText;

  return input as T & CSSObject;
}
