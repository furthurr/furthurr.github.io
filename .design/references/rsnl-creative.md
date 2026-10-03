# Referencia visual: RSNL Creative

Inspección: 2026-10-02, https://rsnlcreative.com/, Chrome headless mediante Playwright.
Alcance solicitado: adaptar el estilo al portafolio estático existente.

## Valores extraídos

| Elemento | Escritorio 1440 px | Móvil 390 px |
|---|---|---|
| H1 | Plus Jakarta Sans, 90 px, 800, line-height 108 px, tracking 3 px | 40 px, line-height 48 px |
| H2 principal | Plus Jakarta Sans, 56 px, 800, line-height 67.2 px, tracking 2.5 px | 36 px, line-height 43.2 px |
| Texto / botones | Inter, sans-serif | Inter, sans-serif |
| Botón primario | padding 13 × 20 px, radio `0 10px`, blanco/negro | Mismo radio y padding |
| Secciones | padding vertical 160 px, horizontal 60 px | 80 px / 20 px |

Fuente CSS: `https://rsnlcreative.com/wp-content/litespeed/ucss/393670f1bf9e369b55b515b63e4a2a3a.css?ver=1532b` y estilos inline de la página.
CSS inline: selección `#EE3A2A`, gradiente de interacción `linear-gradient(45deg, #EDAD3C, #EE3A2A)`, radios del botón intercambiados en hover, transición de enlaces 300 ms.

## Adaptación

- Titulares en Plus Jakarta Sans local (400, 700, 800); cuerpo con sans-serif del sistema para mantener la integración ligera.
- Cabecera, presentación y proyectos oscuros; trayectoria y formación claras. Tema oscuro automático para las secciones de lectura.
- Negro `#000000`, blanco `#FFFFFF`, rojo `#EE3A2A` y ámbar `#EDAD3C`. Rojo oscurecido en texto sobre blanco para contraste; ámbar en enlaces sobre negro.
- Presentación con titular de 40–90 px y retrato propio; atmósfera cálida en CSS en lugar del video de productos de la agencia.
- Botones asimétricos y subrayados cálidos con transiciones de 250–300 ms, foco visible y movimiento reducido.
- Se conservan las secciones, contenido, búsqueda, filtros, enlaces y estilo de impresión del portafolio.

Esta es una adaptación visual; no una réplica de la agencia. No se transfieren su identidad de marca ni su catálogo de productos.

## Investigación del cambio de fondo por scroll

Verificado el 2026-10-02 en Chrome/Playwright, con lectura del script ejecutado mediante Chrome DevTools Protocol.

Fuente JS: `https://rsnlcreative.com/wp-content/litespeed/js/6b9cefe7b46633e8c19b0b72b8396035.js?ver=1532b`.

El original utiliza un listener jQuery de `window.scroll`, no IntersectionObserver para este efecto. Calcula `scrollTop + window.height() / 2`, recorre los paneles `.bg` y comprueba cuál contiene ese punto usando `.position().top` y `.height()`. Lee su atributo `data-color` (`black` o `white`), elimina las clases `color-*` y asigna `color-<valor>` a **todos** los contenedores `div.e-con.bg` simultáneamente. Ejecuta también el cálculo al inicializar mediante `.scroll()`.

CSS exacto del fondo:

```css
div.e-con.bg { transition: background-color 1s ease; margin: 0px; }
.color-black { background-color: #000; }
.color-white { background-color: #fff; }
```

Secuencia de atributos: hero negro → servicios blanco → proyectos negro → partners blanco → reviews negro. El fondo se decide por la sección en el centro del viewport y funciona en ambos sentidos del scroll. No depende del tema del sistema operativo.

Observación a 1440 × 1000: scroll 0 negro; 700 blanco; 2000 negro; 3400 blanco; 6800 negro. Al volver a 0 recupera negro. Son muestras de verificación, no umbrales fijos para implementar.

Implementación en el portafolio: regla del centro del viewport y transición de 1 s con JavaScript nativo (`app.js:19-61`, `initializeScrollTheme`), `data-scroll-theme` por sección y estado global en `body`. Sin jQuery ni Elementor. Los tokens de texto, bordes, tarjetas y controles siguen el tema global; la animación respeta `prefers-reduced-motion`. `requestAnimationFrame` agrupa actualizaciones y el listener de scroll es pasivo. `ResizeObserver` recalcula al cambiar viewport, filtros, imágenes o galerías. La primera/última sección cubren los extremos del documento. El efecto de pantalla no altera la impresión; sin JS permanece el diseño estático anterior.

Secuencia implementada: presentación dark → experiencia light → habilidades dark → formación light → proyectos dark → contacto light. El tema por scroll tiene prioridad sobre `prefers-color-scheme` mientras JS está activo.

Verificación sobre el artefacto `site-dist/`: recorrido completo de ida y vuelta a 390, 768 y 1440 px; cambio a ambos lados del punto medio; color intermedio real durante la transición de 1 s; sincronización del fondo global y titulares; recalculado después de filtrar el catálogo; movimiento reducido; impresión blanca y fallback sin JS. Sin desbordamientos ni errores de JS. `npm test`: 6 pruebas aprobadas. `npm run build:pages`: correcto.

## Investigación y adaptación del carrusel de proyectos

Revisión directa del 2026-10-02 de la sección **Work that's worked**, en Chrome/Playwright y HTML publicado.

- Widget `.elementor-element-5bce911`: configuración de 3 columnas en escritorio, 2 en tablet y 1 en móvil.
- `.jet-listing-grid__slider[data-slider_options]`: autoplay de 5000 ms, transición de 500 ms, avance de 1 proyecto, bucle infinito, pausa al hacer hover, flechas y sin puntos de paginación.
- Presentación plana de los proyectos: nombre sobre la imagen, sin caja ni panel lateral. Títulos de 34 px en escritorio y 28 px en móvil; separación de 30 px entre título e imagen; portadas en proporción 16:9.
- Los enlaces de las imágenes declaran `data-elementor-open-lightbox="yes"` y agrupan las imágenes por proyecto.

Adaptación solicitada en el portafolio: mismo patrón horizontal de 3/2/1 proyectos; intervalo ajustado a **3000 ms**; nombres sobre las portadas; controles discretos sin puntos; clic en portada para abrir un `<dialog>` con todas las imágenes del proyecto. Las portadas verticales combinan hasta 3 pantallas completas en un marco común. Se retiraron «Portafolio visual», «Ver galería (n imágenes)» y «Ver tablero en Pinterest», sin reemplazarlos por otra etiqueta visible de galería.

Fuentes de implementación: `app.js:119-355`, `index.html:292-374` y `styles.css:723-986,1538-1546,1675-1685`. El bucle rota nodos originales después de la animación; los proyectos fuera del viewport son `inert` y se ocultan a tecnologías asistivas. El avance se pausa por hover, foco, visor abierto, pestaña oculta o sección fuera de pantalla. Con movimiento reducido inicia pausado y las flechas funcionan sin animación.

Verificación: capturas y medidas a 320, 390, 640, 641, 768, 1024, 1025 y 1440 px; portadas 16:9, columnas correctas y sin overflow. Bucle hacia delante/atrás; apertura de los 10 proyectos; navegación de imágenes, Escape y restauración del foco; intervalo real de 3 s y pausa/reanudación; gesto táctil real en Chrome y apertura del visor en móvil. Búsqueda e impresión correctas. Cero errores JS/HTTP o assets remotos. 6 pruebas de Node aprobadas y artefacto de Pages generado.
