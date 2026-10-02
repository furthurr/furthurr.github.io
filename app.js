const projectGrid = document.querySelector("#project-grid");
const filterGroup = document.querySelector("#project-filters");
const searchInput = document.querySelector("#project-search");
const controls = document.querySelector("#catalog-controls");
const resultStatus = document.querySelector("#project-status");
const emptyState = document.querySelector("#project-empty");
const errorState = document.querySelector("#project-error");
const clearFiltersButton = document.querySelector("#clear-filters");
const printButton = document.querySelector("#print-cv");

let activeCategory = "all";
let projects = [];
let categories = [];
let filterProjects = () => [];

printButton?.addEventListener("click", () => window.print());

function makeElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function repositoryUrl(value) {
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" || url.hostname !== "github.com" || !url.pathname.startsWith("/furthurr/")) {
      return null;
    }
    return url.href;
  } catch {
    return null;
  }
}

function makeProjectCard(project, categoryLabels) {
  const item = makeElement("li", "project-card");
  const article = makeElement("article");
  const category = categoryLabels.get(project.category) ?? "Proyecto";
  const url = repositoryUrl(project.url);

  article.append(makeElement("p", "project-kicker", category));

  if (project.featured || project.isFork) {
    const badges = makeElement("div", "project-card__badges");
    if (project.featured) badges.append(makeElement("span", "project-card__badge", "Destacado"));
    if (project.isFork) badges.append(makeElement("span", "project-card__badge", "Fork"));
    article.append(badges);
  }

  const heading = makeElement("h3");
  const title = url ? makeElement("a", "", project.name) : makeElement("span", "", project.name);
  if (url) title.href = url;
  heading.append(title);
  article.append(heading);
  article.append(makeElement("p", "", project.description));

  if (project.technologies.length > 0) {
    const technologyList = makeElement("ul", "tag-list");
    technologyList.setAttribute("aria-label", `Tecnologías de ${project.name}`);
    for (const technology of project.technologies) {
      technologyList.append(makeElement("li", "", technology));
    }
    article.append(technologyList);
  }

  if (url) {
    const link = makeElement("a", "text-link", "Ver repositorio en GitHub");
    link.href = url;
    article.append(link);
  }

  item.append(article);
  return item;
}

function renderFilters() {
  filterGroup.replaceChildren();

  for (const category of categories) {
    const button = makeElement("button", "filter-button", category.label);
    button.type = "button";
    button.dataset.category = category.id;
    button.setAttribute("aria-pressed", String(category.id === activeCategory));
    filterGroup.append(button);
  }
}

function renderProjects() {
  const visibleProjects = filterProjects(projects, {
    query: searchInput.value,
    category: activeCategory,
  });
  const categoryLabels = new Map(categories.map(({ id, label }) => [id, label]));

  projectGrid.replaceChildren(...visibleProjects.map((project) => makeProjectCard(project, categoryLabels)));
  projectGrid.hidden = visibleProjects.length === 0;
  emptyState.hidden = visibleProjects.length > 0;

  const projectWord = visibleProjects.length === 1 ? "proyecto" : "proyectos";
  resultStatus.textContent = `${visibleProjects.length} ${projectWord} encontrados`;
}

function selectCategory(categoryId) {
  if (!categories.some(({ id }) => id === categoryId)) return;
  activeCategory = categoryId;
  for (const button of filterGroup.querySelectorAll("[data-category]")) {
    button.setAttribute("aria-pressed", String(button.dataset.category === activeCategory));
  }
  renderProjects();
}

async function initializeCatalog() {
  try {
    const catalog = await import("./projects.js");
    projects = catalog.projects;
    categories = catalog.projectCategories;
    filterProjects = catalog.filterProjects;

    renderFilters();
    controls.hidden = false;
    resultStatus.hidden = false;
    renderProjects();

    searchInput.addEventListener("input", renderProjects);
    filterGroup.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-category]");
      if (button) selectCategory(button.dataset.category);
    });
    clearFiltersButton.addEventListener("click", () => {
      searchInput.value = "";
      selectCategory("all");
      searchInput.focus();
    });
  } catch (error) {
    errorState.hidden = false;
    console.error("No se pudo cargar el catálogo local de proyectos.", error);
  }
}

initializeCatalog();
