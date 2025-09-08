### 🎉 已完成大部分页面的 GitHub 风格 ( GitHub Style Completed for Most Pages )

如果您仍在使用旧版本，强烈建议更新至本版本。此版本已为大部分常用页面实现了 GitHub 风格设计，提供了更强的一致性，并修复了若干已知问题。

由于布局限制，项目和百科页面的 GitHub 风格适配方案尚未确定。

If you are still using an older version, we highly recommend updating to this release. This version has implemented the
GitHub-style design for most commonly used pages, ensuring stronger consistency, and addresses several known issues.

Due to layout constraints, the approach for adapting the GitHub style to Project and Wiki pages has not yet been
determined.

### ✨ Feature

#### CSS 变量

- 新增 `--custom-branch-menu-width` 变量, 用于设置分支菜单的宽度
- 新增 `--custom-user-menu-width` 变量, 用于设置用户菜单的宽度

### 🌈 Style

- 优化小型按钮的高度
- 一些列表栏的元素位置居中

##### 更符合 GitHub 风格

- 同步查看代码文件内容时的样式
- 优化查看代码文件内容时的体验 (去掉了一些底部元素, 优化滚动体验)
- 略微减小导航栏创建仓库菜单按钮内的图标间隔
- 微调一些标签的字体大小
- 优化发布页面布局和下载列表样式
- 同步里程碑页面样式
- 同步顶部工单等仪表板样式
- 同步置顶 Issue 样式
- 同步订阅/关注页面样式
- 同步用户菜单样式
- 优化下拉菜单样式
- 同步差异对比页面文件名标题栏样式
- 同步分支菜单宽度
- 同步通知页面样式
- 优化仪表板的仓库组织切换按钮样式
- 同步仓库已标星的星星颜色
- 优化仪表板动态信息间隔
- 微调仓库相关界面元素间隔
- 同步软件包页面样式

### 🐞 Fix

- 修复红绿色盲主题的代码高亮色
- 修复仓库中文 README 时的按钮下划线长度
- 修复登录二次验证页面内容位置
- 修复后台管理的运维管理面板的样式
- 取消修改编辑器字体大小, 避免光标错位
- 修复文件预览时文件树右边框过粗
- 修复提交列表尾行圆角
- 修复 wiki 页面和组织页面的用户下拉菜单的圆角问题

## 📃 English (From AI)

### 🌈 Style

##### More GitHub-like style

- Improved code file viewing experience (scrolling to bottom no longer causes file tree content overlap)

### 🐞 Fix

- Fixed code highlight colors for red-green color blindness theme
- Fixed button underline length for Chinese README in repositories
