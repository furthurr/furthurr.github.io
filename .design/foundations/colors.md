# Colores

Estado: implementados y validados en navegador el 2026-10-02.

Fuentes: `styles.css:1-48`, `styles.css:915-984`; definición aprobada en `.sdd/specs/portafolio-profesional/design.md:45-50`.

## Claro

| Token CSS | Valor | Uso |
|---|---|---|
| `--color-bg` | `#F8FAFC` | Fondo principal |
| `--color-surface` | `#FFFFFF` | Tarjetas y superficies |
| `--color-text` | `#0F172A` | Texto primario y titulares |
| `--color-text-muted` | `#334155` | Texto secundario |
| `--color-accent` | `#0369A1` | Enlaces, CTA y estados activos |
| `--color-accent-soft` | `#E0F2FE` | Fondo suave de etiquetas destacadas |
| `--color-border` | `#E2E8F0` | Bordes y divisores |

## Oscuro

| Token CSS | Valor | Uso |
|---|---|---|
| `--color-bg` | `#020617` | Fondo principal |
| `--color-surface` | `#0F172A` | Tarjetas y superficies |
| `--color-text` | `#F8FAFC` | Texto primario y titulares |
| `--color-text-muted` | `#CBD5E1` | Texto secundario |
| `--color-accent` | `#38BDF8` | Enlaces, CTA y estados activos |
| `--color-accent-soft` | `#082F49` | Fondo suave de etiquetas destacadas |
| `--color-border` | `#334155` | Bordes y divisores |

El panel de contacto conserva una superficie de tinta en ambos temas (`--color-contact-bg: #0F172A`) con texto `#F8FAFC`, texto secundario `#CBD5E1` y enlaces `#7DD3FC` (`styles.css:12-15,915-984`).

El tema se selecciona con `prefers-color-scheme`, sin control separado (`styles.css:36-48`). Contrastes medidos en los principales pares de texto/acción: tema claro 5.42:1 o mayor; oscuro 5.25:1 o mayor en hover del CTA; enlaces del panel de contacto 10.71:1. No usar el color como único indicador de categoría o estado.
