import { css, themeVars } from "src/types/vars";

export const primaryStyle = {
  color: themeVars.github.button.primary.fgColor.rest,
  backgroundColor: themeVars.github.button.primary.bgColor.rest,
  borderColor: themeVars.github.button.primary.borderColor.rest,
};

export const primaryHoverStyle = {
  color: themeVars.github.button.primary.fgColor.rest,
  backgroundColor: themeVars.github.button.primary.bgColor.hover,
  borderColor: themeVars.github.button.primary.borderColor.hover,
};

// 普通按钮和主色调按钮
export const baseButton = css`
  .ui.button {
    min-height: 30px;
    font-weight: 500;
    padding: 9px 16px;
    svg {
      color: ${themeVars.color.text.light.num1};
    }
  }

  .ui.primary.button {
    ${primaryStyle}
    &:hover {
      ${primaryHoverStyle}
    }
    svg {
      color: ${themeVars.color.text.self};
    }
  }
  // 主色调基本按钮和普通按钮一样
  // 作者的关注按钮
  .ui.basic.primary.button {
    background-color: ${themeVars.color.button};
    color: ${themeVars.color.text.self};
    border-color: ${themeVars.color.light.border};
    &:hover {
      background-color: ${themeVars.color.hover.self};
      color: ${themeVars.color.text.self};
      border-color: ${themeVars.color.light.border};
    }
  }
  /* 普通按钮边框色不变 */
  .ui.basic.button,
  /* 仓库点星等数字标签按钮边框色不变 */
  .ui.labeled.button > .label {
    &:hover {
      border-color: ${themeVars.color.light.border};
    }
  }

  /* 普通按钮激活时背景色 */
  .ui.basic.buttons .button:active,
  .ui.basic.button:active,
  .ui.basic.buttons .active.button,
  .ui.basic.active.button,
  .ui.basic.buttons .active.button:hover,
  .ui.basic.active.button:hover {
    background-color: ${themeVars.github.button.default.bgColor.active};
  }
`;

// 红色按钮
export const redButton = css`
  .ui.red.button,
  .ui.basic.red.buttons .button,
  .ui.basic.red.button {
    color: ${themeVars.github.button.danger.fgColor.rest};
    background-color: ${themeVars.github.button.danger.bgColor.rest};
    /* 一些按钮边框色为红色, 比如危险操作区, 统一为暗色边框和 github 一致 */
    border-color: ${themeVars.color.light.border};

    &:hover {
      color: ${themeVars.github.button.danger.fgColor.hover};
      background-color: ${themeVars.github.button.danger.bgColor.hover};
      border-color: ${themeVars.github.button.danger.borderColor.hover};
    }
  }
`;

// 修复按钮高度
export const fixButtonHeight = css`
  .ui.small.buttons .button,
  .ui.ui.ui.ui.small.button {
    min-height: 26px;
  }
  .ui.tiny.buttons .button,
  .ui.ui.ui.ui.tiny.button {
    min-height: 20px;
  }
`;

export const fixButton = css`
  // 修复关注&派生 hover 意外点亮右侧 label 左边框
  .ui.ui.ui.ui.small.button {
    z-index: 0;
  }
`;
