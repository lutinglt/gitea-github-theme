const num = { num1: null, num2: null, num3: null, num4: null, num5: null, num6: null, num7: null };

const alpha = {
  num10: null,
  num20: null,
  num30: null,
  num40: null,
  num50: null,
  num60: null,
  num70: null,
  num80: null,
  num90: null,
};

export const primary = { self: null, contrast: null, dark: num, light: num, alpha: alpha, hover: null, active: null };

export const secondary = {
  self: null,
  dark: { num8: null, num9: null, num10: null, num11: null, num12: null, num13: null, ...num },
  light: { num1: null, num2: null, num3: null, num4: null },
  alpha: alpha,
  button: null,
  hover: null,
  active: null,
};
