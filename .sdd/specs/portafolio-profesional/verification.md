# Verificación — Portafolio profesional

Modo SDD: standard

Fase: Verification

Estado: completado

Gate 1: aprobado

Gate 2: aprobado

Gate 3: aprobado

Gate 4: aprobado por el usuario el 2026-10-02

Fecha: 2026-10-02

## Ciclo de pruebas

- **Estrategia:** TDD focalizado para búsqueda y filtros locales.
- **RED observado:** la primera corrida de `npm test` falló en los cuatro casos del filtro mientras `filterProjects` devolvía `[]`; los fallos compararon resultados vacíos contra proyectos esperados.
- **GREEN y suite final:** `npm test` — 5 tests aprobados, 0 fallidos.
- **Sintaxis/build:** `node --check app.js`, `node --check projects.js`, `node --check scripts/prepare-pages.js` y `npm run build:pages` pasaron. El artefacto resultante contiene únicamente seis recursos estáticos permitidos.
- **Workflow:** `.github/workflows/pages.yml` validado como YAML; permisos de Pages `read` en `build` y `write` en `deploy`. El workflow de Actions terminó con `success` para el commit `f37da1d7acc78cddb3b61492e31726e70d0edefd`: [run 37072797540](https://github.com/furthurr/furthurr.github.io/actions/runs/37072797540).
- **Excepciones:** no se usó un validador WCAG automatizado; se hizo revisión de semántica, controles y contraste focalizada, sin afirmar auditoría integral.

## Comprobación en GitHub Pages

El repositorio `furthurr/furthurr.github.io` es público y Pages usa `build_type: workflow`.

| Recurso | Respuesta observada | Evidencia |
|---|---|---|
| `/` | HTTP 200, `text/html` | Incluye CV, Banco Azteca, foco en agentes/skills y metadata social. |
| `/styles.css` | HTTP 200, `text/css` | Recurso del mismo origen. |
| `/app.js` | HTTP 200, `application/javascript` | Módulo del mismo origen. |
| `/projects.js` | HTTP 200, `application/javascript` | Catálogo con 24 registros. |
| `/pedro.png` | HTTP 200, `image/png` | Fotografía suministrada, carga en Chrome. |
| `/favicon.svg` | HTTP 200, `image/svg+xml` | Icono del sitio cargado, sin error 404. |

Chrome contra la URL pública cargó los 24 proyectos, mostró el mensaje `24 proyectos encontrados`, cargó la fotografía y el favicon; la captura de red de esa visita no registró respuestas HTTP de error.

## Verificación de requisitos

| Requisitos | Tareas | Evidencia | Estado |
|---|---|---|---|
| R1.1–R1.7, R1.9–R1.10 | 2.1, 3.3 | `index.html`; encabezado público muestra nombre, foto, especialidad en IA, Banco Azteca septiembre de 2022–actualidad, responsabilidades confirmadas, experiencia previa, formación y habilidades diferenciadas de los repositorios. | ✅ |
| R1.8 | 2.2, 3.3 | `Page.printToPDF` de Chrome produjo documento PDF válido (`%PDF-`, 1,578,323 bytes); `styles.css:1145-1299` da formato de CV para impresión. | ✅ |
| R2.1–R2.4, R2.7–R2.9 | 1.2, 2.1, 2.3, 3.3 | `projects.js` contiene 24 repositorios con URL HTTPS, datos sustentados y `Ti.MapPlus` marcado como fork; destacados `ai-agents-kit`, `Best-Practices-LLM` y `songcraftFurthurr`; textos neutrales donde faltó documentación. | ✅ |
| R2.5–R2.6 | 1.1, 2.3, 3.3 | `tests/projects.test.js` cubre texto, tecnologías, categorías, búsqueda combinada y resultados vacíos; Chrome live comprobó Flutter (3 resultados), skills en IA (2), estado vacío y limpieza (24). | ✅ |
| R3.1–R3.2, R3.5 | 2.1, 3.3 | `index.html` contiene anclas CV/Proyectos/Contacto; Chrome reportó un `h1`, cero imágenes sin `alt`, cero entradas sin label, cero botones sin nombre accesible y cero anclas internas rotas. Correo, GitHub, blog y YouTube están presentes. | ✅ |
| R3.3 | 2.2, 3.3 | Chrome DevTools a 320, 360, 390, 768 y 1440 px solicitados reportó `scrollWidth` igual al ancho del viewport CSS; a 1440, `clientWidth` medido fue 1425 por scrollbar y no hubo overflow. | ✅ |
| R3.4, R3.6 | 2.2–2.3, 3.3 | Primer Tab enfoca «Saltar al contenido»; reset devuelve foco al buscador; el estado se publica con `aria-live`; con `prefers-reduced-motion: reduce`, las transiciones se reducen a `0.00001s`. | ✅ |
| R4.1–R4.3, R4.6 | 2.3, 3.2–3.4 | Repo público `furthurr/furthurr.github.io`; Pages está habilitado; Actions publicó `f37da1d`; la URL y los seis recursos permitidos devolvieron HTTP 200. No hay consulta a API de GitHub ni credenciales en los recursos servidos. | ✅ |
| R4.4 | 3.1 | `README.md` documenta ejecución local, pruebas, mantenimiento del CV y catálogo, y publicación. | ✅ |
| R4.5 | 2.1 | `index.html` incluye título, descripción, Open Graph, imagen social, canonical y locale en español. | ✅ |

## Self-check de RNF

| RNF | Evidencia | Estado |
|---|---|---|
| RNF-1 Rendimiento/autonomía | `scripts/prepare-pages.js` copia los seis recursos locales; Chrome cargó módulos y datos sin API/CDN ni errores de red. | ✅ |
| RNF-2 Responsividad | Mediciones CDP con `scrollWidth === clientWidth` en viewports de 320, 360, 390, 768 y 1440 px solicitados. | ✅ |
| RNF-3 Accesibilidad | Revisión de landmarks, `h1`, labels, alt, anclas y botones; operación por Tab; prueba de `prefers-reduced-motion`; targets de 44 px en CSS. | ✅ |
| RNF-4 Privacidad | Sin analítica, `fetch`, ni envío de consultas; módulos/datos en mismo origen; revisión de recursos públicos. | ✅ |
| RNF-5 Impresión | PDF generado desde Chrome y estilos de impresión ocultan navegación, filtros y catálogo, conservando contacto/CV. | ✅ |

## Estado de publicación y visibilidad del repositorio

El sitio está público en `https://furthurr.github.io/`. El código fuente permanece en un repositorio público por requerimiento R4.1. GitHub Pages puede servir una web pública desde un repo privado si el plan permite Pages en repos privados; el plan de la cuenta no se pudo obtener mediante GitHub CLI y durante esta verificación no se cambió la visibilidad.

## Gate 4

Aprobado por el usuario el 2026-10-02; spec cerrada.
