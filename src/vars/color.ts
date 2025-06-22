const num = {
  1: null,
  2: null,
  3: null,
  4: null,
  5: null,
  6: null,
  7: null,
};

const alpha = {
  10: null,
  20: null,
  30: null,
  40: null,
  50: null,
  60: null,
  70: null,
  80: null,
  90: null,
};

export const primary = {
  self: null,
  contrast: null,
  dark: num,
  light: num,
  alpha: alpha,
  hover: null,
  active: null,
};

export const secondary = {
  self: null,
  dark: {
    8: null,
    9: null,
    10: null,
    11: null,
    12: null,
    13: null,
    ...num,
  },
  light: {
    1: null,
    2: null,
    3: null,
    4: null,
  },
  alpha: alpha,
};

export const color = {
  red: null,
  orange: null,
  yellow: null,
  olive: null,
  green: null,
  teal: null,
  blue: null,
  violet: null,
  purple: null,
  pink: null,
  brown: null,
  black: null,
  grey: null,
  gold: null,
  white: null,
};
