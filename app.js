const portfolioWorkGrid = document.querySelector("#portfolio-work-grid");
const printButton = document.querySelector("#print-cv");

printButton?.addEventListener("click", () => window.print());

function initializeScrollTheme() {
  const sections = [...document.querySelectorAll("[data-scroll-theme]")];
  if (sections.length === 0) return;

  let framePending = false;
  const themeColor = document.querySelector('meta[name="theme-color"]');

  function updateTheme() {
    framePending = false;
    const midpoint = window.innerHeight / 2;
    // The first/last theme also covers the header/footer and document edges.
    let activeSection = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top > midpoint) break;
      activeSection = section;
    }

    const theme = activeSection.dataset.scrollTheme;
    if (document.body.dataset.scrollTheme === theme) return;
    document.body.dataset.scrollTheme = theme;
    themeColor?.setAttribute("content", theme === "dark" ? "#000000" : "#ffffff");
  }

  function scheduleUpdate() {
    if (framePending) return;
    framePending = true;
    window.requestAnimationFrame(updateTheme);
  }

  updateTheme();
  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
  window.addEventListener("pageshow", scheduleUpdate);
  // Galleries, image loading and details can change section heights.
  const observer = new ResizeObserver(scheduleUpdate);
  for (const section of sections) observer.observe(section);
}

initializeScrollTheme();

function makeElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function makePortfolioWorkCard(work, openGallery) {
  const item = makeElement("li", "portfolio-work");
  const article = makeElement("article");
  const heading = makeElement("h3", "", work.name);
  const cover = makeElement("button", "portfolio-work__cover");
  const coverAsset = work.cover ?? work.images[0];
  const coverOptions = work.coverOptions ?? {};
  const screens = !work.previewImages && coverOptions.mode !== "cover" && coverAsset.width < coverAsset.height
    ? work.images.filter((image) => image.height > image.width * 1.5).slice(0, 3)
    : [];
  const previewImages = work.previewImages ?? (screens.length > 1 ? screens : [coverAsset]);

  cover.type = "button";
  cover.setAttribute("aria-label", `Abrir imágenes de ${work.name}`);
  cover.setAttribute("aria-haspopup", "dialog");
  if (previewImages.length > 1) cover.classList.add("portfolio-work__cover--screens");
  if (coverOptions.position) {
    cover.style.setProperty("--portfolio-image-position", coverOptions.position);
    cover.style.setProperty("--portfolio-image-origin", coverOptions.position);
  }
  if (coverOptions.zoom) cover.style.setProperty("--portfolio-image-zoom", String(coverOptions.zoom));

  for (const asset of previewImages) {
    const image = document.createElement("img");
    if (coverOptions.mode === "cover" || asset.width >= asset.height) image.classList.add("portfolio-work__image--cover");
    image.src = asset.src;
    image.alt = "";
    image.width = asset.width;
    image.height = asset.height;
    image.loading = "lazy";
    image.decoding = "async";
    cover.append(image);
  }

  const expandIcon = makeElement("span", "portfolio-work__expand", "↗");
  expandIcon.setAttribute("aria-hidden", "true");
  cover.append(expandIcon);
  cover.addEventListener("click", () => openGallery(work));

  article.append(heading, cover);
  item.append(article);
  return item;
}

