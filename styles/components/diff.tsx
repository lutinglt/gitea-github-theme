import { css, themeVars } from "src/types/vars";

export const diff = css`
  /* 折叠行多余的颜色 */
  .tag-code {
    background-color: unset;
    /* 折叠行文本 */
    .code-inner {
      color: ${themeVars.github.fgColor.muted};
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
    color: ${themeVars.github.fgColor.default};
    /* 覆盖掉 chroma 的颜色 */
    * {
      color: ${themeVars.github.fgColor.default} !important;
    }
  }
  /* 展开/收缩按钮 */
  .code-expander-button {
    height: 24px !important;
    line-height: 24px;

    &:hover {
      background: ${themeVars.github.bgColor.accent.emphasis};
    }
  }
  /* 行号居中 */
  .lines-num {
    text-align: center !important;
  }
`;
