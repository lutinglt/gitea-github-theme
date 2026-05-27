import { describe, expect, it } from "vitest";
import { deepOverride, type DeepPartial } from "./utils";

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
