#!/usr/bin/env -S deno run -A

import * as yaml from "npm:js-yaml";

interface Asset {
  name: string;
  css: string;
}

interface Theme {
  version: string;
  theme: string;
  description: string;
  assets: Asset[];
}

interface Gitea {
  gitea: Theme;
}

async function readYamlFile(filePath: string) {
  try {
    const fileContent = await Deno.readTextFile(filePath);
    const data: Gitea = yaml.load(fileContent);
    console.log(data.gitea.version);
  } catch (error) {
    let e = error;
    if (error instanceof Error) {
      e = error.message;
    }
    console.error("Error reading or parsing YAML file:", e);
    Deno.exit(1);
  }
}

// 使用示例
readYamlFile("theme.yml");
