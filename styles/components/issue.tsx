import { css, themeVars } from "src/types/vars";

export const button = css`
  .issue-content-left .field.footer {
    // 关闭工单按钮
    .ui.red.basic.button#status-button {
      color: ${themeVars.github.fgColor.done};
      background-color: ${themeVars.color.button};
      border-color: ${themeVars.color.light.border};
      &:hover {
        background-color: ${themeVars.color.hover.self};
      }
    }

    // 重新开启按钮
    .ui.basic.primary.button#status-button {
      color: ${themeVars.github.fgColor.success};
      background-color: ${themeVars.color.button};
      border-color: ${themeVars.color.light.border};
      &:hover {
        background-color: ${themeVars.color.hover.self};
      }
    }
  }
`;

export const babel = css`
  .issue-content-left {
    .badge {
      // 时间线打开状态标签
      &.tw-bg-green {
        background-color: ${themeVars.github.bgColor.success.emphasis} !important;
        border-color: ${themeVars.github.bgColor.success.emphasis} !important;
      }
      // 时间线关闭状态标签
      &.tw-bg-red {
        background-color: ${themeVars.github.bgColor.done.emphasis} !important;
        border-color: ${themeVars.github.bgColor.done.emphasis} !important;
      }
      // 时间线合并状态标签
      &.tw-bg-purple {
        background-color: ${themeVars.github.bgColor.done.emphasis} !important;
        border-color: ${themeVars.github.bgColor.done.emphasis} !important;
      }
    }
  }
  // 工单&PR状态标签
  .ui.label.issue-state-label {
    border-radius: 25px !important;

    &.green {
      color: ${themeVars.color.text.self} !important;
      background-color: ${themeVars.github.bgColor.success.emphasis} !important;
      border-color: ${themeVars.github.bgColor.success.emphasis} !important;
    }

    &.red {
      color: ${themeVars.color.text.self} !important;
      background-color: ${themeVars.github.bgColor.done.emphasis} !important;
      border-color: ${themeVars.github.bgColor.done.emphasis} !important;
    }

    &.purple {
      color: ${themeVars.color.text.self} !important;
      background-color: ${themeVars.github.bgColor.done.emphasis} !important;
      border-color: ${themeVars.github.bgColor.done.emphasis} !important;
    }
  }
`;
