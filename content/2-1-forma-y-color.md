---
title: Forma y Color
description: '...'
---

<span class="title-icon non-material"><img src="/vysimgs/pie-chart-pngrepo-com.png" /></span>

## Introducción

Nuestro objetivo principal a la hora de crear visualizaciones de datos es poder comunicar claramente la información que contienen los datos. Lo primero que debemos tener en cuenta es que:
Datos ≠ Información
Los datos contienen información, pero somos nosotros quienes reconocemos esa información y se la transmitimos a nuestra audiencia.

Veamos un ejemplo con unos datos sencillos:

```python
datos = [8, 2]
```

A simple vista podemos reconocer la diferencia entre estos dos valores y extraer información, podemos decir que:

- 8 es mayor que 2
- 2 es menor que 8
- o que hay una diferencia de 6 entre los dos valores.

Para extraer esa información debemos pasar por un proceso mental que requiere de nuestras habilidades conscientes. En teoría del lenguaje visual esto lo llamamos procesos **“atencionales”**. Tenemos que saber principios matemáticos básicos para extraer esta información de los datos.

Cuando tenemos una base de datos más compleja, se vuelve rápidamente complejo para nuestra audiencia la lectura.

Por ejemplo:

<img src="/vysimgs/Bertin.png" alt="Mapa de Jaques Bertin" />

```md
Bertin, J. (1983).
Semiology of graphics: diagrams networks maps.
p.117 y 122
```

En el mapa de la izquierda, le pedimos a nuestra audiencia que explore detenidamente el mapa, que memorice los valores que va encontrando, los compare y haga pequeños cálculos matemáticos en su cabeza para determinar las diferencias entre las zonas del mapa. En otras palabras, son muchos procesos _atencionales_ que rápidamente opacan la comprensión.

Pero en el mapa de la derecha, la información se hace inmediatamente evidente. La razón es que el mapa de la derecha se puede entender en un proceso que llamamos en teoría visual **“preatención”**. Los números desaparecen de la representación visual y son reemplazados por formas que indican el número, produciendo un mapa que nos pide comparar un patrón y no comparar números. En los procesos preatencionales, la mente puede memorizar una gran cantidad de valores y compararlos con facilidad.

Pero debemos reconocer que se hacen sacrificios, en el mapa de la derecha desaparecen:

- Los valores numéricos y por ende la posibilidad de precisar la cantidad. (Se puede solucionar desde la interacción como veremos más adelante).
- Los límites geográficos no están delimitados, el autor privilegia la información de los valores sobre la precisión de la zona geográfica al que corresponden. ¿se pierde información o se omite para facilitar la lectura de la información relevante?

### Formas abstractas, información concreta

Pasar de los números a las formas no es un proceso automático necesariamente, ya que la posibilidad de leer una gráfica que apela a nuestra preatención requiere de un conocimiento intuitivo pero concreto.

Volvamos a nuestros datos sencillos:

```python
[8, 2]
```

Veamos algunas formas de visualizarlos para profundizar un poco en la teoría de preatención.

Cuando les digo que 8 es mayor que 2, visualmente lo puedo decir:

<img src="https://via.placeholder.com/600x300.png?text=Gráfica+de+barras">

<img src="https://via.placeholder.com/600x300.png?text=Gráfica+de+puntos">

<img src="https://via.placeholder.com/600x300.png?text=Gráfica+de+pie">

En estas gráficas, podemos ver intuitivamente la relación entre los dos valores a pesar de que las formas visuales son abstractas. Entre ellas comparten un principio fundamental: la forma crece a medida que incrementa el número. Pero una pequeña variación en las características de la forma puede comenzar a opacar su lectura. Veamos:

<img src="https://via.placeholder.com/600x300.png?text=Gráfica+barras+crecimiento+X">
<img src="https://via.placeholder.com/600x300.png?text=Gráfica+puntos+ovalados,+crecimiento+Y">
<img src="https://via.placeholder.com/600x300.png?text=Gráfica+pie+sin+terminación">

En estos casos, los datos no están siendo distorsionados y representan fielmente los valores, pero la estrategia con la que variamos la forma hace que su lectura requiera de más atención. Pasamos de preatención a atención y eso es precisamente lo que queremos evitar en la primera lectura.

Otro error común en las visualizaciones es presentar todos los elementos con una forma sin variación, lo que hace necesario sobreponer otros elementos visuales que describan los valores que representan.

<img src="https://via.placeholder.com/600x300.png?text=forma+igual+con+números+encima">

Lo que puede conducir rápidamente a algo como este mapa:

<img src="https://via.placeholder.com/600x300.png?text=Mapa+con+todos+los+puntos+iguales">

Acá, todos los puntos representan un apartamento en venta, pero la forma no nos indica la información que los usuarios quieren investigar que son los precios, ya que cada punto azul tiene las mismas dimensiones. La lectura de este mapa podría mejorar si hacemos uso de los conceptos que hemos mencionado antes, veamos algunas posibles soluciones:

1. ¿a mayor precio, más grande el círculo? Esta solución podría indicar de manera preatencional que son más deseables los de mayor precio, pero eso no necesariamente es nuestra intención.
2. ¿diferentes formas para rangos de precios? Requiere de una alfabetización previa para saber qué forma representa cada rango.
3. ¿el relleno del círculo indica el valor de la vivienda?

<img src="https://via.placeholder.com/600x300.png?text=Solución+A">
<img src="https://via.placeholder.com/600x300.png?text=Solución+B">
<img src="https://via.placeholder.com/600x300.png?text=Solución+C">

## Resumen

1. Los datos no son información.
2. La información es aquello que nosotros reconocemos en los datos y lo hacemos visible a nuestra audiencia.
3. El lenguaje visual es efectivo en la medida que su primera lectura haga uso de los procesos preatencionales.
4. Las formas visuales, a pesar de ser abstractas en las visualizaciones, deben apelar a lo concreto.
5. La manera de presentar la información involucra nuestra intención retórica.

### Para profundizar

- Bertin, J. (1983). Semiology of graphics; diagrams networks maps
- From Data to Viz. https://www.data-to-viz.com/
- WTF https://viz.wtf/

# Ejercicio

Pongamos a prueba lo que han aprendido. Tomando como punto de partida la base de datos:

- CSV con resultados de encuesta 1: https://www.coursera.org/learn/visualizacin-y-storytelling/resources/qLxCs

Quiero que, de manera individual, describan visualmente a la población que compone este curso en una gráfica que nos muestre los diferentes grupos poblaciones. Pueden agrupar por profesión, edad o ubicación y el objetivo es que escojan una forma visual que comparativamente describa las diferencias entre los miembros del curso.

**Deben preguntarse:**

- ¿Qué forma se relaciona mejor con el tipo de datos que eligen narrar?
- ¿Puede un público general reconocer inmediatamente las diferencias en la población?
- ¿Si cambio la forma, se compromete la comprensión de los datos?

El producto de esta visualización es un enlace que deben subir a la plataforma en: **{ENLACE A TAREA}**, este puede ser una imagen creada a mano, en Google Data Studio, o si lo hacen en otro software de visualización que no genere enlace en la web, pueden tomar foto de la pantalla y subir ese archivo.

Esta visualización es parte del ejercicio final de la semana y para completarla, quiero que escriban un texto que acompañe la visualización describiendo su intención narrativa. No quiero que expliquen los datos ni su proceso para realizar la visualización, lo que me interesa saber es qué quieren decir con la gráfica, de esta manera revisamos si su intención retórica se cumple en la visualización que realizaron.
