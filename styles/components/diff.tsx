import { css, themeVars } from "src";

export const diff = css`
  /* 间隔行多余的颜色 */
  .tag-code td {
    background-color: unset;
  }
  /* 增加/删除行多余的颜色 */
  .code-diff-unified {
    .del-code,
    .add-code {
      background-color: unset;
      border-color: unset;
    }
  }
  /* 增加/删除相关代码背景色圆角 */
  .added-code,
  .removed-code {
    border-radius: 0.1875rem;
  }
  /* 展开/收缩按钮悬停时颜色 */
  .code-expander-button:hover {
    background: ${themeVars.github.bgColor.accent.emphasis}
  }
  /* 行号居中 */
  .lines-num {
    text-align: center !important;
  }
`;
