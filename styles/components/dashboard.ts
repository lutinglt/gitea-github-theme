import { css, otherThemeVars, themeVars } from "src/types/vars";

export const dashboard = css`
  .page-content.dashboard {
    // 仓库列表的仓库/组织切换按钮
    .ui.two.item.menu {
      background-color: unset;
    }
    // 仓库/组织列表标题
    .ui.top.attached.header {
      border: 0;
      font-size: 20px;
      font-weight: 400;
      background-color: unset !important;
      margin-bottom: 0.25rem;
    }
    // 仓库/组织列表
    .ui.attached.segment {
      background-color: ${themeVars.color.menu};
      border: unset !important;
      box-shadow: ${themeVars.github.shadow.floating.small};
      &.repos-search {
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
      }
      &.table {
        &:last-child {
          border-bottom-left-radius: 12px !important;
          border-bottom-right-radius: 12px !important;
        }
        ul {
          padding: 8px;
          li {
            border-radius: ${otherThemeVars.border.radius};
            &:not(:last-child) {
              border-bottom: 0;
            }
            &:hover {
              background: ${themeVars.github.control.transparent.bgColor.hover};
            }
            a.muted:hover {
              color: inherit;
              text-decoration-line: none;
            }
          }
        }
      }
    }
    // 组织列表
    .ui.tab.dashboard-orgs .ui.attached.segment.table {
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
    }
  }
`;
