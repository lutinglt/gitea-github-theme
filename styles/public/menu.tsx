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

export const menu = css`
  // 菜单默认悬浮色更改
  .ui.menu a.item,
  .ui.secondary.pointing.menu a.item,
  .ui.secondary.menu .dropdown.item {
    &:hover {
      background: ${themeVars.github.control.transparent.bgColor.hover};
    }
  }
  // 一些水平小型菜单的颜色更改
  .small-menu-items .item {
    background-color: ${themeVars.color.body} !important;
    &:hover {
      background: ${themeVars.github.control.transparent.bgColor.hover} !important;
    }
  }
  // 一些菜单的悬浮色更改
  .ui.segment .ui.tabular.menu,
  .header-wrapper .ui.tabular.menu,
  .ui.secondary.pointing.menu {
    .item,
    .active.item {
      &:hover {
        background: ${themeVars.github.control.transparent.bgColor.hover};
      }
    }
  }
`;

export const secondaryMenu = css`
  // 二级菜单, 比如 Issue/PR/Actions 的筛选菜单
  .ui.secondary.menu {
    .item {
      padding: 0px 12px;
      height: 32px;
      font-weight: 500;
    }
  }
  // 二级导航栏, 比如仓库的导航栏, 仓库列表的导航栏, 探索的类型导航栏
  .ui.secondary.pointing.menu {
    .overflow-menu-items {
      gap: 0.5rem;
      .item {
        padding: 5px 8px !important;
        margin-block-start: 0.5rem;
        margin-block-end: 0.5rem;
        margin-bottom: 0.5rem !important;
      }
    }
    .active.item,
    .dropdown.item,
    .link.item,
    a.item {
      border-radius: ${otherThemeVars.border.radius};
      color: ${themeVars.color.text.self};
      svg {
        color: ${themeVars.color.text.light.num1};
        margin-right: 8px;
      }
    }
    .active.item {
      // 取消激活时的下划线, 需要为透明, 保持间距
      border-color: #ffffff00;
      // 模仿 github 的下划线
      span:after {
        content: "";
        background: ${themeVars.github.underlineNav.borderColor.active};
        border-radius: ${otherThemeVars.border.radius};
        bottom: calc(50% - 1.8rem);
        height: 2px;
        position: absolute;
        right: 50%;
        transform: translate(50%, -50%);
        width: 100%;
        z-index: 1;
      }
    }
  }
`;
