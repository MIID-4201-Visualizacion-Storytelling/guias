---
title: Visualizar y Refinar
description: '...'
---

## Introducción

Con nuestros datos modelados a lo largo de los tutoriales anteriores, podemos volver a las visualizaciones con la actitud exploratoria que propone John Tukey (Expuesto en el video de esta semana). Las aplicaciones como Google Data Studio, Power BI, Tableau, etc., son muy útiles para este proceso, ya que podemos visualizar rápidamente los datos modelados en diferentes estructuras (tipos de gráficas) sin tener que programar cáda una. Saltando de una gráfica a otra y conectando diferentes variables a las dimensiones, se pueden comenzar a revelar patrones insospechados que abren nuevas preguntas e invitan a reiterar sobre el proceso de modelado. Ese ir y volver entre las gráficas y el modelado es uno de los principales usos de lo que llamamos en clase "narración a nosotros mismos".

En Google Data Studio, este proceso es muy sencillo:

- Con los datos modelados, vuelven al espacio de trabajo y seleccionan la opción "Add a chart"

<img src="/vysimgs/gds-graficas.jpg" alt="Visualización con contexto" />

> **Figura 1**  
> _Agrgear gráfica a espacio de trabajo en Google Data Studio_

- Google Data Studio reconoce los tipos de datos que ustedes definieron y hace un intento por conectar las variables más relevantes al tipo de gráfica elegida. Si seleccionan alguna de las opciones de Google Maps, la aplicación conecta automáticamente las variables de georeferencia que definieron en el modelado.

- En la esquina superior derecha, pueden encontrar un menú llamado "Charts > {tipo de gráfica}" y desde allí pueden ir cambiando el tipo de gráfica sin crear una nueva, esto les permite rápidamente explorar las variables en diferentes estructuras hasta que encuentran
