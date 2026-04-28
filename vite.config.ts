/*!
 * Copyright (c) https://github.com/lutinglt
 *
 * See the NOTICE file distributed with this work for additional
 * information regarding copyright ownership.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import linaria from "@wyw-in-js/vite";
import * as dotenv from "dotenv";
import { Features } from "lightningcss";
import fs from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import * as sass from "sass-embedded";
import { defineConfig } from "vite";
import { themeInput, themePlugin } from "./src/core/vite";

const require = createRequire(import.meta.url);
dotenv.config({ quiet: true });

// 版本号: 版本号.YYMMDD
const pkg = JSON.parse(fs.readFileSync("package.json", "utf-8"));
const now = new Date();
const year = now.getFullYear().toString().slice(-2);
const month = (now.getMonth() + 1).toString().padStart(2, "0");
const day = now.getDate().toString().padStart(2, "0");

const outDir = "dist"; // 输出目录
const themesDir = "themes"; // 颜色主题目录

export default defineConfig(({ mode }) => {
  return {
    define: {
      __THEME_VERSION__: JSON.stringify(`${pkg.version}.${year}${month}${day}`),
    },
    resolve: {
      alias: {
        src: path.resolve(__dirname, "src"),
        styles: path.resolve(__dirname, "styles"),
        themes: path.resolve(__dirname, "themes"),
      },
      extensions: [".js", ".ts", ".css.ts"],
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
        include: ["**/*.ts"],
        babelOptions: {
          presets: ["@babel/preset-typescript"],
        },
        preprocessor: (_selector, cssText) => sass.compileString(cssText).css, // 默认为全局样式并使用 sass-embedded 预处理 css
        tagResolver: (source, tag) =>
          // 识别从 src 导出的 css 标签，使用 @linaria/core/processors/css 处理
          source === "src/types/vars" && tag === "css" ? require.resolve("@linaria/core/processors/css") : null,
      }),
      vanillaExtractPlugin(),
      themePlugin(),
    ],
    build: {
      cssMinify: "lightningcss",
      cssCodeSplit: true,
      outDir: outDir,
      rollupOptions: {
        input: themeInput(outDir, themesDir, mode),
        output: {
          assetFileNames: "[name].[ext]",
        },
      },
    },
  };
});
