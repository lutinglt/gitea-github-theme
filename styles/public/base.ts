import { css } from "src/types/vars";

export const body = css`
  body {
    line-height: 1.5;
  }
  a {
    text-underline-offset: 0.2rem; // 0.2rem 可以始终保持下划线不受 overflow: hidden 的影响
  }
  // 默认代码块
  code:not(.code-inner) {
    padding: 0.2em 0.4em;
  }
`;
