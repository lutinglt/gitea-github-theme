const msg = {
  bg: null,
  border: null,
  text: null,
};

const error = {
  ...msg,
  bg: {
    self: null,
    active: null,
    hover: null,
  },
};

const success = {
  ...msg,
};

const warning = {
  ...msg,
};
const info = {
  ...msg,
};

export const message = {
  error,
  success,
  warning,
  info,
};
