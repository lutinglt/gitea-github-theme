import * as color from "src/vars/color";

export function varMapper(value: string | null, path: string[]) {
  if (value === null) {
    if (path.at(-1) === "self") return path.slice(0, -1).join("-");
    return path.join("-");
  }
  return value;
}

export const vars = {
  /** 用于标识当前是否为暗色主题: `"true"` 暗色 `"false"` 亮色 */
  isDarkTheme: "is-dark-theme",
  color: {
    blue: null,
    primary: color.primary,
  },
};

export { color };
