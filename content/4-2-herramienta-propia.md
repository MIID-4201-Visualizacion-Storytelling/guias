---
title: Crear una herramienta propia para analytics
description: '...'
---

## Introducción

En este tutorial van a crear la siguiente aplicación que muestra, en tiempo real, las fluctuaciones en precio de varias criptomonedas:

<div class="iframe-container">
  <iframe width="600" height="450" src="https://precios-criptomonedas-funcional.1cgonza.repl.co/" frameborder="0" style="border:0"></iframe>
</div>

> **Figura 1**  
> _Cambio de precios en criptomonedas_

Vamos a hacerlo juntos, paso por paso, así que no se preocupen si nunca han creado una aplicación web. La idea con este tutorial es que se hagan a una idea general del proceso de visualización por medio de la programación. Vamos a hacer paralelos con lo que han aprendido de _Google Data Studio_ para que puedan reconocer las similitudes y diferencias entre las herramientas prediseñadas y la creación de una herramienta propia. Con estas bases pueden explorar autónomamente nuevas fuentes de datos con diferentes APIs en futuros proyectos. Van a comenzar con una plantilla relativamente vacía y al final del tutorial van a tener la entrega de la semana prácticamente terminada, así que ánimo y si surgen preguntas en el camino no duden en contactarnos.

### Espacio de trabajo

Para este ejercicio vamos a trabajar en Replit, una herramienta que nos permite crear aplicaciones en diferentes lenguajes de programación, directamente en el explorador sin tener que descargar o instalar nada.

- Paso 1: Crear cuenta en Replit
  Primero van a <a href="https://replit.com/" target="_blank">https://replit.com/</a> y seleccionan la opción “Sign Up” en la esquina superior derecha. Se pueden registrar con su cuenta de Google, Github, Facebook o directamente diligenciando el formulario. Con esto ya tienen una cuenta gratuita que es suficiente para este ejercicio.
- Paso 2: Hacer copia (Fork) de la plantilla
  Luego de crear la cuenta, van al siguiente enlace: <a href="https://replit.com/@1cgonza/Criptomonedas-Precios?v=1" target="_blank">https://replit.com/@1cgonza/Criptomonedas-Precios?v=1</a> y hacen clic en el botón **“Fork repl”** que les debe aparecer a la derecha como se ve en la Figura 2 a continuación:

<img src="/vysimgs/fork-repl.jpg" alt="Fork Repl" />

> **Figura 2**  
> _Crear Fork de la plantilla en Replit_

El “Fork” crea una copia exacta de la plantilla, pero los cambios que hagan les pertenecen a ustedes. Todos los cambios que hagan en el código se guardan automáticamente y pueden volver a su cuenta en cualquier momento para seguir trabajando en la aplicación.

### Interfaz de Replit

Luego de crear el "Fork", van a entrar a la interfaz de trabajo que está dividida en 3 partes:

- La lista de archivos a la izquierda.
- El editor de código en el centro.
- El visor de la aplicación a la derecha.

<img src="/vysimgs/interfaz-replit.jpg" alt="interfaz Replit" />

> **Figura 3**  
> _Interfaz Replit_

Ahora hagan clic en el botón verde “Run” para ver la plantilla en su estado inicial en el visor, se debe ver algo similar a esto:

<img src="/vysimgs/vista1.jpg" alt="interfaz Replit, vista" />

> **Figura 4**  
> _Aplicación corriendo dentro de Replit_

Está bastante vacía, apenas tenemos algunos campos de texto y pueden ver que algunos de esos textos cambian de manera dinámica. A pesar de la apariencia escueta que tiene la aplicación en este momento, ya están sucediendo bastantes cosas internamente: tenemos un esqueleto de las secciones que vamos a crear en el archivo “index.html”, también tenemos un archivo para definir estilos que se llama “style.css” y en el archivo “scripts.js” tenemos ya funcionando la conexión a la API con WebSockets y unas bases de modelado. Primero veamos como editar la estructura en HTML.

### HTML

