import { css, themeVars } from "src/types/vars";

export const org = css`
  .page-content.organization {
    // 组织成员头像
    .members .ui.avatar {
      border-radius: 9999px;
    }
    // 组织头像
    .org-avatar {
      margin: 8px 24px 16px 0px;
    }
    // 组织信息
    #org-info {
      margin-top: 8px; // 与头像对齐
      gap: 8px;
      // 组织名称
      > .ui.header {
        font-size: 24px;
        > .org-visibility {
          margin-left: 8px;
        }
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
      // 组织描述
      > .markup {
        color: ${themeVars.color.text.light.num1};
      }
      // 组织信息
      > .meta {
        font-size: 12px;
        svg {
          color: ${themeVars.color.text.light.num1};
        }
      }
    }
  }
`;
