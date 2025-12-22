const fs = require("fs");
const path = require("path");

const rootDir = path.join(__dirname, "..");
const pkgPath = path.join(rootDir, "package.json");
const pkg = JSON.parse(fs.readFileSync(pkgPath));

const githubSite = "https://raw.githubusercontent.com";
const giteaRepo = "go-gitea/gitea";
const githubTagPath = "refs/tags";
const tmplPath = "templates";
const localTmplPath = path.join(rootDir, "gitea", tmplPath);
const [major, minor, patch = ""] = pkg.version.split(".");
console.log("Version:", pkg.version);
const versionPath = `${githubTagPath}/v${major}.${minor}.${patch}`;
const githubUrl = `${githubSite}/${giteaRepo}/${versionPath}/${tmplPath}`;

// 递归读取所有子目录中的 .tmpl 文件
function readTmplFilesRecursively(dir) {
  const results = [];
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // 如果是目录，递归读取
      results.push(...readTmplFilesRecursively(filePath));
    } else if (file.endsWith(".tmpl")) {
      // 如果是 .tmpl 文件，添加到结果中（相对于模板目录的相对路径）
      const relativePath = path.relative(localTmplPath, filePath);
      results.push(relativePath);
    }
  }

  return results;
}

// 读取所有模板文件
const tmpls = readTmplFilesRecursively(localTmplPath);
(async () => {
  for (const tmpl of tmpls) {
    const tmplUrl = `${githubUrl}/${tmpl}`;
    console.log("TmplUrl:", tmplUrl);

    const response = await fetch(tmplUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let content = await response.text();
    fs.writeFileSync(path.join(localTmplPath, tmpl), content);
  }
})();