El archivo de HTML en una aplicación web es la estructura del sitio y está dividido en dos secciones principales: `head` y `body`. En el head tenemos metadatos y cargamos archivos necesarios como el de “style.css”. Lo que esta en esta sección no se ve en la página, mientras que todo lo que esta dentro de body si se ve en la página así que nos vamos a enfocar en lo que esta dentro de `body`.

Todo en HTML funciona por bloques, por ejemplo:

```html
<h1>Título 1</h1>
<h2>Titulo 2</h2>
<p>párrafo</p>
<!—- los div son contenedores genéricos -->
<div>
  <p></p>
</div>
```

El orden en el que ponen cada bloque es importante, ya que la página se construye de arriba abajo. Como pueden ver, el "Título 1" está de primero y es lo primero que se ve en la página. Ahora, cambien el contenido de `<h1></h1>` y le dan clic al botón “Run” de nuevo para ver sus cambios en el visor. Escriban lo que quieran, luego van a usar este bloque para ponerle un título a su aplicación.

```html
<h1 id="titulo">HOLA! Yo soy el título</h1>
```

En este archivo quiero que editen el Título y más abajo van a encontrar una sección llamada "descripción". Allí van a reemplazar los textos que dicen "Párrafo 1 ...." y "Parrafo 2 ....." con el texto descriptivo que van a redactar cuando terminen de crear su aplicación. Esto lo pueden hacer al final cuando entiendan mejor cómo funciona la visualización.

Si quieren ampliar sobre conceptos de HTML, les recomiendo los tutoriales de <a href="https://www.w3schools.com/html/" target="_blank">W3School HTML Tutorial</a>.

### CSS

Esta semana no vamos a hacer mucho énfasis en el diseño, pero el archivo de "styles.css" les permite modificar los estilos de todos los elementos que tienen en el HTML. La sintaxis es un poco diferente a la de HTML y pueden investigar todas las opciones de diseño en <a href="https://www.w3schools.com/css/default.asp" target="_blank">W3School CSS Tutorial</a>. Les dejé en la plantilla una estructura muy sencilla si quieren trabajar en el diseño aunque no lo tienen que hacer para esta semana. A continuación les muestro como hacer unos cambios al estilo para que se hagan a una idea general:

```css
#titulo {
  color: cadetblue;
  text-align: center;
}

#descripcion {
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px;
}

#descripcion p {
  font-size: 18px;
}
```

### JavaScript

En el archivo "scripts.js" es donde vamos a crear nuestra aplicación. Desde este archivo podemos modificar la estructura y el contenido del HTML o los estilos del CSS de manera dinámica.

En el JavaScript vamos a hacer 3 cosas que vienen haciendo en _Google Data Studio_:

1. Conectar la aplicación a una fuente de datos.
2. Modelar los datos.
3. Crear las visualizaciones.

#### Conexión con datos en tiempo real

En el tutorial anterior vimos como conectarse a la API de _CoinCap_ por el protocolo de WebSockets con la siguiente estructura:

```js
// Conectammos nuestra aplicación al API de coincap.
// Vamos a solicitar actualizaciones de precios para: bitcoin, ethereum, monero y litecoin.
var preciosEndPoint = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero,litecoin');

// Cuando una de las criptomonedas cambia de precio, ejecutamos la función procesarNuevoMensaje.
preciosEndPoint.onmessage = procesarNuevoMensaje;

// Función que recibe los mensajes del Socket
function procesarNuevoMensaje(mensaje) {
  // Convertimos los datos de texto a formato JSON
  var mensajeJson = JSON.parse(mensaje.data);
  // Más adelante en el tutorial voy a explicar el resto de lo que ven dentro de esta función.
  // ....
}
```

#### Estructura para modelado de datos

La semana pasada vimos como limpiar y modelar los datos por medio de scripts en _Google Data Studio_. Este proceso nos ayudó a convertir la estructura original de los datos a una nueva estructura que tiene sentido para nuestra investigación. En el caso de _CoinCap_, estamos conectados a la API para que nos envíe datos en el momento que cambia el precio de alguna criptomoneda que nos interesa. La estructura original que nos llega es simplemente el nombre de la moneda y su valor actual que se ve así en formato JSON:

