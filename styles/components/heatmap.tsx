import { css, themeVars } from "src/types/vars";

export const heatmap = css`
  .vch__container {
    // 覆盖热力图和图例的背景色
    .vch__day__square,
    .vch__legend__wrapper rect {
      // 圆角
      rx: 2.5px;
      ry: 2.5px;
      // hover 时的圆角
      border-radius: 0.75px;
      // 宽度和高度可以用来控制间隔
      width: 9px;
      height: 9px;
      // 边框
      outline: 0.5px solid ${themeVars.github.contribution.default.borderColor.num0};
      // 边框向内偏移
      outline-offset: -0.5px;

      &[style="fill: var(--color-secondary-alpha-60);"] {
        fill: ${themeVars.github.contribution.default.bgColor.num0} !important;
      }

      &[style="fill: var(--color-primary-light-4);"] {
        fill: ${themeVars.github.contribution.default.bgColor.num1} !important;
        outline-color: ${themeVars.github.contribution.default.borderColor.num1};
      }

      &[style="fill: var(--color-primary-light-2);"] {
        fill: ${themeVars.github.contribution.default.bgColor.num2} !important;
        outline-color: ${themeVars.github.contribution.default.borderColor.num2};
      }

      &[style="fill: var(--color-primary);"] {
        fill: ${themeVars.github.contribution.default.bgColor.num3} !important;
        outline-color: ${themeVars.github.contribution.default.borderColor.num3};
      }

      &[style="fill: var(--color-primary-dark-2);"] {
        fill: ${themeVars.github.contribution.default.bgColor.num4} !important;
        outline-color: ${themeVars.github.contribution.default.borderColor.num4};
      }

      &[style="fill: var(--color-primary-dark-4);"] {
        fill: ${themeVars.github.contribution.default.bgColor.num5} !important;
        outline-color: ${themeVars.github.contribution.default.borderColor.num5};
      }
    }
  }
`;
