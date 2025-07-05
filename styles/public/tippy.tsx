import { overlayAppear } from "src/core/theme";
import { css, themeVars } from "src/types/vars";

// 一些界面内的弹窗, 比如克隆按钮, PR信息, Runner信息 等
export const tippyBox = css`
  .tippy-box {
    margin-top: -3px;
    border-radius: 12px;
    overflow: hidden;
    animation: 200ms cubic-bezier(0.33, 1, 0.68, 1) 0s 1 normal none running ${overlayAppear};
    // 边框线同步 github 样式
    &[data-theme="default"],
    &[data-theme="box-with-header"] {
      border: unset;
      box-shadow:
        0px 0px 0px 1px ${themeVars.color.light.border},
        0px 6px 12px -3px ${themeVars.color.shadow.self},
        0px 6px 18px 0px ${themeVars.color.shadow.self};
    }
    // 带标题的弹窗 (Runner信息)
    &[data-theme="box-with-header"] {
      .tippy-content {
        background-color: ${themeVars.color.menu};
        .ui.attached.header {
          background-color: ${themeVars.color.body};
        }
      }
    }
  }
`;
