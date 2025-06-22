import { css } from "@linaria/core";
import { themeVars } from "src/theme";

export const setting_global = css`
  :global() {
    .user-main-content,
    .repo-setting-content,
    .user-setting-content,
    .org-setting-content,
    .admin-setting-content {
      .ui.right {
        .ui.primary.button.tiny {
          color: #fff;
          background-color: #238636;
          &:hover {
            background-color: #29903b;
            border-color: ${themeVars.color.primary.light[1]};
          }
        }
      }
    }
  }
`;
