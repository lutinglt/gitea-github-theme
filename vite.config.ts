import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import linaria from "@wyw-in-js/vite";
import * as dotenv from "dotenv";
import { Features } from "lightningcss";
import { createRequire } from "node:module";
import path from "node:path";
import * as sass from "sass-embedded";
import { defineConfig } from "vite";
import { themeInput, themePlugin } from "./src/core/vite";

dotenv.config({quiet: true});

const require = createRequire(import.meta.url);

const devTheme = process.env.DEV_THEME || "dark"; // 开发模式下的主题, 仅打包该主题
const outDir = "dist"; // 输出目录
const themesDir = "themes"; // 颜色主题目录

export default defineConfig(({ mode }) => {
  return {
    resolve: {
      alias: {
        src: path.resolve(__dirname, "src"),
        styles: path.resolve(__dirname, "styles"),
        themes: path.resolve(__dirname, "themes"),
      },
      extensions: [".js", ".jsx", ".ts", ".tsx", ".css.ts"],
    },
    css: {
      transformer: "lightningcss",
      lightningcss: {
        minify: true,
        exclude: Features.LightDark, // 不生成 lightningcss 的主题变量
      },
    },
    plugins: [
      linaria({
        include: ["**/*.{ts,tsx}"],
        babelOptions: {
          presets: ["@babel/preset-typescript", "@babel/preset-react"],
        },
        preprocessor: (_selector, cssText) => sass.compileString(cssText).css, // 默认为全局样式并使用 sass-embedded 预处理 css
        tagResolver: (source, tag) =>
          // 识别从 src 导出的 css 标签，使用 @linaria/core/processors/css 处理
          source === "src" && tag === "css" ? require.resolve("@linaria/core/processors/css") : null,
      }),
      react(),
      vanillaExtractPlugin(),
      themePlugin(),
    ],
    build: {
      cssMinify: "lightningcss",
      cssCodeSplit: true,
      outDir: outDir,
      rollupOptions: {
        input: themeInput(outDir, themesDir, devTheme, mode),
        output: {
          assetFileNames: "[name].[ext]",
        },
      },
    },
  };
});
