# gitea-github-theme

尽量保持与 GitHub Dark 相同样式的 Gitea 主题

### 主题说明

添加了短暂的过渡动画优化体验(与 GitHub Code 克隆列表动画一致)

推荐搭配文件图标浏览器插件一起使用更佳
[github-file-explorer-icons](https://github.com/catppuccin/github-file-explorer-icons)

## 安装

1. 在发布页下载最新的 `theme-github.css` 放入 `gitea/public/assets/css` 目录下
2. 修改 `gitea/conf/app.ini`，并将 `, github` 附加到 `[ui]` 下的 `THEMES` 末尾
3. 重启 Gitea
4. 在设置中查看主题

`gitea/conf/app.ini` 例:

```ini
[ui]
THEMES = gitea-dark, github
```

详细请查看 Gitea 文档
[Gitea docs](https://docs.gitea.com/next/administration/customizing-gitea#customizing-the-look-of-gitea)

## 截图

![仓库](screenshots/repo.png)

![仓库文件列表](screenshots/file_list.png)

![仓库发布](screenshots/release.png)

![仓库提交](screenshots/commit.png)

![Actions](screenshots/actions.png)

![Action](screenshots/action.png)

![Dispatch](screenshots/dispatch.png)

## 构建

### 克隆仓库

```bash
git clone https://github.com/lutinglt/gitea-github-theme.git
cd gitea-github-theme
```

### 使用 deno (推荐)

```bash
deno run build
```

### 使用 nodejs & npm

```bash
npm install
npm run build
```

查看用于 Gitea 的主题文件: `dist/theme-github.css`

## 贡献

欢迎提交 Issue 或 Pull Request
