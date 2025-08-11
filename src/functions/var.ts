import type { CSSVarFunction } from "src/core/types";

type CSSFallbackVar = `var(--${string}, ${string})`;
/**
 * 设置 CSS 变量的回退值
 * @param cssvar `var(--${string})`
 * @param fallback
 * @returns `var(--${string}, fallback)`
 */
export function fallbackVar(cssvar: CSSVarFunction, fallback: string): CSSFallbackVar {
  const var_name = cssvar.replace("var(--", "").replace(")", "");
  return `var(--${var_name}, ${fallback})`;
}
