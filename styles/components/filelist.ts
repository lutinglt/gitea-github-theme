import { css, otherThemeVars, themeVars } from "src/types/vars";

// 文件列表页面下的分支按钮
export const branchButton = css`
  .page-content.repository.file.list {
    .ui.dropdown.branch-selector-dropdown > .menu > .menu {
      // 显示默认分支的标签
      .ui.label {
        background-color: ${themeVars.color.menu};
        border: 1px solid ${themeVars.color.light.border};
        margin-top: 1px;
        margin-left: auto;
        margin-right: 16px; // gitea 有 RSS 留出足够的空间
      }
    }
  }
`;

// 仓库同步派生
export const syncFork = css`
  .page-content.repository.file.list {
    .repo-home-filelist > .ui.message {
      background: ${themeVars.color.box.header};
      padding: 8px 8px 8px 16px;
      .ui.button {
        min-width: 96px;
      }
    }
  }
`;

// 仓库文件列表
export const repoFiles = css`
  .repository.file.list {
    #repo-files-table {
      // 头部最后一次提交
      .repo-file-line {
        padding-right: 16px;
        // 父目录
        &.parent-link {
          gap: 0.5rem;
          padding-left: 16px;
          svg {
            margin-right: 2px;
          }
        }
        // 最后一次提交
        &.repo-file-last-commit {
          min-height: 3.725rem;
          .latest-commit {
            gap: 8px;
            .commit-summary {
              color: ${themeVars.color.text.light.num1};
            }
            img.tw-align-middle {
              margin-top: -1px;
              margin-left: 1px;
            }
            // 作者
            .author-wrapper {
              &:hover {
                color: ${themeVars.color.text.self};
              }
            }
            // 提交哈希值
            .ui.label {
              display: none;
            }
          }
          relative-time {
            color: ${themeVars.color.text.light.num1};
          }
        }
      }
      // 文件列表
      .repo-file-item {
        .repo-file-cell {
          height: 40px;
          &.name {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding-left: 16px;
          }
          &.age {
            padding-right: 16px;
          }
        }
      }
    }
    #readme {
      .file-header {
        background: ${themeVars.color.body};
        svg {
          color: ${themeVars.color.text.light.num1};
        }
        .file-header-left {
          padding: 6px 8px !important;
          &:hover {
            background: ${themeVars.github.control.transparent.bgColor.hover};
            border-radius: ${otherThemeVars.border.radius};
          }
          &:after {
            content: "";
            background: ${themeVars.github.underlineNav.borderColor.active};
            border-radius: ${otherThemeVars.border.radius};
            bottom: 0;
            height: 2px;
            position: absolute;
            left: 12px;
            width: 113px;
          }
          a.muted:hover {
            color: inherit;
            text-decoration-line: none;
          }
        }
        .file-header-right:hover {
          background: ${themeVars.github.control.transparent.bgColor.hover};
          border-radius: ${otherThemeVars.border.radius};
        }
      }
    }
  }
`;

// 手机下隐藏提交信息
export const repoFilesMobile = css`
  @media (max-width: 767.98px) {
    #repo-files-table {
      grid-template-columns: 1fr auto;
      .repo-file-line {
        grid-column: 1 / span 2;
      }
      .repo-file-cell {
        &.name {
          max-width: none;
        }
        &.message {
          display: none;
        }
      }
    }
  }
`;

