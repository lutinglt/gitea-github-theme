import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import linaria from "@wyw-in-js/vite";
import { Features } from "lightningcss";
import path from "path";
import { defineConfig } from "vite";
import { themeInput, themePlugin } from "./src/vite";

const devTheme = "dark"; // 开发模式仅打包单个颜色主题
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
