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

import type { CSSVarFunction } from "@lutinglt/gitea-github-theme/core";
import { describe, expect, it } from "vitest";
import { extractVarName } from "./var";

describe("extractVarName", () => {
  it("提取简单 CSS 变量名", () => {
    const input = "var(--color-primary)" as CSSVarFunction;
    expect(extractVarName(input)).toBe("--color-primary");
  });

  it("提取连字符分隔的 CSS 变量名", () => {
    const input = "var(--color-primary-dark-1)" as CSSVarFunction;
    expect(extractVarName(input)).toBe("--color-primary-dark-1");
  });

  it("提取 github 命名空间的变量", () => {
    const input = "var(--github-button-primary-bgColor-rest)" as CSSVarFunction;
    expect(extractVarName(input)).toBe("--github-button-primary-bgColor-rest");
  });

  it("提取 chroma 高亮变量", () => {
    const input = "var(--chroma-keyword)" as CSSVarFunction;
    expect(extractVarName(input)).toBe("--chroma-keyword");
  });

  it("提取 custom 自定义变量", () => {
    const input = "var(--custom-clone-menu-width)" as CSSVarFunction;
    expect(extractVarName(input)).toBe("--custom-clone-menu-width");
  });

  it("提取有数字后缀的变量", () => {
    const input = "var(--color-primary-alpha-10)" as CSSVarFunction;
    expect(extractVarName(input)).toBe("--color-primary-alpha-10");
  });

  it("非法格式会触发 assertVarName 断言失败", () => {
    // 不是 var(--xxx) 格式会抛出异常
    expect(() => extractVarName("not-a-var" as unknown as CSSVarFunction)).toThrow();
  });

  it("没有闭合括号的格式会抛出异常", () => {
    expect(() => extractVarName("var(--color" as unknown as CSSVarFunction)).toThrow();
  });

  it("空 var() 会抛出异常", () => {
    expect(() => extractVarName("var()" as unknown as CSSVarFunction)).toThrow();
  });
});
