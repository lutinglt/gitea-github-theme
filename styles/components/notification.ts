import { css, otherThemeVars, themeVars } from "src/types/vars";

// 用户订阅/关注页面
export const notification = css`
  .page-content.user.notification {
    > .ui.container {
      > .ui.attached.segment {
        border: 0;
        padding: 0;
        > .divider {
          display: none;
        }
        // 订阅列表
        &:has(#issue-list) {
          > .tw-flex {
            align-items: center;
            align-content: center;
            background-color: ${themeVars.color.box.header};
            border: 1px solid ${themeVars.color.light.border};
            border-bottom: 0;
            border-top-left-radius: ${otherThemeVars.border.radius};
            border-top-right-radius: ${otherThemeVars.border.radius};
            height: 52px;
            padding: 8px;
            // 左侧菜单
            > .tw-flex:first-child > .ui.compact.menu {
              align-items: center;
              border: 0;
              > .item {
                background: unset !important;
                border-radius: ${otherThemeVars.border.radius};
                color: ${themeVars.color.text.light.num1};
                padding: 0px 8px;
                height: 30px;
                &:before {
                  display: none;
                }
                &:hover {
                  background: ${themeVars.github.control.transparent.bgColor.hover} !important;
                }
                &.active {
                  color: ${themeVars.color.text.self};
                  font-weight: 700;
                }
              }
            }
            // 右侧菜单
            > .tw-flex:last-child > .ui.menu {
              align-items: center;
              > .item {
                color: ${themeVars.color.text.light.num1};
              }
              > .ui.button {
                padding: 0 12px;
                height: 32px;
              }
            }
          }
        }
        // 关注列表
        > .flex-list:not([id]) {
          border: 1px solid ${themeVars.color.light.border};
          border-radius: ${otherThemeVars.border.radius};
          > .flex-item {
            padding: 16px;
            > .flex-item-main {
              gap: 4px;
              > .flex-item-header {
                > .flex-item-title {
                  gap: 12px;
                }
                > .flex-item-trailing {
                  color: ${themeVars.color.text.light.num1};
                  font-size: 12px;
                  font-weight: 400;
                  gap: 16px;
                  .color-icon {
                    width: 12px;
                    height: 12px;
                    margin-right: 0 !important;
                  }
                }
              }
              > .flex-item-body:last-child {
                font-size: 12px;
              }
            }
          }
        }
      }
      // 通知列表
      &:has(#notification_table) {
        > .tw-flex:first-child {
          background-color: ${themeVars.color.box.header};
          border: 1px solid ${themeVars.color.light.border};
          border-bottom: 0;
          border-top-left-radius: ${otherThemeVars.border.radius};
          border-top-right-radius: ${otherThemeVars.border.radius};
          height: 52px;
          padding: 8px;
          margin-bottom: 0 !important;
          // 左侧菜单
          > .ui.compact.menu {
            align-items: center;
            border: 0;
            > .item {
              background: unset !important;
              border-radius: ${otherThemeVars.border.radius};
              color: ${themeVars.color.text.light.num1};
              padding: 0px 8px;
              height: 30px;
              &:before {
                display: none;
              }
              &:hover {
                background: ${themeVars.github.control.transparent.bgColor.hover} !important;
              }
              &.active {
                color: ${themeVars.color.text.self};
                font-weight: 700;
              }
              .notifications-unread-count {
                margin-left: 4px;
              }
            }
          }
        }
        // 通知全部确认按钮
        .ui.ui.ui.ui.mini.button {
          height: 32px;
        }
      }
      // 通知列表
      #notification_table {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        color: ${themeVars.color.text.light.num1};
        > .notifications-item {
          border-top: 1px solid ${themeVars.color.light.border};
          padding: 8px !important;
          &:first-child {
            border-top: 0;
          }
          &:last-child {
            border-bottom-left-radius: ${otherThemeVars.border.radius};
            border-bottom-right-radius: ${otherThemeVars.border.radius};
          }
          &:hover {
            background: ${themeVars.github.bgColor.accent.muted};
            box-shadow: 2px 0 0 ${themeVars.github.borderColor.accent.emphasis} inset;
            color: ${themeVars.color.text.self};
          }
          > .notifications-link {
            > .notifications-top-row {
              font-size: 12px !important;
            }
            > .notifications-bottom-row {
              font-size: 14px !important;
            }
          }
          > .notifications-updated {
            font-size: 12px;
          }
          > .notifications-buttons {
            .interact-bg {
              background: ${themeVars.github.bgColor.accent.muted} !important;
              color: ${themeVars.color.text.light.num1};
              padding: 8px !important;
              &:hover {
                background: ${themeVars.github.control.transparent.bgColor.hover} !important;
                color: ${themeVars.color.text.self};
              }
            }
          }
        }
      }
    }
  }
`;
