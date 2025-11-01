import { css, otherThemeVars, themeVars } from "src/types/vars";

export const diff = css`
  /* 折叠行多余的颜色 */
  .tag-code {
    background-color: unset;
    height: 24px;
    // 展开/收缩按钮高度与.tag-code一致
    .code-expander-buttons,
    // 双向展开的按钮
    .code-expander-buttons[data-expand-direction="3"] {
      .code-expander-button {
        height: 24px;
      }
    }
    /* 展开/收缩按钮 */
    .code-expander-button {
      color: ${themeVars.color.text.light.num1};
      &:hover {
        background: ${themeVars.github.bgColor.accent.emphasis};
        color: ${themeVars.color.white};
      }
    }
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
    border-radius: 3px;
    color: ${themeVars.color.text.self};
    /* 覆盖掉 chroma 的颜色 */
    * {
      color: ${themeVars.color.text.self} !important;
    }
  }
  // 代码行
  .lines-num,
  .lines-code {
    line-height: 24px;
  }
  // 行号居中
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
        color: ${themeVars.color.text.light.num1};
        font-size: 12px;
        font-weight: 400;
        .diff-header-popup-btn {
          border-radius: ${otherThemeVars.border.radius};
          padding: 5px !important;
          &:hover {
            background-color: ${themeVars.github.control.transparent.bgColor.hover};
          }
        }
      }
    }
  }
  // 差异对比文件盒子
  .repository .diff-file-box .code-diff {
    // 隐藏多余的空白
    // 合并视图的第三列
    &.code-diff-unified colgroup col:nth-child(3),
    // 拆分视图的第二列和第六列
    &.code-diff-split colgroup col:nth-child(2),
    &.code-diff-split colgroup col:nth-child(6),
    td.lines-escape {
      width: 0; // 不要使用 display: none; 否则会影响布局
      visibility: hidden;
    }
    // 固定表格中每列的宽度
    table {
      width: 100%;
    }
    // 行号宽度
    // 合并视图的第一列和第二列
    &.code-diff-unified colgroup col:nth-child(1),
    &.code-diff-unified colgroup col:nth-child(2),
    // 拆分视图的第一列和第五列
    &.code-diff-split colgroup col:nth-child(1),
    &.code-diff-split colgroup col:nth-child(5) {
      width: 40;
    }
    // 修复 table 100% 宽度时的行号换行问题
    .lines-num {
      text-wrap-mode: wrap; // 2024年10月浏览器开始支持
    }
    // 合并视图的第四列
    &.code-diff-unified colgroup col:nth-child(4),
    // 拆分视图的第三列和第七列, -/+ 保持居中的宽度
    &.code-diff-split colgroup col:nth-child(3),
    &.code-diff-split colgroup col:nth-child(7) {
      width: 20;
    }
  }
`;
