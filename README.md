# Portafolio — Pedro Gómez Vásquez

Sitio profesional estático con CV, trayectoria y una selección de proyectos públicos destacados. El perfil de GitHub enlaza al resto de los repositorios. Destaca el trabajo con agentes especializados, skills y herramientas de IA para desarrollo de software. La identidad visual toma como referencia [RSNL Creative](https://rsnlcreative.com/): contraste negro/blanco, titulares Plus Jakarta Sans y detalles rojo–ámbar.

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

## Actualizar proyectos destacados

1. Actualiza las tarjetas dentro de `#public-projects-grid` en `index.html`; su orden define el recorrido del carrusel.
2. Comprueba que cada descripción y enlace corresponda al repositorio público.
3. Ejecuta `npm test` y `npm run build:pages` antes de publicar.

El carrusel público contiene 12 proyectos y conserva el diseño de las tarjetas. Comparte con el carrusel privado `initializeProjectCarousel` en `app.js`: 3 tarjetas visibles en escritorio, 2 hasta 1024 px y 1 hasta 640 px; bucle continuo, avance cada 3 segundos, flechas, pausa y deslizamiento táctil. El avance se pausa al pasar el cursor o enfocar contenido y respeta `prefers-reduced-motion`. Sin JavaScript, todos los proyectos siguen disponibles en una cuadrícula. Los repositorios y la evidencia del contenido se recogen en `.design/references/public-projects.md`.

Los enlaces externos del sitio usan `target="_blank"` y `rel="noopener noreferrer"` para abrirse en una nueva pestaña; esta convención también se aplica a títulos de proyectos, perfiles, mensajería y enlaces del fallback sin JavaScript.

## Galerías visuales

- «Proyectos privados» contiene los 12 tableros seleccionados y usa un carrusel horizontal inspirado en RSNL Creative: 3 proyectos visibles en escritorio, 2 en tablet y 1 en móvil, con avance cada 3 segundos, flechas y pausa.
- Pulsa una portada para abrir todas las imágenes del proyecto en el visor; admite flechas de teclado y cierre con Escape. En móvil puedes deslizar el carrusel.
- Los archivos de imagen se organizan en `assets/portfolio/<proyecto>/`.
- Los tableros, su orden y sus imágenes se describen en `portfolio-work.js`. Fuentes y selección en `.design/references/private-projects.md`.
- El quinto argumento de `pinterestBoard` permite ajustar la portada: `imageIndices` para seleccionar imágenes (índices desde cero), `position`, `zoom` y `mode: "cover"`. El índice principal del cuarto argumento debe coincidir con la primera imagen seleccionada.
- `npm run build:pages` copia las galerías a `site-dist/assets/portfolio/` para su publicación.
- `npm test` comprueba el orden de los 12 tableros, sus enlaces y la disponibilidad de las 70 imágenes locales de la selección.

## Contacto

- El correo y los iconos SVG de GitHub, WhatsApp y Telegram se configuran en `index.html`, dentro de `.contact-links`.
- En móvil, los enlaces HTTPS de WhatsApp y Telegram permiten que el sistema abra la aplicación instalada o la página oficial en el navegador. En escritorio, `initializeContactLinks` en `app.js` usa los destinos `data-web-href` para WhatsApp Web y Telegram Web.
- Sin JavaScript, los enlaces HTTPS oficiales siguen disponibles.
- Los iconos heredan el color del tema mediante `currentColor`. Sus fuentes y licencias se recogen en `THIRD_PARTY_NOTICES.md`.

## Publicación

El workflow `.github/workflows/pages.yml` ejecuta pruebas, prepara una lista permitida de archivos estáticos y despliega el artefacto en GitHub Pages al actualizar `main`. Se copian `index.html`, `styles.css`, `app.js`, `portfolio-work.js`, `pedro.png`, `favicon.svg`, `THIRD_PARTY_NOTICES.md`, las fuentes WOFF2 con su licencia y las imágenes desde `assets/portfolio/`. Specs, documentación interna, pruebas y configuración permanecen fuera del artefacto web.

Para cambiar el conjunto público del sitio, edita `publishFiles` y las rutas de assets en `scripts/prepare-pages.js`.

## Autor

<a href="https://furthurr.github.io/" target="_blank" rel="noopener noreferrer">Pedro G. V. @furthurr</a>

- **GitHub:** https://github.com/furthurr
- **Email:** pedrogvas@gmail.com

## Licencia

MIT
