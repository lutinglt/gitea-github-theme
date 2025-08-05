import { css } from "src/types/vars";
import { activeItemAfterStyle } from "styles/public/menu";

// 新建仓库页面下拉菜单
export const newRepo = css`
  .page-content.repository.new-repo {
    .ui.dropdown .menu {
      .item:hover:after {
        content: "";
        ${activeItemAfterStyle}
      }
    }
  }
`;
