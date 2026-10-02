import test from "node:test";
import assert from "node:assert/strict";
import { filterProjects, projects } from "../projects.js";

const sampleProjects = [
  {
    name: "Agentes de desarrollo",
    description: "Skills para asistentes y agentes especializados",
    category: "ia-tooling",
    technologies: ["JavaScript", "Python"],
  },
  {
    name: "Bot de medios",
    description: "Automatización de descargas en Telegram",
    category: "automatizacion",
    technologies: ["Python", "Telegram"],
  },
  {
    name: "JSON Fixer",
    description: "Repara JSON directamente en el navegador",
    category: "web-escritorio",
    technologies: ["JavaScript", "HTML", "CSS"],
  },
];

test("busca sin distinguir mayúsculas en nombre y descripción", () => {
  assert.deepEqual(
    filterProjects(sampleProjects, { query: "AGENTES" }).map(({ name }) => name),
    ["Agentes de desarrollo"],
  );
  assert.deepEqual(
    filterProjects(sampleProjects, { query: "telegram" }).map(({ name }) => name),
    ["Bot de medios"],
  );
  assert.deepEqual(
    filterProjects(sampleProjects, { query: "automatizacion" }).map(({ name }) => name),
    ["Bot de medios"],
  );
});

test("incluye tecnologías en la búsqueda", () => {
  assert.deepEqual(
    filterProjects(sampleProjects, { query: "html" }).map(({ name }) => name),
    ["JSON Fixer"],
  );
});

test("filtra por categoría y combina categoría con búsqueda", () => {
  assert.deepEqual(
    filterProjects(sampleProjects, { category: "ia-tooling" }).map(({ name }) => name),
    ["Agentes de desarrollo"],
  );
  assert.deepEqual(
    filterProjects(sampleProjects, { query: "Python", category: "automatizacion" }).map(({ name }) => name),
    ["Bot de medios"],
  );
  assert.deepEqual(
    filterProjects(sampleProjects, { query: "Python", category: "web-escritorio" }),
    [],
  );
});

test("una búsqueda vacía o de espacios conserva todos los proyectos", () => {
  assert.deepEqual(filterProjects(sampleProjects, { query: "  " }), sampleProjects);
});

test("el catálogo contiene los repositorios públicos y distingue el fork", () => {
  assert.equal(projects.length, 24);
  assert.equal(new Set(projects.map(({ url }) => url)).size, 24);
  assert.ok(projects.every(({ url }) => url.startsWith("https://github.com/furthurr/")));
  assert.deepEqual(
    projects.filter(({ isFork }) => isFork).map(({ name }) => name),
    ["Ti.MapPlus"],
  );
  assert.deepEqual(
    projects.filter(({ featured }) => featured).map(({ name }) => name),
    ["ai-agents-kit", "Best-Practices-LLM", "songcraftFurthurr"],
  );
});
