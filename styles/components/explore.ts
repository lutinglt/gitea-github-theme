import { fallbackVar } from "src/functions";
import { css, customThemeVars, otherThemeVars, themeVars } from "src/types/vars";

const userRepoVar = fallbackVar(customThemeVars.userRepolistColumns, "2");
const exploreRepoVar = fallbackVar(customThemeVars.explore.repolistColumns, "2");
const orgRepoVar = fallbackVar(customThemeVars.org.repolistColumns, "1");

// 仓库列表
export const repoList = css`
  // 组织
  .page-content.organization.profile > .ui.container > .ui.stackable > .ui.eleven,
  // 用户
  .page-content.user.profile > .ui.container > .ui.stackable > .ui.twelve,
  // 探索
  .page-content.explore.repositories > .ui.container {
    // 排除用户的公开活动页
    > .flex-list:not(#activity-feed) {
      display: grid;
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
              > .flex-text-inline .color-icon {
                width: 12px;
                height: 12px;
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
  // 仓库列表列数
  // 组织
  .page-content.organization.profile > .ui.container > .ui.stackable > .ui.eleven > .flex-list {
    grid-template-columns: repeat(${orgRepoVar}, 1fr);
    gap: min(${orgRepoVar} * 8px, 16px);
  }
  // 用户
  // 排除用户的公开活动页
  .page-content.user.profile > .ui.container > .ui.stackable > .ui.twelve > .flex-list:not(#activity-feed) {
    grid-template-columns: repeat(${userRepoVar}, 1fr);
    gap: min(${userRepoVar} * 8px, 16px);
  }
  // 探索
  .page-content.explore.repositories > .ui.container > .flex-list {
    grid-template-columns: repeat(${exploreRepoVar}, 1fr);
    gap: min(${exploreRepoVar} * 8px, 16px);
  }
`;

const exploreUserVar = fallbackVar(customThemeVars.explore.userlistColumns, "3");
const orgUserVar = fallbackVar(customThemeVars.org.userlistColumns, "2");

// 用户列表
export const userList = css`
  // 组织
  .page-content.organization.members > .ui.container,
  // 探索的用户和组织
  .page-content.explore.users > .ui.container {
    > .flex-list {
      display: grid;
      > .flex-item {
        border: 1px solid ${themeVars.color.light.border};
        border-radius: ${otherThemeVars.border.radius};
        padding: 16px;
        > .flex-item-main {
          // 用户名称
          > .flex-item-title {
            gap: 8px;
            margin-bottom: 8px;
            // 用户标签
            > .label {
              font-size: 12px;
              padding: 3px 6px;
            }
          }
          // 用户描述
          > .flex-item-body {
            font-size: 12px;
            svg {
              width: 12px;
              min-width: 12px;
            }
          }
        }
      }
    }
  }
  // 用户列表列数
  // 组织
  .page-content.organization.members > .ui.container > .flex-list {
    grid-template-columns: repeat(${orgUserVar}, 1fr);
    gap: min(${orgUserVar} * 8px, 16px);
  }
  // 探索的用户和组织
  .page-content.explore.users > .ui.container > .flex-list {
    grid-template-columns: repeat(${exploreUserVar}, 1fr);
    gap: min(${exploreUserVar} * 8px, 16px);
  }
`;

// 手机下的仓库和用户列表
export const mobileList = css`
  @media (max-width: 767.98px) {
    // 组织的仓库列表
    .page-content.organization.profile > .ui.container > .ui.stackable > .ui.eleven,
    // 用户的仓库列表
    .page-content.user.profile > .ui.container > .ui.stackable > .ui.twelve,
    // 探索的仓库列表
    .page-content.explore.repositories > .ui.container,
    // 组织的成员列表
    .page-content.organization.members >.ui.container,
    // 探索的用户和组织列表
    .page-content.explore.users >.ui.container {
      // 排除用户的公开活动页
      > .flex-list:not(#activity-feed) {
        grid-template-columns: 1fr;
        gap: 8px;
      }
    }
  }
`;
