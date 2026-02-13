---
title: Plantillas Web
description: '...'
---

## Introducción

A partir de esta semana, y hasta el final del curso, van a trabajar en sus proyectos finales donde el objetivo es contar una historia en un sitio web. Teniendo en cuenta que este curso no puede cubrir todas las opciones de publicación web, vamos a continuar con los tutoriales de _Looker Studio_ como una posible herramienta de trabajo. No quiere decir que deban usarla para su proyecto final, pero veamos cómo nos sirve para ir más allá de un simple dashboard.

### La plantilla

En este tutorial les voy a mostrar un ejemplo de un sitio web creado en _Looker Studio_ que pueden usar como plantilla y editarla para crear su proyecto final. Pueden hacer clic en la siguiente imagen para abrir la plantilla o ir directamente a https://lookerstudio.google.com/u/0/reporting/58d14fe8-15a1-48f9-b12f-65a50ee14e94/page/Y0GmC

<img src="/vysimgs/plantilla-web.jpg" alt="Plantilla Web en Looker Studio" />

> **Figura 1**  
> _Plantilla Web en Looker Studio_  
> https://lookerstudio.google.com/u/0/reporting/58d14fe8-15a1-48f9-b12f-65a50ee14e94/page/Y0GmC

### Copiar plantilla

Para crear una copia de la plantilla que pueden editar, deben hacer clic en los 3 puntos azules en la esquina superior derecha y seleccionar "Hacer una copia". Esto crea un nuevo reporte en su propia cuenta donde pueden conectar sus datos y editar el contenido.

<img src="/vysimgs/copiar-plantilla.jpg" alt="Copiar plantilla en Looker Studio" />

> **Figura 2**  
> _Clonar plantilla en Looker Studio_

### "Scrollytelling"

Quiero que noten el formato vertical del reporte, en este caso, las dimensiones del proyecto son de 1200 (ancho) x 3000 (alto). Esto significa que nuestro espacio de trabajo es vertical y nuestra audiencia va a tener que hacer scroll para ir descubriendo el contenido _(Este es un formato común en sitios web, y podemos asumir con tranquilidad que nuestra audiencia va a hacer scroll al abrir la página)_. El formato vertical del sitio nos ayuda a conectar el orden en que queremos contar la historia con el formato en el que presentamos el contenido. La parte superior es el inicio de la historia, a medida que se hace scroll vamos presentando en orden los diferentes momentos del relato, y al final cerramos narrativamente lo que le queremos contar al espectador. En sentido clásico de narración: Inicio, nudo y desenlace.

Ustedes pueden cambiar el formato acorde a su contenido en: **"Theme and layout" -> "Layout"** en la sección **"Canvas Size"**:

<img src="/vysimgs/formato-reporte.jpg" alt="Formato reporte" />

> **Figura 3**  
> _Editar el formato del reporte en Looker Studio_

### Paleta de colores

Lo primero que deben hacer en su sitio web es seleccionar una paleta de colores, los colores del fondo y la letra les ayuda a tener una identidad propia. En esta plantilla el fondo es gris oscuro y el color del texto contrasta con un gris claro. Esto me ayuda a resaltar el naranja brillante que marca los detalles importantes a lo largo del relato.

Para definir la paleta de colores van a **"Theme and layout" -> "Theme" -> "Customize"**:

<img src="/vysimgs/colores-plantilla.jpg" alt="Colores reporte" />

> **Figura 4**  
> _Ir a sección de paleta de colores en Looker Studio_

Allí van a encontrar una serie de opciones generales de estilo, incluyendo la opción para cambiar el color de fondo (**Report Background**), tipo de fuente y color de los textos (**Text Style**), etc.

<img src="/vysimgs/editar-plantilla-formato.jpg" alt="formato general reporte" />

> **Figura 5**  
> _Editar estilos de la plantilla en Looker Studio_

### Secciones y tipos de contenido

Ahora veamos cómo dividir el espacio de la página en secciones que van contando una historia. Para eso vamos a usar las herramientas para insertar texto, formas y contenido externo que encuentran en la parte superior de la interfaz:

<img src="/vysimgs/gds-elementos-descriptivos.jpg" alt="Elementos descriptivos" />

> **Figura 6**  
> _Elementos para crear secciones en Looker Studio_

#### Bloques de texto

