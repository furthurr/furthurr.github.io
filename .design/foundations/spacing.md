# Espaciado y dimensiones

Estado: implementada y revisada en navegador el 2026-10-02.

Fuentes: `styles.css:18-30,62-69,224-232,1003-1073,1115-1132`; dirección aprobada en `.sdd/specs/portafolio-profesional/design.md:48,52-54`.

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

- Contenedor de lectura: máximo aproximado de 72 rem, con gutters fluidos.
- En móvil, reducir los espacios de sección sin comprimir los blancos táctiles.
- Mantener mínimo de 8 px entre controles táctiles vecinos y 44 × 44 px de área interactiva.
- Breakpoints funcionales: una columna en móvil; encabezado de CV en dos columnas y catálogo de más columnas solo cuando quepa sin estrechar texto.

El navegador reportó `scrollWidth === viewport` a 320, 390, 768 y 1440 px (el ancho de layout medido a 1440 fue 1425 px por el scrollbar del navegador); no hubo elementos desbordados.
