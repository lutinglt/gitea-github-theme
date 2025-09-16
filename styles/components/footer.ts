import { css, themeVars } from "src/types/vars";

export const footer = css`
  .page-footer {
    background-color: ${themeVars.color.body};
    border-top: 0;
    color: ${themeVars.color.text.light.num1};
    font-size: 12px;
    gap: 32px;
    justify-content: center;
    padding: 16px 0 40px 0;
    > .left-links {
      gap: 4px;
      > a {
        color: ${themeVars.color.text.light.num1};
        &:hover {
          color: ${themeVars.color.primary.self};
        }
      }
      > strong {
        font-weight: 400;
      }
    }
    > .right-links {
      gap: 16px;
      > .ui.dropdown {
        font-size: 12px;
        &:hover {
          color: ${themeVars.color.primary.self};
        }
      }
      > a {
        border-left: 0;
        color: ${themeVars.color.text.light.num1};
        padding-left: 0;
        margin-left: 0;
        &:hover {
          color: ${themeVars.color.primary.self};
        }
      }
    }
  }
`;
