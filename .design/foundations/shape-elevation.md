# Formas, bordes y elevación

Estado: implementada y revisada en navegador el 2026-10-02.

Fuentes: tokens `styles.css:57-59` y bloque de adaptación de pantalla; referencia `../references/rsnl-creative.md`.

| Elemento | Token propuesto | Uso |
|---|---|---|
| Control | `--radius-control: 0 10px` | Botones y búsqueda; hover del botón invierte a `10px 0` |
| Tarjeta/superficie | `--radius-card: 0 20px` | Tarjetas y paneles |
| Proyecto seleccionado | Presentación plana, sin borde/radio/sombra | Nombre sobre portada rectangular; controles circulares de 48 px (`styles.css:764-817,847-864`) |
| Visor de imágenes | Borde de 1 px y esquinas rectas | Fondo oscuro y backdrop con blur de 8 px; controles circulares de 44 px (`styles.css:890-942`) |
| Retrato | `0 3rem`, móvil `0 2rem` | Esquinas asimétricas y sombra ámbar desplazada 12 px |
| Borde | 1 px sólido `--color-border` | Separadores, tarjetas y controles |
| Elevación | Sin sombra en paneles / glow cálido en CTA hover | Bordes para paneles; sombras rojo/ámbar para las acciones |

Priorizar jerarquía por tipografía, espacio y bordes antes que sombras. Hover/focus no cambian dimensiones; el foco se representa con un anillo visible (`styles.css:93-101`).
