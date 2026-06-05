/** 递归可选: 将 T 的所有属性(含嵌套)变为可选 */
export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

/**
 * 深度覆盖对象属性
 *
 * 只需声明要覆盖的路径, 中间层自动保留, 无需逐层展开。
 * patch 的类型由 target 派生 (DeepPartial<T>), 确保只能写 target 中已有的属性路径。
 *
 * 内部使用类型断言 (as) 的原因:
 * TypeScript 在 for 循环中无法将 key 与其对应的 value 类型关联,
 * patch[key] 和 target[key] 返回的是所有属性值的联合类型,
 * 而非当前 key 对应的具体类型, 导致赋值时类型不匹配。
 * 这是 TS 类型系统的已知限制, 运行时类型守卫已保证安全性。
 */
export function deepOverride<T extends object>(target: T, patch: DeepPartial<T>): T {
  const result = { ...target } as T;
  for (const key of Object.keys(patch) as (keyof T)[]) {
    const patchVal = patch[key];
    if (patchVal === undefined) continue;
    const targetVal = target[key];
    if (typeof patchVal === "object" && patchVal !== null && typeof targetVal === "object" && targetVal !== null) {
      // 两者均为对象, 递归覆盖
      result[key] = deepOverride(targetVal, patchVal as DeepPartial<typeof targetVal>) as T[keyof T];
    } else if (typeof patchVal !== "object" || patchVal === null) {
      // patchVal 为原始值, 直接覆盖
      result[key] = patchVal as T[keyof T];
    }
    // else: patchVal 是对象但 targetVal 不是, 结构不匹配, 跳过
  }
  return result;
}
/**
 * 从调用堆栈中获取调用者信息（文件名:行号）。
 *
 * 堆栈帧结构（0-based）：
 *   stack[0] = "Error"
 *   stack[1] = getCallerInfo 自身      ← 始终跳过
 *   stack[2] = 直接调用者               ← skipFrames=0 时返回此行
 *   stack[3] = 上层调用者               ← skipFrames=1 时返回此行
 *   ...
 *
 * 每层中间函数由调用方自行声明需要跳过的帧数，
 * 而非将调用深度硬编码在此函数中。
 *
 * - Bun 的 Error.stack 格式与 V8 兼容 (at funcName (file:line:col))
 * - 通过预编译正则和限制堆栈深度来减少开销
 *
 * @param skipFrames 额外跳过的帧数（默认 0：返回直接调用者）
 * @returns 格式 "path/file:line"，无法解析时返回 "unknown"
 */

// 预编译正则：匹配 "at funcName (file:line:col)" 或 "(file:line:col)"
const STACK_FRAME_WITH_PARENS_RE = /\((.+?):(\d+):(\d+)\)/;
// 匹配 "at file:line:col"（无函数名或匿名场景）
const STACK_FRAME_BARE_RE = /at\s+(.+?):(\d+):(\d+)/;

export function getCallerInfo(skipFrames: number = 0): string {
  // 限制 Error 堆栈深度以减少字符串内存开销，仅需要定位调用者
  const prevLimit = Error.stackTraceLimit;
  Error.stackTraceLimit = Math.max(3, 3 + Math.max(0, skipFrames));

  const stack = new Error().stack?.split("\n") || [];

  // 恢复堆栈深度限制，避免影响其他依赖完整堆栈的代码
  Error.stackTraceLimit = prevLimit;

  const index = 2 + Math.max(0, skipFrames);
  const frame = stack[index] || stack[stack.length - 1] || "";

  // 优先匹配括号内的 file:line:col 格式（V8 / Bun 通用）
  const parensMatch = frame.match(STACK_FRAME_WITH_PARENS_RE);
  if (parensMatch) return `${parensMatch[1]}:${parensMatch[2]}`;

  // 回退：匹配不带括号的格式（匿名函数 / eval 场景）
  const bareMatch = frame.match(STACK_FRAME_BARE_RE);
  if (bareMatch) return `${bareMatch[1]}:${bareMatch[2]}`;

  return frame.trim() || "unknown";
}
