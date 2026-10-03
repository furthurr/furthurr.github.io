# Colores

Fuente: `styles.css:28-87` y bloque de adaptación `@media screen`; referencia en `../references/rsnl-creative.md`.
Actualización: 2026-10-02.

| Token | Claro | Oscuro | Uso |
|---|---|---|---|
| `--color-bg` | `#FFFFFF` | `#111111` | Lectura, trayectoria y formación |
| `--color-surface` | `#FFFFFF` | `#181818` | Tarjetas |
| `--color-text` | `#111111` | `#FFFFFF` | Texto primario |
| `--color-text-muted` | `#525252` | `#C7C7C7` | Texto secundario |
| `--color-accent` | `#BA261A` | `#EDAD3C` | Enlaces y estados |
| `--color-accent-soft` | `#FFF1E5` | `#302218` | Paneles y badges |
| `--color-border` | `#DEDEDE` | `#3B3B3B` | Bordes |
| `--color-tint` | `#F5F4F2` | `#151515` | Fondo de habilidades |
| `--color-action-bg` | `#111111` | `#FFFFFF` | Acción primaria |
| `--color-action-text` | `#FFFFFF` | `#111111` | Texto del botón |

Con JS, el tema se aplica globalmente mediante `body[data-scroll-theme]`: fondo negro `#000000`, superficies `#141414` y bordes `#383838` en oscuro; fondo y superficies blancas en claro. Las secciones tienen fondos transparentes y heredan los tokens globales. La transición de fondo, texto y bordes dura 1 s. Fuente: bloque de tema global de pantalla en `styles.css`, `initializeScrollTheme` en `app.js:19-61`.

Sin JS, la cabecera, presentación y catálogo conservan fondo negro, superficies `#141414`, texto blanco, secundarios `#C7C7C7` y enlaces ámbar; las secciones de lectura siguen el tema del sistema de la tabla anterior.

Colores extraídos de RSNL: rojo `--color-brand-red: #EE3A2A` y ámbar `--color-brand-amber: #EDAD3C`. Gradiente de interacción a 45 grados. El rojo de marca es decorativo; sobre fondo blanco se usa rojo oscuro `#BA261A` para el texto (contraste aproximado 6.2:1). El ámbar sobre negro tiene contraste aproximado 10.6:1. Foco visible de 3 px.

Con JS, contacto y footer siguen el tema global. Sin JS, contacto sigue el tema de lectura y footer permanece negro. Impresión con fondo blanco y tinta oscura.

Superficies específicas del carrusel/visor (`styles.css:779-825,890-975`): fondo de previsualización `#F3F4F6`; indicador de ampliación negro al 75 % con texto blanco; visor `#101010`, texto blanco, borde `#383838`, controles con borde `#454545` y contador `#C7C7C7`. Backdrop negro al 85 %. El visor conserva este fondo oscuro para presentar las capturas con contraste estable.
