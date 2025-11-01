import { css } from "src/types/vars";

export const body = css`
  body {
    line-height: 18px;
  }
  a {
    text-underline-offset: 0.2rem; // 0.2rem 可以始终保持下划线不受 overflow: hidden 的影响
  }
`;
