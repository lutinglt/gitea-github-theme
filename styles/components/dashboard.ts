import { css, otherThemeVars, themeVars } from "src/types/vars";
import { labelStyle } from "styles/public/label";

export const dashboard = css`
  // 首页仪表板, 避免选中管理员后台的维护管理面板
  .page-content.dashboard.feeds {
    // 仓库列表的仓库/组织切换按钮
    .ui.two.item.menu {
      background: ${themeVars.color.hover.self};
      border: 0;
      border-radius: 12px;
      margin-bottom: 8px;
      > .item {
        background: unset;
        border-radius: 12px;
        padding: 6px 12px !important;
        &.active {
          background: ${themeVars.color.menu};
          box-shadow: ${themeVars.github.shadow.floating.small};
          font-weight: 600;
        }
        &::before {
          display: none;
        }
        &:not(.active) {
          border-radius: ${otherThemeVars.border.radius};
          margin: 6px !important;
          width: calc(50% - 12px);
          &:hover {
            background: ${themeVars.github.control.transparent.bgColor.hover};
          }
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
      .ui.label {
        border-color: #00000000;
      }
    }
    // 仓库/组织列表
    .ui.attached.segment {
      background-color: ${themeVars.color.menu};
      border: unset !important;
      box-shadow: ${themeVars.github.shadow.floating.small};
      &.repos-search {
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        > .menu.repos-filter {
          .ui.circular.label {
            border-color: #00000000;
            min-height: fit-content;
            padding: ${labelStyle.padding} !important;
          }
        }
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
            padding: 6px 8px !important;
            height: 32px;
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

// 导航栏的工单/PR/里程碑仪表板
export const dashboardIssues = css`
  .page-content.dashboard.issues {
    .list-header {
      background-color: ${themeVars.color.box.header};
      border: 1px solid ${themeVars.color.light.border};
      border-bottom: 0;
      border-top-left-radius: ${otherThemeVars.border.radius};
      border-top-right-radius: ${otherThemeVars.border.radius};
      height: 54px;
      padding: 16px 8px;
      .list-header-toggle {
        align-items: center;
        border: 0;
        > .item {
          background: unset !important;
          border-radius: ${otherThemeVars.border.radius};
          color: ${themeVars.color.text.light.num1};
          padding: 0px 8px;
          height: 30px;
          &:before {
            display: none;
          }
          &:hover {
            background: ${themeVars.github.control.transparent.bgColor.hover} !important;
          }
          &.active {
            color: ${themeVars.color.text.self};
            font-weight: 700;
          }
        }
      }
      .list-header-filters {
        > .item {
          border-radius: ${otherThemeVars.border.radius};
          color: ${themeVars.color.text.light.num1};
          padding: 0px 12px;
          height: 32px;
          &:hover {
            background: ${themeVars.github.control.transparent.bgColor.hover};
          }
        }
      }
    }
  }
`;

// 避免手机/平板下菜单错位
export const issueListMobile = css`
  @media (max-width: 767.98px) {
    .page-content.dashboard.issues .list-header {
      height: auto;
    }
  }
`;

// 修复仪表板下二级面板选择菜单组织的标签间隔
export const fixOrgLabel = css`
  .dashboard .secondary-nav .org-visibility .label {
    margin-right: 0;
  }
`;
