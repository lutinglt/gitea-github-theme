import { css, otherThemeVars } from "src/types/vars";

// 全部圆角替换
export const radius = css`
  .ui.form textarea,
  .ui.form input:not([type]),
  .ui.form input[type="date"],
  .ui.form input[type="datetime-local"],
  .ui.form input[type="email"],
  .ui.form input[type="number"],
  .ui.form input[type="password"],
  .ui.form input[type="search"],
  .ui.form input[type="tel"],
  .ui.form input[type="time"],
  .ui.form input[type="text"],
  .ui.form input[type="file"],
  .ui.form input[type="url"] {
    border-radius: ${otherThemeVars.border.radius};
    &:focus {
      border-radius: ${otherThemeVars.border.radius};
    }
  }
  .ui.form select {
    border-radius: ${otherThemeVars.border.radius};
  }

  .ui.input {
    textarea,
    input {
      border-radius: ${otherThemeVars.border.radius};
    }
  }

  .ui {
    &.menu,
    &.modal,
    &.label,
    &.table,
    &.segment,
    &.segments,
    &.grid.segment &.selection.dropdown,
    &.horizontal.segments,
    &.active.empty.selection.dropdown {
      border-radius: ${otherThemeVars.border.radius};
    }
  }

  .ui.dropdown,
  .ui.inline.dropdown,
  .ui.pointing.upward.dropdown,
  .ui.top.pointing.upward.dropdown {
    .menu {
      border-radius: ${otherThemeVars.border.radius};
    }
  }

  .ui.search > .results,
  .ui.search.selection .prompt,
  .ui.pointing.dropdown > .menu,
  .ui.loading.form.segments:before,
  .ui.secondary.menu .dropdown.item > .menu,
  .ui.vertical.menu > .active.item:only-child,
  .ui.segments:not(.horizontal) > .segment:only-child,
  .ui.segments:not(.horizontal) > .segment:has(~ .tw-hidden) {
    border-radius: ${otherThemeVars.border.radius};
  }
`;

// 全部圆角替换(原CSS带!important)
export const radiusImportant = css`
  .ui.dropdown .menu .menu,
  .ui.dropdown .menu .left.menu,
  .ui.dropdown .menu .right.menu,
  .ui.dropdown > .left.menu .menu,
  .ui.floating.dropdown .menu,
  .ui.floating.dropdown > .menu,
  .ui.dropdown .right.menu > .menu,
  .ui.secondary.vertical.menu > .item {
    border-radius: ${otherThemeVars.border.radius} !important;
  }
`;

// 上半部分圆角替换
export const radiusTop = css`
  .ui.vertical.menu > .item,
  .ui.vertical.menu > .active.item,
  .ui.segments:not(.horizontal) > .segment {
    &:first-child {
      border-radius: ${otherThemeVars.border.radius} ${otherThemeVars.border.radius} 0 0;
    }
  }

  .ui.top.attached.header,
  .ui.upward.dropdown > .menu,
  .ui.upward.dropdown.button:not(.pointing):not(.floating).active,
  .ui[class*="top attached"].menu,
  .ui[class*="top attached"].segment,
  .ui[class*="top attached"].segment:last-child,
  .ui.search > .results > :first-child,
  .ui.modal > i.icon:first-child + *,
  .ui.modal > .dimmer:first-child + i.icon + *,
  .ui.modal > .dimmer:first-child + *:not(.icon),
  .ui.modal > :first-child:not(.icon):not(.dimmer),
  .ui.table > thead > tr:first-child > th:only-child {
    border-radius: ${otherThemeVars.border.radius} ${otherThemeVars.border.radius} 0 0;
  }
`;

// 上半部分圆角替换(原CSS带!important)
export const radiusTopImportant = css`
  .ui.tabular.menu .active.item {
    border-radius: ${otherThemeVars.border.radius} ${otherThemeVars.border.radius} 0 0 !important;
    &:hover {
      border-radius: ${otherThemeVars.border.radius} ${otherThemeVars.border.radius} 0 0 !important;
    }
  }
  .ui.simple.upward.dropdown {
    &.active {
      border-radius: ${otherThemeVars.border.radius} ${otherThemeVars.border.radius} 0 0 !important;
    }
    &:hover {
      border-radius: ${otherThemeVars.border.radius} ${otherThemeVars.border.radius} 0 0 !important;
    }
  }
`;