function initializeProjectCarousel({
  showcase,
  viewport,
  grid,
  controls,
  previousButton,
  nextButton,
  toggleButton,
  isBlocked = () => false,
}) {
  const slides = [...grid.children];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let manuallyPaused = reducedMotion.matches;
  let pointerInside = false;
  let focusInside = false;
  let inView = false;
  let autoplayTimer;
  let slideAnimation;
  let moving = false;

  slides.forEach((slide, index) => {
    const article = slide.matches("article") ? slide : slide.querySelector("article");
    article.setAttribute("role", "group");
    article.setAttribute("aria-roledescription", "diapositiva");
    article.setAttribute("aria-label", `${index + 1} de ${slides.length}: ${article.querySelector("h3").textContent}`);
  });

  showcase.setAttribute("aria-roledescription", "carrusel");
  viewport.classList.add("is-carousel");
  viewport.hidden = slides.length === 0;

  function updatePauseButton() {
    toggleButton.setAttribute("aria-label", `${manuallyPaused ? "Reanudar" : "Pausar"} avance automático`);
    toggleButton.setAttribute("aria-pressed", String(manuallyPaused));
  }

  function visibleCount() {
    return Number(getComputedStyle(viewport).getPropertyValue("--portfolio-columns")) || 1;
  }

  function updateVisibleSlides() {
    const count = visibleCount();
    [...grid.children].forEach((slide, index) => {
      slide.inert = index >= count;
      slide.setAttribute("aria-hidden", String(index >= count));
    });
    controls.hidden = slides.length <= count;
  }

  async function moveProjects(direction) {
    if (moving || slides.length <= visibleCount()) return;
    moving = true;

    // Rotate the original nodes at the edge of the animation for a seamless loop.
    if (direction < 0) grid.prepend(grid.lastElementChild);
    const step = grid.firstElementChild.getBoundingClientRect().width
      + parseFloat(getComputedStyle(grid).columnGap);
    slideAnimation = grid.animate(
      direction > 0
        ? [{ transform: "translateX(0)" }, { transform: `translateX(-${step}px)` }]
        : [{ transform: `translateX(-${step}px)` }, { transform: "translateX(0)" }],
      { duration: reducedMotion.matches ? 0 : 500, easing: "cubic-bezier(0.22, 0.68, 0, 1)", fill: "forwards" },
    );
    await slideAnimation.finished;
    if (direction > 0) grid.append(grid.firstElementChild);
    slideAnimation.cancel();
    slideAnimation = undefined;
    moving = false;
    updateVisibleSlides();
  }

  function restartAutoplay() {
    window.clearInterval(autoplayTimer);
    if (manuallyPaused || pointerInside || focusInside || !inView || document.hidden || isBlocked()) return;
    autoplayTimer = window.setInterval(() => {
      if (!isBlocked()) moveProjects(1);
    }, 3000);
  }

  previousButton.addEventListener("click", () => {
    moveProjects(-1);
    restartAutoplay();
  });
  nextButton.addEventListener("click", () => {
    moveProjects(1);
    restartAutoplay();
  });
  toggleButton.addEventListener("click", () => {
    manuallyPaused = !manuallyPaused;
    updatePauseButton();
    restartAutoplay();
  });
  reducedMotion.addEventListener("change", () => {
    if (reducedMotion.matches) {
      manuallyPaused = true;
      slideAnimation?.finish();
    }
    updatePauseButton();
    restartAutoplay();
  });
  showcase.addEventListener("pointerenter", (event) => {
    if (event.pointerType === "touch") return;
    pointerInside = true;
    restartAutoplay();
  });
  showcase.addEventListener("pointerleave", () => {
    pointerInside = false;
    restartAutoplay();
  });
  showcase.addEventListener("focusin", (event) => {
    focusInside = event.target !== toggleButton;
    restartAutoplay();
  });
  showcase.addEventListener("focusout", (event) => {
    focusInside = showcase.contains(event.relatedTarget) && event.relatedTarget !== toggleButton;
    restartAutoplay();
  });

  let swipeStart;
  let suppressClick = false;
  viewport.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "touch") swipeStart = { x: event.clientX, y: event.clientY };
  });
  viewport.addEventListener("pointerup", (event) => {
    if (!swipeStart) return;
    const distanceX = event.clientX - swipeStart.x;
    const distanceY = event.clientY - swipeStart.y;
    swipeStart = undefined;
    if (Math.abs(distanceX) > 40 && Math.abs(distanceX) > Math.abs(distanceY)) {
      suppressClick = true;
      moveProjects(distanceX < 0 ? 1 : -1);
      restartAutoplay();
      window.setTimeout(() => { suppressClick = false; }, 0);
    }
  });
  viewport.addEventListener("pointercancel", () => { swipeStart = undefined; });
  viewport.addEventListener("click", (event) => {
    if (suppressClick) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, true);

  new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    restartAutoplay();
  }, { threshold: 0.1 }).observe(viewport);
  new ResizeObserver(() => {
    slideAnimation?.finish();
    updateVisibleSlides();
  }).observe(viewport);
  document.addEventListener("visibilitychange", restartAutoplay);

  updatePauseButton();
  updateVisibleSlides();
  return { restartAutoplay };
}

