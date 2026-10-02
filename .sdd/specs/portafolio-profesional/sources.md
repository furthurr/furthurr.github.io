# Fuentes del CV y catálogo de proyectos

Fecha de consulta: 2026-10-02.

## Fuentes primarias

- Dos imágenes del CV adjuntas por el usuario en la conversación.
- Instrucción explícita del usuario: empleo actual en Banco Azteca desde la última fecha del CV.
- Corrección explícita del usuario (2026-10-02): Banco Azteca desde septiembre de 2022; cargo de líder técnico con responsabilidades en aplicaciones móviles, herramientas con agentes de IA y automatización mediante bots.
- Preferencia inicial del usuario (2026-10-02): dar enfoque especial a herramientas de IA, agentes especializados y skills, con destino propuesto `https://pedrogomezvasquez.github.io/`; después eligió su cuenta `furthurr` y el destino que corresponde a ella.
- Aprobación explícita del usuario (2026-10-02): usar la cuenta `furthurr` y publicar en `https://furthurr.github.io/`; también autorizó documentar el sistema visual compacto completo en `.design/`.
- Enlaces complementarios del CV verificados con consulta web el 2026-10-02: `https://ti-sl.blogspot.mx/` muestra el blog Ti-SL; `https://www.youtube.com/user/myfurthur/videos` muestra el canal público de Pedro Gomez Vasquez.
- Retrato local `pedro.png`.
- Perfil público `https://github.com/furthurr` y lista de repositorios públicos, obtenidos mediante `gh api user` y `gh repo list furthurr --visibility public --limit 200`.
- READMEs obtenidos con `gh api graphql` y objetos `HEAD:README.md`.
- `dashboardFurthurr/package.json`, consultado mediante GraphQL para comprobar React, TypeScript, Vite y Supabase frente a un README de plantilla.

## Repositorios públicos consultados

| Repositorio | Evidencia consultada | Síntesis utilizable |
| --- | --- | --- |
| [agente-tendencias](https://github.com/furthurr/agente-tendencias) | Descripción, lenguaje Python y README | Informes de oportunidades de contenido de YouTube para México/español, fuentes públicas y auditoría de datos. |
| [ai-agents-kit](https://github.com/furthurr/ai-agents-kit) | Descripción, lenguajes, README y árbol raíz | Sistema multiagente con skills canónicas, especialistas y adaptadores para asistentes de IA. |
| [Best-Practices-LLM](https://github.com/furthurr/Best-Practices-LLM) | Descripción y README | Guía práctica y técnica de prompting. Proyecto documental. |
| [FurCapture](https://github.com/furthurr/FurCapture) | Descripción, lenguajes y README | Grabación local de pantalla y micrófono, webcam PiP, PWA e historial en IndexedDB. |
| [mensajeriaFur](https://github.com/furthurr/mensajeriaFur) | Lenguajes y README | Aplicación Electron para centralizar mensajería, con releases para macOS, Linux y Windows. |
| [songcraftFurthurr](https://github.com/furthurr/songcraftFurthurr) | Descripción y README | Documentación y skills para composición de letras asistida y preparación de prompts para Suno. |
| [fixJson](https://github.com/furthurr/fixJson) | Descripción, lenguajes y README | Reparación y formateo de JSON en el navegador con resaltado y utilidades de edición. |
| [speed-controller](https://github.com/furthurr/speed-controller) | Descripción, lenguajes y README | Extensión Chrome Manifest V3 para ajustar la velocidad de audio y video HTML5. |
| [meta-videos](https://github.com/furthurr/meta-videos) | Descripción, lenguajes y README | Extensión Chrome Manifest V3 para automatización de generación y descarga de videos en meta.ai. |
| [BotMundial](https://github.com/furthurr/BotMundial) | Descripción, lenguaje Python y README | Bot Telegram con datos de ESPN, almacenamiento SQLite y pronósticos mediante un modelo Elo local. |
| [dashboardFurthurr](https://github.com/furthurr/dashboardFurthurr) | Descripción, lenguajes, README, package.json y árbol raíz | Tablero Kanban React/TypeScript/Vite con Supabase; el README es una plantilla genérica. |
| [PixelDiet](https://github.com/furthurr/PixelDiet) | Lenguajes y README | Compresión y conversión local de imágenes con JavaScript, Canvas y upng-js. |
| [CardFlow](https://github.com/furthurr/CardFlow) | Lenguajes y README | MVP Kanban con frontend vanilla, Node.js/Express, sesiones y SQLite. |
| [BotDownloadVideoTelegram](https://github.com/furthurr/BotDownloadVideoTelegram) | Descripción, lenguaje Python y README | Bot Telegram para descarga y recorte de video/audio con yt-dlp, ffmpeg y SQLite. |
| [flutter-Tahoe](https://github.com/furthurr/flutter-Tahoe) | README | Guía de configuración de Flutter en macOS Apple Silicon. Proyecto documental, no una app publicada. |
| [pokeon](https://github.com/furthurr/pokeon) | Descripción y README mínimo | Repositorio descrito como prueba de app Flutter; no se comprobó una implementación. |
| [stripebasic](https://github.com/furthurr/stripebasic) | Descripción, lenguaje Dart y README | Ejemplo histórico de integración de tokenización y cargos Stripe con Flutter. No se presenta como patrón recomendado de pagos actual. |
| [ffbeHacks](https://github.com/furthurr/ffbeHacks) | Descripción, lenguaje Lua y README | Scripts Lua para GameGuardian y Final Fantasy Exvius. |
| [varios](https://github.com/furthurr/varios) | Descripción, lenguajes y README mínimo | Colección de proyectos sin documentación suficiente para atribuir funciones concretas. |
| [navController](https://github.com/furthurr/navController) | Descripción, lenguaje JavaScript y README | Librería de manejo de ventanas Android/iOS con Titanium/Alloy. |
| [Ti.MapPlus](https://github.com/furthurr/Ti.MapPlus) | Flag isFork, descripción, lenguajes y README | Fork de módulo de mapas Titanium; no atribuir el módulo original al usuario. |
| [fixRes](https://github.com/furthurr/fixRes) | Descripción y lenguajes; sin README.md | Utilidad descrita como ajuste de resolución para Appcelerator. |
| [labelHtml](https://github.com/furthurr/labelHtml) | Descripción y lenguajes; sin README.md | Ejemplo descrito como uso de etiquetas con HTML en Appcelerator. |
| [Titanium-database](https://github.com/furthurr/Titanium-database) | Metadatos; sin README.md ni rama predeterminada | Repositorio sin descripción ni código detectable en los metadatos consultados. |

## Límites de atribución

- La presencia de código o dependencias en un repositorio no determina el nivel de dominio de una tecnología.
- Los proyectos personales no prueban responsabilidades o resultados en Banco Azteca.
- Los lenguajes residuales de scripts o herramientas de build no se convertirán automáticamente en competencias destacadas.
- Las fechas y cargos del CV original se conservarán; la única extensión temporal autorizada hasta ahora es Banco Azteca.
- Las estrellas, forks y fechas de actividad son metadatos variables, no indicadores de impacto laboral.

## Destino de publicación

La primera consulta del destino alternativo `repos/furthurr/furthurr.github.io` devolvió HTTP 404: el repositorio aún no existe y será creado al publicar. No se creó ni modificó ningún repositorio remoto durante esta fase.
