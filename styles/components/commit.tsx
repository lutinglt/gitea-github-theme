import { css, otherThemeVars, themeVars } from "src/types/vars";

// 提交列表
export const commit = css`
  .page-content.repository {
    // 提交列表 (选择器保证同等优先级覆盖了 gitea 原生的样式)
    #commits-table.ui.basic.striped.table tbody.commit-list {
      // 作者
      .author {
        // 作者名称
        a.author-wrapper {
          color: ${themeVars.color.text.light.num1};
        }
      }
      // SHA 标签
      .sha {
        a.ui.label.commit-id-short {
          padding: 2px 8px;
          height: 28px;
          margin-top: 0.375rem;
          margin-bottom: 0.375rem;
          margin-left: -8px;
        }
      }
      // 提交信息
      .message {
        // tag 标签
        a.ui.basic.primary.label {
          border-radius: 25px;
          border-width: 1.5px;
          padding: 5px 8px !important;
        }
      }
      // 提交信息右侧
      .tw-text-right {
        // 时间标签
        relative-time,
        // 复制 SHA 按钮
        .btn.copy-commit-id,
        // 查看提交路径按钮
        .btn.view-commit-path {
          color: ${themeVars.color.text.light.num1};
        }
      }
      // 整行悬停色
      tr:hover {
        background-color: ${themeVars.color.hover.opaque};
      }
      // 偶数行悬停色
      tr:nth-child(2n):hover {
        background-color: ${themeVars.color.hover.opaque} !important;
      }
    }
  }
`;

export const commitStatus = css`
  .flex-text-inline[data-global-init="initCommitStatuses"] {
    padding: 6px;
    margin-top: 2px;
    border-radius: ${otherThemeVars.border.radius};
    &:hover {
      background-color: ${themeVars.github.control.transparent.bgColor.hover};
    }
  }
`;
