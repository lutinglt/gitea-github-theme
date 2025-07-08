import { css, themeVars } from "src/types/vars";

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

// 仓库按钮
export const repoButton = css`
  .page-content.repository.file.list {
    // clone 按钮调整
    .repo-button-row .repo-button-row-right .ui.primary.button span {
      margin: 0px 3px;
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
            .commit-summary {
              color: ${themeVars.color.text.light.num1};
            }
            img.tw-align-middle {
              margin-top: -1px;
              margin-left: 1px;
              margin-right: 8px !important;
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
          margin-right: 6px;
        }
        .tw-font-semibold {
          color: ${themeVars.color.text.self};
          margin-right: 2px;
        }
      }
    }
  }
`;
