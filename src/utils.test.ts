import { describe, expect, it } from "vitest";
import { deepOverride, getCallerInfo, type DeepPartial } from "./utils";

describe("deepOverride", () => {
  it("浅层覆盖字符串值", () => {
    const target = { a: "red", b: "blue" };
    const patch: DeepPartial<typeof target> = { a: "green" };
    expect(deepOverride(target, patch)).toEqual({ a: "green", b: "blue" });
  });

  it("深层覆盖字符串值", () => {
    const target = { button: { fg: "white", bg: "blue" } };
    const patch: DeepPartial<typeof target> = { button: { fg: "black" } };
    expect(deepOverride(target, patch)).toEqual({
      button: { fg: "black", bg: "blue" },
    });
  });

  it("三层以上深层覆盖", () => {
    const target = { a: { b: { c: "old", d: "keep" } } };
    const patch: DeepPartial<typeof target> = { a: { b: { c: "new" } } };
    expect(deepOverride(target, patch)).toEqual({
      a: { b: { c: "new", d: "keep" } },
    });
  });

  it("patch 中的 undefined 值被忽略", () => {
    const target = { a: "red", b: "blue" };
    const patch: DeepPartial<typeof target> = { a: undefined, b: "green" };
    expect(deepOverride(target, patch)).toEqual({ a: "red", b: "green" });
  });

  it("空 patch 不改变 target", () => {
    const target = { a: "red", b: { c: "blue" } };
    expect(deepOverride(target, {})).toEqual(target);
  });

  it("不修改原始 target 对象", () => {
    const target = { a: { b: "red" } };
    const patch: DeepPartial<typeof target> = { a: { b: "green" } };
    const result = deepOverride(target, patch);
    expect(result).toEqual({ a: { b: "green" } });
    expect(target.a.b).toBe("red");
  });

  it("混合多层嵌套与浅层覆盖", () => {
    const target = {
      fgColor: { default: "white", muted: "gray" },
      bgColor: { default: "black", canvas: "#fff" },
      border: "blue",
    };
    const patch: DeepPartial<typeof target> = {
      fgColor: { default: "green" },
      border: "red",
    };
    expect(deepOverride(target, patch)).toEqual({
      fgColor: { default: "green", muted: "gray" },
      bgColor: { default: "black", canvas: "#fff" },
      border: "red",
    });
  });

  it("模拟实际场景: button.primary.fgColor.accent 覆盖", () => {
    const target = {
      button: {
        primary: { fgColor: { default: "white", accent: "blue" }, bgColor: "blue" },
        secondary: { fgColor: "black" },
      },
    };
    const patch: DeepPartial<typeof target> = {
      button: { primary: { fgColor: { accent: "green" } } },
    };
    expect(deepOverride(target, patch)).toEqual({
      button: {
        primary: { fgColor: { default: "white", accent: "green" }, bgColor: "blue" },
        secondary: { fgColor: "black" },
      },
    });
  });

  it("同时覆盖多个不相关路径", () => {
    const target = {
      a: { x: "1", y: "2" },
      b: { x: "3", y: "4" },
    };
    const patch: DeepPartial<typeof target> = {
      a: { x: "10" },
      b: { y: "40" },
    };
    expect(deepOverride(target, patch)).toEqual({
      a: { x: "10", y: "2" },
      b: { x: "3", y: "40" },
    });
  });
});

describe("getCallerInfo", () => {
  it("直接调用者 — 返回此测试文件路径", () => {
    const info = getCallerInfo();
    expect(info).toContain("utils.test.ts");
    expect(info).toMatch(/:\d+$/); // 以 :行号 结尾
  });

  it("skipFrames=0 返回直接调用者", () => {
    function wrapper() {
      return getCallerInfo(0);
    }
    const info = wrapper();
    // wrapper 是直接调用者
    expect(info).toContain("utils.test.ts");
  });

  it("skipFrames=1 跳过一个调用帧", () => {
    function outer() {
      return inner();
    }
    function inner() {
      return getCallerInfo(1);
    }
    const info = outer();
    // inner 被跳过，返回 outer 的调用者（即测试函数本身的位置）
    expect(info).toContain("utils.test.ts");
  });

  it("返回格式为 '路径:行号'", () => {
    const info = getCallerInfo();
    // 格式: 绝对路径:数字行号
    expect(info).toMatch(/\.ts:\d+$/);
  });

  it("返回非空字符串", () => {
    const info = getCallerInfo();
    expect(typeof info).toBe("string");
    expect(info.length).toBeGreaterThan(0);
  });

  it("不返回 'unknown' (正常调用时)", () => {
    const info = getCallerInfo();
    expect(info).not.toBe("unknown");
  });

  it("负值 skipFrames 被规范化为 0 (不会越界)", () => {
    const info = getCallerInfo(-5);
    // 负值被 Math.max(0, skipFrames) 处理为 0
    expect(info).toContain("utils.test.ts");
    expect(typeof info).toBe("string");
  });
});
