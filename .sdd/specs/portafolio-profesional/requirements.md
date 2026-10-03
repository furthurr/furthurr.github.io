# Portafolio profesional de Pedro Gómez Vásquez

Modo SDD: standard
Fase: Requirements
Estado: aprobado
Gate 1: aprobado por el usuario el 2026-10-02
Fecha: 2026-10-02

## Objetivo

Crear y publicar un portafolio profesional en español en GitHub Pages. La entrada principal será el CV actualizado; un menú «Proyectos» permitirá explorar los repositorios públicos de la cuenta `furthurr`.

## Contexto comprobado

- La carpeta de trabajo contiene la fotografía `pedro.png` (retrato proporcionado por el usuario).
- El CV original está adjunto a la conversación como dos imágenes; su último empleo termina en julio de 2022.
- El usuario indica que trabaja actualmente para Banco Azteca desde la última fecha de ese CV.
- GitHub CLI está autenticado como `furthurr`.
- Se identificaron 24 repositorios públicos: 23 originales y 1 fork.
- `furthurr/furthurr.github.io` no existía al momento de la consulta inicial; el usuario aprobó esa cuenta y dirección, y el repositorio público se creó el 2026-10-02 con GitHub Pages habilitado.
- No existe código previo, steering local ni documentación canónica de arquitectura, UI o datos en esta carpeta. El diseño deberá capturar el contexto necesario para este sitio nuevo.

## Historia 1 — Consultar el CV

Como visitante, quiero conocer la trayectoria, formación y competencias de Pedro para evaluar su perfil profesional.

- **R1.1** CUANDO un visitante abra la página principal EL SISTEMA DEBERÁ mostrar el CV como contenido inicial.
- **R1.2** EL SISTEMA DEBERÁ mostrar el nombre «Pedro Gómez Vásquez», la fotografía proporcionada, una síntesis profesional, experiencia laboral, formación académica y competencias técnicas.
- **R1.3** EL SISTEMA DEBERÁ mostrar «Banco Azteca» como empleo actual con el periodo «Septiembre de 2022–actualidad».
- **R1.3a** EL SISTEMA DEBERÁ presentar como responsabilidades actuales el liderazgo técnico del desarrollo de aplicaciones móviles, el desarrollo de herramientas para el ciclo de desarrollo de software basadas en agentes de IA y la automatización de procesos mediante bots.
- **R1.3b** EL SISTEMA DEBERÁ expresar esas responsabilidades con lenguaje profesional, sin agregar plataformas, resultados o responsabilidades no confirmadas.
- **R1.4** EL SISTEMA DEBERÁ conservar los empleadores, periodos y estudios acreditados del CV original.
- **R1.5** EL SISTEMA DEBERÁ distinguir la experiencia laboral de los proyectos personales públicos al describir competencias.
- **R1.6** EL SISTEMA DEBERÁ respaldar las competencias añadidas con información observable en los repositorios públicos consultados.
- **R1.7** EL SISTEMA DEBERÁ utilizar únicamente cargos, responsabilidades y logros laborales proporcionados o confirmados por el usuario.
- **R1.8** CUANDO el visitante solicite imprimir o guardar el CV EL SISTEMA DEBERÁ ofrecer una presentación legible para impresión o guardado como PDF mediante el navegador.
- **R1.9** EL SISTEMA DEBERÁ dar prominencia visual y editorial a las herramientas de IA para desarrollo de software, los agentes especializados, las skills y la automatización como eje distintivo del perfil profesional.
- **R1.10** EL SISTEMA DEBERÁ presentar el desarrollo móvil y la trayectoria de ingeniería de software como experiencia profesional que complementa el eje de tooling con IA.

## Historia 2 — Explorar proyectos públicos

Como visitante, quiero consultar proyectos reales y acceder a su código para conocer ejemplos del trabajo de Pedro.

