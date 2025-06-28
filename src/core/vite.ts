import { execSync } from "node:child_process";
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import type { Plugin } from "vite";

const suffix = ".css.tsx"

/**
 * 生成主题输入
 * @param outDir 输出目录与 vite 配置中的 outDir 一致, 用于生成临时目录
 * @param themeDir 颜色主题目录
 * @param devTheme 开发模式下的主题, 仅打包该主题
 * @param mode 模式, 开发模式为 dev `vite build --mode dev`
 * @returns vite.rollupOptions.input 的配置
 */
export function themeInput(
  outDir: string,
  themeDir: string,
  devTheme: string,
  mode: string
): { [key: string]: string } {
  const hash = crypto.randomBytes(6).toString("hex");
  const tmpDir = `${outDir}/tmp-${hash}`; // 输出目录下的临时目录

  fs.mkdirSync(tmpDir, { recursive: true });

  const input: { [key: string]: string } = {};
  const themeEntries = fs.readdirSync(themeDir, { withFileTypes: true });

  for (const entry of themeEntries) {
    // 目录下所有的 css.ts 文件都作为主题入口
    if (entry.isFile() && entry.name.endsWith(suffix)) {
      const fileName = entry.name.replace(suffix, "");
      // 开发模式只打包 devTheme 主题
      if (mode === "dev" && fileName !== devTheme) continue;
      // 创建颜色主题的 css.ts 文件, vanilla-extract 需要这个文件后缀名并生成 css
      const tmpCssTs = path.join(tmpDir, `${fileName}${suffix}`);
      const createImport = `import { createTheme } from "src/core";`;
      const themeImport = `import theme from "themes/${fileName}";`;
      const createFn = `createTheme(theme);`;
      fs.writeFileSync(tmpCssTs, `${createImport}\n${themeImport}\n${createFn}`);
      // 生成主题入口的 .ts 文件, 合并样式和颜色主题
      const tmpInputTs = path.join(tmpDir, `${fileName}.ts`);
      const stylesImport = `import "styles";`;
      const cssImport = `import "./${fileName}${suffix}";`;
      fs.writeFileSync(tmpInputTs, `${stylesImport}\n${cssImport}`);

      input[fileName] = tmpInputTs;
    }
  }
  if (mode === "dev") {
    console.log("[themeInput] devTheme:", devTheme);
  }
  return input;
}

const prefix = "theme-github-";

/**
 * 生成主题文件
 * @important vite.rollupOptions.output 配置 `assetFileNames: "[name].[ext]"`
 */
export function themePlugin(): Plugin {
  return {
    name: "themePlugin",
    generateBundle(this, _, bundle) {
      let styles = "";
      for (const [key, value] of Object.entries(bundle)) {
        if (value.type === "chunk") {
          delete bundle[key]; // 删除 chunk
        } else {
          // 样式文件是通过入口导入的, 没有原始文件名
          if (value.originalFileNames.length === 0) {
            // 收集所有的样式文件(逻辑上只有一个)
            // vite 会在尾部添加注释, 后续会合并到颜色主题, 此处需要删除注释
            styles += value.source.toString().replace("/*$vite$:1*/", "");
            delete bundle[key];
          }
        }
      }
      // 生成所有的主题文件
      for (const [key, value] of Object.entries(bundle)) {
        // 仅为了类型检查, 逻辑上输出中全是 asset 类型
        if (value.type === "asset") {
          const name = `${prefix}${value.names[0]}`;
          const fileName = `${prefix}${value.fileName}`;
          const originalFileName = value.originalFileNames.pop();
          const type = value.type;
          const source = `${styles}${value.source.toString()}`;
          // 添加主题到输出
          this.emitFile({ name, fileName, source, type, originalFileName });
          delete bundle[key];
        }
      }
    },
    closeBundle() {
      const server = process.env.SSH_SERVER;
      const user = process.env.SSH_USER || "root";
      const path = process.env.GITEA_THEME_PATH;
      if (server && path) {
        const cmd = `scp dist/${prefix}*.css ${user}@${server}:${path}`;
        console.log("[themePlugin] exec:", cmd);
        try {
          execSync(cmd, { stdio: "inherit" });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (_) {
          // continue regardless of error
        }
      } else {
        console.log("[themePlugin] no SSH_SERVER or GITEA_THEME_PATH, skip upload");
      }
    },
  };
}
