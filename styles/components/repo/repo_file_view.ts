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

import { css, otherThemeVars, themeVars } from "src/types/vars";
import { activeItemAfterStyle } from "styles/public/menu";

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
      > .secondary-nav {
        margin-bottom: 0 !important;
        .ui.tabs.divider {
          margin-bottom: 0;
        }
      }
      // 为文件树选中项目伪元素让出 8px 的空间
      > .ui.container.fluid {
        margin-left: 8px;
        max-width: calc(100% - calc(2 * 8px));
      }
    }
    .repo-view-container {
      // 左侧文件树
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
          margin: 16px 0;
          padding: 8px;
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
      // 右侧文件视图内容
      .repo-view-content {
        padding-bottom: 40px;
        .repo-button-row {
          align-content: center;
          background: ${themeVars.color.box.header};
          border: 1px solid ${themeVars.color.secondary.self};
          border-radius: ${otherThemeVars.border.radius};
          height: 46px; // 固定高度匹配第二固定栏的 top 值
          margin: 16px 0;
          padding: 8px;
          position: sticky;
          top: 0;
          z-index: 1;
          .ui.button {
            min-height: 32px;
          }
          // 打开文件树按钮
          .repo-view-file-tree-toggle {
            background: initial;
            border-color: #0000;
            padding: 0;
            min-width: 32px;
            &:hover {
              background: ${themeVars.color.hover.self};
            }
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
            // 作者
            .author-wrapper {
              display: flex;
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
