import { css, themeVars } from "src/types/vars";

export const monaco = css`
  .monaco-editor {
    font-size: 12px;
    --vscode-editor-background: ${themeVars.color.body} !important;
    --vscode-editorGutter-background: ${themeVars.color.body} !important;
  }
  // 滚动时固定在顶部的行
  .monaco-editor .sticky-widget {
    background: ${themeVars.color.body} !important;
    border-bottom: 0.5px solid ${themeVars.color.secondary.self};
    box-shadow: 0 1px 0 ${themeVars.color.secondary.self} !important;
    width: 100% !important;
  }
`;
