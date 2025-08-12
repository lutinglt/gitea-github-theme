import { css, otherThemeVars, themeVars } from "src/types/vars";

export const navbarRight = css`
  #navbar {
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
              margin-right: 8px;
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
          color: ${themeVars.color.white};
          font-size: 8px;
          font-weight: 600;
          padding: 2px 5px;
          top: -3px;
          left: 22px;
        }
      }
      // 通知和计时器的圆点
      a.item {
        .notification_count,
        .header-stopwatch-dot {
          background-color: ${themeVars.github.bgColor.accent.emphasis};
          border-radius: 25px;
          color: ${themeVars.color.white};
          font-size: 8px;
          font-weight: 600;
          top: -14px;
          left: 12px;
        }
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