- **R2.1** CUANDO un visitante active «Proyectos» en el menú EL SISTEMA DEBERÁ llevarlo al catálogo de repositorios públicos.
- **R2.2** EL SISTEMA DEBERÁ incluir los 24 repositorios públicos identificados en la revisión inicial, con nombre, enlace a GitHub y descripción disponible o síntesis sustentada.
- **R2.3** EL SISTEMA DEBERÁ mostrar las tecnologías verificadas de cada proyecto cuando exista evidencia disponible.
- **R2.4** EL SISTEMA DEBERÁ identificar visualmente los forks para distinguirlos de los repositorios originales.
- **R2.5** CUANDO un visitante busque o filtre proyectos EL SISTEMA DEBERÁ mostrar únicamente los resultados correspondientes a su selección.
- **R2.6** SI no existen resultados para una búsqueda o filtro ENTONCES EL SISTEMA DEBERÁ mostrar un mensaje que explique cómo restablecer el catálogo.
- **R2.7** EL SISTEMA DEBERÁ destacar primero los proyectos públicos de herramientas de IA, agentes y skills, comenzando por `ai-agents-kit`, antes de presentar otras áreas de desarrollo.
- **R2.8** EL SISTEMA DEBERÁ ofrecer enlaces a demostraciones únicamente cuando se hayan comprobado como parte de la preparación del contenido.
- **R2.9** SI no existe una descripción o evidencia suficiente de un repositorio ENTONCES EL SISTEMA DEBERÁ usar un texto neutral sin atribuirle capacidades no comprobadas.

## Historia 3 — Contactar y navegar

Como visitante, quiero acceder al contacto profesional y navegar desde computadora o teléfono.

- **R3.1** EL SISTEMA DEBERÁ proporcionar navegación hacia el CV, proyectos y contacto.
- **R3.2** EL SISTEMA DEBERÁ ofrecer enlaces a `mailto:pedrogvas@gmail.com` y `https://github.com/furthurr`.
- **R3.3** EL SISTEMA DEBERÁ mostrar el contenido y los controles sin desbordamiento horizontal en anchos de pantalla de 360 px, 768 px y 1440 px.
- **R3.4** EL SISTEMA DEBERÁ permitir operar la navegación, búsqueda, filtros y acciones mediante teclado con foco visible.
- **R3.5** EL SISTEMA DEBERÁ proporcionar texto alternativo para la fotografía y nombres accesibles para sus controles.
- **R3.6** MIENTRAS el visitante tenga activada la preferencia de movimiento reducido EL SISTEMA DEBERÁ limitar las animaciones no esenciales.

## Historia 4 — Publicar y mantener el portafolio

Como propietario, quiero publicar el sitio con GitHub Pages y poder actualizar sus contenidos desde el repositorio.

- **R4.1** EL SISTEMA DEBERÁ publicarse desde el repositorio público `furthurr/furthurr.github.io` mediante GitHub Pages y quedar disponible en `https://furthurr.github.io/`.
- **R4.2** EL SISTEMA DEBERÁ servir el CV y el catálogo de proyectos sin requerir que el visitante inicie sesión.
- **R4.3** EL SISTEMA DEBERÁ mantener disponible el contenido publicado aunque GitHub no esté disponible para una consulta de datos en tiempo real.
- **R4.4** EL SISTEMA DEBERÁ proporcionar instrucciones para desarrollo local, modificación del CV, actualización del catálogo y despliegue.
- **R4.5** EL SISTEMA DEBERÁ incluir metadatos de título, descripción y vista previa social coherentes con el perfil.
- **R4.6** EL SISTEMA DEBERÁ mantener las credenciales de publicación fuera del contenido servido al navegador.

## Contenido base del CV

### Encabezado propuesto

Pedro Gómez Vásquez — Agentes de IA, skills y automatización para el desarrollo de software.

La síntesis deberá priorizar el diseño y desarrollo de herramientas para software engineering con agentes de IA, skills especializadas y automatizaciones; mencionar en segundo plano la experiencia en liderazgo técnico, desarrollo Android/iOS desde 2011 y desarrollo web; y diferenciar con claridad las responsabilidades profesionales confirmadas de los proyectos públicos personales. Las habilidades no tendrán porcentajes ni niveles de dominio inventados.

### Experiencia laboral