```json
{
  "bitcoin": "6389.06534240",
  "ethereum": "192.93111286",
  "monero": "108.90302506",
  "litecoin": "52.25484165"
}
```

Para enriquecer estos datos y producir un valor agregado, podemos crear una nueva estructura con información que vamos calculando a medida que corre la aplicación. En la plantilla van a encontrar esa estructura armada de la siguiente manera:

```js
const monedas = [
  { nombre: 'bitcoin', precioActual: null, precioMasAlto: null, precioMasBajo: null, datos: [] },
  { nombre: 'ethereum', precioActual: null, precioMasAlto: null, precioMasBajo: null, datos: [] },
  { nombre: 'monero', precioActual: null, precioMasAlto: null, precioMasBajo: null, datos: [] },
  { nombre: 'litecoin', precioActual: null, precioMasAlto: null, precioMasBajo: null, datos: [] },
];
```

En esta lista (o array), creamos un objeto por cada una de las criptomonedas que le estamos solicitando a la API. Inicialmente no tienen ningún valor y vamos a ir actualizando esta estructura a medida que recibimos datos.

#### Procesamiento y modelado de los datos

Volamos ahora a la función donde recibimos mensajes nuevos de la API para introducirlos a la estructura que definimos en el modelo `const monedas = [...]` anteriormente:

```js
// Función que recibe los mensajes del Socket
function procesarNuevoMensaje(mensaje) {
  // Convertimos los datos de texto a formato JSON
  var mensajeJson = JSON.parse(mensaje.data);

  // Iteramos sobre los valores del mensaje que vienen en parejas de "nombre": "precio"
  for (var nombreMoneda in mensajeJson) {
    // En el siguiente loop, pasamos por cada objeto que definimos en la variable "monedas" que contiene la nueva estructura de datos que queremos llenar.
    for (var i = 0; i < monedas.length; i++) {
      // objetoMoneda va a ser cada uno de los objetos del modelado, por ejemplo:
      // cuando i = 0, objetoMoneda es: {nombre: "bitcoin", precioActual: null, precioMasAlto: null, precioMasBajo: null, datos: []}
      var objetoMoneda = monedas[i];

      // Comparamos el nombre de la moneda en nuestro modelo con el nombre de la moneda que cambió de valor y fue enviado por la API en el mensaje actual.
      // Si coinciden, significa que podemos actualizar los datos de nuestro modelo para esa moneda
      if (objetoMoneda.nombre === nombreMoneda) {
        // Extraemos el precio actual que llegó en el mensaje y lo guardamos en una variable para usarla varias veces de ahora en adelante.
        var nuevoPrecio = mensajeJson[nombreMoneda];

        // En JavaScript, podemos insertar un nuevo elemento a un array usando push()
        // Aquí estamos sumando una nueva entrada a los datos de la moneda que acaba de cambiar el precio.
        // En nuestra estructura de modelado: {nombre: "bitcoin", precioActual: null, precioMasAlto: null, precioMasBajo: null, datos: []}
        // va a quedar guardada en el array "datos"
        objetoMoneda.datos.push({
          fecha: Date.now(), // Este va a ser nuestro eje X, usamos la fecha del presente ya que la aplicación funciona en tiempo real.
          precio: nuevoPrecio, // El eje Y en la visualización va a ser el precio.
        });

        // Volviendo a la estructura: {nombre: "bitcoin", precioActual: null, precioMasAlto: null, precioMasBajo: null, datos: []}
        // podemos cambiar directamente el precioActual de la moneda con el precio que acaba de llegar de la API.
        objetoMoneda.precioActual = nuevoPrecio;

        // Ahora hagamos algo más interesante, vamos a guardar el precio más alto al que ha llegado la moneda.
        // La siguiente comparación revisa si el valor NO es "null" con: !objetoMoneda.precioMasAlto,
        // O si el precio que acaba de llegar es mayor al precioMasAlto guardado en nuestro modelo.
        if (!objetoMoneda.precioMasAlto || objetoMoneda.precioMasAlto < nuevoPrecio) {
          // Si alguna de estas dos pruebas es verdadera, cambiamos el precioMasAlto en el modelo.
          objetoMoneda.precioMasAlto = nuevoPrecio;
        }
        // Hacemos lo mismo para el precioMasBajo haciendo la comparación invertida.
        if (!objetoMoneda.precioMasBajo || objetoMoneda.precioMasBajo > nuevoPrecio) {
          objetoMoneda.precioMasBajo = nuevoPrecio;
        }

        // Para terminar, actualizamos la gráfica que tengamos seleccionada en el menú
        if (nombreMoneda === menu.value) {
          actualizar(monedas[i]);
        }
      }
    }
  }
}
```

