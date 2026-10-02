# Sistema visual — Portafolio de Pedro Gómez Vásquez

## Índice

- [`foundations/colors.md`](foundations/colors.md)
- [`foundations/typography.md`](foundations/typography.md)
- [`foundations/spacing.md`](foundations/spacing.md)
- [`foundations/shape-elevation.md`](foundations/shape-elevation.md)
- [`foundations/iconography.md`](foundations/iconography.md)
- [`components.md`](components.md)
- [`ui-tech-debt.md`](ui-tech-debt.md)

## Estado de sincronización

- Estado: sistema compacto implementado y validado en navegador; validar de nuevo si cambian tokens o componentes.
- Último commit documentado: no había baseline Git al iniciar la documentación; marca de sincronización inicial por fecha: 2026-10-02.
- Fecha de última revisión visual: 2026-10-02.
- Tecnología visual detectada: web estática con HTML semántico, CSS y JavaScript ESM, sin framework ni dependencias de UI.
- Alcance: una página responsive que abre con el CV y destaca herramientas de IA, agentes y skills; el catálogo de proyectos va después.

## Contexto para IA

- Producto personal profesional en español, publicado en GitHub Pages en `https://furthurr.github.io/`.
- Dirección: editorial de ingeniería, legible, sobria y accesible; fondo neutral, tinta oscura, acento azul y detalle técnico monospace. Evitar degradados morado/rosa tipo IA.
- CV primero; resaltar trabajo con agentes especializados, skills y herramientas para desarrollo de software; separar la experiencia en Banco Azteca de proyectos públicos personales.
- Layout de ancho contenido, 2 columnas para el encabezado del CV en escritorio y flujo de una columna en móvil. Tarjetas de proyecto uniformes.
- Los fundamentos se contrastan contra los tokens implementados en `styles.css:1-48`; el diseño aprobado está en `.sdd/specs/portafolio-profesional/design.md:45-56`.
- Accesibilidad visual: contraste de texto WCAG AA, focus visible, objetivos táctiles mínimos de 44 × 44 px, respeto a `prefers-reduced-motion`, tema automático claro/oscuro y estilo de impresión.
- No consumir fuentes, íconos, contenido o estilos de un CDN. La fotografía existente es `pedro.png` en la raíz.
