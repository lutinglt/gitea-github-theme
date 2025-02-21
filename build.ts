#!/usr/bin/env -S deno run -A --allow-scripts -q

import * as sass from "npm:sass";
import * as yaml from "npm:js-yaml";

interface Gitea {
  version: string;
  themes: [string];
}

interface ThemeInfo {
  gitea: Gitea;
}

async function generateTheme(themePath: string) {
  try {
    const fileContent = await Deno.readTextFile(themePath);
    const data: ThemeInfo = yaml.load(fileContent);
    console.log(data.gitea.version);

    await Deno.mkdir("dist", { recursive: true });
    for (const theme of data.gitea.themes) {
      const inputFile = `src/themes/theme-github-${theme}.scss`;
      const outputFile = `dist/theme-github-${theme}.css`;
      const result = await sass.compileAsync(inputFile, { sourceMap: false, style: "compressed" });
      await Deno.writeTextFile(outputFile, result.css);
    }
  } catch (error) {
    let e = error;
    if (error instanceof Error) {
      e = error.message;
    }
    console.error("Build failed:", e);
    Deno.exit(1);
  }
}

generateTheme("theme.yml");
