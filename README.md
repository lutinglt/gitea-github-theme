# gitea-github-theme

本仓库来源于 https://github.com/Rainnny7/gitea-github-theme

在原主题基础上做了以下修改:

- 主题色从蓝色改为绿色
- 默认字体为 [Victor Mono](https://github.com/rubjo/victor-mono) 和 [汉仪正圆](https://www.hanyi.com.cn/productdetail.php?id=2913) (优先匹配左侧, 需要系统包含相应字体)

> Victor Mono 相比其他等宽字体更为紧凑, 可以减少换行

## Gitea 版本

- Gitea 1.21+

## 安装

1. 将 theme-github.css 放入 gitea/public/assets/css 目录下
2. 修改 gitea/conf/app.ini，并将 `, github` 附加到 `[ui]` 下的 `THEMES` 末尾
3. 重启 Gitea
4. 在设置中查看主题

gitea/conf/app.ini 例:
```ini
[ui]
THEMES = gitea-dark, github
```

> 详细请查看 Gitea 文档 [Gitea docs](https://docs.gitea.com/next/administration/customizing-gitea#customizing-the-look-of-gitea)
