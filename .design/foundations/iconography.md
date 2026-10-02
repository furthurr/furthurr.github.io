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
