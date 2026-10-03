import { copyFile, cp, mkdir, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const repositoryRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const outputDirectory = join(repositoryRoot, "site-dist");
const publishFiles = [
  "index.html",
  "styles.css",
  "app.js",
  "portfolio-work.js",
  "pedro.png",
  "favicon.svg",
  "THIRD_PARTY_NOTICES.md",
];

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });

for (const file of publishFiles) {
  await copyFile(join(repositoryRoot, file), join(outputDirectory, file));
}

await cp(join(repositoryRoot, "assets/fonts"), join(outputDirectory, "assets/fonts"), {
  recursive: true,
  filter: (source) => !source.endsWith("README.md"),
});

await cp(join(repositoryRoot, "assets/portfolio"), join(outputDirectory, "assets/portfolio"), {
  recursive: true,
});

console.log(`Sitio preparado en site-dist/ (${publishFiles.length} archivos, fuentes y galerías visuales).`);
