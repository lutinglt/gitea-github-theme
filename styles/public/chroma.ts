import { css } from "src/types/vars";

// [TODO] 先重构为 Gitea 变量, 或者本主题的变量, 再建立 GitHub 的颜色映射

// 取自 https://github.com/go-gitea/gitea/blob/main/web_src/css/chroma/base.css
export const chromaBase = css`
  .chroma {
    // LineTableTD
    .lntd {
      vertical-align: top;
      padding: 0;
      margin: 0;
      border: 0;
    }
    // LineTable
    .lntable {
      border-spacing: 0;
      padding: 0;
      margin: 0;
      border: 0;
      width: auto;
      overflow: auto;
      display: block;
    }
    // LineHighlight
    .hl {
      display: block;
      width: 100%;
    }
    // LineNumbersTable
    .lnt,
    // LineNumbers
    .ln {
      margin-right: 0.4em;
      padding: 0 0.4em;
    }
    // GenericStrong
    .gs {
      font-weight: var(--font-weight-semibold);
    }
    // GenericUnderline
    .gl {
      text-decoration: underline;
    }
  }
`;
