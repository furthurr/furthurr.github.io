# Espaciado y dimensiones

Estado: implementada y revisada en navegador el 2026-10-02.

Fuentes: escala de tokens en `styles.css:48-56`, bloque de adaptación de pantalla y media queries de 1024, 850, 640 y 365 px. Referencia actual: `../references/rsnl-creative.md`.

| Token conceptual | Valor inicial | Uso |
|---|---:|---|
| `space-1` | 4 px | Separación mínima e icono-texto |
| `space-2` | 8 px | Separación de controles y grupos |
| `space-3` | 12 px | Padding compacto |
| `space-4` | 16 px | Espaciado base |
| `space-6` | 24 px | Secciones internas y tarjetas |
| `space-8` | 32 px | Bloques y ritmo de contenido |
| `space-12` | 48 px | Separación de secciones |
| `space-16` | 64 px | Margen vertical amplio de escritorio |

- Contenedor: máximo de 80 rem; gutters de 60 px en escritorio, 20 px hasta 1024, 16 px hasta 640 y 10 px hasta 365.
- Secciones: padding vertical de 40–56 px en escritorio y 40 px en móvil (40 px por lado para contacto). Dos secciones contiguas dejan aproximadamente 80–112 px entre contenidos. El encabezado deja 32–48 px antes del contenido. Presentación con padding superior de 48–96 px en escritorio y 40 px en móvil; su espacio inferior y el panel de foco también se redujeron.
- En móvil, reducir los espacios de sección sin comprimir los blancos táctiles.
- Mantener mínimo de 8 px entre controles táctiles vecinos y 44 × 44 px de área interactiva.
- Breakpoints funcionales: una columna en móvil; encabezado de CV en dos columnas y catálogo de más columnas solo cuando quepa sin estrechar texto.
- Carrusel seleccionado (`styles.css:723-877,1538-1546,1675-1685`): 3 columnas, 2 hasta 1024 px y 1 hasta 640 px. Gap de 24–40 px; portadas 16:9, 24 px entre nombre e imagen, 32–64 px después del encabezado y controles de 48 × 48 px con 12 px de separación. El viewport tiene 6 px de margen para conservar el anillo de foco.
- Visor (`styles.css:890-975`): ancho máximo de 70 rem, margen mínimo de 16 px respecto al viewport y área de imagen de `min(65svh, 44rem)` con ajuste `contain`.
- Carrusel público (`styles.css:756-771`): mismo reparto 3/2/1 que el privado, con gap de 16 px y 6 px de margen para el foco. Conserva las tarjetas compactas: 16 px de padding inferior y enlaces de al menos 44 px; todos los proyectos de la pista comparten altura para evitar saltos durante el avance. Verificado en navegador a 320, 390, 640, 641, 768, 1024, 1025 y 1440 px.

El navegador reportó `scrollWidth === viewport` a 320, 360, 390, 768 y 1440 px (el ancho de layout medido a 1440 fue 1425 px por el scrollbar del navegador); no hubo elementos desbordados.
