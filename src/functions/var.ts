import type { CSSVarFunction } from "src/core/types";

type CSSFallbackVar = `var(--${string}, ${string})`;
export function fallbackVar(cssvar: CSSVarFunction, fallback: string): CSSFallbackVar {
  const var_name = cssvar.replace("var(--", "").replace(")", "");
  return `var(--${var_name}, ${fallback})`;
}
