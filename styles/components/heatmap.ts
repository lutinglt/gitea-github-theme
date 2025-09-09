import { css, themeVars } from "src/types/vars";

export const heatmap = css`
  #user-heatmap {
    + .divider:not(.divider-text) {
      border-color: #0000;
      margin: 8px 0px;
    }
    .total-contributions {
      left: 25px + 20px;
      bottom: 0 + 12px;
    }
    .total-contributions,
    .vch__legend-right {
      color: ${themeVars.color.text.light.num1};
    }
    .vch__container {
      padding: 12px 20px;
      box-shadow: ${themeVars.github.shadow.floating.small};
      border-radius: 12px;
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
  }
`;

// 动态
export const activity = css`
  .flex-list#activity-feed {
    border-radius: 12px;
    box-shadow: ${themeVars.github.shadow.floating.small};
    > .flex-item {
      gap: 12px;
      padding: 12px 8px 16px 14px;
      > .flex-item-main {
        gap: 8px !important;
        > div:not([class]) {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        relative-time {
          color: ${themeVars.color.text.light.num1};
        }
      }
      // 动态的右侧 svg 图标
      .flex-item-trailing svg {
        height: 20px;
        width: 20px;
      }
    }
    > .page.buttons {
      border-top: 1px solid ${themeVars.color.secondary.self};
      padding: 12px 0px;
    }
  }
`;