function renderPortfolioCarousel(workItems) {
  const galleryDialog = document.querySelector("#portfolio-gallery");
  const galleryTitle = document.querySelector("#portfolio-gallery-title");
  const galleryImage = document.querySelector("#portfolio-gallery-image");
  const galleryPosition = document.querySelector("#portfolio-gallery-position");
  const galleryPrevious = document.querySelector("#portfolio-gallery-previous");
  const galleryNext = document.querySelector("#portfolio-gallery-next");
  let selectedWork;
  let imageIndex = 0;

  function showGalleryImage(index) {
    imageIndex = (index + selectedWork.images.length) % selectedWork.images.length;
    const image = selectedWork.images[imageIndex];
    galleryImage.src = image.src;
    galleryImage.alt = `${selectedWork.name}, imagen ${imageIndex + 1} de ${selectedWork.images.length}`;
    galleryImage.width = image.width;
    galleryImage.height = image.height;
    galleryPosition.textContent = `${imageIndex + 1} / ${selectedWork.images.length}`;
  }

  function openGallery(work) {
    selectedWork = work;
    galleryTitle.textContent = work.name;
    galleryPrevious.hidden = galleryNext.hidden = work.images.length < 2;
    showGalleryImage(Math.max(0, work.images.indexOf(work.cover)));
    galleryDialog.showModal();
    document.body.classList.add("has-portfolio-gallery");
    carousel.restartAutoplay();
  }

  portfolioWorkGrid.replaceChildren(...workItems.map((work) => makePortfolioWorkCard(work, openGallery)));
  const carousel = initializeProjectCarousel({
    showcase: document.querySelector(".portfolio-work-showcase"),
    viewport: document.querySelector("#portfolio-work-viewport"),
    grid: portfolioWorkGrid,
    controls: document.querySelector("#portfolio-work-controls"),
    previousButton: document.querySelector("#portfolio-work-previous"),
    nextButton: document.querySelector("#portfolio-work-next"),
    toggleButton: document.querySelector("#portfolio-work-toggle"),
    isBlocked: () => galleryDialog.open,
  });

  document.querySelector("#portfolio-gallery-close").addEventListener("click", () => galleryDialog.close());
  galleryPrevious.addEventListener("click", () => showGalleryImage(imageIndex - 1));
  galleryNext.addEventListener("click", () => showGalleryImage(imageIndex + 1));
  galleryDialog.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      showGalleryImage(imageIndex + (event.key === "ArrowLeft" ? -1 : 1));
    }
  });
  galleryDialog.addEventListener("click", (event) => {
    if (event.target !== galleryDialog) return;
    const bounds = galleryDialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
      galleryDialog.close();
    }
  });
  galleryDialog.addEventListener("close", () => {
    document.body.classList.remove("has-portfolio-gallery");
    carousel.restartAutoplay();
  });
}

function initializePublicProjects() {
  const grid = document.querySelector("#public-projects-grid");
  if (!grid) return;

  initializeProjectCarousel({
    showcase: document.querySelector(".public-projects"),
    viewport: document.querySelector("#public-projects-viewport"),
    grid,
    controls: document.querySelector("#public-projects-controls"),
    previousButton: document.querySelector("#public-projects-previous"),
    nextButton: document.querySelector("#public-projects-next"),
    toggleButton: document.querySelector("#public-projects-toggle"),
    isBlocked: () => Boolean(document.querySelector("#portfolio-gallery")?.open),
  });
}

async function initializePortfolioWork() {
  if (!portfolioWorkGrid) return;

  try {
    const portfolio = await import("./portfolio-work.js");
    renderPortfolioCarousel(portfolio.portfolioWorks);
  } catch (error) {
    const errorState = document.querySelector("#portfolio-work-error");
    if (errorState) errorState.hidden = false;
    console.error("No se pudieron cargar las galerías visuales.", error);
  }
}

initializePortfolioWork();
initializePublicProjects();

function initializeContactLinks() {
  const isMobile = navigator.userAgentData?.mobile === true
    || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
    || (/Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints > 1);

  // Mobile HTTPS links let the operating system open the app or its web page.
  if (isMobile) return;

  for (const link of document.querySelectorAll(".contact-social-link[data-web-href]")) {
    link.href = link.dataset.webHref;
  }
}

initializeContactLinks();
