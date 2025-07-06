import { css, otherThemeVars, themeVars } from "src/types/vars";

// 克隆按钮的弹窗
export const clone = css`
  .tippy-box {
    .clone-panel-popup {
      //标题
      .clone-panel-field:first-of-type {
        font-weight: bold;
        margin-top: 16px;
        margin-left: 16px;
      }
      // 按钮组
      .clone-panel-tab {
        display: flex;
        gap: 8px;
        margin-left: 12px;
        // 按钮
        .item {
          color: ${themeVars.color.text.self};
          font-weight: 600;
          padding: 6px 8px;
          margin: 8px 0;
          &:hover {
            background: ${themeVars.github.control.transparent.bgColor.hover};
            border-radius: ${otherThemeVars.border.radius};
          }
          &.active:after {
            content: "";
            display: block;
            position: absolute;
            bottom: -8px;
            left: 0;
            width: 100%;
            height: 2px;
            background: ${themeVars.github.underlineNav.borderColor.active};
          }
        }
        .item.active {
          border-bottom: 0;
          position: relative;
        }
      }
      // 克隆地址
      .ui.input.action {
        > input,
        > input:hover {
          border: 1px solid ${themeVars.color.light.border};
          border-radius: ${otherThemeVars.border.radius};
        }
        > input:focus,
        > input:focus-visible {
          border-color: ${themeVars.github.borderColor.accent.emphasis};
        }
        .ui.ui.ui.button {
          background-color: unset;
          border: unset;
          border-radius: ${otherThemeVars.border.radius};
          color: ${themeVars.color.text.light.num1};
          padding: 5px 10px;
          margin-left: 5px;
          &:hover {
            background-color: ${themeVars.github.control.transparent.bgColor.hover};
          }
        }
      }
      // 面板操作列表之间的分割线
      .divider {
        margin: 0;
      }
      // 面板操作列表
      .clone-panel-list {
        margin: 8px;
        .item {
          border-radius: ${otherThemeVars.border.radius};
          padding: 6px 8px;
          line-height: 1.5;
          margin: 0;
          svg {
            color: ${themeVars.color.text.light.num1};
            margin-right: 0.25rem;
          }
        }
        > .item:hover {
          color: ${themeVars.color.text.self};
          text-decoration: none;
          background: ${themeVars.github.control.transparent.bgColor.hover};
        }
      }
    }
  }
`;