En la parte superior de la plantilla tenemos varios bloques de texto. Pueden cambiar el tipo de fuente, color y tamaño en la sección que aparece a la derecha cuando seleccionan su campo de texto en el espacio de trabajo. En esta plantilla estamos usando la fuente "Oswald" para el título y "Roboto" para el resto del contenido (Oswald se ve bien en formatos grandes mientras que Roboto es fácil de leer en cualquier tamaño, pueden usar diferentes fuentes pero combinar muchas fuentes diferentes a lo largo de la página puede saturar su diseño. Es buena práctica limitarse a 2 o 3 tipos de fuente máximo). Algunas secciones tienen textos centrados o con diferentes tamaños, con lo cual vamos dirigiendo la mirada del espectador a medida que avanza en el relato.

<img src="/vysimgs/editor-texto.jpg" alt="Editor de texto" />

> **Figura 7**  
> _Editor de texto en Looker Studio_

#### Elementos externos: imágenes y videos

En la plantilla pueden ver una ilustración en la parte superior derecha y un video después del texto introductorio. Veamos cómo agregar estos elementos adicionales al reporte:

Las imágenes pueden ser archivos que tienen guardados en su computador o enlaces a imágenes existentes en internet por medio de la URL:

<img src="/vysimgs/agregar-imgs.jpg" alt="Agregar imágenes" />

> **Figura 8**  
> _Agregar imágenes en Looker Studio_

_La ilustración es un archivo .svg que descargué de una fuente gratuita de ilustraciones llamada unDraw: https://undraw.co/illustrations donde se puede cambiar el color de la ilustración antes de descargarla. En mi caso usé el naranja brillante que definí para la identidad del sitio._

<img src="/vysimgs/undraw_knowledge_re_leit.svg" alt="Ilustración de unDraw" />

> **Figura 9**  
> _Ilustración gratuita de unDraw_  
> https://undraw.co/illustrations

En el caso del video no podemos subir el archivo directamente a _Looker Studio_, pero podemos vincular uno desde plataformas como YouTube o Vimeo. Para agregar el video a la página seleccionan la opción "URL Embed":

<img src="/vysimgs/embed.jpg" alt="Embed" />

> **Figura 10**  
> _Opción "embed" en Looker Studio_

Luego dibujan un rectángulo en el espacio de trabajo y a la derecha les aparece el campo donde ponen el enlace al video:

<img src="/vysimgs/embed-url.jpg" alt="Embed URL" />

> **Figura 11**  
> _Vincular video de YouTube en Looker Studio_

_Les recomiendo el video para ir pensando en su ejercicio de pitch._

#### Complementos: líneas y formas

Por último, en la plantilla van a encontrar diferentes formas complementarias que nos ayudan a resaltar y señalar elementos importantes a lo largo del relato. Por ejemplo, la línea que sale del mapa o el rectángulo que subdivide los campos de texto con un color diferente al del fondo.

<img src="/vysimgs/seccion-figuras.jpg" alt="Figuras complementarias" />

> **Figura 12**  
> _Figuras complementarias en Looker Studio_

Estos los podemos crear con la opción de línea (que ofrece diferentes conectores) y forma (con la que pueden crear áreas circulares o rectangulares):

<img src="/vysimgs/linea-forma.jpg" alt="Líneas y formas" />

> **Figura 13**  
> _Líneas y formas en Looker Studio_

En ocasiones debemos ordenar estas figuras para que estén encima o detrás de otros elementos en la página. En _Looker Studio_ podemos ordenar cualquier elemento haciendo clic derecho y en la sección **"Order"** elegir si queremos traer el elemento seleccionado hacia adelante o hacia atrás. (En la caso de la línea que señala el mapa, usé la opción **"Bring Forward"** para que quedara encima del mapa):

<img src="/vysimgs/orden.jpg" alt="Orden de los elementos" />

> **Figura 13**  
> _Orden de los elementos en Looker Studio_

## Conclusiones

A lo largo del curso vimos cómo crear visualizaciones en _Looker Studio_, una herramienta flexible y ágil para crear dashboards. Pero podemos hacer uso de conceptos básicos de diseño web para transformar esta herramienta en un espacio potente para contar historias más allá de un simple reporte. Estos mismos conceptos los pueden aplicar a otras herramientas que estén usando para crear sus visualizaciones. El orden en que presentan cada sección de la página nos ayuda a contar una historia coherente y persuasiva, es un recorrido donde progresivamente le cuentan la historia a su audiencia y deben mantenerla intrigada e interesada hasta el final.
