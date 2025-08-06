import { css, otherThemeVars, themeVars } from "src/types/vars";

// 仓库列表
export const repositoriesExplore = css`
  // [TODO] 组织和用户使用 Github 的列表样式, 探索页面手机端样式待完善
  // 组织
  /* .page-content.organization.profile > .ui.container > .ui.stackable > .ui.eleven, */
  // 用户
  /* .page-content.user.profile > .ui.container > .ui.stackable > .ui.twelve, */
  // 探索
  .page-content.explore.repositories > .ui.container {
    > .flex-list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;

      > .flex-item {
        border: 1px solid ${themeVars.color.light.border};
        border-radius: ${otherThemeVars.border.radius};
        padding: 16px;
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
              gap: 8px;
              // 仓库中间的间隔线
              &:not(a) {
                color: ${themeVars.color.text.light.num1};
              }
              // 仓库类型和状态标签
              > .label-list .label {
                padding: 3px 6px;
              }
            }
            // 仓库语言, 星标
            > .flex-item-trailing {
              color: ${themeVars.color.text.light.num1};
              gap: 16px;
              font-size: 12px;
              > .flex-text-inline .tw-mr-2 {
                margin-right: 0 !important;
              }
            }
          }
          // 描述和更新时间
          > .flex-item-body {
            margin-top: 8px;
            // 更新时间
            &:last-child {
              font-size: 12px;
            }
          }
          // 主题标签
          > .label-list {
            margin-top: 8px;
          }
        }
      }
    }
  }
`;
