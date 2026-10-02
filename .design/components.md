# Componentes visuales

Estado: implementados y revisados en navegador el 2026-10-02. Tokens en `foundations/`.

Fuentes: `index.html:30-111,130-210,214-260,289-400`, `app.js:18-142`, `styles.css:128-202,330-450,915-984,1134-1299`; alcance aprobado en `.sdd/specs/portafolio-profesional/design.md:32-56`.

| Componente | Propósito y variantes | Estados y accesibilidad |
|---|---|---|
| Navegación | Anclas a CV, Proyectos y Contacto; navegación del mismo documento | Foco visible, objetivo claro; enlace para saltar al contenido |
| Titular de perfil | Nombre, rol técnico, propuesta de valor sobre agentes/skills y CTA | Orden semántico de headings; no usar texto dentro de imagen |
| Retrato | Presentación del propietario | `alt` descriptivo, proporción/encuadre estable; no colapsar si falta la imagen |
| Timeline laboral | Cargos y periodos cronológicos inversos | Empleador/cargo/fecha/contribuciones en texto; separación clara por entrada |
| Grupo de competencias | Organiza competencias con IA primero y áreas complementarias después | Texto y categorías explícitas, sin niveles inventados ni dependencia del color |
| Tarjeta de proyecto | Nombre, breve descripción, tecnologías, categoría y enlace a GitHub | Original/fork identificados; área enlazada con nombre discernible y foco visible |
| Buscador y filtros | Búsqueda textual y categoría principal | Label accesible, controles de al menos 44 px, teclado y `aria-pressed` en filtros |
| Resultados/estado vacío | Cuenta de resultados o guía para reiniciar | `aria-live="polite"`; mensaje accionable para quitar criterios |
| Contacto | Correo y perfil de GitHub | Etiqueta explícita, foco visible, externo indicado en texto accesible |
| Impresión | Presentación del CV para papel/PDF | Oculta navegación/filtros; evita cortes de entradas del CV |

Interacciones discretas de 150–250 ms para color/opacity, sin escalado o desplazamiento de tarjetas. Respetar `prefers-reduced-motion`.
