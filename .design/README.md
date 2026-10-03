# Sistema visual — Portafolio de Pedro Gómez Vásquez

## Índice

- [`foundations/colors.md`](foundations/colors.md)
- [`foundations/typography.md`](foundations/typography.md)
- [`foundations/spacing.md`](foundations/spacing.md)
- [`foundations/shape-elevation.md`](foundations/shape-elevation.md)
- [`foundations/iconography.md`](foundations/iconography.md)
- [`components.md`](components.md)
- [`ui-tech-debt.md`](ui-tech-debt.md)
- [`references/rsnl-creative.md`](references/rsnl-creative.md) — extracción y adaptación de la referencia visual.
- [`references/public-projects.md`](references/public-projects.md) — selección y fuentes de los 12 repositorios del carrusel público.
- [`references/private-projects.md`](references/private-projects.md) — selección, orden y fuentes de imágenes de los 12 tableros privados.

## Estado de sincronización

- Estado: adaptación del estilo de RSNL Creative implementada; carrusel de proyectos rediseñado y validado en Chrome/Playwright a 320, 390, 640, 641, 768, 1024, 1025 y 1440 px. Verificación de bucle, avance de 3 s, visor de imágenes, teclado y gestos táctiles.
- Último commit documentado: `f37da1d` (sincronización inicial por fecha: 2026-10-02).
- Fecha de última revisión visual: 2026-10-02.
- Tecnología visual detectada: web estática con HTML semántico, CSS y JavaScript ESM, sin framework ni dependencias de UI.
- Alcance: una página responsive que abre con el CV y destaca herramientas de IA, agentes y skills; incluye 12 proyectos privados con 70 imágenes locales, un carrusel de 12 proyectos públicos y enlaces a Pinterest y GitHub.

## Contexto para IA

- Producto personal profesional en español, publicado en GitHub Pages en `https://furthurr.github.io/`.
- Dirección actual: referencia RSNL Creative, aprobada por petición directa del usuario. Negro/blanco, acentos rojo y ámbar, titulares grandes y controles con esquinas asimétricas. Detalle técnico en monospace.
- Tema global por scroll: `initializeScrollTheme` en `app.js:6-44`; siete zonas temáticas: CV claro, experiencia y habilidades oscuras, educación y proyectos privados claros, proyectos públicos y contacto oscuros. La zona que cruza el centro de la ventana selecciona el tema para toda la página, con transición de 1 s.
- CV primero; resaltar trabajo con agentes especializados, skills y herramientas para desarrollo de software; separar la experiencia en Banco Azteca de proyectos públicos personales.
- Layout de ancho contenido, 2 columnas para el encabezado del CV en escritorio y flujo de una columna en móvil. Proyectos privados: títulos sobre portadas 16:9, presentación plana y visor modal al pulsar las imágenes (`app.js:248-310`). Ambos carruseles comparten `initializeProjectCarousel` (`app.js:90-246`): 3/2/1 proyectos visibles, avance de un proyecto cada 3 s, flechas, pausa y swipe. Las 12 tarjetas públicas conservan su diseño compacto y acentos estables (`index.html:372-480`, `styles.css:756-771`). El enlace «Ver perfil en Pinterest ↗» queda debajo del carrusel privado; el enlace a GitHub queda al final de Proyectos públicos.
- Fuentes de verdad: tokens y fuentes en `styles.css:1-87`; adaptación de pantalla en el bloque `/* RSNL Creative-inspired presentation */`; catálogo visual en `portfolio-work.js` y su componente en `app.js`. `.sdd/specs/portafolio-profesional/design.md` describe la dirección visual anterior; la referencia actual y su evidencia viven en `references/rsnl-creative.md`.
- Accesibilidad visual: focus visible, objetivos táctiles mínimos de 44 × 44 px, respeto a `prefers-reduced-motion` y estilo de impresión. Con JS el tema se determina por scroll; sin JS se conserva la alternancia estática y el tema del sistema para lectura.
- Fuentes Plus Jakarta Sans descargadas y servidas localmente en `assets/fonts/`, con licencia OFL. Las imágenes de proyectos están agrupadas en `assets/portfolio/` y se describen en `portfolio-work.js`. Sin dependencias de CDN. La fotografía es `pedro.png`.
- Selección privada (`portfolio-work.js:19-119`): Genera Banco Azteca, Nissan, Juan Valdez, DragonTeam, EntradaGroup, Clapp, Alianza, Hava, Espectro, Nuevos Comienzos, Tibea y Shic. Las portadas admiten `coverOptions` para elegir imágenes, posición, zoom y modo de relleno (`app.js:53-95`, `styles.css:808-835`). Shic usa su única imagen con `cover` y punto de recorte al 4 % desde arriba; verificado a 390 y 1440 px. Ajustes particulares en `references/private-projects.md`.
- Contacto: correo y logotipos SVG inline de GitHub, WhatsApp y Telegram con `currentColor`, controles de 48 px y nombres accesibles (`index.html:492-514`, `styles.css:1106-1135`). En móvil se conservan los enlaces HTTPS oficiales de mensajería; en escritorio `initializeContactLinks` los dirige a los clientes web (`app.js:344-357`). Créditos en `THIRD_PARTY_NOTICES.md`. Destinos, temas, foco e impresión verificados en Chrome/Playwright a 320, 390, 768 y 1440 px.
