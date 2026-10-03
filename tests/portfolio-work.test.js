import test from "node:test";
import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import { portfolioWorks } from "../portfolio-work.js";

test("las galerías contienen los doce tableros seleccionados en orden y sus 79 imágenes locales", async () => {
  const expectedSlugs = [
    "genera-banco-azteca",
    "nissan",
    "juan-valdez",
    "dragonteam",
    "entradagroup",
    "clapp",
    "alianza",
    "hava",
    "espectro",
    "nuevoscomienzos",
    "tibea",
    "pokemontest",
  ];
  assert.deepEqual(portfolioWorks.map(({ slug }) => slug), expectedSlugs);
  assert.deepEqual(
    portfolioWorks.map(({ url }) => url),
    expectedSlugs.map((slug) => `https://mx.pinterest.com/myfurthur/${slug}/`),
  );
  assert.equal(
    portfolioWorks.reduce((total, work) => total + work.images.length, 0),
    79,
  );

  const imagePaths = portfolioWorks.flatMap((work) =>
    work.images.map((image) => {
      assert.ok(image.src.startsWith(`assets/portfolio/${work.slug}/`));
      assert.ok(image.width > 0);
      assert.ok(image.height > 0);
      return new URL(`../${image.src}`, import.meta.url);
    }),
  );

  for (const work of portfolioWorks) {
    assert.ok(work.images.includes(work.cover));
    if (work.previewImages) {
      assert.ok(work.previewImages.length >= 1 && work.previewImages.length <= 3);
      assert.equal(work.previewImages[0], work.cover);
      assert.ok(work.previewImages.every((image) => work.images.includes(image)));
    }
  }

  assert.equal(new Set(imagePaths.map((path) => path.href)).size, imagePaths.length);
  await Promise.all(imagePaths.map((imagePath) => access(imagePath)));
});
