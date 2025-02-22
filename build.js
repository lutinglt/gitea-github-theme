import * as process from "node:process";
import * as fs from "node:fs";
import * as sass from "sass";
import * as yaml from "js-yaml";

async function compile(inputFile) {
  return (await sass.compileAsync(inputFile, { sourceMap: false, style: "compressed" })).css;
}

async function generateTheme(themePath) {
  try {
    const fileContent = fs.readFileSync(themePath);
    const data = yaml.load(fileContent);
    console.log(data.gitea.version);

    fs.mkdirSync("dist", { recursive: true });
    const styles = await compile("src/styles/styles.scss");
    for (const theme of data.gitea.themes) {
      const inputFile = `src/themes/${theme}.scss`;
      const outputFile = `dist/theme-github-${theme}.css`;
      const result = await compile(inputFile);
      fs.writeFileSync(outputFile, `${styles}${result}`);
    }
  } catch (error) {
    let e = error;
    if (error instanceof Error) {
      e = error.message;
    }
    console.error("Build failed:", e);
    process.exit(1);
  }
}

generateTheme("theme.yml");