Independiente del lenguaje de programación que les guste utilizar, procesar los datos como lo acabamos de hacer es exigente pero fundamental a la hora de extraer valor de una base de datos. Es muy raro que los datos los encuentren perfectamente estructurados para el valor que ustedes les pueden asignar y las historias que pueden contarle a otros sobre ellos. El preprocesamiento y modelado de datos toma tiempo dominar pues requiere de mucha abstracción, debemos pensar de manera anticipada en las potencias que tienen los datos y abrir esas potencias reestructurándolos. Si sienten que la aplicación puede decir cosas nuevas, pero los datos aún no les sirven para decirlo, este es el primer lugar que pueden revisar creando otro modelo de los datos o sumando variables al existente. Por ejemplo: ¿cómo guardar las fechas de los puntos más altos o bajos en el precio de cada criptomoneda?, o más retador aún ¿en qué momentos del día hay mayor fluctuación en los precios?. No tienen que implementar esto al modelo, pero pueden buscar soluciones a estas preguntas si quieren mejorar sus habilidades en programación.

#### Textos dinámicos

Ahora vamos a utilizar nuestros datos procesados para darle vida a la aplicación, es hora de visualizar los datos en una gráfica y al tiempo actualizar los textos de contexto que la acompañan. En la plantilla van a encontrar una función que se llama "actualizar" que llamamos al final de "procesarNuevosDatos":

```js
// En JavaScript podemos extraer elementos del HTML para actualizar su contenido dinámicamente.
// Si van al archivo index.html van a ver que hay 2 elementos vacíos con los siguientes ids: <p id="contexto1"></p>  <p id="contexto2"></p>
// Los vamos a guardar en variables para luego insertar el contenido a medida que los datos se actualizan.
var contexto1 = document.getElementById('contexto1');
var contexto2 = document.getElementById('contexto2');

// Este objeto es una ayuda nativa de JavaScript para convertir números a un formato de moneda.
// Pueden leer más en: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
var formatoUSD = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

// Esta función la ejecutamos cuando hay datos nuevos o al cambiar la criptomoneda en el menú.
// Recibe el objeto completo de una criptomoneda como lo definimos en el modelo.
// Por ejemplo: { nombre: 'bitcoin', precioActual: null, precioMasAlto: null, precioMasBajo: null, datos: [] },
function actualizar(objetoMoneda) {
  // Este texto es una combinación entre textos estáticos y variables.
  // De momento no es muy descriptivo, deben modificarlo para comenzar a ser más claros con el público general.
  // El que ven en el ejemplo terminado es:
  // contexto1.innerText = "Actualmente, el precio de " + menu.value + " es de: " + formatoUSD.format(objetoMoneda.precioActual) + " USD.";
  contexto1.innerText = '- ' + menu.value + ': ' + formatoUSD.format(objetoMoneda.precioActual) + ' USD.';

  // Para el segundo texto vamos a hacer comparaciones entre el precio inicial y el actual.
  // El texto va a indicar si es igual, ha subido o bajado y la diferencia de cuanto ha cambiado el precio.
  var precioInicial = objetoMoneda.datos[0].precio;

  if (precioInicial < objetoMoneda.precioActual) {
    var diferencia = objetoMoneda.precioActual - precioInicial;
    contexto2.innerText = 'subió + ' + formatoUSD.format(diferencia);
  } else if (precioInicial > objetoMoneda.precioActual) {
    var diferencia = precioInicial - objetoMoneda.precioActual;
    contexto2.innerText = 'bajó - ' + formatoUSD.format(diferencia);
  } else {
    contexto2.innerText = 'igual = 0';
  }
}
```

