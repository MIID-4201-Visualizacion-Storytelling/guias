---
title: Visualizar y Refinar
description: '...'
---

## Introducción

Con nuestros datos modelados a lo largo de los tutoriales anteriores, podemos volver a las visualizaciones con la actitud exploratoria que propone John Tukey (expuesto en el video de esta semana). Las aplicaciones como Google Data Studio, Power BI, Tableau, etc., son muy útiles para este proceso, ya que podemos visualizar rápidamente los datos modelados en diferentes estructuras (tipos de gráficas) sin tener que programar cada una. Saltando de una gráfica a otra y conectando diferentes variables a las dimensiones, se pueden comenzar a revelar patrones insospechados que abren nuevas preguntas e invitan a reiterar sobre el proceso de modelado. Ese ir y volver entre las gráficas y el modelado es uno de los principales usos de lo que llamamos en clase "narración a nosotros mismos".

En Google Data Studio, este proceso es muy sencillo:

- Con los datos modelados, vuelven al espacio de trabajo y seleccionan la opción "Add a chart"

<img src="/vysimgs/gds-graficas.jpg" alt="Nueva gráfica" />

> **Figura 1**  
> _Agregar gráfica a espacio de trabajo en Google Data Studio_

- Google Data Studio reconoce los tipos de datos que ustedes definieron y hace un intento por conectar las variables más relevantes al tipo de gráfica elegida. Si seleccionan alguna de las opciones de Google Maps, la aplicación conecta automáticamente las variables de georeferencia que definieron en el modelado.

- En la esquina superior derecha, pueden encontrar un menú llamado "Charts > {tipo de gráfica}" y desde allí pueden ir cambiando el tipo de gráfica sin crear una nueva, esto les permite rápidamente explorar las variables en diferentes estructuras hasta que encuentran patrones por refinar en el modelado.

<img src="/vysimgs/gds-switch-charts.jpg" alt="Intercambiar gráficas" />

> **Figura 2**  
> _Menú para intercambiar gráficas en Google Data Studio_

## Conclusión

El proceso de modelado nos permite acotar y refinar las posibilidades que tienen los datos para producir sentido y conocimiento sobre un fenómeno que en su estado natural es complejo. Veamos la siguiente gráfica para identificar cómo se va puntualizando aquello que queremos contar con los datos:

<img src="/vysimgs/refinar.jpg" alt="Del mundo al storytelling" />

> **Figura 3**  
> _Del mundo al Storytelling_

- Los fenómenos es su estado natural son desordenados y complejos.
- La captura de los datos da un primer orden, idealmente amplio -tan amplio en posibilidades como el fenómeno en sí-, pero reduce, pues es imposible contener todo el fenómeno: hay una primera reducción en los datos crudos (raw data).
- La primera definición de variables sobre la estructura original de los datos hace una nueva precisión, no transforma del todo los datos crudos, pero sí impone la forma como se pueden utilizar de ahí en adelante.
- El modelado, que como hemos visto esta semana es un proceso reiterativo entre formular preguntas -> crear nuevas variables -> visualizar y refinar el modelado, reduce aún más aquello que vamos a resaltar del fenómeno original.
- Por último, el storytelling, es decir, las narraciones más allá de nosotros mismos, pretende contar específicamente algo del fenómeno original. Es como pasar los datos por un embudo que va reduciendo, discriminando y precisando aquello que nos parece relevante contar.

Este proceso de reducción no es necesariamente negativo. Es un error pensar que las visualizaciones deberían contar todo lo que es un fenómeno en su estado natural, pues los datos (incluso crudos) son una reducción del fenómeno. Los procesos de visualización, hasta llegar al storytelling, nos ayudan a entender aspectos del fenómeno original, ya que usualmente este es demasiado complejo para entenderlo sin ninguna ayuda.

_Si quieren ampliar un poco sobre la diferencia entre los fenómenos y la visualización, les recomiendo la lectura de "Data Visualization as New Abstraction and Anti-sublime" (2002) de Lev Manovich: http://manovich.net/index.php/projects/data-visualisation-as-new-abstraction-and-anti-sublime_
