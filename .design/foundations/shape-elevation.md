# Formas, bordes y elevación

Estado: implementada y revisada en navegador el 2026-10-02.

Fuentes: `styles.css:27-30,288-302,334-366,560-565,718-720`; dirección aprobada en `.sdd/specs/portafolio-profesional/design.md:47-56`.

| Elemento | Token propuesto | Uso |
|---|---|---|
| Control | `--radius-control: 0.5rem` | Botones, entrada de búsqueda, chips |
| Tarjeta/superficie | `--radius-card: 0.75rem` | Tarjetas y retrato enmarcado |
| Borde | 1 px sólido `--color-border` | Separadores, tarjetas y controles |
| Elevación | sombra muy tenue y opcional | Separar una superficie sobre el fondo sin efecto flotante fuerte |

Priorizar jerarquía por tipografía, espacio y bordes antes que sombras. Hover/focus no cambian dimensiones; el foco se representa con un anillo visible (`styles.css:93-101`).
