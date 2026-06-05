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

import { describe, expect, it } from "vitest";
import { css, cssCombine, cssStyle } from "./css";

// ============================================================================
// css() — 构建时 CSS 语法校验的模板标签
// ============================================================================

describe("css", () => {
  it("返回 CSS 字符串 (lightningcss 校验通过)", () => {
    const result = css`
      body {
        color: red;
      }
    `;
    expect(typeof result).toBe("string");
    expect(result).toContain("body");
    expect(result).toContain("color");
    expect(result).toContain("red");
  });

  it("支持插值", () => {
    const bg = "#ff0000";
    const result = css`
      .box {
        background-color: ${bg};
      }
    `;
    expect(result).toContain("#ff0000");
    expect(result).toContain("background-color");
  });

  it("支持多个插值", () => {
    const color = "blue";
    const size = "16px";
    const result = css`
      .text {
        color: ${color};
        font-size: ${size};
      }
    `;
    expect(result).toContain("blue");
    expect(result).toContain("16px");
  });

  it("空模板字符串", () => {
    const result = css``;
    expect(result).toBe("");
  });

  it("支持数字插值", () => {
    const width = 100;
    const result = css`
      .container {
        max-width: ${width}px;
      }
    `;
    expect(result).toContain("100px");
  });

  it("字符串化的 undefined 值进入 CSS (lightningcss 可能规范化处理)", () => {
    // String(undefined) = "undefined"，这是一段仍然能被 tokenize 的 CSS 文本
    // lightningcss 可能在 transform 时对非法值采取宽松策略
    const result = css`
      .box {
        color: ${undefined};
      }
    `;
    // 至少模板拼接结果包含 .box 选择器
    expect(result).toContain(".box");
    expect(result).toContain("color: ;");
    expect(typeof result).toBe("string");
  });

  it("支持 CSS 嵌套语法", () => {
    const result = css`
      .parent {
        color: red;
        & .child {
          color: blue;
        }
      }
    `;
    expect(result).toContain(".parent");
    expect(result).toContain(".child");
  });

  it("支持 @media 查询", () => {
    const result = css`
      @media (max-width: 767.98px) {
        .navbar {
          padding: 8px;
        }
      }
    `;
    expect(result).toContain("@media");
    expect(result).toContain("max-width");
  });
});

// ============================================================================
// cssCombine() — CSS 字符串合并
// ============================================================================

describe("cssCombine", () => {
  it("合并两个 CSS 字符串", () => {
    const a = css`
      body {
        color: red;
      }
    `;
    const b = css`
      a {
        color: blue;
      }
    `;
    const combined = cssCombine(a, b);
    expect(combined).toContain("color: red");
    expect(combined).toContain("color: blue");
  });

  it("合并多个 CSS 字符串", () => {
    const a = css`
      .a {
        color: red;
      }
    `;
    const b = css`
      .b {
        color: green;
      }
    `;
    const c = css`
      .c {
        color: blue;
      }
    `;
    const combined = cssCombine(a, b, c);
    expect(combined).toContain(".a");
    expect(combined).toContain(".b");
    expect(combined).toContain(".c");
  });

  it("空字符串不产生额外换行", () => {
    const combined = cssCombine(css``);
    expect(combined).toBe("");
  });

  it("多个空字符串合并 (join 产生换行)", () => {
    const combined = cssCombine(css``, css``);
    // join("\n") of two empty strings = "\n"
    expect(combined).toBe("\n");
  });

  it("保持合并顺序", () => {
    const a = css`
      /* first */
    `;
    const b = css`
      /* second */
    `;
    const combined = cssCombine(a, b);
    const aIndex = combined.indexOf("first");
    const bIndex = combined.indexOf("second");
    expect(aIndex).toBeLessThan(bIndex);
  });

  it("单参数返回自身", () => {
    const style = css`
      body {
        color: red;
      }
    `;
    expect(cssCombine(style)).toBe(style);
  });
});

// ============================================================================
// cssStyle() — vanilla-extract StyleRule → CSS 字符串
//
// 注意: captureStyle 通过 vanilla-extract 的 globalStyle 序列化,
// 输出格式为 "prop: value;" (冒号后有空格)
// ============================================================================

