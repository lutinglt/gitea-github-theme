import { css, themeVars } from "src/types/vars";

// 用户点星仓库列表
export const stars = css`
  .page-content.user.profile {
    .stars {
      > .flex-list {
        > .flex-item {
          padding: 24px 0;
          &:first-child {
            padding-top: 14px;
          }
          // 仓库头像
          > .flex-item-leading {
            img,
            svg {
              color: ${themeVars.color.text.light.num1};
            }
          }
          // 仓库信息
          > .flex-item-main {
            // 仓库标题
            > .flex-item-header {
              // 仓库名称
              > .flex-item-title {
                font-size: 20px;
                gap: 8px;
                // 仓库中间的间隔线
                &:not(a) {
                  color: ${themeVars.color.primary.self};
                }
              }
              // 仓库语言, 星标
              > .flex-item-trailing {
                color: ${themeVars.color.text.light.num1};
                gap: 16px;
                font-size: 12px;
                > .flex-text-inline .color-icon {
                  width: 12px;
                  height: 12px;
                  margin-right: 0 !important;
                }
              }
            }
            // 描述和更新时间
            > .flex-item-body {
              margin-top: 10px;
              // 更新时间
              &:last-child {
                font-size: 12px;
              }
            }
            // 主题标签
            > .label-list {
              margin-top: 10px;
            }
          }
        }
      }
    }
  }
`;
