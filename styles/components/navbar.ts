import { fallbackVar } from "src/functions";
import { css, customThemeVars, otherThemeVars, themeVars } from "src/types/vars";

export const navbarRight = css`
  #navbar {
    border-bottom: 0;
    padding: 0px 16px;
    min-height: 64px;
    .navbar-left {
      gap: 8px;
      > .item {
        padding: 4px 8px;
        min-height: 20px;
        &.active {
          font-weight: 600;
        }
        &#navbar-logo {
          // 与下方的用户切换头像对齐
          padding-left: 6px;
          &:hover {
            background: unset;
          }
          img {
            height: 32px;
            width: 32px;
          }
        }
      }
    }
    // 进入用户页面后, 避免注册, 登录和首页等意外覆盖
    .navbar-right:has(.user-menu) {
      gap: 8px;
      // 右侧按钮, 但不包括头像
      > .item:not(:last-child) {
        display: grid;
        gap: 4px;
        grid-auto-columns: max-content;
        align-items: center;
        align-content: center;
        justify-content: center;
        border: 1px solid ${themeVars.color.light.border};
        border-radius: ${otherThemeVars.border.radius};
        padding: unset;
        height: 32px;
        min-width: 32px;
        min-height: 32px;
        // 纠正内容保证居中
        .tw-relative {
          height: 16px;
          width: 16px;
        }
        .svg {
          color: ${themeVars.color.text.light.num1};
        }
        // 带下拉菜单的按钮
        &.ui.dropdown {
          padding: 0 8px;
          .text {
            display: grid;
            grid-auto-flow: column;
            align-items: center;
            > svg {
              margin-right: 4px;
            }
            // 三角号纠正高度保持居中
            .not-mobile {
              height: 16px;
            }
          }
          &:hover {
            background-color: ${themeVars.color.nav.hoverBg};
          }
        }
      }
      .item.ui.dropdown {
        // 头像菜单
        &:last-child {
          padding-left: 2px; // 调整此选项需同步增减相同的标识的 left
          padding-right: 16px;
          .text {
            // 不显示小箭头标识
            > .not-mobile {
              display: none;
            }
            // 头像
            img {
              border-radius: 25px;
              height: 32px;
              max-height: 32px;
            }
          }
        }
        // 用户头像的管理员标识
        .navbar-profile-admin {
          background-color: ${themeVars.github.bgColor.accent.emphasis};
          border-radius: 25px;
          border: 2px solid ${themeVars.color.nav.bg};
          color: ${themeVars.color.white};
          font-size: 9px;
          font-weight: 600;
          padding: 2px 5px;
          top: -7px;
          left: 21px;
        }
      }
      // 通知和计时器的圆点
      a.item {
        .notification_count,
        .header-stopwatch-dot {
          background-color: ${themeVars.github.bgColor.accent.emphasis};
          border-radius: 25px;
          color: ${themeVars.color.white};
          font-size: 9px;
          font-weight: 600;
          top: -15px;
          left: 11px;
        }
      }
    }
    // 用户菜单
    .navbar-right .user-menu {
      width: ${fallbackVar(customThemeVars.userMenuWidth, "192px")};
      max-width: 320px;
      > .header {
        font-size: 14px;
        font-weight: 400;
        margin: 0;
        padding: 16px 16px 8px 16px;
        strong {
          font-weight: 600;
        }
      }
      > .divider {
        margin: 8px;
        width: calc(100% - 16px);
      }
    }
  }
  // 手机下的创建菜单按钮
  @media (max-width: 767.98px) {
    #navbar .navbar-right:has(.user-menu) > .item:not(:last-child) {
      display: none;
    }
    #navbar.navbar-menu-open .navbar-right:has(.user-menu) > .item:not(:last-child) {
      display: grid;
    }
  }
`;

// 二级导航栏
export const secondaryNav = css`
  .page-content > :first-child.secondary-nav {
    margin-bottom: 16px;
    // 仪表板界面的二级导航栏用户菜单
    > .ui.secondary.stackable.menu {
      gap: 0px;
      min-height: 48px;
      > .item {
        > .ui.dropdown > .text {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          svg {
            margin-right: 4px;
          }
        }
      }
      > .right.menu {
        gap: 4px;
      }
    }
  }
`;
