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
        margin-right: 20px; // gitea 有 RSS 留出足够的空间
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
      margin: 16px 0px;
      .ui.button {
        min-width: 96px;
      }
    }
  }
`;

// 仓库文件列表
export const repoFiles = css`
  // 文件列表和提交列表的按钮组
  .repo-button-row {
    margin: 16px 0;
  }
  .repository.file.list {
    #repo-files-table {
      margin: 16px 0;
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
            img.ui.avatar {
              border-radius: 9999px;
              margin-left: 2px;
              width: 20px;
              height: 20px;
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
        min-height: 48px;
        padding: 0px 8px !important;
        overflow-x: visible;
        svg {
          color: ${themeVars.color.text.light.num1};
        }
        .file-header-left {
          padding: 6px 8px !important;
          line-height: 1.45;
          // 伪元素宽度等于按钮宽度而不是父元素宽度
          position: relative;
          &:hover {
            background: ${themeVars.github.control.transparent.bgColor.hover};
            border-radius: ${otherThemeVars.border.radius};
          }
          &:after {
            content: "";
            background: ${themeVars.github.underlineNav.borderColor.active};
            border-radius: ${otherThemeVars.border.radius};
            bottom: -8px;
            left: 0;
            height: 2px;
            position: absolute;
            width: 100%;
          }
          a.muted:hover {
            color: inherit;
            text-decoration-line: none;
          }
        }
        .file-header-right {
          .btn-octicon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0px 8px;
            border-radius: ${otherThemeVars.border.radius};
            height: 28px;
            width: 28px;
            &:hover {
              background: ${themeVars.github.control.transparent.bgColor.hover};
            }
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

// 仓库打开文件时的视图
export const repoFileView = css`
  // 隐藏主内容的下内容和页脚, 避免滚动文件树时滚动条遮挡
  body > .full.height:has(.repo-view-file-tree-container) {
    padding-bottom: 0;
    + .page-footer {
      display: none;
    }
  }
  .page-content.repository.file.list {
    &:has(.repo-view-file-tree-container) {
      // 取消下间隔优化观看体验
      .secondary-nav {
        margin-bottom: 0 !important;
        .ui.tabs.divider {
          margin-bottom: 0;
        }
      }
    }
    > .ui.container.fluid {
      max-width: calc(100% - calc(2 * 16px));
    }
    .repo-view-container {
      position: sticky;
      top: 0;
      // 左侧文件树
      .repo-view-file-tree-container {
        height: 100vh;
        // 固定头部
        position: sticky;
        top: 0;
        overflow-y: unset;
        &:after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 1px;
          height: 100%;
          background: ${themeVars.color.secondary.self};
        }
        > .repo-button-row {
          align-content: center;
          background: ${themeVars.color.body};
          font-size: 16px;
          height: 64px;
          margin: 0;
          // 固定头部, 早期父元素有多余的页脚和内容高度导致滚动时无法固定, 修复后也可保留此属性无需删除
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
          .ui.compact.icon.button {
            border: 0;
          }
        }
        .view-file-tree-items {
          margin-right: 0;
          padding: 12px 16px 8px 0;
        }
      }
      // 右侧文件视图内容
      .repo-view-content {
        padding-bottom: 40px;
        .repo-button-row {
          align-content: center;
          background: ${themeVars.color.box.header};
          border: 1px solid ${themeVars.color.secondary.self};
          border-radius: ${otherThemeVars.border.radius};
          margin: 16px 0;
          height: 46px;
          min-height: 46px;
          padding: 8px;
          position: sticky;
          top: 0;
          z-index: 1;
          .ui.button {
            min-height: 32px;
          }
          // 打开文件树按钮
          .repo-view-file-tree-toggle-show {
            background: initial;
            border-color: #0000;
            padding: 0;
            min-width: 32px;
          }
          // 分支选择按钮
          .branch-dropdown-button {
            padding: 0 12px;
          }
          // 路径
          .repo-path {
            gap: 4px;
            .section {
              &:first-child,
              &.active {
                font-weight: 600;
              }
            }
            .btn {
              svg {
                margin-left: 4px;
                color: ${themeVars.color.text.light.num1};
              }
            }
          }
        }
        .non-diff-file-content {
          // 避免分支菜单遮挡
          position: relative;
          z-index: 0;
          h4.file-header {
            padding: 8px 12px !important;
            position: sticky;
            // 重叠边框线, 避免过粗
            top: 45px;
            z-index: 1;
            .file-header-left {
              color: ${themeVars.color.text.light.num1};
              font-size: 12px;
            }
            .file-header-right {
              gap: 0px;
              // 按钮组
              > .ui.buttons {
                margin: 0 8px 0 0 !important; // 完全不知道为什么浏览器最终效果没生效, 只能 !important 了
                .ui.mini.button {
                  min-height: 28px;
                  height: 28px;
                  font-size: 12px;
                  padding: 0 8px;
                }
              }
              // 右侧操作按钮
              > .btn-octicon {
                display: flex;
                align-items: center;
                background: ${themeVars.color.button};
                border: 1px solid ${themeVars.color.light.border};
                border-left-width: 0;
                height: 28px;
                padding: 0 8px;
                svg {
                  color: ${themeVars.color.text.light.num1};
                }
                &:first-of-type {
                  border-left-width: 1px;
                  border-top-left-radius: ${otherThemeVars.border.radius};
                  border-bottom-left-radius: ${otherThemeVars.border.radius};
                }
                &:last-of-type {
                  border-top-right-radius: ${otherThemeVars.border.radius};
                  border-bottom-right-radius: ${otherThemeVars.border.radius};
                  // 与无权限按钮之间的间距
                  + .btn-octicon.disabled {
                    margin-left: 8px;
                  }
                }
                &:hover {
                  background: ${themeVars.color.hover.self};
                  color: ${themeVars.color.text.light.num1};
                }
              }
            }
          }
        }
        // 头部提交信息
        .ui.segment#repo-file-commit-box {
          padding: 8px 12px;
          margin-bottom: 16px !important;
          min-height: 46px;
          > .latest-commit {
            gap: 8px;
            .commit-summary {
              color: ${themeVars.color.text.light.num1};
            }
            > img.ui.avatar {
              border-radius: 9999px;
              width: 20px;
              height: 20px;
            }
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
    grid-template-columns: auto 312px;
    gap: 24px;
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
        // 仓库描述本身
        .flex-item-title {
          margin-top: 10px;
        }
        // 仓库描述内容
        .flex-item-body {
          > .tw-flex:first-child {
            margin-top: 16px !important;
            gap: 8px !important;
          }
          .repo-description {
            color: ${themeVars.color.text.self};
          }
          #repo-topics {
            margin: 8px 0px !important;
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
          .flex-item-leading {
            svg.svg.octicon-tag {
              color: ${themeVars.color.green.self};
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
