### 🎉 已完成大部分页面的 GitHub 风格 ( GitHub Style Completed for Most Pages )

如果您仍在使用旧版本，强烈建议更新至本版本。此版本已为大部分常用页面实现了 GitHub 风格设计，提供了更强的一致性，并修复了若干已知问题。

由于布局限制，项目和百科页面的 GitHub 风格适配方案尚未确定。

If you are still using an older version, we highly recommend updating to this release. This version has implemented the
GitHub-style design for most commonly used pages, ensuring stronger consistency, and addresses several known issues.

Due to layout constraints, the approach for adapting the GitHub style to Project and Wiki pages has not yet been
determined.

### ✨ Feature

- 支持猛男粉颜色主题
- 修改外观设置中显示的主题名称

#### CSS 变量

- 新增 `--custom-branch-menu-width` 变量, 用于设置分支菜单的宽度
- 新增 `--custom-user-menu-width` 变量, 用于设置用户菜单的宽度

### 🌈 Style

- 优化用户首页仪表板的样式

##### 更符合 GitHub 风格

- 同步查看代码文件内容时的样式 (去掉了一些底部元素, 优化滚动体验)
- 整体调整了页面元素的间隔, 样式和字体大小
- 同步顶部工单/合并请求/里程碑下的仪表板样式
- 同步里程碑/置顶 Issue 的样式
- 同步通知/订阅/关注/软件包/提示框/用户头像菜单的页面样式
- 同步分支菜单宽度
- 同步仓库已标星的星星颜色

### 🐞 Fix

- 修复红绿色盲主题的代码高亮色
- 修复仓库中文 README 时的按钮下划线长度
- 修复登录二次验证页面内容位置
- 修复后台管理的运维管理面板的样式
- 取消修改编辑器字体大小, 避免光标错位
- 修复提交列表尾行圆角
- 修复 Wiki 页面和二级导航栏组织下团队菜单的圆角问题
- 修复创建工单页面样式
- 修复归档仓库 Issue 时间线过长插入归档信息框
- 修复亮色主题下的 PR 合并操作评论的头像和按钮图标颜色

## 📃 English (From AI)

### 🌈 Style

##### More GitHub-like style

- Improved code file viewing experience (scrolling to bottom no longer causes file tree content overlap)

### 🐞 Fix

- Fixed code highlight colors for red-green color blindness theme
- Fixed button underline length for Chinese README in repositories
