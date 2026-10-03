# Iconografía y assets

Estado: implementada y revisada en navegador el 2026-10-02.

Fuentes: `index.html:67-79,106-110,329-338`; `.sdd/specs/portafolio-profesional/design.md:53-56`.

- Usar SVG de trazo sencillo para búsqueda y flecha de navegación; los enlaces mantienen además una etiqueta textual discernible.
- No usar emojis como sustituto de iconos ni cargar una librería/icon font remota.
- Si el icono acompaña una etiqueta visible, marcarlo decorativo (`aria-hidden="true"`); el nombre accesible vive en el enlace/botón.
- Los iconos no se presentan como control aislado menor de 44 × 44 px.
- Fotografía de perfil: reutilizar el archivo original `pedro.png` de la raíz; ajustar encuadre con CSS, conservar proporción y añadir texto alternativo descriptivo (`index.html:67-79`).
- Favicon SVG local con monograma PG y los colores principales del sistema (`favicon.svg`, `index.html` en el `<head>`).
- No usar capturas o demos de repositorios si no están confirmadas disponibles y apropiadas.

## Logotipos de contacto

- GitHub, WhatsApp y Telegram usan SVG inline en `index.html:494-512`, con `fill="currentColor"`, `aria-hidden="true"` y `focusable="false"`. El nombre accesible y el tooltip viven en cada enlace.
- Los controles miden 48 × 48 px y los logotipos 24 × 24 px; heredan `--color-contact-text` y cambian a `--color-contact-accent` al pasar el cursor o recibir foco (`styles.css:1106-1135`).
- GitHub procede de [Octicons, `mark-github-16`](https://github.com/primer/octicons/blob/main/icons/mark-github-16.svg), bajo MIT. WhatsApp y Telegram usan los trazados monocromos de [Simple Icons](https://github.com/simple-icons/simple-icons), bajo CC0. Créditos completos en [`THIRD_PARTY_NOTICES.md`](../../THIRD_PARTY_NOTICES.md), incluido en la publicación.
- En impresión se añaden los nombres junto al logotipo mediante `title` (`styles.css:1868-1883`).
- Chrome/Playwright: destinos, `currentColor` en ambos temas, foco visible y ausencia de desbordamientos verificados a 320, 390, 768 y 1440 px; comprobado también el fallback sin JavaScript y las etiquetas impresas.
