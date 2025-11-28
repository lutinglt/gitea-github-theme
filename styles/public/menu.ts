import { css, otherThemeVars, themeVars } from "src/types/vars";
import { labelStyle } from "./label";

export const activeItemAfterStyle = {
  backgroundColor: themeVars.github.borderColor.accent.emphasis,
  borderRadius: otherThemeVars.border.radius,
  height: "24px",
  left: "-8px",
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
  .menu .item svg {
    color: ${themeVars.color.text.light.num1};
  }
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
  // 菜单标签样式
  .ui.menu .item > .label:not(.floating) {
    ${labelStyle}
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
    a.item:hover {
      background: ${themeVars.github.control.transparent.bgColor.hover};
    }
  }
  // 二级导航栏, 比如仓库的导航栏, 仓库列表的导航栏, 探索的类型导航栏
  .ui.secondary.pointing.menu {
    .overflow-menu-items {
      gap: 4px;
      .item {
        padding: 5px 8px !important;
        margin-block-start: 0.5rem;
        margin-block-end: 0.5rem;
        margin-bottom: 0.5rem !important;
      }
    }
    .item {
      font-weight: 400; // 二级导航栏不需要加粗
    }
    .active.item,
    .dropdown.item,
    .link.item,
    a.item {
      border-radius: ${otherThemeVars.border.radius};
      color: ${themeVars.color.text.self};
      svg {
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
  // 修复仓库页面下的二级导航栏的下划线因浏览器 BUG 导致显示的异常问题(导致下划线和分割线重叠变粗)
  .page-content.repository .ui.secondary.pointing.menu {
    border-bottom: none !important;
  }
`;

// 分页菜单
export const paginationMenu = css`
  .ui.borderless.pagination.menu {
    align-items: center;
    background-color: unset;
    border: 0;
    gap: 4px;
    min-height: fit-content;
    .item {
      border-radius: ${otherThemeVars.border.radius};
      min-width: 32px;
      min-height: 32px;
      height: 32px;
      justify-content: center;
      // 避免一些 hover 效果调整内容
      padding: 5px 10px !important;
      &.active {
        background: ${themeVars.github.bgColor.accent.emphasis};
        color: ${themeVars.color.white};
      }
      // 设置透明边框线避免 hover 时元素大小变化
      &:not(.active) {
        border: 1px solid #ffffff00;
        &:hover {
          background: unset;
          border-color: ${themeVars.color.secondary.self};
        }
      }
      &.navigation {
        &:not(.disabled) {
          span,
          svg {
            color: ${themeVars.color.primary.self};
          }
        }
        // 对齐文字
        svg {
          margin-top: 2px;
        }
      }
    }
  }
`;

// 单行双选项菜单
export const smallCompactMenu = css`
  // 订阅/关注切换菜单(应只选中订阅/关注页面, 不能选中通知页面)
  .page-content.user.notification > .ui.container:has(.flex-list),
  // 里程碑/标签切换菜单(里程碑页)
  .page-content.repository.milestones .list-header,
  // 里程碑/标签切换菜单(新建里程碑页)
  .page-content.repository.new.milestone .issue-navbar,
  // 里程碑/标签切换菜单(标签页)
  .page-content.repository.labels .issue-navbar {
    .ui.compact.small.menu.small-menu-items {
      background: ${themeVars.color.hover.self} !important;
      border: 0;
      font-size: 14px;
      gap: 8px;
      height: 32px;
      min-height: 32px !important;
      > .item {
        background: unset !important;
        border: 1px solid ${themeVars.color.hover.self};
        border-radius: ${otherThemeVars.border.radius};
        padding: 6px 12px !important;
        &.active {
          background: ${themeVars.color.menu} !important;
          border-color: ${themeVars.color.light.border};
          font-weight: 600;
        }
        &::before {
          display: none;
        }
        &:not(.active) {
          top: 4px;
          padding: 4px 12px !important;
          height: calc(100% - 8px);
          position: relative;
          // 该方案只适用于 2 个 item 的情况
          // left / right 数值为 gap 数值的一半
          &:first-child {
            left: 4px;
          }
          &:last-child {
            right: 4px;
          }
          &:hover {
            background: ${themeVars.github.control.transparent.bgColor.hover} !important;
          }
        }
      }
    }
  }
`;