| Empleador | Cargo según fuente | Periodo | Información disponible |
| --- | --- | --- | --- |
| Banco Azteca | Líder técnico | Septiembre de 2022–actualidad | Desarrollo de aplicaciones móviles; herramientas de desarrollo de software basadas en agentes de IA; automatización de procesos mediante bots. Responsabilidades y fecha proporcionadas por el usuario el 2026-10-02. |
| Figx, CDMX | Project leader | Enero de 2017–julio de 2022 | Planeación y administración de proyectos; backend web; apps Android/iOS. |
| Shic, CDMX | Programador | Enero de 2016–enero de 2017 | Desarrollo de apps Android/iOS. |
| Proximate, CDMX | Programador | Enero de 2014–enero de 2016 | Desarrollo de apps Android/iOS. |
| Philip Morris, CDMX | Programador | Enero de 2013–enero de 2014 | Desarrollo de apps Android/iOS. |
| CIDETEQ, CDMX | Programador | Enero de 2011–enero de 2013 | Aplicaciones web; documentación, administración y planeación de proyectos. |
| Universidad José Vasconcelos, Oaxaca | Jefe de Departamento de Sistemas | Enero de 2006–enero de 2011 | Docencia tecnológica, aplicaciones web, hardware, redes y seguridad informática. |

### Formación académica

- Maestría en Ciencias Informáticas, Instituto de Electrónica y Computación Dehesa, 2009–2011. Titulado.
- Ingeniería en Sistemas Computacionales, Instituto Tecnológico del Istmo, 2003–2008. Titulado.

### Eje principal: IA aplicada al desarrollo de software

- Diseño y desarrollo de agentes especializados y skills reutilizables para asistentes de IA, documentados en `ai-agents-kit`.
- Tooling para estandarizar flujos de trabajo de desarrollo y coordinación multiagente, respaldado por artefactos del repositorio `ai-agents-kit`.
- Automatización de tareas y procesos mediante bots y herramientas, con proyectos verificables de Python y Telegram.
- Elaboración de guías técnicas de prompting y documentación para asistentes de IA.

El sitio deberá situar este eje en el titular principal, la síntesis y los primeros proyectos destacados. Presentará su relevancia como enfoque profesional elegido por Pedro, sin afirmaciones estadísticas o de popularidad del mercado.

### Competencias complementarias comprobadas en GitHub

- Python y automatización de informes (`agente-tendencias`) y bots Telegram (`BotMundial`, `BotDownloadVideoTelegram`).
- JavaScript, TypeScript, React, Vite y Supabase (`dashboardFurthurr`, manifiesto consultado).
- Aplicaciones de escritorio con Electron (`mensajeriaFur`).
- PWA y APIs web de grabación y almacenamiento local (`FurCapture`).
- Procesamiento de imágenes en el navegador y Canvas (`PixelDiet`).
- Node.js, Express y SQLite en un MVP Kanban (`CardFlow`).
- Dart/Flutter y Titanium/Appcelerator en proyectos y documentación (`stripebasic`, `flutter-Tahoe`, `navController`).
- Extensiones Chrome Manifest V3 (`speed-controller`, `meta-videos`).

## Supuestos y decisiones pendientes

1. El usuario aprobó publicar en la cuenta pública `furthurr`; el destino final es `https://furthurr.github.io/` mediante el repositorio de usuario `furthurr/furthurr.github.io`.
2. La sesión GitHub CLI disponible está autenticada como `furthurr`, con permisos `repo` y `workflow`. La consulta inicial del repositorio de sitio devolvió HTTP 404; posteriormente se creó y se habilitó Pages.
3. La fecha de ingreso a Banco Azteca será septiembre de 2022 y el cargo/responsabilidades serán los indicados explícitamente por el usuario.
4. Se utilizará `pedrogvas@gmail.com` como correo profesional, ya que aparece tanto en el CV como en un README público del usuario.
5. El CV público mostrará ciudad/país y contacto profesional. Se omitirán fecha de nacimiento, estado civil, domicilio detallado y teléfono desactualizado.
6. Blog y YouTube podrán figurar como enlaces complementarios tras verificar sus destinos; no bloquearán la publicación.
7. Los READMEs consultados son evidencia descriptiva, no una validación funcional de los demás proyectos. No se afirmarán métricas de impacto, certificaciones ni resultados empresariales que no estén documentados.
8. La prioridad del portafolio es posicionar la especialidad en tooling, agentes y skills de IA, a partir de la experiencia laboral descrita por el usuario y evidencia pública de sus proyectos; no se presentarán afirmaciones generales sobre popularidad como datos objetivos.

## Fuentes

Ver `sources.md` en esta misma carpeta. La exploración remota se realizó mediante GitHub CLI en modo de lectura.

## Aprobación

Gate 1 aprobado el 2026-10-02. El usuario confirmó `furthurr` y aprobó usar `https://furthurr.github.io/`. Gate 2 se gestiona en `design.md`.
