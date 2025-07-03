import { css, themeVars } from "src/types/vars";

export const modal = css`
  .ui.modal {
    border: 1.5px solid ${themeVars.color.light.border};

    > .header {
      background-color: ${themeVars.color.menu};
      border-bottom: 1.5px solid ${themeVars.color.light.border};
    }

    > .content,
    form > .content {
      background-color: ${themeVars.color.menu};
    }

    > .actions,
    .content + .actions,
    .content + form > .actions {
      background-color: ${themeVars.color.menu};
      border-top: 1.5px solid ${themeVars.color.light.border};
    }
  }
`;
