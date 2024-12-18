# gitea-github-theme

尽量保持与 GitHub Dark 相同样式的 Gitea 主题

字体说明:

- UI 默认字体 [Maple Hand](https://github.com/subframe7536/maple-font/tree/other-resources/cn-resource/maple-hand) & [VictorMono Nerd Font](https://github.com/ryanoasis/nerd-fonts/releases/download/v3.3.0/VictorMono.zip) & [汉仪正圆](https://www.hanyi.com.cn/productdetail.php?id=2913) (优先匹配左侧, 需要系统包含相应字体)
- Actions 日志默认字体 VictorMono 优先

> Victor Mono 相比其他等宽字体更为紧凑, 可以减少换行

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

详细请查看 Gitea 文档 [Gitea docs](https://docs.gitea.com/next/administration/customizing-gitea#customizing-the-look-of-gitea)

## 截图

![仓库](screenshots/repo.png)

![仓库文件列表](screenshots/file_list.png)

![仓库发布](screenshots/release.png)

![仓库提交](screenshots/commit.png)

![Actions](screenshots/action.png)

![Actions Step](screenshots/step.png)

## 构建

需要 nodejs 和 npm

```bash
git clone https://github.com/lutinglt/gitea-github-theme.git
cd gitea-github-theme
npm install
npm run build:theme
```

查看用于 Gitea 的主题文件: `./dist/theme-github.css`

在开发过程中实时构建主题文件

```bash
npm run watch
```

## 贡献

欢迎提交 Issue 或 Pull Request