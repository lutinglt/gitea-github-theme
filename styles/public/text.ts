import { css, themeVars } from "src/types/vars";

export const red = css`
  .text.red .svg,
  .text.red.svg {
    // 关闭工单按钮设置为紫色
    &.octicon-issue-closed {
      color: ${themeVars.github.fgColor.done} !important;
    }
  }
`;

export const grey = css`
  // 默认颜色是 --color-text-light, 主题下此颜色是亮白色, 修改为灰色
  // release 页面下一些描述信息的文本颜色
  .text.grey {
    color: ${themeVars.color.text.light.num1} !important;
  }
`;
