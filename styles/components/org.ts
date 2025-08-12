import { css, themeVars } from "src/types/vars";

export const org = css`
  .page-content.organization.profile {
    #org-info {
      .ui.header {
        // 组织页面的 RSS 订阅按钮
        .ui.label.button {
          padding: 4px 16px;
          .svg {
            width: 20px;
            min-width: 20px;
          }
          &:hover {
            border-color: ${themeVars.color.light.border};
          }
        }
      }
    }
  }
`;
