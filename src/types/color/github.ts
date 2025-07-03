export const github = {
  /** 用于 color 属性的颜色 */
  fgColor: {
    /** 强调色
     * @actions `actionViewRight` 右侧日志标题颜色
     */
    accent: null,
    /** 默认的文本颜色
     * @diff 增加/删除代码块的文本颜色
     */
    default: null,
    /** 暗淡的文本颜色
     * @diff 折叠行的文本颜色
     */
    muted: null,
    /** 成功的文本颜色
     * @issue `button` 重新开启按钮文本颜色
     */
    success: null,
    /** 完成的文本颜色
     * @issue `button` 关闭工单按钮文本颜色
     * @svg `issueClosed` 工单已关闭图标颜色
     */
    done: null,
  },
  /** 用于 background 属性的颜色 */
  bgColor: {
    accent: {
      /** 强调色
       * @diff 折叠/展开按钮的悬停颜色
       * @actions `actionViewLeft` 左侧子作业激活伪元素颜色
       */
      emphasis: null,
    },
  },
  borderColor: {
    accent: {
      /** 强调色
       * @input `input` 输入框被选中时的边框颜色
       */
      emphasis: null,
    },
  },
  button: {
    /** 普通按钮 */
    default: {
      bgColor: {
        /** 静止色
         * @button `baseButton` 默认按钮激活颜色
         */
        active: null,
      },
    },
    /** 主色调按钮 */
    primary: {
      fgColor: {
        /** 静止色
         * @button `primaryStyle` `primaryHoverStyle` 按钮文本颜色
         * @setting `tinyHoverStyle` 按钮的悬停文本颜色
         */
        rest: null,
        /** 强调色 (Github 没有此颜色, 为本主题自定义, 需自行设置)
         * @setting `tinyStyle` 按钮的文本颜色
         */
        accent: null,
      },
      bgColor: {
        /** 静止色
         * @button `primaryStyle` 按钮颜色
         */
        rest: null,
        /** 悬停色
         * @button `primaryHoverStyle` 按钮悬停颜色
         * @setting `tinyHoverStyle` 按钮的悬停背景颜色
         */
        hover: null,
      },
      borderColor: {
        /** 静止色
         * @button `primaryStyle` 按钮边框颜色
         */
        rest: null,
        /** 悬停色
         * @button `primaryHoverStyle` 按钮悬停边框颜色
         * @setting `tinyHoverStyle` 按钮的悬停边框颜色
         */
        hover: null,
      },
    },
    danger: {
      fgColor: {
        /** 静止色
         * @button `redButton` 红色按钮文本颜色
         */
        rest: null,
        /** 悬停色
         * @button `redButton` 红色按钮悬停文本颜色
         */
        hover: null,
      },
      bgColor: {
        /** 静止色
         * @button `redButton` 红色按钮颜色
         */
        rest: null,
        /** 悬停色
         * @button `redButton` 红色按钮悬停颜色
         */
        hover: null,
      },
      borderColor: {
        /** 悬停色
         * @button `redButton` 红色按钮悬停边框颜色
         */
        hover: null,
      },
    },
  },
};
