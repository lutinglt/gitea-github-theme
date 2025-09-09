import { animationDown } from "src/core/theme";
import { css, otherThemeVars, themeVars } from "src/types/vars";

// 一些界面内的提示框, 比如克隆按钮, PR信息, Runner信息 等
export const tippyBox = css`
  .tippy-box {
    margin-top: -3px;
    border-radius: 12px;
    overflow: hidden;
    animation: ${animationDown};
    // 边框线同步 github 样式
    &[data-theme="default"],
    &[data-theme="box-with-header"] {
      border: unset;
      box-shadow: ${themeVars.github.shadow.floating.small};
    }
    // 带标题的提示框 (Runner信息)
    &[data-theme="box-with-header"] {
      .tippy-content {
        background-color: ${themeVars.color.menu};
        .ui.attached.header {
          background-color: ${themeVars.color.body};
        }
      }
    }
    // 差异对比中文件路径行右侧的三个点菜单
    &[data-theme="menu"] {
      .tippy-content {
        padding: 8px;
        .item {
          border-radius: ${otherThemeVars.border.radius};
          &:hover {
            background-color: ${themeVars.github.control.transparent.bgColor.hover};
          }
        }
      }
    }
    // 专门用于提示信息的提示框, 比如提交的具体时间, 任务状态等
    &[data-theme="tooltip"] {
      border-radius: ${otherThemeVars.border.radius};
      .tippy-content {
        font-size: 12px;
        font-weight: 400;
        padding: 4px 8px;
      }
    }
  }
`;
