---
title: Espacialización
description: '...'
---

<span class="material-icons title-icon">travel_explore</span>

## Introducción

En las dos guías anteriores (“Forma y color” y “Escalas”) cubrimos bastante terreno conceptual en las introducciones. Teniendo en cuenta lo aprendido, vamos a espacializar los datos usando la referencia geográfica que tenemos en nuestra base de datos para producir diferentes tipos de mapas y así reconocer posibles narrativas que podemos construir con datos geográficos sobre un mapa.

Pueden seguir los siguientes pasos en _Google Data Studio_ usando como fuente la base de datos de la población del curso. Si deciden utilizar otro software, el proceso es muy parecido.

## Paso 1: Crear reporte y cargar los datos

Vamos a usar la siguiente base de datos para el tutorial. En el caso de ustedes, pueden seguir los pasos utilizando la base de datos de la población del curso.

| Ciudad      | País     |
| ----------- | -------- |
| Bogotá      | Colombia |
| Pasto       | Colombia |
| Londres     | UK       |
| Los Ángeles | USA      |
| Bogotá      | Colombia |

En _Google Data Studio_ crean un nuevo reporte y suben el CSV usando la opción "File Upload". El siguiente video _(sin sonido)_ muestra cómo hacerlo paso a paso:

<video controls muted>
  <source src="/vysvideos/vys-cargar-csv-gds.mp4" type="video/mp4">
</video>

> **Video 1**  
> _Cargar CSV en Google Data Studio_

## Paso 2: Elegir tipo de mapa

En _Google Data Studio_ tenemos 2 opciones de mapa: “Mapa con burbujas” (Bubble map) y “Mapa por zonas” (Filled map). El tipo de mapa que escogemos depende de lo que queremos contar, es decir, es una decisión creativa alrededor de la estructura de los datos. Por ejemplo:

### Historia con número de estudiantes por ciudad:

<div class="historia">
  <p>La virtualidad durante la pandemia ha sido agotadora y los estudiantes quieren tener algunos encuentros presenciales. En este mapa podemos ver que solamente los estudiantes que viven en Bogotá tienen la posibilidad de encontrarse para tomarse un café y trabajar en su proyecto de manera presencial.<p>
</div>

<a href="https://datastudio.google.com/u/0/reporting/f5fe7209-3471-4bb9-a60d-8e75691da34e/page/EVtkC" target="_blank"><img src="/vysimgs/VYS_-_2.3.1_Número_de_estudiantes_por_ciudad.jpg" alt="Número_de_estudiantes_por_ciudad" /></a>

> **Figura 1**  
> _Número de estudiantes por ciudad_  
> Para ver el reporte interactivo, ir a: https://datastudio.google.com/reporting/f5fe7209-3471-4bb9-a60d-8e75691da34e

Lo que quiero narrar en este mapa tiene que ver con el número de estudiantes por ciudad. Hay 2 elementos específicos que necesito revelar en el mapa: Cada una de las ciudades donde viven los estudiantes y el número de estudiantes ubicados allí. Los globos son útiles para identificar visualmente la ubicación geográfica (posición), diferentes países (color) y la cantidad de estudiantes (escala).

### Historia con número de estudiantes por país:

<div class="historia">
  <p>La población de estudiantes del curso Visualización y Storytelling de la Maestría en Inteligencia Analítica de Datos está ubicada en el Occidente global, de momento no hay estudiantes en Oriente a pesar de ser un programa enteramente virtual.<p>
</div>

<div class="iframe-container">
  <iframe width="600" height="400" src="https://datastudio.google.com/embed/reporting/3d652493-3501-4548-a02a-85255ce3672e/page/KW7jC" frameborder="0" style="border:0" allowfullscreen></iframe>
</div>

En esta segunda historia ya no importa tanto la especificidad de las ciudades sino tener un panorama más global, que nos indique de manera ágil los países donde viven los estudiantes. En este caso, los globos pueden opacar la lectura y sobrecargan de manera innecesaria el mapa. Por esa razón usamos la versión de "Filled map" para resaltar los países y la intensidad del color nos muestra la cantidad de estudiantes por región.

> **Figura 2**  
> _Número de estudiantes por país_  
> https://datastudio.google.com/reporting/5f73d237-b16e-4e8f-bec2-ce9d26bded05

### Historia con porcentajes:

<div class="historia">
  <p>En el curso de Visualización y Storytelling de la Maestría en Inteligencia Analítica de Datos, la mayoría de estudiantes vive en Colombia, un país donde el idioma nativo es el castellano. Los estudiantes que no viven en Colombia se encuentran en países donde el idioma nativo es el inglés.<p>
</div>

<div class="iframe-container">
  <iframe width="600" height="400" src="https://datastudio.google.com/embed/reporting/64c41a50-f9a9-4129-9438-05b46a27f98d/page/p_43uq2hsirc" frameborder="0" style="border:0" allowfullscreen></iframe>
