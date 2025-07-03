import { css, themeVars } from "src/types/vars";

// 关闭工单按钮设置为紫色
export const issueClosed = css`
  .text.red .svg,
  .text.red.svg {
    &.octicon-issue-closed {
      color: ${themeVars.github.fgColor.done} !important;
    }
  }
`;
