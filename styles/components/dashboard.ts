import { css } from "src/types/vars";

export const dashboard = css`
  .page-content.dashboard {
    // 动态的右侧 svg 图标
    .flex-item .flex-item-trailing svg {
      height: 20px;
      width: 20px;
    }
    // 仓库列表的仓库/组织切换按钮
    .ui.two.item.menu {
      background-color: unset;
    }
  }
`;
