# Deuda técnica visual

Estado de sincronización: primera UI implementada y revisada en Chrome.

Fecha de revisión: 2026-10-02.

Fuente de alcance: `.sdd/specs/portafolio-profesional/design.md`.

| ID | Prioridad | Hallazgo | Estado | Evidencia de cierre |
|---|---|---|---|---|
| UI-01 | Media | Los colores y pares de texto/acción requerían contraste verificado. | Resuelto | Tokens CSS implementados; contrastes principales medidos entre 5.25:1 y 19.28:1 en temas claro/oscuro y estados CTA (`styles.css:1-48,305-325,915-984`). |
| UI-02 | Media | El layout y la impresión debían comprobarse con el navegador real. | Resuelto | Chrome reportó `scrollWidth` igual al viewport a 320, 360, 390, 768 y 1440 px; se generó PDF de impresión válido de 1.5 MB y se confirmó que Proyectos/nav se omiten en impresión (`styles.css:1003-1113,1145-1299`). |
| UI-03 | Baja | Foco, búsqueda, estado vacío y movimiento reducido requerían revisión interactiva. | Resuelto | Teclado enfoca primero «Saltar al contenido»; controles etiquetados, `aria-live`, estado vacío recuperable y `prefers-reduced-motion` reducen transiciones (`index.html:28-39,329-384`, `app.js:78-142`, `styles.css:102-105,1134-1143`). |
| UI-04 | Media | El carrusel con una tarjeta gigante, panel lateral y puntos no reflejaba la sección de proyectos solicitada de RSNL Creative. | Resuelto | Investigación directa de la referencia; carrusel horizontal plano de 3/2/1 proyectos, títulos sobre imágenes, visor al pulsar portadas y eliminación de las etiquetas pedidas (`index.html:292-374`, `app.js:119-355`, `styles.css:723-986`). Geometría, bucle, autoplay, teclado y touch verificados en Chrome entre 320 y 1440 px. |

La validación de accesibilidad es focalizada y no sustituye una auditoría WCAG integral.
