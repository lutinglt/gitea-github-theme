import { css, themeVars } from "src/types/vars";

// 一些列表头, 比如工单的搜索标签里程碑栏
export const listHeader = css`
  .list-header {
    align-items: center;
    align-content: center;
  }
`;

// 已标星的图标
export const star = css`
  .octicon-star-fill {
    color: ${themeVars.github.button.star.iconColor} !important;
  }
`;
