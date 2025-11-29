import { css, otherThemeVars, themeVars } from "src/types/vars";

const primary = "primary" as const;
const secondary = "secondary" as const;
const metadata = "metadata" as const;
const actions = "actions" as const;

export const commitsList = css`
  ul.github-theme-templates-commits-list {
    margin: 0;
    padding: 0;
    list-style: none;
    li.github-theme-commit {
      border-bottom: 1px solid ${themeVars.color.secondary.self};
      padding: 8px 16px;
      display: grid;
      grid-template-areas: "${primary} ${metadata} ${actions}" "${secondary} ${metadata} ${actions}";
      grid-template-rows: repeat(2, auto);
      grid-template-columns: minmax(30%, 1fr) minmax(0, max-content) min-content;
      &:last-child {
        border-bottom: none;
        border-bottom-left-radius: ${otherThemeVars.border.radius};
        border-bottom-right-radius: ${otherThemeVars.border.radius};
      }
      &:hover {
        background-color: ${themeVars.color.hover.opaque};
      }
      .message {
        grid-area: ${primary};
        .commit-summary {
          font-size: 16px;
          font-weight: 500;
          white-space: pre-wrap;
        }
        .ellipsis-button {
          padding: unset;
          height: 1.5rem;
          min-width: 1.75rem;
          background: unset;
          border: unset;
          vertical-align: bottom;
          &:hover {
            background: ${themeVars.color.hover.self};
          }
        }
        .commit-body {
          font-size: 12px;
          font-weight: 400;
          color: ${themeVars.color.text.light.num1};
          margin: 8px 0;
        }
      }
      .metadata {
        grid-area: ${secondary};
        font-size: 12px;
        color: ${themeVars.color.text.light.num1};
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 4px;
        img.ui.avatar {
          border-radius: 9999px;
          margin-right: 4px;
        }
        .ui.label svg {
          min-width: 12px;
          min-height: 12px;
          width: 12px;
          height: 12px;
        }
      }
      .extra {
        grid-area: ${metadata};
        display: flex;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        column-gap: 8px;
        .github-theme-tag {
          border-width: 1.5px;
          border-radius: 9999px;
          height: 25px;
        }
      }
      .actions {
        grid-area: ${actions};
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 4px;
        color: ${themeVars.color.text.light.num1};
        .github-theme-action {
          justify-content: center;
          height: 28px;
          width: 28px;
        }
      }
    }
  }
  @media (max-width: 767.98px) {
    ul.github-theme-templates-commits-list {
      li.github-theme-commit {
        grid-template-areas: "${primary} ${primary}" "${metadata} ${actions}" "${secondary} ${actions}";
        grid-template-rows: repeat(3, auto);
      }
    }
  }
`;
