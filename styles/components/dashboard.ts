import { css, otherThemeVars, themeVars } from "src/types/vars";

export const dashboard = css`
  // 首页仪表板, 避免选中管理员后台的维护管理面板
  .page-content.dashboard.feeds {
    // 仓库列表的仓库/组织切换按钮
    .ui.two.item.menu {
      box-shadow: ${themeVars.github.shadow.floating.small};
      border: unset;
      border-radius: 12px;
      margin-bottom: 8px;
      > .item {
        &:first-child {
          border-radius: 12px 0 0 12px;
        }
        &:last-child {
          border-radius: 0 12px 12px 0;
        }
      }
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
