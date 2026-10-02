import { copyFile, mkdir, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const repositoryRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const outputDirectory = join(repositoryRoot, "site-dist");
const publishFiles = ["index.html", "styles.css", "app.js", "projects.js", "pedro.png", "favicon.svg"];

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });

for (const file of publishFiles) {
  await copyFile(join(repositoryRoot, file), join(outputDirectory, file));
}

console.log(`Sitio preparado en site-dist/ (${publishFiles.length} archivos).`);
