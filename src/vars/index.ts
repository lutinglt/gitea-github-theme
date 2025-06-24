import * as color from "src/vars/color";

export function varMapper(value: string | null, path: string[]) {
  if (value === null) {
    path = path.filter((item) => item !== "self");
    path = path.map((item) => item.replace(/^num/, ""))
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