</div>

> **Figura 3**  
> _Porcentaje de estudiantes por país_  
> https://datastudio.google.com/reporting/64c41a50-f9a9-4129-9438-05b46a27f98d

El mapa por países (Figura 2) que vimos anteriormente nos podría funcionar para contar esta tercera historia: tenemos una vista general por países que nos indica dónde viven los estudiantes, pero la métrica (por número de estudiantes) deja de ser descriptiva en esta historia. Podemos mejorar el mismo mapa cambiando el conteo de estudiantes por país a porcentajes. Al acercarnos con el ratón a alguno de los países, ya no tenemos que investigar todo el mapa para saber la relación de ese país con el resto. El mapa de _Figura 2_ nos dice que Colombia tiene 3 estudiantes. Por sí solo, el dato de 3 estudiantes en Colombia no me ayuda mucho, pero saber que el 60% de estudiantes vive en Colombia inmediatamente me describe que allí vive la mayoría.

## Paso 3: Definir métricas

Una de las ventajas que tiene _Google Data Studio_ es que podemos utilizar datos con ubicación geográfica por latitud y longitud, o con texto. En los ejemplos anteriores (y en la base de datos con la que están trabajando), las locaciones están escritas en texto y aún así la aplicación sabe dónde ubicar los puntos o rellenar las regiones. Pero para que funcione, debemos indicarle al software cómo interpretar el texto como ubicación geográfica.

Hagamos un paso a paso para construir el mapa de "Figura 1", pueden ver el siguiente video que resume los pasos a continuación:

<video controls muted>
  <source src="/vysvideos/vys-espacializacion-demo-gds.mp4" type="video/mp4">
</video>

### Paso a paso

1. Si aún no han creado un reporte con los datos, ver "Paso 1" en el inicio de este tutorial.
2. Agregar mapa haciendo clic en "Add Chart".
3. En este caso voy a elegir "Bubble map" en la sección "Google Maps".

Cuando insertan un mapa a _Google Data Studio_, lo más probable es que les salga el siguiente error:

<img src="/vysimgs/gds-error-mapa.JPG" alt="Error al cargar mapa en Google Data Studio" />

No se preocupen. Primero debemos definir los campos para que funcione el mapa.

4. En la sección de la derecha, bajo "Fields" seleccionan la opción llamada "Location".
5. Para este ejemplo, "Location" van a ser las ciudades porque estamos haciendo el mapa de burbujas. _Si estuviéramos creando los mapas de las figuras 2 y 3, este campo sería "País" ya que corresponde a las zonas que queremos rellenar en el mapa._
6. Luego hacen clic en el botón para editar el campo que se encuentra justo a la izquierda (resaltado en la siguiente imágen).

<img src="/vysimgs/gds-location.JPG" alt="Campo Location en Google Data Studio" />

7. Ir a la sección "Type" -> "Geo" y seleccionar la opción "City". _Noten que debemos ser específicos con el tipo de datos, si estuviéramos usando el campo de país, el tipo que definimos en este paso sería "Country"._

<img src="/vysimgs/gds-geo-ciudad.JPG" alt="Campo City en Google Data Studio" />

8. De vuelta en "Fields" debemos definir el campo "Size" y opcionalmente el de "Color dimension", en ambos casos voy a usar el campo "País" para definir estos parámetros.

9. Luego pueden ir a la sección "Style" para jugar un poco con los parámetros disponibles y pulir estéticamente su visualización.

## Resumen

- Los conceptos de forma, color y escala aplican directamente en el momento de espacializar los datos.
- Dependiendo de la intención narrativa, debemos elegir el tipo de visualización que hacemos sobre el mapa.
- Cada estrategia de visualización tiene ventajas y desventajas, debemos privilegiar nuestra intención narrativa para saber cuál apoya retóricamente lo que queremos decir.

## Ejercicio

- Utilizando la base de datos “poblacion-curso.csv” identificar una historia que desean contar sobre la población del curso. Recuerden que la definición de la narrativa es un ejercicio creativo. ¿Qué creen que es valioso contar sobre esta población en particular?
- Según su intención narrativa, crear un mapa utilizando cualquier software de visualización. Puede ser _Google Data Studio_ o cualquier otro en el que se sientan cómodos. El tipo de visualización debe apoyar su intención narrativa. En el caso de _Google Data Studio_, no es lo mismo usar “Bubble map” a “Filled map”, esta elección debe ser coherente con lo que quieren contar.
- Acompañar el mapa con un texto corto (máximo 1 párrafo) donde resumen lo que quieren contar con el mapa. Pueden usar este texto para abrir preguntas o esbozar conclusiones de lo que vemos en el mapa. (Ver los textos en el tutorial para tener una guía de posibles formas en que pueden redactar este texto).
