export const github = {
  /** 用于 color 属性的颜色 */
  fgColor: {
    /** 强调色
     * @actions `actionViewRight` 右侧日志标题颜色
     * @issue `prBranch` 分支名称文本颜色
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
     * @label `label` 绿色标签的文本颜色
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
      /** 暗淡的背景颜色
       * @issue `prBranch` 分支名称背景颜色
       */
      muted: null,
    },
    success: {
      /** 成功的背景颜色
       * @issue `babel` 重新开启图标背景颜色
       */
      emphasis: null,
    },
    done: {
      /** 完成的背景颜色
       * @issue `babel` 工单已关闭图标背景颜色
       */
      emphasis: null,
    },
  },
  borderColor: {
    accent: {
      /** 强调色
       * @input `input` 输入框被选中时的边框颜色
       * @clone `clone` 克隆地址框被选中时的边框颜色
       * @issue `comment` 评论框被选中时的边框颜色
       * @menu `verticalMenu` 垂直菜单项激活时左侧的伪元素颜色
       */
      emphasis: null,
    },
    attention: {
      /** 注意的边框颜色
       * @label `label` 黄色/橙色标签的边框色
       */
      emphasis: null,
    },
    success: {
      /** 成功的边框颜色
       * @label `label` 绿色标签的边框色
       */
      emphasis: null,
    },
    done: {
      /** 完成的边框颜色
       * @label `label` 红色/紫色标签的边框色
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
  control: {
    transparent: {
      bgColor: {
        /** 悬停色
         * @clone `clone` 克隆按钮下按钮组和面板操作列表的悬停背景颜色
         * @input `inputAction` 输入框动作按钮的悬停背景颜色
         * @dropdown `dropdown` 下拉框子项的悬停背景颜色
         * @menu `verticalMenu` 垂直菜单项的悬停背景颜色
         */
        hover: null,
      },
    },
  },
  shadow: {
    floating: {
      /** 悬浮阴影
       * @tippy `tippyBox` 悬浮框阴影
       * @dropdown `dropdown` 下拉框阴影
       */
      small: null,
    },
  },
  underlineNav: {
    borderColor: {
      /** 下划线导航栏的边框颜色
       * @clone `clone` 按钮组的按钮下划线颜色
       */
      active: null,
    },
  },
  /** 热力图 */
  contribution: {
    default: {
      bgColor: {
        num0: null,
        num1: null,
        num2: null,
        num3: null,
        num4: null,
        /** github 无此颜色需自行计算
         * @example 可参考这个颜色 `--color-prettylights-syntax-string-regexp`
         */
        num5: null,
      },
      borderColor: {
        num0: null,
        num1: null,
        num2: null,
        num3: null,
        num4: null,
        /** github 无此颜色需自行计算
         * @example 目前均取 num0 的值
         */
        num5: null,
      },
    },
  },
};
