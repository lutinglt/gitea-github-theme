import { css, themeVars } from "src/types/vars";

// release 顶部栏左侧按钮组
export const releaseTagMenu = css`
  .page-content.repository {
    &.releases,
    &.tags {
      h2.small.menu {
        .item {
          background-color: unset !important;
          font-weight: 500;
          &.active {
            background: ${themeVars.github.bgColor.accent.emphasis} !important;
            color: ${themeVars.color.white};
          }
        }
      }
    }
  }
`;

// 标签页样式
export const tags = css`
  .page-content.repository.tags {
    // 标签的选项取消下划线
    .tag-list-row {
      .tag-list-row-title {
        line-height: 1.5;
      }
      .download {
        color: ${themeVars.color.text.light.num1};
        font-size: 12px;
        a.muted:hover {
          text-decoration: none;
        }
      }
    }
  }
`;

// 发布页样式
export const releases = css`
  .page-content.repository.releases {
    #release-list .release-entry {
      // 左侧发布元信息
      .meta {
        gap: 0.5rem;
        padding-top: 24px;
        padding-right: 40px;
        text-align: left;
        min-width: 0;
        flex: 0.125;
        a.muted {
          color: ${themeVars.color.text.light.num1};
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-break: break-all;
          svg {
            margin-right: 8px !important;
          }
          svg.tw-mr-1.svg.octicon-tag {
            margin-top: 1px;
          }
        }
        // 分支选择按钮
        .ui.button.branch-dropdown-button {
          min-height: 20px;
          line-height: 20px;
          padding: 3px 12px;
          font-size: 12px;
        }
      }
      // 右侧发布详细信息
      .segment.detail {
        .svg {
          color: ${themeVars.color.text.light.num1};
        }
        p.text.grey {
          margin: 16px 0;
          .time {
            color: ${themeVars.color.text.self};
          }
        }
        .markup {
          > *:first-child {
            margin-top: 16px !important;
          }
          > *:last-child {
            margin-bottom: 16px !important;
          }
        }
      }
    }
  }
`;

// 顶部右侧按钮组
export const rightButton = css`
  .page-content.repository {
    &.releases,
    &.tags {
      .ui.small.button {
        background-color: ${themeVars.color.button};
        border-color: ${themeVars.color.light.border};
        color: ${themeVars.color.text.light.self};
        padding: 5px 16px;
        min-height: auto;
        line-height: 20px;
        &:hover {
          background-color: ${themeVars.color.hover.self};
        }
      }
    }
  }
`;