describe.sequential("cssStyle", () => {
  describe("扁平属性", () => {
    it("单个属性", () => {
      const style = cssStyle({ color: "red" });
      expect(style.toString()).toContain("color: red");
    });

    it("多个属性", () => {
      const style = cssStyle({
        color: "red",
        backgroundColor: "blue",
        padding: "8px",
      });
      const cssText = style.toString();
      expect(cssText).toContain("color: red");
      expect(cssText).toContain("background-color: blue");
      expect(cssText).toContain("padding: 8px");
    });

    it("属性值包含数字 (14 输出为 14 不含 px 后缀)", () => {
      const style = cssStyle({
        fontSize: 14,
        opacity: 0.5,
      });
      const cssText = style.toString();
      expect(cssText).toContain("font-size: 14");
      expect(cssText).toContain("opacity: 0.5");
    });
  });

  describe("嵌套选择器", () => {
    it("简单嵌套", () => {
      const style = cssStyle({
        "&:hover": { color: "blue" },
      });
      const cssText = style.toString();
      expect(cssText).toContain("&:hover{");
      expect(cssText).toContain("color: blue");
    });

    it("多层嵌套", () => {
      const style = cssStyle({
        ".parent": {
          ".child": {
            color: "red",
          },
        },
      });
      const cssText = style.toString();
      expect(cssText).toContain(".parent{");
      expect(cssText).toContain(".child{");
      expect(cssText).toContain("color: red");
    });
  });

  describe("混合属性", () => {
    it("扁平属性 + 嵌套选择器", () => {
      const style = cssStyle({
        color: "red",
        "&:hover": { color: "blue" },
      });
      const cssText = style.toString();
      // 扁平属性在前
      expect(cssText).toContain("color: red");
      // 嵌套在后 (嵌套内是紧凑格式)
      expect(cssText).toContain("&:hover{color: blue");
    });

    it("多个扁平属性 + 多个嵌套", () => {
      const style = cssStyle({
        color: "red",
        backgroundColor: "white",
        "&:hover": { color: "blue" },
        "&.active": { color: "green", fontWeight: "bold" },
      });
      const cssText = style.toString();
      expect(cssText).toContain("color: red");
      expect(cssText).toContain("background-color: white");
      expect(cssText).toContain("&:hover{color: blue");
      expect(cssText).toContain("&.active{");
      expect(cssText).toContain("font-weight: bold");
    });
  });

  describe("特殊值处理", () => {
    it("null 和 undefined 被过滤", () => {
      // 使用 as any 绕过类型检查，仅测试运行时 null/undefined 过滤行为
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const input: Record<string, any> = {
        color: "red",
        backgroundColor: null,
        fontSize: undefined,
        padding: "8px",
      };
      const style = cssStyle(input);
      const cssText = style.toString();
      expect(cssText).toContain("color: red");
      expect(cssText).toContain("padding: 8px");
      expect(cssText).not.toContain("background-color");
      expect(cssText).not.toContain("font-size");
    });
  });

  describe("toString() 行为", () => {
    it("toString() 返回非空 CSS 字符串", () => {
      const style = cssStyle({ color: "red" });
      expect(typeof style.toString()).toBe("string");
      expect(style.toString().length).toBeGreaterThan(0);
    });

    it("空对象 toString() 返回空字符串", () => {
      const style = cssStyle({});
      expect(style.toString()).toBe("");
    });
  });

  describe("作为插值使用", () => {
    it("可在 css 模板中作为插值", () => {
      const buttonStyle = cssStyle({
        padding: "5px 16px",
        fontWeight: 500,
        color: "#ffffff",
      });

      const result = css`
        .btn-primary {
          ${buttonStyle}
        }
      `;
      // css() 模板字面量保留空白；cssStyle 输出带空格格式
      expect(result).toMatch(/padding:\s*5px\s+16px/);
      expect(result).toMatch(/font-weight:\s*500/);
      expect(result).toMatch(/color:\s*#fff+/);
    });

    it("嵌套 cssStyle — 使用纯对象作为嵌套值 (避免 toString 泄漏到 flat 属性)", () => {
      const buttonStyle = cssStyle({
        padding: "5px 16px",
        "&:hover": {
          backgroundColor: "#0969da",
          borderColor: "#0969da",
        },
      });

      const cssText = buttonStyle.toString();
      expect(cssText).toContain("padding: 5px 16px");
      expect(cssText).toContain("&:hover{");
      expect(cssText).toContain("background-color: #0969da");
      expect(cssText).toContain("border-color: #0969da");
    });
  });
});