Ustedes deben cambiar estos textos para la entrega, recuerden que su público objetivo es el general, los textos que tiene la plantilla no son claros y pueden ser más descriptivos.

#### Visualización

Para visualizar los datos vamos a usar la librería D3 que es bastante robusta y permite crear todo tipo de gráficas, tanto las que vemos disponibles en _Google Data Studio_ como otras que no van a encontrar allí. Para este casi vamos a usar una línea para mostrar la fluctuación de precios en las criptomonedas, aparte de ser sencilla de implementar nos funciona narrativamente.

Justo antes de la declaración de la función creamos el contenedor de la gráfica:

```js
function actualizar(objetoMoneda) {...}
```

```js
// Pueden cambiar los valores de estas variables para cambiar el tamaño del contenedor.
// Usamos margenes para darle espacio a los textos de cada eje.
var margen = { top: 10, right: 30, bottom: 30, left: 100 };
var ancho = 800 - margen.left - margen.right;
var alto = 400 - margen.top - margen.bottom;

// En D3 seleccionamos el elemento de HTML donde vamos a insertar la gráfica, en index.html es: <div id="modulo2"></div>
const svg = d3
  .select('#modulo2') // elemento existente en el HTML para insertar gráfica
  .append('svg')
  .attr('width', ancho + margen.left + margen.right)
  .attr('height', alto + margen.top + margen.bottom)
  .append('g')
  .attr('transform', `translate(${margen.left},${margen.top})`);

// Definición general de cada eje:

// El eje x es el tiempo que en nuestros datos guardamos en cada instancia usando Date.now() que representa la fecha
// D3 puede procesar fechas usando la escala "scaleTime()"
// El rango va de 0 al ancho de la gráfica.
const x = d3.scaleTime().range([0, ancho]);
const ejeX = d3.axisBottom().scale(x);
svg.append('g').attr('transform', `translate(0, ${alto})`).attr('class', 'ejeX');

// El eje Y representa la variación de precios.
// Usamos la escala lineal en D3:
const y = d3.scaleLinear().range([alto, 0]);
const ejeY = d3.axisLeft().scale(y);
svg.append('g').attr('class', 'ejeY');
```

Lo que acabamos de hacer es igual a agregar un "Time series chart" en _Google Data Studio_ a un reporte. En _Google Data Studio_ lo hacemos con un par de clicks y acá son varias líneas de código, pero no se desanimen, luego vale la pena.

#### Actualizar visualización

Por último, volvemos a la función `actualizar` y agregamos el siguiente código para actualizar la gráfica en tiempo real:

```js
// El eje X que definimos antes lo actualizamos con un método de d3 que busca el rango de fechas en todos los datos disponibles hasta el momento.
// Van a ver que al principio este rango es muy pequeño y se va incrementando a medida que hay más datos.
// Los dominios en d3 se definen con un array con dos valores, el primero es el mínimo y el segundo el máximo:
// x.domain([min, max])
x.domain(
  d3.extent(objetoMoneda.datos, function (d) {
    return d.fecha;
  })
);
// Hace una transición animada al actualizar el ejeX, la duración es de 300 milisegundos
svg.selectAll('.ejeX').transition().duration(300).call(ejeX);

// Otra forma de definir el rango del dominio es buscar el menor y mayor valor en los datos.
// El método d3.extent hace exactamente lo mismo, pero dejo este diferente como ejemplo.
// Intenten cambiar esto por: y.domain([0, d3.max(objetoMoneda.datos, function (d) { return d.precio; })]);
// y verán que es difícil ver los cambios. Acá estamos cortando la base para que no comience en 0 sino en el menor precio.

y.domain([
  d3.min(objetoMoneda.datos, function (d) {
    return d.precio;
  }),
  d3.max(objetoMoneda.datos, function (d) {
    return d.precio;
  }),
]);
svg.selectAll('.ejeY').transition().duration(300).call(ejeY);

// Pasamos los datos actuales a la linea que vamos a pintar
const linea = svg.selectAll('.linea').data([objetoMoneda.datos], function (d) {
  return d;
});

// Finalmente pintamos la línea
linea
  .join('path')
  .attr('class', 'linea')
  .transition()
  .duration(300)
  .attr(
    'd',
    d3
      .line()
      .x(function (d) {
        return x(d.fecha); // El eje X son las fechas
      })
      .y(function (d) {
        return y(d.precio); // El eje Y son los precios
      })
  )
  .attr('fill', 'none')
  .attr('stroke', '#42b3f5') // Pueden cambiar el color de la línea
  .attr('stroke-width', 2.5); // Grosor de la línea
```

