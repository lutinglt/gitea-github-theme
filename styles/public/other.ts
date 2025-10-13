import { css, themeVars } from "src/types/vars";

// 一些列表头, 比如工单的搜索标签里程碑栏
export const listHeader = css`
  .list-header {
    align-items: center;
    align-content: center;
  }
`;

export const svg = css`
  // 已标星的图标
  .octicon-star-fill {
    color: ${themeVars.github.button.star.iconColor} !important;
  }
  // VSCode 图标
  .gitea-vscode {
    color: #007acc !important;
  }
  // VSCodium 图标
  .gitea-vscodium {
    color: #429cf0 !important;
  }
`;
