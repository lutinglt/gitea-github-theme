export const github = {
  avatar: {
    /** 头像的背景颜色 */
    bgColor: null,
    /** 头像的边框颜色 */
    borderColor: null,
  },
  /** 用于 color 属性的颜色 */
  fgColor: {
    /** 强调色
     * @actions `actionViewRight` 右侧日志标题颜色
     * @issue `prBranch` 分支名称文本颜色
     * @repo `repoTopic` 仓库主题标签文本颜色
     * @actions `actions` 分支标签按钮文本颜色
     * @actions `actionViewHeader` 分支标签按钮文本颜色
     */
    accent: null,
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
       * @release `releaseTagMenu` 顶部栏左侧按钮激活背景色
       * @navbar `navbarRight` 头像管理员标识背景颜色
       * @dropdown `dropdown` emoji 的悬停背景色
       * @menu `paginationMenu` 分页菜单的激活背景色
       */
      emphasis: null,
      /** 暗淡的背景颜色
       * @issue `prBranch` 分支名称背景颜色
       * @repo `repoTopic` 仓库主题标签背景颜色
       * @actions `actions` 分支标签按钮背景颜色
       * @actions `actionViewHeader` 分支标签按钮背景颜色
       * @notification `notification` 通知列表悬停时的背景颜色
       */
      muted: null,
    },
    success: {
      /** 成功的背景颜色
       * @issue `babel` 重新开启图标背景颜色
       * @issue `prMerge` 合并提交的图标背景色
       */
      emphasis: null,
    },
    attention: {
      /** 注意的背景颜色
       * @issue `prMerge` 头像颜色
       */
      emphasis: null,
    },
    danger: {
      /** 危险的背景颜色
       * @issue `prMerge` 头像颜色
       */
      emphasis: null,
    },
    done: {
      /** 完成的背景颜色
       * @issue `babel` 工单已关闭图标背景颜色
       * @issue `prMerge` 头像颜色
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
       * @actions `actionViewLeft` 左侧子作业激活伪元素颜色
       * @menu `verticalMenu` 垂直菜单项激活时左侧的伪元素颜色
       * @dropdown `selectionDropdown` 选择输入框的内部边框颜色
       * @notification `notification` 通知列表悬停时的左边框颜色
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
    star: {
      /** 已标星的星星颜色 */
      iconColor: null,
    },
  },
  control: {
    bgColor: {
      /** 背景色
       * @issue `timeline` 时间线标签背景色
       */
      rest: null,
    },
    transparent: {
      bgColor: {
        /** 悬停色
         * @clone `clone` 克隆按钮下按钮组和面板操作列表的悬停背景颜色
         * @input `inputAction` 输入框动作按钮的悬停背景颜色
         * @dropdown `dropdown` 下拉框子项的悬停背景颜色
         * @menu `verticalMenu` 垂直菜单项的悬停背景颜色
         * @menu `menu` 菜单项的悬停背景颜色
         * @menu `secondaryMenu` 二级菜单按钮的悬停背景颜色
         * @repo `repoHeader` 仓库标题的悬停背景颜色
         * @commit `commit` 提交信息的 Action 按钮的悬停背景颜色
         * @filelist `repoFiles` README 栏的按钮的悬停背景颜色
         * @issue `issueSidebar` 操作按钮的悬停背景颜色
         * @issue `issueList` 头部菜单左侧开启关闭菜单的悬停背景颜色
         * @dashboard `dashboard` 仓库列表项目的悬停背景颜色
         * @notification `notification` 通知列表的按钮悬停背景颜色
         * @actions `actions` 列表页运行信息的三点操作按钮悬停背景颜色
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
       * @dashboard `dashboard` 仓库/组织切换按钮和列表边框和阴影
       * @heatmap `heatmap` 热力图阴影
       * @heatmap `activity` 动态活动阴影
       */
      small: null,
    },
    resting: {
      /** 静止阴影
       * @button `primaryStyle` 主色调按钮阴影
       * @button `redButton` 红色按钮悬浮阴影
       * @setting `button` 红色按钮阴影
       */
      small: null,
    },
  },
  underlineNav: {
    borderColor: {
      /** 下划线导航栏的边框颜色
       * @clone `clone` 按钮组的按钮下划线颜色
       * @menu `secondaryMenu` 二级菜单按钮的下划线颜色
       * @filelist `repoFiles` README 栏的左边按钮下划线颜色
       */
      active: null,
    },
  },
  /** 热力图 */
  contribution: {
    default: {
      /** 热力图方块的颜色 */
      bgColor: {
        num0: null,
        num1: null,
        num2: null,
        num3: null,
        num4: null,
        /** github 无此颜色需自行计算 */
        num5: null,
      },
      /** 热力图方块的内边框颜色 */
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
