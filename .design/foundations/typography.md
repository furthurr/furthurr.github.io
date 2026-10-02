# Tipografía

Estado: implementada y revisada en navegador el 2026-10-02.

Fuentes: `styles.css:16-17,62-69,236-268,364-379`; dirección aprobada en `.sdd/specs/portafolio-profesional/design.md:45-56`.

| Rol | Familia | Guía |
|---|---|---|
| Titulares y texto de lectura | Sans-serif del sistema (`system-ui`, `-apple-system`, `Segoe UI`, sans-serif) | Jerarquía clara; evitar depender de una fuente descargada |
| Texto de interfaz | Mismo stack sans-serif | Navegación, botones, búsqueda, descripción y CV |
| Tecnología/metadata | Monospace del sistema (`ui-monospace`, `SFMono-Regular`, monospace) | Etiquetas breves de tecnologías, categorías y fechas |

Base de texto: 1 rem y `line-height: 1.7`; titulares escalables con `clamp()`; etiquetas de tecnología en monospace. No se descargan fuentes externas.
