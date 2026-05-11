/*!
 * Copyright (c) https://github.com/lutinglt
 *
 * See the NOTICE file distributed with this work for additional
 * information regarding copyright ownership.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { css } from "@linaria/core";
import { otherThemeVars, themeVars } from "src";
import { activeItemAfterStyle } from "styles/common";

// 仓库打开文件时的视图
export const repoFileView = css`
  /* 隐藏主内容的下内容和页脚, 避免滚动文件树时滚动条遮挡 */
  body > .full.height:has(.repo-view-file-tree-container) {
    padding-bottom: 0;
    + .page-footer {
      display: none;
    }
  }
  .page-content.repository.file.list,
  .page-content.repository.file.editor {
    &:has(.repo-view-file-tree-container) {
      /* 取消下间隔优化观看体验 */
      > .secondary-nav {
        margin-bottom: 0 !important;
        .ui.tabs.divider {
          margin-bottom: 0;
        }
      }
      /* 为文件树选中项目伪元素让出 8px 的空间 */
      > .ui.container.fluid {
        margin-left: 8px;
        max-width: calc(100% - calc(2 * 8px));
      }
    }
    .repo-view-container {
      /* 左侧文件树 */
      .repo-view-file-tree-container {
        height: 100vh;
        flex: 0 0 20%;
        overflow-y: unset;
        position: sticky;
        top: 0;
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
          margin: 15px 0;
          padding: 8px;
          /* 固定头部, 早期父元素有多余的页脚和内容高度导致滚动时无法固定, 修复后也可保留此属性无需删除 */
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
          .repo-view-file-tree-toggle {
            border-color: #0000;
            min-width: 32px;
          }
          .ui.compact.icon.button {
            border: 0;
          }
        }
        .view-file-tree-items {
          margin-right: 0;
          padding: 12px 16px 8px 0;
          .tree-item {
            position: relative;
            margin-left: 8px;
            &.selected:after {
              content: "";
              ${activeItemAfterStyle}
            }
          }
        }
      }
      /* 右侧文件视图内容 */
      .repo-view-content {
        padding-bottom: 40px;
        .repo-button-row {
          align-content: center;
          background: ${themeVars.color.box.header};
          border: 1px solid ${themeVars.color.secondary.self};
          border-radius: ${otherThemeVars.border.radius};
          height: 46px; /* 固定高度匹配第二固定栏的 top 值 */
          margin: 16px 0;
          padding: 8px;
          position: sticky;
          top: 0;
          z-index: 1;
          .ui.button {
            min-height: 32px;
          }
          .repo-button-row-left {
            /* 打开文件树按钮 */
            .repo-view-file-tree-toggle {
              background: initial;
              border-color: #0000;
              padding: 0;
              min-width: 32px;
              &:hover {
                background: ${themeVars.color.hover.self};
              }
            }
            /* 分支选择按钮 */
            .branch-dropdown-button {
              padding: 0 12px;
            }
            /* 路径 */
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
          .repo-button-row-right {
            gap: 8px;
            /* 三点更多操作菜单按钮 */
            .ui.dropdown.basic.button:has(.octicon-kebab-horizontal) {
              width: 32px;
              .item.tw-text-danger {
                &:hover {
                  background-color: ${themeVars.color.red.badge.bg} !important;
                  color: ${themeVars.color.red.light} !important;
                }
                &:active {
                  background-color: ${themeVars.github.control.danger.bgColor.active} !important;
                }
                svg {
                  color: inherit;
                }
              }
            }
          }
        }
        .non-diff-file-content {
          /* 避免分支菜单遮挡 */
          position: relative;
          z-index: 0;
          h4.file-header {
            padding: 8px 12px !important;
            position: sticky;
            /* 重叠边框线, 避免过粗 */
            top: 45px;
            z-index: 1;
            .file-header-left {
              color: ${themeVars.color.text.light.num1};
              font-size: 12px;
            }
            .file-header-right {
              gap: 0px;
              /* 按钮组 */
              > .ui.buttons {
                margin: 0 8px 0 0 !important; /* 完全不知道为什么浏览器最终效果没生效, 只能 !important 了 */
                .ui.mini.button {
                  min-height: 28px;
                  height: 28px;
                  font-size: 12px;
                  padding: 0 8px;
                }
              }
              /* 右侧操作按钮 */
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
                  /* 与无权限按钮之间的间距 */
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
        /* 头部提交信息 */
        .ui.segment#repo-file-commit-box {
          padding: 8px 12px;
          margin-bottom: 16px !important;
          min-height: 46px;
          > .latest-commit {
            gap: 8px;
            .commit-summary {
              color: ${themeVars.color.text.light.num1};
            }
            /* 作者 */
            .author-wrapper {
              display: flex;
            }
            > img.ui.avatar {
              border-radius: 9999px;
              width: 20px;
              height: 20px;
            }
          }
          /* 右侧提交时间 */
          > .age {
            display: flex;
            align-items: center;
          }
        }
      }
    }
  }
  /* 编辑视图下的文件树展开/折叠按钮对齐 */
  .page-content.repository.file.editor .repo-view-container {
    .repo-view-file-tree-container > .repo-button-row {
      padding: 0px;
      &:after {
        content: "";
        position: absolute;
        top: 48px;
        left: -16px;
        width: calc(100% + 16px);
        height: 1px;
        background: ${themeVars.color.secondary.self};
      }
    }
    .repo-view-content .repo-editor-header .repo-view-file-tree-toggle {
      min-height: 32px;
      min-width: 32px;
    }
  }
`;

// 避免手机/平板下路径容器过长导致换行, 取消固定
export const repoFileViewMobile = css`
  @media (max-width: 1023.98px) {
    .page-content.repository.file.list,
    .page-content.repository.file.editor {
      .repo-view-container .repo-view-content {
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
  }
`;

// 代码编辑器
export const codeEditorContainer = css`
  .code-editor-container {
    /* Gitea 限制最小高度为 90vh, 导致手机下留白过多, 但意义不明? */
    min-height: auto;
    /* 内容编辑区 */
    .cm-editor {
      /* 最大高度 = 视窗高度 - 一级导航栏 - 二级导航栏 - 路径栏 - 操作面板 - 确保避免一些隐藏元素的补偿高度 */
      /* 将整个内容区高度确保限制在视窗范围内, 避免需要滚动才能看见完整内容 */
      max-height: calc(100vh - 64px - 128px - 32px - 64px - 32px);
    }
    /* 搜索面板 */
    .cm-panel.cm-search {
      background-color: ${themeVars.color.box.header};
      padding: 8px;
      gap: 0;
      .cm-textfield {
        background-color: ${themeVars.color.body};
        margin: 4px 8px 4px 0px;
      }
      .cm-button {
        background-color: ${themeVars.color.body};
        padding: 4px 8px;
        margin: 4px 8px 4px 0px;
        text-transform: capitalize;
        &:hover {
          background-color: ${themeVars.color.button};
        }
        &:active {
          background-image: none;
          background-color: ${themeVars.color.hover.self};
        }
      }
      > label {
        margin: 4px 8px 4px 0px;
        font-size: 12px;
        font-weight: 600;
        text-transform: capitalize;
      }
      /* 关闭按钮 */
      button[name="close"] {
        color: ${themeVars.color.text.self};
        width: 14px;
        height: 14px;
      }
    }
    /* 编辑区 */
    .cm-scroller,
    .ͼ1 .cm-scroller {
      font-family:
        ui-monospace,
        SFMono-Regular,
        SF Mono,
        Menlo,
        Consolas,
        Liberation Mono,
        monospace;
    }
  }
`;

// 文件编辑器
export const fileEditor = css`
  .page-content.repository.file.editor {
    .repo-view-content {
      /* 路径栏 */
      .repo-editor-header {
        margin: 16px 0;
        min-height: 32px;
        /* 路径 */
        .breadcrumb {
          gap: 8px;
          /* 路径段和分隔符 */
          .section,
          .breadcrumb-divider {
            font-size: 16px;
          }
          > .section:first-child {
            font-weight: 600;
          }
          input {
            margin-right: 0px !important;
          }
          svg {
            color: ${themeVars.color.text.light.num1};
          }
          span:has(svg) {
            display: flex;
            align-items: center;
          }
        }
      }
      /* 编辑器 */
      .ui.edit.form {
        /* 编辑器操作栏 */
        .ui.top.attached.header {
          padding: 8px;
          /* 左侧编辑/预览切换按钮 */
          .ui.compact.small.menu.small-menu-items {
            /* 切换样式在 compact_menu.ts 中 */
            .item svg {
              display: none;
            }
          }
          /* 右侧操作项 */
          .code-editor-options {
            /* 图标按钮 */
            .ui.compact.icon.button {
              padding: 7px;
              svg {
                width: 14px;
                height: 14px;
                min-width: 14px;
                min-height: 14px;
              }
            }
            /* 选择下拉菜单 */
            select {
              background: ${themeVars.color.body};
              font-size: 12px;
              padding: 7px 20px 7px 12px;
            }
          }
        }
      }
    }
  }
`;

// 提交表单(编译修改时底部的提交信息)
export const commitForm = css`
  .repository.file.editor .commit-form-wrapper {
    .commit-avatar {
      border-radius: 9999px;
    }
    .commit-form.avatar-content-left-arrow {
      &::before,
      &::after {
        display: none;
      }
    }
  }
`;
