import { css, otherThemeVars, themeVars } from "src/types/vars";

export const diff = css`
  /* 折叠行多余的颜色 */
  .tag-code {
    background-color: unset;
    /* 折叠行文本 */
    .code-inner {
      color: ${themeVars.color.text.light.num1};
    }
  }
  /* 增加/删除行多余的颜色 */
  .code-diff-unified {
    .del-code,
    .add-code {
      background: unset;
      border-color: unset;
    }
  }
  /* 增加/删除相关代码背景色圆角 */
  .added-code,
  .removed-code {
    border-radius: 0.1875rem;
    color: ${themeVars.color.text.self};
    /* 覆盖掉 chroma 的颜色 */
    * {
      color: ${themeVars.color.text.self} !important;
    }
  }
  /* 展开/收缩按钮 */
  .code-expander-button {
    color: ${themeVars.color.text.light.num1};
    height: 28px !important;
    &:hover {
      background: ${themeVars.github.bgColor.accent.emphasis};
      color: ${themeVars.color.white};
    }
  }
  /* 行号居中 */
  .lines-num {
    text-align: center !important;
  }
  // 差异对比文件盒子
  .diff-file-box {
    // 差异对比文件头
    .diff-file-header {
      // 文件名
      .diff-file-name {
        font-weight: 400;
        .fold-file.btn svg {
          min-width: 16px;
          min-height: 16px;
          height: 16px;
          width: 16px;
        }
        .diff-stats-bar {
          height: 8px;
        }
        > div,
        .file-link {
          font-size: 12px;
        }
      }
      // 操作按钮
      .diff-file-header-actions {
        border-radius: ${otherThemeVars.border.radius};
        color: ${themeVars.color.text.light.num1};
        font-size: 12px;
        font-weight: 400;
        &:hover {
          background-color: ${themeVars.github.control.transparent.bgColor.hover};
        }
        .diff-header-popup-btn {
          padding: 5px !important;
        }
      }
    }
  }
`;
