import { css, otherThemeVars, themeVars } from "src/types/vars";

export const activeItemAfterStyle = {
  backgroundColor: themeVars.github.borderColor.accent.emphasis,
  borderRadius: otherThemeVars.border.radius,
  height: "24px",
  left: "calc(0.5rem * -1)",
  position: "absolute",
  top: "calc(50% - 12px)",
  width: "4px",
};

export const verticalMenu = css`
  // 垂直菜单, 用于左侧边栏
  // 设置页面中的菜单, Actions 工作流菜单, WorkflowRuns Job 菜单
  .ui.vertical.menu {
    // 去除边框, 和背景色同色
    background: ${themeVars.color.body};
    border: 0;
    // 设置页面的菜单头部
    .header.item {
      color: ${themeVars.color.text.light.num1} !important;
      font-size: 1.5rem;
      font-weight: 700;
      background: unset;
      margin-bottom: 0.5rem;
    }
    // 菜单项被悬停时的背景色, 限制a标签, 避免为子菜单多余渲染
    a.item:hover {
      background: ${themeVars.github.control.transparent.bgColor.hover};
    }
    // 菜单项
    .item,
    .item > summary {
      font-size: 1.1rem;
      background: unset;
      border-radius: ${otherThemeVars.border.radius};
      padding: 6px 8px;
    }
    // Actions 菜单的圆角覆盖
    > .item,
    > .active.item {
      &:first-child,
      &:last-child {
        border-radius: ${otherThemeVars.border.radius};
      }
    }
    // 去除菜单项的边框线
    .item:before {
      background: unset;
    }
    // 激活的菜单项
    .active.item,
    .active.item > summary {
      font-weight: 600;
      border-radius: ${otherThemeVars.border.radius};
    }
    // 添加伪元素, 用于指示当前激活的菜单项
    .active.item:after {
      content: "";
      ${activeItemAfterStyle};
    }
    // 部分菜单项的子菜单
    details.item {
      // 子菜单的标题
      summary:hover {
        background: ${themeVars.github.control.transparent.bgColor.hover};
      }
      // 子菜单的选项
      .menu .item {
        color: ${themeVars.color.text.self};
      }
      // 子菜单的选项被激活
      &:has(.active.item) {
        > summary {
          font-weight: 600;
          background: ${themeVars.color.active};
          // 收回状态,悬停色
          &:hover {
            background: ${themeVars.github.control.transparent.bgColor.hover};
          }
        }
        &:after {
          content: "";
          ${activeItemAfterStyle};
        }
        // 子菜单的选项
        .active.item {
          background: ${themeVars.color.active};
          font-weight: 400;
          &:hover {
            background: ${themeVars.github.control.transparent.bgColor.hover};
          }
        }
        // 子菜单展开时
        &[open] {
          > summary {
            background: unset;
            &:hover {
              background: ${themeVars.github.control.transparent.bgColor.hover};
            }
          }
          &:after {
            display: none;
          }
        }
      }
    }
  }
`;
