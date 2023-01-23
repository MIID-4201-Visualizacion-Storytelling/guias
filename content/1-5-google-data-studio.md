---
title: Looker Studio
description: '...'
---

<span class="title-icon non-material"><img src="/vysimgs/ic_looker_studio.svg" alt="Looker Studio Logo" /></span>

## Introducción

En este tutorial vamos a presentar la herramienta recomendada para la mayoría de ustedes (excepto los que prefieren programar una propia). _Looker Studio_ nos permite cuatro cosas fundamentales que haremos durante este curso:

1. Importar o conectar una fuente de datos.
2. Modelar estos datos.
3. Visualizar y contextualizar para articular narraciones.
4. Publicar nuestra narración en la web.

Ya que _Looker Studio_ nos permite hacer todo esto en un mismo lugar, dentro del material del curso encontrarán tutoriales para aprender a usarlo. Por ahora les voy a mostrar cómo crear una cuenta y hacer un breve paneo por la interfaz. Si quieren probar la herramienta, pueden usar una base de datos que tengan a la mano y seguir los siguientes pasos.

### Requisitos

- Si viven en alguno de los siguientes países: **China, Irán, Iraq, Crimea, Corea del Norte, Siria, Cuba**, no van a poder acceder a los servicios de Google, la única alternativa sería usar VPN _(no vamos a explicar cómo hacerlo, pero hay muchas opciones en Internet. Seguramente si viven en uno de estos países ya han tenido esta misma dificultad)_.
- Conexión a Internet.
- Cuenta gratuita de Gmail.

### Paso 1 - Crear cuenta

Ir a la página de <a href="https://datastudio.google.com/overview" target="_blank"> Looker Studio</a> y picar en el botón **"USE IR FOR FREE"**. Esto los dirige a otra página donde deben ingresar el correo y contraseña de su cuenta de gmail.

Eso es todo, ahora tienen una cuenta de _Looker Studio_ y pueden utilizar la aplicación directamente en el explorador sin necesidad de descargar o instalar nada en su computador.

### Paso 2 - Crear su primer reporte

En la página principal de _Looker Studio_ pueden encontrar un excelente tutorial introductorio llamado **"Tutorial Report"** con ejemplos interactivos y paso a paso detallado.

<img src="/vysimgs/gds-primera-pantalla.jpg" alt="Primera pantalla de Looker Studio" />

No es obligatorio seguirlo, pero recomendado para quienes nunca han utilizado una herramienta de visualización.

Para quienes quieren probar directamente la aplicación, se pueden saltar el tutorial de Google y crear su primer reporte directamente haciendo clic en "Create" -> "Report".

<img src="/vysimgs/gds-crear-reporte.jpg" alt="Crear reporte" />

### Paso 3 - Importar datos

Lo primero que les pide la aplicación es una fuente de datos y tenemos varias opciones para esto. En la sección "Connect to data" van a ver una extensa lista de posibles fuentes. Las que más van a utilizar en el curso son:

- "File Upload": para subir directamente un archivo .csv
- "Google Sheets": bastante útil para tener una base de datos en un archivo compartido.

<img src="/vysimgs/gds-fuentes-datos.jpg" alt="Fuentes de datos" />

### Paso 4 - Elegir gráfica

Ya con los datos cargados, podemos navegar las diferentes opciones de visualización haciendo clic en "Add a chart":

<img src="/vysimgs/gds-graficas.jpg" alt="Típos de gráficas" />

El tipo de gráfica que les sirve va a depender de su fuente de datos y lo que quieren contar, pero prueben diferentes gráficas y vean como _Looker Studio_ intenta visualizar sus datos inmediatamente. Para pulir las visualizaciones debemos modelar los datos.

### Paso 5 - Modelar datos

Luego de seleccionar un tipo de gráfica, la sección de modelado de datos cambia según los parámetros que necesita la visualización. Esta sección la encuentran a la derecha del espacio de trabajo bajo el nombre "Data". Intenten agregar diferentes gráficas y cuando la seleccionan, van a ver como la sección de modelado cambia:

<img src="/vysimgs/gds-seccion-modelado.jpg" alt="Sección de modelado de datos" />

En la semana 3 vamos a profundizar en modelado de datos para visualización, de momento les recomiendo familiarizarse con la interfaz de _Looker Studio_ haciendo pruebas sobre cualquier base de datos que tengan a la mano.

### Paso 6 - Refinar estéticamente la visualización

Luego de que tenemos los datos cargados y elegimos una gráfica para visualizarlos, podemos refinar los estilos en la sección "STYLE". Aquí pueden definir cosas como la fuente, tamaños, colores, bordes, leyendas, etc. Tengan en cuenta que la interfaz de "STYLE" cambia dependiendo de lo que tengamos seleccionado en nuestro espacio de trabajo, ya que cáda tipo de gráfica tiene diferentes características a las que les podemos cambiar el estilo.

<img src="/vysimgs/gds-estilos.jpg" alt="Sección de estilos" />

### Paso 7 - Elementos adicionales y descriptivos

Por último, tengan en cuenta que a la hora de crear sus _dashboards_ van a necesitar otros elementos como campos de texto, imágenes o dibujos para articular elocuentemente una narrativa dentro del _dashboard_. Para esto podemos usar los siguientes elementos dentro del espacio de trabajo:

<img src="/vysimgs/gds-elementos-descriptivos.jpg" alt="Elementos descriptivos" />

- "URL embed": Pueden embeber videos de YouTube o Vimeo, páginas externas, etc.
- "Image": Para subir imágenes propias o por URL pública en Internet.
- "Text": Campos de texto para crear títulos o textos descriptivos.
- "Line": Para dibujar líneas que conecten elementos dentro del _dashboard_.
- "Shape": Para dibujar círculos o rectángulos.
