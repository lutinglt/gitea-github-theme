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

// 顶部右侧按钮组
export const rightButton = css`
  .page-content.repository {
    &.releases,
    &.tags {
      .ui.small.button {
        background-color: ${themeVars.color.button};
        border-color: ${themeVars.color.light.border};
        box-shadow: none;
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

// 标签页样式
export const tags = css`
  .page-content.repository.tags {
    // 标签的选项取消下划线
    .tag-list-row {
      .tag-list-row-title {
        line-height: 1.5;
      }
      .muted-links {
        color: ${themeVars.color.text.light.num1};
        font-size: 12px;
        svg {
          min-width: 12px;
          width: 12px;
        }
        a:hover {
          text-decoration: none;
        }
      }
    }
  }
`;

// 发布页样式
export const releases = css`
  .page-content.repository.releases {
    > .ui.container > .divider {
      margin: 16px 0;
    }
    ul#release-list {
      gap: 32px;
      margin: 32px 0 16px 0;
      .release-entry {
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
          padding: 16px;
          .svg {
            color: ${themeVars.color.text.light.num1};
          }
          // 标题
          .release-list-title {
            font-size: 32px;
            gap: 16px;
          }
          // 提交信息
          p.text.grey {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
            margin: 24px 0 0 0;
            span {
              word-break: break-word;
            }
            .time {
              color: ${themeVars.color.text.self};
            }
          }
          // 发布内容
          .markup {
            > *:first-child {
              margin-top: 24px !important;
            }
          }
          // 分割线
          .divider {
            position: relative;
            left: -16px;
            width: calc(100% + 32px);
            border-top-width: 1.5px;
            margin: 24px 0 16px 0;
          }
          // 下载列表
          .download {
            summary {
              font-size: 18px;
              font-weight: 600;
              margin-top: 16px;
              &::marker {
                font-size: 14px;
              }
            }
            .attachment-list {
              margin-top: 16px;
              .item {
                align-items: center;
                line-height: 17px;
                padding: 8px 16px;
                .flex-text-inline {
                  gap: 8px;
                }
                // 只选中左侧文件名称
                strong.flex-text-inline:hover {
                  text-decoration: underline !important;
                }
                .attachment-right-info {
                  color: ${themeVars.color.text.light.num1};
                  .svg {
                    height: 28px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
