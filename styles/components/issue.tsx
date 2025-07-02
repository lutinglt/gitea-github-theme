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