Llegamos al final, ¡felicitaciones!, si todo lo copiaron bien pueden hacer clic en "Run" y verán la visualización en vivo. A continuación dejo el código completo por si quieren comparar:

#### Código final

```js
/**
 * Fuente de datos y modelado
 */

// Conectamos nuestra aplicación al API de coincap.
// Vamos a solicitar actualizaciones de precios para: bitcoin, ethereum, monero y litecoin.
var preciosEndPoint = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero,litecoin');

// Cuando una de las criptomonedas cambia de precio, ejecutamos la función procesarNuevoMensaje.
preciosEndPoint.onmessage = procesarNuevoMensaje;

/**
 * Preprocesamiento y Modelado:
 * El API nos envía sólo 1 tipo de dato que es el precio actual de las criptomonedas.
 * A pesar de esto, podemos hacer cálculos matemáticos para producir una estructura de datos que nos permita darle sentido al cambio de precios que vamos a mostrar en la visualización.
 */
const monedas = [
  { nombre: 'bitcoin', precioActual: null, precioMasAlto: null, precioMasBajo: null, datos: [] },
  { nombre: 'ethereum', precioActual: null, precioMasAlto: null, precioMasBajo: null, datos: [] },
  { nombre: 'monero', precioActual: null, precioMasAlto: null, precioMasBajo: null, datos: [] },
  { nombre: 'litecoin', precioActual: null, precioMasAlto: null, precioMasBajo: null, datos: [] },
];

// Función que recibe los mensajes del Socket
function procesarNuevoMensaje(mensaje) {
  // Convertimos los datos de texto a formato JSON
  var mensajeJson = JSON.parse(mensaje.data);

  // Iteramos sobre los valores del mensaje que vienen en parejas de "nombre": "precio"
  for (var nombreMoneda in mensajeJson) {
    // En el siguiente loop, pasamos por cada objeto que definimos en la variable "monedas" que contiene la nueva estructura de datos que queremos llenar.
    for (var i = 0; i < monedas.length; i++) {
      // objetoMoneda va a ser cada uno de los objetos del modelado, por ejemplo:
      // cuando i = 0, objetoMoneda es: {nombre: "bitcoin", precioActual: null, precioMasAlto: null, precioMasBajo: null, datos: []}
      var objetoMoneda = monedas[i];

      // Comparamos el nombre de la moneda en nuestro modelo con el nombre de la moneda que cambió de valor y fue enviado por la API en el mensaje actual.
      // Si coinciden, significa que podemos actualizar los datos de nuestro modelo para esa moneda
      if (objetoMoneda.nombre === nombreMoneda) {
        // Extraemos el precio actual que llegó en el mensaje y lo guardamos en una variable para usarla varias veces de ahora en adelante.
        var nuevoPrecio = mensajeJson[nombreMoneda];

        // En JavaScript, podemos insertar un nuevo elemento a un array usando push()
        // Aquí estamos sumando una nueva entrada a los datos de la moneda que acaba de cambiar el precio.
        // En nuestra estructura de modelado: {nombre: "bitcoin", precioActual: null, precioMasAlto: null, precioMasBajo: null, datos: []}
        // va a quedar guardada en el array "datos"
        objetoMoneda.datos.push({
          fecha: Date.now(), // Este va a ser nuestro eje X, usamos la fecha del presente ya que la aplicación funciona en tiempo real.
          precio: nuevoPrecio, // El eje Y en la visualización va a ser el precio.
        });

        // Volviendo a la estructura: {nombre: "bitcoin", precioActual: null, precioMasAlto: null, precioMasBajo: null, datos: []}
        // podemos cambiar directamente el precioActual de la moneda con el precio que acaba de llegar de la API.
        objetoMoneda.precioActual = nuevoPrecio;

        // Ahora hagamos algo más interesante, vamos a guardar el precio más alto al que ha llegado la moneda.
        // La siguiente comparación revisa si el valor NO es "null" con: !objetoMoneda.precioMasAlto,
        // O si el precio que acaba de llegar es mayor al precioMasAlto guardado en nuestro modelo.
        if (!objetoMoneda.precioMasAlto || objetoMoneda.precioMasAlto < nuevoPrecio) {
          // Si alguna de estas dos pruebas es verdadera, cambiamos el precioMasAlto en el modelo.
          objetoMoneda.precioMasAlto = nuevoPrecio;
        }
        // Hacemos lo mismo para el precioMasBajo haciendo la comparación invertida.
        if (!objetoMoneda.precioMasBajo || objetoMoneda.precioMasBajo > nuevoPrecio) {
          objetoMoneda.precioMasBajo = nuevoPrecio;
        }

        // Para terminar, actualizamos la gráfica que tengamos seleccionada en el menú
        if (nombreMoneda === menu.value) {
          actualizar(monedas[i]);
        }
      }
    }
  }
}
/** FIN de Preprocesamiento y modelado. */

/**
 * Visualización y textos dinámicos
 */

// En JavaScript podemos extraer elementos del HTML para actualizar su contenido dinámicamente.
// Si van al archivo index.html van a ver que hay 2 elementos vacíos con los siguientes ids: <p id="contexto1"></p>  <p id="contexto2"></p>
// Los vamos a guardar en variables para luego insertar el contenido a medida que los datos se actualizan.
var contexto1 = document.getElementById('contexto1');
var contexto2 = document.getElementById('contexto2');

// Este objeto es una ayuda nativa de JavaScript para convertir números a un formato de moneda.
// Pueden leer más en: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
var formatoUSD = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

/**
 * Gráfica
 */
// Pueden cambiar los valores de estas variables para cambiar el tamaño del contenedor.
// Usamos margenes para darle espacio a los textos de cada eje.
var margen = { top: 10, right: 30, bottom: 30, left: 100 };
var ancho = 800 - margen.left - margen.right;
var alto = 400 - margen.top - margen.bottom;

// En D3 seleccionamos el elemento de HTML donde vamos a insertar la gráfica, en index.html es: <div id="modulo2"></div>
const svg = d3
  .select('#modulo2') // elemento existente en el HTML para insertar gráfica
  .append('svg')
  .attr('width', ancho + margen.left + margen.right)
  .attr('height', alto + margen.top + margen.bottom)
  .append('g')
  .attr('transform', `translate(${margen.left},${margen.top})`);

// Definición general de cada eje:

// El eje x es el tiempo que en nuestros datos guardamos en cada instancia usando Date.now() que representa la fecha
// D3 puede procesar fechas usando la escala "scaleTime()"
// El rango va de 0 al ancho de la gráfica.
const x = d3.scaleTime().range([0, ancho]);
const ejeX = d3.axisBottom().scale(x);
svg.append('g').attr('transform', `translate(0, ${alto})`).attr('class', 'ejeX');

// El eje Y representa la variación de precios.
// Usamos la escala lineal en D3:
const y = d3.scaleLinear().range([alto, 0]);
const ejeY = d3.axisLeft().scale(y);
svg.append('g').attr('class', 'ejeY');

// Esta función la ejecutamos cuando hay datos nuevos o al cambiar la criptomoneda en el menú.
// Recibe el objeto completo de una criptomoneda como lo definimos en el modelo.
// Por ejemplo: { nombre: 'bitcoin', precioActual: null, precioMasAlto: null, precioMasBajo: null, datos: [] },
function actualizar(objetoMoneda) {
  // Este texto es una combinación entre textos estáticos y variables.
  // De momento no es muy descriptivo, deben modificarlo para comenzar a ser más claros con el público general.
  // El que ven en el ejemplo terminado es:
  // contexto1.innerText = "Actualmente, el precio de " + menu.value + " es de: " + formatoUSD.format(objetoMoneda.precioActual) + " USD.";
  contexto1.innerText = '- ' + menu.value + ': ' + formatoUSD.format(objetoMoneda.precioActual) + ' USD.';

  // Para el segundo texto vamos a hacer comparaciones entre el precio inicial y el actual.
  // El texto va a indicar si es igual, ha subido o bajado y la diferencia de cuanto ha cambiado el precio.
  var precioInicial = objetoMoneda.datos[0].precio;

  if (precioInicial < objetoMoneda.precioActual) {
    var diferencia = objetoMoneda.precioActual - precioInicial;
    contexto2.innerText = 'subió + ' + formatoUSD.format(diferencia);
  } else if (precioInicial > objetoMoneda.precioActual) {
    var diferencia = precioInicial - objetoMoneda.precioActual;
    contexto2.innerText = 'bajó - ' + formatoUSD.format(diferencia);
  } else {
    contexto2.innerText = 'igual = 0';
  }

  // El eje X que definimos antes lo actualizamos con un método de d3 que busca el rango de fechas en todos los datos disponibles hasta el momento.
  // Van a ver que al principio este rango es muy pequeño y se va incrementando a medida que hay más datos.
  // Los dominios en d3 se definen con un array con dos valores, el primero es el mínimo y el segundo el máximo:
  // x.domain([min, max])
  x.domain(
    d3.extent(objetoMoneda.datos, function (d) {
      return d.fecha;
    })
  );
  // Hace una transición animada al actualizar el ejeX, la duración es de 300 milisegundos
  svg.selectAll('.ejeX').transition().duration(300).call(ejeX);

  // Otra forma de definir el rango del dominio es buscar el menor y mayor valor en los datos.
  // El método d3.extent hace exactamente lo mismo, pero dejo este diferente como ejemplo.
  // Intenten cambiar esto por: y.domain([0, d3.max(objetoMoneda.datos, function (d) { return d.precio; })]);
  // y verán que es difícil ver los cambios. Acá estamos cortando la base para que no comience en 0 sino en el menor precio.

  y.domain([
    d3.min(objetoMoneda.datos, function (d) {
      return d.precio;
    }),
    d3.max(objetoMoneda.datos, function (d) {
      return d.precio;
    }),
  ]);
  svg.selectAll('.ejeY').transition().duration(300).call(ejeY);

  // Pasamos los datos actuales a la linea que vamos a pintar
  const linea = svg.selectAll('.linea').data([objetoMoneda.datos], function (d) {
    return d;
  });

  // Finalmente pintamos la línea
  linea
    .join('path')
    .attr('class', 'linea')
    .transition()
    .duration(300)
    .attr(
      'd',
      d3
        .line()
        .x(function (d) {
          return x(d.fecha); // El eje X son las fechas
        })
        .y(function (d) {
          return y(d.precio); // El eje Y son los precios
        })
    )
    .attr('fill', 'none')
    .attr('stroke', '#42b3f5') // Pueden cambiar el color de la línea
    .attr('stroke-width', 2.5); // Grosor de la línea
}

// FIN de Visualización y textos dinámicos

/**
 * MENÚ
 */
var menu = document.getElementById('menuMonedas');

menu.onchange = function () {
  var objetoMoneda = monedas.find(function (obj) {
    return obj.nombre === menu.value;
  });
  actualizar(objetoMoneda);
};
// ----- FIN MENÚ ----
```
