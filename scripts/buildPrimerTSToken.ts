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

import { isSource } from "@primer/primitives/dist/build/filters/index.js";
import { typescript } from "@primer/primitives/dist/build/platforms/typescript.js";
import { PrimerStyleDictionary } from "@primer/primitives/dist/build/primerStyleDictionary.js";
import { themes as primerThemes } from "./themes.config.ts";

const buildPath = "primer";
const primerModulePath = "node_modules/@primer/primitives";

const themes = primerThemes.map(({ filename, source, include, theme }) => ({
  filename,
  source: source.map(s => `${primerModulePath}/${s}`),
  include: include.map(s => `${primerModulePath}/${s}`),
  theme,
}));

/**
 * 获取主题的 fallback 基础主题，确保变体主题（如 dark-dimmed）能正确解析
 * 从基础主题继承未覆盖的 token 值
 */
const getFallbackTheme = (theme?: string): "light" | "dark" | undefined => {
  return theme ? (theme.startsWith("light") ? "light" : "dark") : undefined;
};

const buildTs = async () => {
  for (const { filename, source, include, theme } of themes) {
    // ⚠️ 关键：theme 必须包含 fallback，如 ['dark-dimmed', 'dark']
    // 否则变体主题中未显式定义的 token 无法从基础主题继承，颜色值会不一致
    const fallback = getFallbackTheme(theme);
    const tsFileName = `${filename}.ts`;
    const tsPlatform = typescript(tsFileName, undefined, buildPath, {
      theme: [theme, fallback],
    });

    // 只输出颜色 token，过滤掉 dimension 类型
    tsPlatform.files = tsPlatform.files?.map(f => ({
      ...f,
      filter: (token: { $type: string; isSource: boolean }) =>
        isSource(token as Parameters<typeof isSource>[0]) && token.$type !== "dimension",
    }));

    const extendedSD = await PrimerStyleDictionary.extend({
      source,
      include,
      log: {
        warnings: "disabled",
        verbosity: "silent",
        errors: {
          brokenReferences: "throw",
        },
      },
      platforms: {
        typescript: tsPlatform,
      },
    });
    await extendedSD.buildAllPlatforms();
    console.log(`✔︎ ${buildPath}/${tsFileName}`);
  }
};

await buildTs();
