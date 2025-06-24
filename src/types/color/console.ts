const ansiColor = {
  black: null,
  red: null,
  green: null,
  yellow: null,
  blue: null,
  magenta: null,
  cyan: null,
  white: null,
};

export const ansi = {
  bright: ansiColor,
  ...ansiColor,
};

export const console = {
  fg: {
    self: null,
    subtle: null,
  },
  bg: null,
  border: null,
  active: {
    bg: null,
  },
  hover: {
    bg: null,
  },
  menu: {
    bg: null,
    border: null,
  },
};