// 仓库打开文件时的视图
export const repoFileView = css`
  .page-content.repository.file.list {
    > .ui.container.fluid {
      max-width: calc(100% - calc(2 * 16px));
    }
    .repo-view-container {
      position: sticky;
      top: 0;
      // 左侧文件树
      .repo-view-file-tree-container {
        height: 100vh;
        position: sticky;
        top: 0;
        &:after {
          content: "";
          position: absolute;
          top: -14px;
          right: 0;
          width: 1px;
          height: calc(100% + 14px);
          background: ${themeVars.color.secondary.self};
        }
        > .repo-button-row {
          align-content: center;
          background: ${themeVars.color.body};
          height: 64px;
          margin: 0;
          position: sticky;
          top: 0;
          &:after {
            content: "";
            position: absolute;
            top: 64px;
            left: -16px;
            width: calc(100% + 16px);
            height: 1px;
            background: ${themeVars.color.secondary.self};
          }
        }
        .view-file-tree-items {
          margin-right: 0;
          padding: 16px 16px 16px 0;
        }
      }
      // 右侧文件视图内容
      .repo-view-content {
        .repo-button-row {
          align-content: center;
          background: ${themeVars.color.box.header};
          border: 1px solid ${themeVars.color.secondary.self};
          border-radius: ${otherThemeVars.border.radius};
          height: 46px;
          // 重叠边框线, 避免过粗
          min-height: 45px;
          padding: 8px;
          position: sticky;
          top: 0;
          z-index: 1;
        }
        .non-diff-file-content {
          // 避免分支菜单遮挡
          position: relative;
          z-index: 0;
          h4.file-header {
            position: sticky;
            top: 46px;
            z-index: 1;
          }
        }
        // 头部提交信息
        .ui.segment#repo-file-commit-box {
          padding: 8px 12px;
          margin-bottom: 8px !important;
          > .latest-commit {
            gap: 8px;
          }
          // 右侧提交时间
          > .age {
            display: flex;
            align-items: center;
          }
        }
      }
    }
  }
`;

// 避免手机/平板下路径容器过长导致换行, 取消固定
export const repoFileViewMobile = css`
  @media (max-width: 1023.98px) {
    .page-content.repository.file.list .repo-view-container .repo-view-content {
      .repo-button-row {
        height: auto;
        position: static;
        z-index: 0;
      }
      .non-diff-file-content {
        h4.file-header {
          top: 0;
        }
      }
    }
  }
`;

// 仓库代码布局调整, 侧边栏宽度调整
export const repoGrid = css`
  .repo-grid-filelist-sidebar {
    grid-template-columns: auto 296px;
  }

  @media (max-width: 767.98px) {
    .repo-grid-filelist-sidebar {
      grid-template-columns: 100%;
    }
  }
`;

// 仓库代码页面侧边栏上半部, 版本发布以上
export const repoSidebarTop = css`
  .page-content.repository.file.list {
    .repo-home-sidebar-top {
      a.muted:hover {
        text-decoration: none;
      }
      .flex-item {
        padding: 10px 0 0 0;
        .flex-item-title {
          margin-top: 2px;
        }
        .flex-item-body {
          padding: 8px 0 0 0;
          .repo-description {
            color: ${themeVars.color.text.self};
          }
          #repo-topics {
            margin: 10px 0px !important;
          }
          .flex-text-block {
            font-size: 14px;
            font-weight: 600;
            margin-top: 10px;
            &.muted {
              margin-top: 2px;
              font-weight: normal;
            }
            svg.svg {
              margin-right: 4px;
              &.octicon-database,
              &.octicon-law {
                margin-right: 6px;
              }
            }
          }
        }
      }
    }
  }
`;

// 仓库代码页面侧边栏下半部, 版本发布以下
export const repoSidebarBottom = css`
  .page-content.repository.file.list {
    .repo-home-sidebar-bottom {
      a.muted:hover {
        text-decoration: none;
      }
      .flex-item {
        padding: 16px 0;
        .flex-item {
          padding: 16px 0 0 0;
          .flex-item-icon {
            svg.svg.octicon-tag {
              color: ${themeVars.color.green.self};
              margin-top: 2px;
            }
          }
          .flex-item-header .flex-item-title {
            font-size: 14px;
          }
        }
        .flex-item-body {
          font-size: 12px;
        }
      }
      // 编程语言
      .language-stats {
        height: 8px;
        margin-bottom: 0px;
      }
      .language-stats-details .item {
        font-size: 12px;
        margin-right: 8px;
        .color-icon {
          height: 8px;
          width: 8px;
          margin-right: 8px;
        }
        .tw-font-semibold {
          color: ${themeVars.color.text.self};
          margin-right: 2px;
        }
      }
    }
  }
`;
