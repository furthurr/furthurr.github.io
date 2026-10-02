# Portafolio — Pedro Gómez Vásquez

Sitio profesional estático con CV, trayectoria y un catálogo buscable de los repositorios públicos de GitHub. Destaca el trabajo con agentes especializados, skills y herramientas de IA para desarrollo de software.

- **Sitio:** https://furthurr.github.io/
- **Perfil:** https://github.com/furthurr

## Desarrollo local

Requiere Node.js 20 o superior y Python 3 para servir los archivos en el navegador.

```bash
npm test
npm run build:pages
python3 -m http.server 8000
```

Abre <http://localhost:8000/>. `site-dist/` es la salida generada para Pages y no se versiona.

## Actualizar el CV

- Edita el contenido del CV, la experiencia, la formación y los enlaces en `index.html`.
- La foto del sitio es `pedro.png`, ubicada en la raíz.
- Conserva la diferencia entre responsabilidades laborales y proyectos personales.
- Ejecuta `npm test` antes de publicar.

## Actualizar proyectos

1. Revisa el repositorio público y su README desde GitHub.
2. Actualiza el arreglo `projects` de `projects.js`: nombre, descripción, categoría y tecnologías con evidencia.
3. Marca `isFork: true` para forks y `featured: true` solo para los proyectos que quieras destacar.
4. Mantén las categorías definidas en `projectCategories` y enlaces `https://github.com/furthurr/<repositorio>`.
5. Ejecuta `npm test` y prueba la búsqueda en el navegador.

El catálogo se guarda en el propio sitio: no se consulta la API de GitHub al visitar la página.

## Publicación

El workflow `.github/workflows/pages.yml` ejecuta pruebas, prepara una lista permitida de archivos estáticos y despliega el artefacto en GitHub Pages al actualizar `main`. Solo `index.html`, `styles.css`, `app.js`, `projects.js` y `pedro.png` se copian al sitio publicado; specs, documentación, pruebas y configuración permanecen fuera del artefacto web.

Para cambiar el conjunto público del sitio, edita `publishFiles` en `scripts/prepare-pages.js`.
