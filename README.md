# gitea-github-theme

尽量保持与 GitHub 相同样式的 Gitea 主题

### 主题说明

添加了短暂的过渡动画优化体验(与 GitHub Code 克隆列表动画一致)

推荐搭配文件图标浏览器插件一起使用更佳
[github-file-explorer-icons](https://github.com/catppuccin/github-file-explorer-icons)

## 安装

1. 在发布页下载最新的 CSS 主题文件放入 `gitea/public/assets/css` 目录下
2. 修改 `gitea/conf/app.ini`，并将 CSS 文件名去掉 `theme-` 的名称附加到 `[ui]` 下的 `THEMES` 末尾
3. 重启 Gitea
4. 在设置中查看主题
5. 自动颜色主题需要亮色和暗色的主题文件

例: 主题文件名为 `theme-github-dark.css`，则添加 `github-dark` 到 `THEMES` 末尾

`gitea/conf/app.ini` 例:

```ini
[ui]
THEMES = gitea-auto, gitea-light, gitea-dark, github-auto, github-light, github-dark, github-soft-dark
```

详细请查看 Gitea 文档
[Gitea docs](https://docs.gitea.com/next/administration/customizing-gitea#customizing-the-look-of-gitea)

## 自定义 CSS 变量

可以根据自己的偏好自定义主题的一部分样式

### 使用方法

在主题的 CSS 文件的头部或尾部添加以下代码

```css
:root {
  --custom-clone-menu-width: 150px;
  ...
}
```

> [!IMPORTANT]
>
> 请确保在 `:root` 选择器中添加自定义变量，否则无法生效
>
> 变量之间用 `;` 分隔
>
> 建议自定义变量放在单独的文件中, 通过 shell 命令等方式追加到主题文件中

### CSS 变量

| 变量名                            | 描述                        | 默认值 | Github | 推荐  | 最小值 | 最大值 |
| :-------------------------------- | :-------------------------- | :----- | :----- | :---- | :----- | :----- |
| --custom-clone-menu-width         | 克隆菜单宽度                | Gitea  | 332px  | 200px | 150px  | 400px  |
| --custom-explore-repolist-columns | 探索页面的仓库列表列数      | 2      | 2      | 2     |        |        |
| --custom-explore-userlist-columns | 探索页面的用户/组织列表列数 | 3      | 1      | 2/3   |        |        |
| --custom-user-repolist-columns    | 用户页面的仓库列表列数      | 2      | 2      | 1/2   |        |        |
| --custom-org-repolist-columns     | 组织页面的仓库列表列数      | 1      | 1      | 1/2   |        |        |
| --custom-org-userlist-columns     | 组织页面的用户列表列数      | 2      | 1      | 1/2   |        |        |

## 截图

![仓库](screenshots/repo.png)

![仓库文件列表](screenshots/file_list.png)

![仓库发布](screenshots/release.png)

![仓库提交](screenshots/commit.png)

![Actions](screenshots/actions.png)

![Action](screenshots/action.png)

![Dispatch](screenshots/dispatch.png)

## 贡献

欢迎提交 Issue 或 Pull Request
