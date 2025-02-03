---
title: Filtrar y Minar
description: '...'
---

## Introducción

En el tutorial anterior hicimos el trabajo inicial de definir los tipos de datos en las variables e identificamos datos que tenían errores para limpiarlos. Pero a medida que vamos reconociendo mejor la estructura original de los datos, es importante preguntarse si esa estructura que tiene la base de datos original es suficiente para nosotros. ¿Hay preguntas que le podemos hacer a la base de datos pero no podemos visualizar?

Consideremos un ejemplo: tal cual están los datos, cada participante ingresa su salario en la moneda de su país. Esto nos permite comparar salarios de las diferentes profesiones de manera local, pero ¿qué pasa si quisiéramos comparar esos salarios de manera global? Sin manipular los datos tendríamos que acompañar nuestras visualizaciones con textos complejos y pedirle a nuestra audiencia que haga la conversión de moneda por su propia cuenta (difícil incluso si las visualizaciones son para nosotros mismos). Pero al ser la conversión de monedas una operación matemática sencilla, podemos investigar este problema creando nuevas variables que de manera anticipada hagan esta conversión. Es decir, diseñamos una nueva estructura sobre los datos existentes para explorar nuestras inquietudes.

El proceso de filtrar los datos es un proceso intelectual en el que atendemos nuestras preguntas al eliminar variables que consideramos irrelevantes y creamos nuevas a partir de las que ya existen. Todas las bases de datos contienen información en potencia, pero no siempre podemos acceder a ellas de manera inmediata. El modelado de datos define entonces qué información volvemos disponible a la visualización y storytelling y qué información dejamos a un lado. Esto hace parte del proceso de minar los datos, que en síntesis significa extraer la información realmente importante de una fuente de datos crudos (raw data). En el tutorial anterior preparamos los datos crudos para ser utilizados en una aplicación de visualización, pero realmente las decisiones conceptuales del modelado suceden al filtrar y minar esos datos.

### Ejercicio

Para atender la pregunta que formulaba antes -¿qué pasa si quisiéramos comparar esos salarios de manera global?- tenemos que decidir una sola moneda base. En el siguiente ejercicio vamos a convertir el salario anual (_Annual Salary_) a pesos colombianos. Primero tenemos que revisar la moneda que describe cada _Annual Salary_ usando la variable _Currency_ y multiplicamos el valor de _Annual Salary_ por la tasa de cambio (TRM).

Si se sienten cómodos creando fórmulas en Excel, pueden crear una nueva columna directamente en la base de datos. Acá les voy a mostrar cómo crear una nueva variable desde _Looker Studio_:

Seleccionan **“ADD A FIELD”**, luego le dan un nombre a su variable, en mi caso la voy a llamar “Salarios (pesos colombianos)” y agregamos la fórmula para nuestro nuevo campo usando la condicional `CASE` (pueden leer más sobre las posibles condicionales en <a href="https://cloud.google.com/looker/docs/studio/about-calculated-fields?hl=es-419" target="_blank">Información sobre campos calculados</a>, <a href="https://cloud.google.com/looker/docs/studio/function-list?hl=es-419" target="_blank">Lista de funciones</a>, <a href="https://cloud.google.com/looker/docs/studio/case-searched?hl=es-419" target="_blank">ejemplo condicional: Case searched</a>, <a href="https://support.google.com/datastudio/topic/10490726?hl=en&ref_topic=7019880" target="_blank">Aquí lo teníamos antes pero esta ruta está desactualizada</a>)


```sql
CASE
  WHEN Currency = "USD" THEN Annual salary * 3956.54
  WHEN Currency = "CAD" THEN Annual salary * 3101.64
  WHEN Currency = "GBP" THEN Annual salary * 5356.28
  WHEN Currency = "EUR" THEN Annual salary * 4529.90
  WHEN Currency = "AUD/NZD" THEN Annual salary * 2797.49
  WHEN Currency = "Other" AND Currency - other = "USD" THEN Annual salary * 3956.54
  ELSE Salario anual
END
```

La fórmula en este caso hace lo siguiente:

- Primero revisa el tipo de moneda `WHEN Currency = “…”`
- Si es verdadero, multiplica el valor de `Anunal salary` por la tasa TRM _(valores extraídos manualmente de <a href="https://www.xe.com/currencyconverter/" target="_blank">Xe Live Exchange Rates</a>)_ a pesos colombianos `THEN Annual salary * {TRM}`.

La fórmula anterior no contiene todas la monedas que se encuentran en la base de datos, y ustedes deben completar el resto. Acá les dejo la lista completa: **USD, CAD, GBP, EUR, AUD/NZD, CHF, SEK, JPY, ZAR, HKD, _Other_**. Para este ejercicio pueden omitir los de _Other_ para que no se queden mucho tiempo creando esta fórmula, pero si la quieren hacer, pueden replicar la última parte de la fórmula:

```sql
WHEN Currency = "Other" AND Currency - other = "USD" THEN Annual salary * 3956.54
```

Con esta nueva variable tenemos la posibilidad de producir información nueva que los datos crudos no permitían. Por lo general, estas nuevas variables las creamos para responder preguntas que tenemos sobre los datos y la fuente original no contemplaba.

## Conclusión

Como pueden ver, los datos crudos permiten extraer información parcial, mientras que el modelado (a pesar del esfuerzo y trabajo manual) nos permite comenzar a pensar las posibles preguntas que podemos convertir luego en narraciones. Les confieso, a mí me encanta este proceso, me parece una especie de magia o alquimia y es donde se concentra gran parte del pensamiento alrededor de las potencias que tienen los datos para producir nuevas ideas.

El ejercicio de esta semana es una breve introducción a unos conceptos de modelado que van a profundizar en otros cursos de la maestría y a lo largo de sus carreras profesionales. En este curso son necesarias unas nociones básicas para poder llegar a contar historias con los datos, ya que es en el modelado donde se empiezan a formular las preguntas y posibles premisas narrativas.
