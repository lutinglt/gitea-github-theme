import { createGlobalThemeContract } from "@vanilla-extract/css";
import * as color from "./color";

export function varMapper(value: string | null, path: string[]) {
  if (value === null) {
    path = path.filter(item => item !== "self");
    path = path.map(item => item.replace(/^num/, ""));
    return path.join("-");
  }
  return value;
}

const vars = {
  isDarkTheme: "is-dark-theme",
  color: {
    ...color.other,
    ...color.message,
    ...color.named,
    primary: color.primary,
    secondary: color.secondary,
    /** Actions 日志 ANSI 颜色 */
    ansi: color.ansi,
    console: color.console,
    diff: color.diff,
  },
  github: color.github,
};

const otherVars = {
  border: {
    radius: null,
  },
  color: {
    ...color.otherAuto,
  },
};

const customVars = {
  custom: {
    cloneMenuWidth: "custom-clone-menu-width",
    explore: {
      repolistColumns: "custom-explore-repolist-columns",
      userlistColumns: "custom-explore-userlist-columns",
    },
    userRepolistColumns: "custom-user-repolist-columns",
    org: {
      repolistColumns: "custom-org-repolist-columns",
      userlistColumns: "custom-org-userlist-columns",
    },
  },
};

export const themeVars = createGlobalThemeContract(vars, varMapper);
export const otherThemeVars = createGlobalThemeContract(otherVars, varMapper);
export const customThemeVars = createGlobalThemeContract(customVars, varMapper);

export { css } from "@linaria/core";
