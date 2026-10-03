# Selección de proyectos privados

Fecha: 2026-10-02. Selección y orden indicados por el usuario. Fuente de verdad: `portfolio-work.js:19-126`; imágenes servidas localmente desde `assets/portfolio/`.

| Orden | Proyecto y tablero fuente | Imágenes en el visor |
|---|---|---:|
| 1 | [Genera Banco Azteca](https://mx.pinterest.com/myfurthur/genera-banco-azteca/) | 11 |
| 2 | [Nissan](https://mx.pinterest.com/myfurthur/nissan/) | 1 |
| 3 | [Juan Valdez](https://mx.pinterest.com/myfurthur/juan-valdez/) | 1 |
| 4 | [DragonTeam](https://mx.pinterest.com/myfurthur/dragonteam/) | 10 |
| 5 | [EntradaGroup](https://mx.pinterest.com/myfurthur/entradagroup/) | 12 |
| 6 | [Clapp](https://mx.pinterest.com/myfurthur/clapp/) | 6 |
| 7 | [Alianza](https://mx.pinterest.com/myfurthur/alianza/) | 7 |
| 8 | [Hava](https://mx.pinterest.com/myfurthur/hava/) | 5 |
| 9 | [Espectro](https://mx.pinterest.com/myfurthur/espectro/) | 7 |
| 10 | [Nuevos Comienzos](https://mx.pinterest.com/myfurthur/nuevoscomienzos/) | 4 |
| 11 | [Tibea](https://mx.pinterest.com/myfurthur/tibea/) | 5 |
| 12 | [PokemonTest](https://mx.pinterest.com/myfurthur/pokemontest/) | 10 |

Total: 12 proyectos y 79 imágenes. `tests/portfolio-work.test.js` valida la selección exacta, su orden, URLs, portadas, rutas únicas, dimensiones positivas y existencia de los archivos.

## Nuevas imágenes incorporadas

Los tres tableros se consultaron públicamente y las imágenes se extrajeron de los datos JSON de la página de Pinterest. Los recuentos publicados son 1 para Nissan, 1 para Juan Valdez y 4 para Nuevos Comienzos; coinciden con las imágenes descargadas. Las dimensiones se comprobaron sobre los archivos locales mediante `sips`.

| Archivo local | Dimensiones | Imagen original |
|---|---|---|
| `assets/portfolio/nissan/01.jpg` | 600 × 4826 | [Fuente](https://i.pinimg.com/originals/3d/f3/3c/3df33c349047b1d8698969852b36ea9b.jpg) |
| `assets/portfolio/juan-valdez/01.jpg` | 736 × 414 | [Fuente](https://i.pinimg.com/originals/64/b0/b8/64b0b851e9e2df01c2005649fa27ad86.jpg) |
| `assets/portfolio/nuevoscomienzos/01.jpg` | 736 × 1592 | [Fuente](https://i.pinimg.com/originals/c7/81/f5/c781f5f5e09c313f696af6ca5c80fb63.jpg) |
| `assets/portfolio/nuevoscomienzos/02.jpg` | 736 × 1592 | [Fuente](https://i.pinimg.com/originals/f7/ab/f9/f7abf92fc61190c8e3fb0ff76a6bf99b.jpg) |
| `assets/portfolio/nuevoscomienzos/03.jpg` | 736 × 1592 | [Fuente](https://i.pinimg.com/originals/9a/c0/9a/9ac09afe0102e4a9a939242c92c783f9.jpg) |
| `assets/portfolio/nuevoscomienzos/04.jpg` | 736 × 1592 | [Fuente](https://i.pinimg.com/originals/08/69/67/086967d126b0f697cabe6bf0df03778f.jpg) |

El carrusel mantiene los marcos 16:9 y admite opciones particulares por proyecto. Por defecto usa `cover` para imágenes no verticales y `contain` para composiciones verticales. Las opciones de portada se configuran en el quinto argumento de `pinterestBoard`: `imageIndices` usa índices desde cero; `position` define el punto de recorte y el origen de escala; `zoom` es un factor de ampliación; `mode: "cover"` fuerza el relleno del marco. `previewImages` referencia las imágenes seleccionadas del proyecto y la portada principal coincide con la primera de la selección.

## Ajustes de las portadas

Los números de imagen de esta tabla corresponden a los nombres `01`, `02`, etc. de cada carpeta.

| Proyecto | Imágenes de la portada | Ajuste |
|---|---|---|
| Nissan | 1 | `cover`, punto de recorte `center 5%` desde arriba |
| Juan Valdez | 1 | Zoom del 20 % (`scale(1.2)`), `object-position: center top` y origen de escala superior |
| DragonTeam | 4, 5, 7 | Composición vertical de tres imágenes |
| Hava | 2, 3, 5 | Composición vertical de tres imágenes |
| Tibea | 2, 3, 5 | Composición vertical de tres imágenes |
| PokemonTest | 1 | Una sola portada con `cover` |

El zoom de hover se compone con la escala configurada: Juan Valdez pasa de `1.2` a `1.23` y conserva el origen superior. El visor abre la primera imagen seleccionada y muestra las imágenes completas con `contain`. Los tableros con una sola imagen ocultan las flechas de navegación del visor.
