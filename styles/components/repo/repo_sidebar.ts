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

import { css, cssCombine, themeVars } from "@lutinglt/gitea-github-theme/core";

// 仓库代码布局调整, 侧边栏宽度调整
const repoGrid = css`
  .repo-grid-filelist-sidebar {
    grid-template-columns: auto 312px;
    gap: 16px;
  }

  @media (max-width: 767.98px) {
    .repo-grid-filelist-sidebar {
      grid-template-columns: 100%;
    }
  }
  .repo-grid-filelist-sidebar {
    .repo-home-sidebar-top,
    .repo-home-sidebar-bottom {
      padding-left: 24px;
    }
  }
`;

// 仓库代码页面侧边栏上半部, 版本发布以上
const repoSidebarTop = css`
  .page-content.repository.file.list {
    .repo-home-sidebar-top {
      /* 搜索代码 */
      .ui.input > input {
        background: unset;
      }
      a.muted:hover {
        text-decoration: none;
      }
      /* 仓库描述本身 */
      .repo-home-sidebar-header {
        margin-top: 10px;
      }
      /* 仓库描述内容 */
      .repo-description {
        margin-top: 10px;
        color: ${themeVars.color.text.self};
      }
      /* 仓库标签 */
      #repo-topics {
        margin: 8px 0px !important;
        gap: 4px !important;
      }
      #manage_topic {
        color: ${themeVars.color.text.light.num1} !important;
      }
      /* 仓库属性 */
      .flex-text-block {
        color: ${themeVars.color.text.light.num1};
        font-size: 14px;
        font-weight: 600;
        margin-top: 10px;
        &.muted {
          margin-top: 2px;
          font-weight: normal;
        }
        svg.svg {
          margin-right: 4px;
        }
      }
      #manage_topic,
      a.flex-text-block.muted {
        &:hover {
          color: ${themeVars.color.primary.self} !important;
        }
      }
    }
  }
`;

// 仓库代码页面侧边栏下半部, 版本发布以下
const repoSidebarBottom = css`
  .page-content.repository.file.list {
    .repo-home-sidebar-bottom {
      a.muted:hover {
        text-decoration: none;
      }
      svg.svg.octicon-tag {
        color: ${themeVars.color.green.self};
      }
      .repo-home-sidebar-header {
        margin: 8px 0;
      }
      /* 版本 */
      .repo-home-sidebar-header + .flex-relaxed-list {
        gap: 0px;
        margin-bottom: 8px;
        .flex-text-block {
          /* 版本名称 */
          > a.muted {
            font-size: 14px;
            font-weight: 600;
          }
          /* 版本标签 */
          > .tw-shrink-0 {
            display: inline-flex;
          }
        }
        relative-time {
          color: ${themeVars.color.text.light.num1};
          font-size: 12px;
        }
      }
      /* 编程语言 */
      .language-stats {
        height: 8px;
        margin-bottom: 0px;
        background-color: ${themeVars.github.progressBar.track.bgColor};
        outline: 1px solid ${themeVars.github.progressBar.track.borderColor};
        outline-offset: -1px;
      }
      .language-stats-details .item {
        color: ${themeVars.color.text.light.num1};
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

export default cssCombine(repoGrid, repoSidebarTop, repoSidebarBottom);
