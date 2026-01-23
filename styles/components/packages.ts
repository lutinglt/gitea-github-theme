import { css, otherThemeVars, themeVars } from "src/types/vars";

// 组织/仓库的软件包列表(包含用户但未测试)
export const packagesList = css`
  .page-content.packages {
    // 这里必须要用 >, 否则会影响到软件包详细信息页的样式
    > .ui.container > div:not([class]) {
      border: 1px solid ${themeVars.color.light.border};
      border-radius: ${otherThemeVars.border.radius};
      margin-top: 16px;
      .flex-list {
        border-top: 1px solid ${themeVars.color.light.border};
        &:first-child {
          border-top: 0;
        }
        .flex-item {
          padding: 16px;
          .flex-item-main {
            .flex-item-title {
              gap: 8px;
              > a {
                min-height: 25px;
              }
              // 软件包类型的标签
              .ui.label {
                gap: 4px;
                padding: 3px 6px;
                min-height: 24.5px;
                background-color: unset;
                border: 1px solid ${themeVars.color.light.border};
                color: ${themeVars.color.primary.self};
              }
            }
            .flex-item-body {
              font-size: 12px;
              a {
                text-decoration: underline;
              }
            }
          }
        }
      }
    }
  }
`;

// 软件包详细信息页
export const packagesDetail = css`
  .page-content.packages {
    .issue-title-header > div {
      color: ${themeVars.color.text.light.num1};
    }
    .packages-content {
      .packages-content-left {
        width: calc(100% - 304px - 16px);
        .ui.top.attached.header {
          font-size: 14px;
          padding: 16px;
        }
        .ui.attached.segment {
          color: ${themeVars.color.text.light.num1};
          padding: 16px;
          .ui.table,
          .ui.form .field > label {
            color: ${themeVars.color.text.light.num1};
          }
          .ui.form .field > label {
            margin-bottom: 8px;
          }
          .markup {
            color: ${themeVars.color.text.self};
            pre {
              font-size: 12px;
              font-weight: 400;
              padding: 12px 16px;
            }
          }
          + .ui.top.attached.header {
            margin-top: 24px;
          }
        }
      }
      .packages-content-right {
        border: 0;
        padding: 0px 16px;
        width: 304px;
        > strong {
          font-size: 16px;
        }
        > .divider {
          margin: 16px 0px;
        }
        // 详情
        > .ui.relaxed.list {
          margin: 16px 0px;
          .item {
            color: ${themeVars.color.text.light.num1};
            svg {
              color: ${themeVars.color.text.self};
            }
            // 应该只选中版本中的 a 标签
            &.tw-flex {
              justify-content: space-between;
              > a {
                border: 1px solid ${themeVars.color.light.border};
                border-radius: 9999px;
                font-size: 12px;
                padding: 0px 6px;
                min-height: 20px;
                flex: none !important;
                &:hover {
                  text-decoration: none;
                }
              }
              // 不知道什么东西
              &::after {
                display: none;
              }
            }
          }
        }
      }
    }
  }
`;

// 手机页面下的软件包详细信息页
export const packagesListMobile = css`
  @media (max-width: 767.98px) {
    .page-content.packages .packages-content {
      .packages-content-left,
      .packages-content-right {
        width: 100%;
      }
    }
  }
`;