// 下半部分圆角替换
export const radiusBottom = css`
  .ui.attached.segment,
  .ui.vertical.menu > .item,
  .ui.vertical.menu > .active.item,
  .ui.segments:not(.horizontal) > .segment {
    &:last-child {
      border-radius: 0 0 ${otherThemeVars.border.radius} ${otherThemeVars.border.radius};
    }
  }

  .ui.modal,
  .ui.search > .results {
    > :last-child {
      border-radius: 0 0 ${otherThemeVars.border.radius} ${otherThemeVars.border.radius};
    }
  }

  .ui.selection.dropdown,
  .ui.menu .dropdown.item {
    .menu {
      border-radius: 0 0 ${otherThemeVars.border.radius} ${otherThemeVars.border.radius};
    }
  }

  .ui.table > tfoot > tr:first-child {
    > th,
    > td {
      &:only-child {
        border-radius: 0 0 ${otherThemeVars.border.radius} ${otherThemeVars.border.radius};
      }
    }
  }

  .ui.bottom.attached.header,
  .ui[class*="bottom attached"].table,
  .ui.segment[class*="bottom attached"],
  .ui.attached.segment:has(+ .ui.modal),
  .ui.attached.segment:has(+ .page.buttons),
  .ui.attached.segment:has(+ .ui[class*="top attached"].header),
  .ui.segment:has(+ .ui.segment:not(.attached)) {
    border-radius: 0 0 ${otherThemeVars.border.radius} ${otherThemeVars.border.radius};
  }
`;

// 下半部分圆角替换(原CSS带!important)
export const radiusBottomImportant = css`
  .ui.upward.selection.dropdown.visible,
  .ui.active.upward.selection.dropdown {
    border-radius: 0 0 ${otherThemeVars.border.radius} ${otherThemeVars.border.radius} !important;
  }
`;

// 左半部分圆角替换
export const radiusLeft = css`
  .ui.menu > .item,
  .ui.action.input > .button,
  .ui.action.input > .dropdown,
  .ui.horizontal.segments > .segment {
    &:first-child {
      border-radius: ${otherThemeVars.border.radius} 0 0 ${otherThemeVars.border.radius};
    }
  }

  .ui[class*="left icon"].input > i.icon,
  .ui.action.input > .buttons:first-child > .button {
    border-radius: ${otherThemeVars.border.radius} 0 0 ${otherThemeVars.border.radius};
  }
`;

// 右半部分圆角替换
export const radiusRight = css`
  .ui.compact.menu .item,
  .ui.compact.menu:not(.secondary) .item,
  .ui.pagination.menu .item,
  .ui.action.input > .button,
  .ui.action.input > .dropdown,
  .ui.horizontal.segments > .segment {
    &:last-child {
      border-radius: 0 ${otherThemeVars.border.radius} ${otherThemeVars.border.radius} 0;
    }
  }

  .ui.icon.input > i.icon,
  .ui.buttons .unescape-button,
  .ui.action.input > .buttons:last-child > .button {
    border-radius: 0 ${otherThemeVars.border.radius} ${otherThemeVars.border.radius} 0;
  }
`;

// 左上圆角替换
export const radiusTopLeft = css`
  .ui.top.attached.menu > .item:first-child,
  .ui.table > thead > tr:first-child > th:first-child {
    border-top-left-radius: ${otherThemeVars.border.radius};
  }
`;

// 右上圆角替换
export const radiusTopRight = css`
  .ui.table > thead > tr:first-child > th:last-child,
  .ui.category.search > .results .category:first-child .name + .result {
    border-top-right-radius: ${otherThemeVars.border.radius};
  }
`;

// 左下圆角替换
export const radiusBottomLeft = css`
  .ui.table > tfoot > tr:first-child {
    > th,
    > td {
      &:first-child {
        border-bottom-left-radius: ${otherThemeVars.border.radius};
      }
    }
  }
`;

// 右下圆角替换
export const radiusBottomRight = css`
  .ui.table > tfoot > tr:first-child {
    > th,
    > td {
      &:last-child {
        border-bottom-right-radius: ${otherThemeVars.border.radius};
      }
    }
  }

  .ui.category.search > .results .category:last-child .result:last-child {
    border-bottom-right-radius: ${otherThemeVars.border.radius};
  }
`;
