const fs = require('fs').promises;
const yaml = require('js-yaml');

async function parseYaml() {
  try {
    const fileContents = await fs.readFile('./theme.yml', 'utf8');
    const data = yaml.load(fileContents);

    console.log(data.gitea.version);
  } catch (e) {
    console.error('Error parsing YAML:', e.message);
    process.exit(1);
  }
}

parseYaml();
