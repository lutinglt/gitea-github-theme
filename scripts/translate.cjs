const fs = require("fs");
const path = require("path");
const child_process = require("child_process");
const dotenv = require("dotenv");

dotenv.config({ quiet: true });
const rootDir = path.join(__dirname, "..");

const pkgPath = path.join(rootDir, "package.json");
const pkg = JSON.parse(fs.readFileSync(pkgPath));

const githubSite = "https://raw.githubusercontent.com";
const giteaRepo = "go-gitea/gitea";
const githubBranchPath = "refs/heads/release";
const githubTagPath = "refs/tags";
const localePath = "options/locale";

const [major, minor, patch, tag = ""] = pkg.version.split(".");

console.log("Version:", pkg.version);
let versionPath = "";
if (tag.includes("rc") || patch.includes("latest")) {
  versionPath = `${githubBranchPath}/v${major}.${minor}`;
} else {
  versionPath = `${githubTagPath}/v${major}.${minor}.${patch}`;
}

const githubUrl = `${githubSite}/${giteaRepo}/${versionPath}/${localePath}`;
const locales = fs.readdirSync(path.join(rootDir, localePath)).filter(file => file.endsWith(".ini"));

(async () => {
  for (const locale of locales) {
    const localUrl = `${githubUrl}/${locale}`;
    console.log("LocaleUrl:", localUrl);
    const themeLocale = fs.readFileSync(path.join(rootDir, localePath, locale), "utf-8");

    const response = await fetch(localUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let content = await response.text();
    if (locale.includes("zh-CN")) {
      content = content.replaceAll("工单", "议题").replaceAll("合并请求", "拉取请求");
    }
    fs.mkdirSync(path.join(rootDir, "dist", localePath), { recursive: true });
    fs.writeFileSync(path.join(rootDir, "dist", localePath, locale), content + themeLocale);
  }

  if (process.env.SSH_SERVER && process.env.GITEA_PATH && process.env.SSH_USER) {
    const cmd = `scp -r dist/options ${process.env.SSH_USER}@${process.env.SSH_SERVER}:${process.env.GITEA_PATH}`;
    console.log("[translate] exec:", cmd);
    child_process.execSync(cmd, { stdio: "inherit" });
  }
})();
