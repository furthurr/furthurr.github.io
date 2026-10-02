export const projectCategories = [
  { id: "all", label: "Todos" },
  { id: "ia-tooling", label: "IA y skills" },
  { id: "automatizacion", label: "Automatización" },
  { id: "web-escritorio", label: "Web y escritorio" },
  { id: "movil", label: "Móvil" },
  { id: "documentacion", label: "Documentación" },
  { id: "extensiones", label: "Extensiones" },
  { id: "utilidades", label: "Utilidades" },
];

export const projects = [
  {
    name: "ai-agents-kit",
    url: "https://github.com/furthurr/ai-agents-kit",
    description:
      "Kit multiagente de skills especializadas y herramientas reutilizables para asistentes de IA, con lógica canónica y adaptadores por plataforma.",
    category: "ia-tooling",
    technologies: ["Python", "Shell", "PowerShell"],
    isFork: false,
    featured: true,
  },
  {
    name: "Best-Practices-LLM",
    url: "https://github.com/furthurr/Best-Practices-LLM",
    description:
      "Guía práctica de prompting y referencia técnica basada en documentación de proveedores de modelos de lenguaje.",
    category: "documentacion",
    technologies: [],
    isFork: false,
    featured: true,
  },
  {
    name: "songcraftFurthurr",
    url: "https://github.com/furthurr/songcraftFurthurr",
    description:
      "Sistema de conocimiento y skills para composición de letras asistida y preparación de contenido para Suno.",
    category: "ia-tooling",
    technologies: ["Shell"],
    isFork: false,
    featured: true,
  },
  {
    name: "agente-tendencias",
    url: "https://github.com/furthurr/agente-tendencias",
    description:
      "Herramienta en Python que genera informes de tendencias de YouTube para México y contenido en español con fuentes públicas.",
    category: "automatizacion",
    technologies: ["Python"],
    isFork: false,
    featured: false,
  },
  {
    name: "FurCapture",
    url: "https://github.com/furthurr/FurCapture",
    description:
      "PWA local para grabar pantalla y micrófono, con webcam opcional, historial en el navegador y sin backend.",
    category: "web-escritorio",
    technologies: ["JavaScript", "HTML", "CSS", "PWA", "IndexedDB"],
    isFork: false,
    featured: false,
  },
  {
    name: "mensajeriaFur",
    url: "https://github.com/furthurr/mensajeriaFur",
    description:
      "Aplicación de escritorio Electron para reunir distintos servicios de mensajería en una sola ventana.",
    category: "web-escritorio",
    technologies: ["Electron", "JavaScript", "HTML", "CSS"],
    isFork: false,
    featured: false,
  },
  {
    name: "fixJson",
    url: "https://github.com/furthurr/fixJson",
    description:
      "Herramienta web para reparar, formatear y visualizar JSON malformado desde el navegador.",
    category: "utilidades",
    technologies: ["JavaScript", "HTML", "CSS"],
    isFork: false,
    featured: false,
  },
  {
    name: "speed-controller",
    url: "https://github.com/furthurr/speed-controller",
    description:
      "Extensión de Chrome para controlar la velocidad de reproducción de audio y video HTML5 con atajos y panel emergente.",
    category: "extensiones",
    technologies: ["JavaScript", "Chrome Manifest V3", "CSS"],
    isFork: false,
    featured: false,
  },
  {
    name: "meta-videos",
    url: "https://github.com/furthurr/meta-videos",
    description:
      "Extensión de Chrome que automatiza el envío de prompts a meta.ai y la descarga de los videos generados.",
    category: "extensiones",
    technologies: ["JavaScript", "Chrome Manifest V3", "Python", "CSS"],
    isFork: false,
    featured: false,
  },
  {
    name: "BotMundial",
    url: "https://github.com/furthurr/BotMundial",
    description:
      "Bot privado de Telegram con información de partidos del Mundial 2026 y pronósticos calculados con un modelo Elo local.",
    category: "automatizacion",
    technologies: ["Python", "Telegram", "SQLite", "ESPN API"],
    isFork: false,
    featured: false,
  },
  {
    name: "dashboardFurthurr",
    url: "https://github.com/furthurr/dashboardFurthurr",
    description:
      "Tablero Kanban descrito como Trello-like; el manifiesto confirma React, TypeScript, Vite y Supabase.",
    category: "web-escritorio",
    technologies: ["React", "TypeScript", "Vite", "Supabase"],
    isFork: false,
    featured: false,
  },
  {
    name: "PixelDiet",
    url: "https://github.com/furthurr/PixelDiet",
    description:
      "Aplicación web para comprimir y convertir imágenes directamente en el navegador, sin subir archivos a un servidor.",
    category: "web-escritorio",
    technologies: ["JavaScript", "Vite", "Canvas API", "CSS"],
    isFork: false,
    featured: false,
  },
  {
    name: "CardFlow",
    url: "https://github.com/furthurr/CardFlow",
    description:
      "MVP de un tablero Kanban con gestión de proyectos, tareas y usuarios.",
    category: "web-escritorio",
    technologies: ["JavaScript", "Node.js", "Express", "SQLite"],
    isFork: false,
    featured: false,
  },
  {
    name: "BotDownloadVideoTelegram",
    url: "https://github.com/furthurr/BotDownloadVideoTelegram",
    description:
      "Bot de Telegram para descargar video o audio desde URLs, recortar contenido y registrar actividad localmente.",
    category: "automatizacion",
    technologies: ["Python", "Telegram", "yt-dlp", "FFmpeg", "SQLite"],
    isFork: false,
    featured: false,
  },
  {
    name: "flutter-Tahoe",
    url: "https://github.com/furthurr/flutter-Tahoe",
    description:
      "Guía de instalación y configuración de un entorno Flutter en macOS Apple Silicon.",
    category: "documentacion",
    technologies: ["Flutter", "Dart", "macOS"],
    isFork: false,
    featured: false,
  },
  {
    name: "pokeon",
    url: "https://github.com/furthurr/pokeon",
    description: "Repositorio descrito como prueba de una aplicación Flutter.",
    category: "movil",
    technologies: ["Flutter"],
    isFork: false,
    featured: false,
  },
  {
    name: "stripebasic",
    url: "https://github.com/furthurr/stripebasic",
    description:
      "Ejemplo histórico en Flutter/Dart de tokenización de tarjetas y creación de cargos con Stripe.",
    category: "movil",
    technologies: ["Dart", "Flutter", "Stripe"],
    isFork: false,
    featured: false,
  },
  {
    name: "ffbeHacks",
    url: "https://github.com/furthurr/ffbeHacks",
    description:
      "Colección de scripts Lua para GameGuardian relacionados con Final Fantasy Brave Exvius.",
    category: "utilidades",
    technologies: ["Lua", "GameGuardian"],
    isFork: false,
    featured: false,
  },
  {
    name: "varios",
    url: "https://github.com/furthurr/varios",
    description:
      "Repositorio de varios proyectos; la documentación pública disponible no detalla sus funciones.",
    category: "utilidades",
    technologies: ["JavaScript", "CSS", "Python"],
    isFork: false,
    featured: false,
  },
  {
    name: "navController",
    url: "https://github.com/furthurr/navController",
    description:
      "Librería JavaScript para manejar un arreglo de ventanas en aplicaciones iOS y Android con Titanium/Alloy.",
    category: "movil",
    technologies: ["JavaScript", "Titanium", "Alloy"],
    isFork: false,
    featured: false,
  },
  {
    name: "Ti.MapPlus",
    url: "https://github.com/furthurr/Ti.MapPlus",
    description:
      "Fork de un módulo de mapas para Titanium; se identifica como fork y no se atribuye el módulo original.",
    category: "movil",
    technologies: ["JavaScript", "Java", "Objective-C", "Python"],
    isFork: true,
    featured: false,
  },
  {
    name: "fixRes",
    url: "https://github.com/furthurr/fixRes",
    description:
      "Utilidad descrita por el repositorio como ajuste de resolución para Appcelerator.",
    category: "utilidades",
    technologies: ["JavaScript", "Python"],
    isFork: false,
    featured: false,
  },
  {
    name: "labelHtml",
    url: "https://github.com/furthurr/labelHtml",
    description:
      "Ejemplo descrito como prueba del uso de etiquetas HTML en una interfaz de Appcelerator.",
    category: "utilidades",
    technologies: ["JavaScript", "HTML", "CSS"],
    isFork: false,
    featured: false,
  },
  {
    name: "Titanium-database",
    url: "https://github.com/furthurr/Titanium-database",
    description:
      "Repositorio público sin descripción ni README disponible; no se atribuyen funciones o tecnologías adicionales.",
    category: "documentacion",
    technologies: [],
    isFork: false,
    featured: false,
  },
];

function normalize(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("es-MX");
}

export function filterProjects(projectList, { query = "", category = "all" } = {}) {
  const normalizedQuery = normalize(query.trim());

  return projectList.filter((project) => {
    const matchesCategory = category === "all" || project.category === category;
    if (!matchesCategory) return false;
    if (!normalizedQuery) return true;

    const searchableText = normalize(
      [project.name, project.description, project.category, ...(project.technologies ?? [])]
        .filter(Boolean)
        .join(" "),
    );
    return searchableText.includes(normalizedQuery);
  });
}
