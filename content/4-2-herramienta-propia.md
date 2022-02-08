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

Vamos a hacerlo juntos, paso por paso, así que no se preocupen si nunca han creado una aplicación web. La idea con este tutorial es que se hagan a una idea general del proceso de visualización por medio de la programación. Vamos a hacer paralelos con lo que han aprendido de Google Data Studio para que puedan reconocer las similitudes y diferencias entre las herramientas prediseñadas y la creación de una herramienta propia. Con estas bases pueden explorar autónomamente nuevas fuentes de datos con diferentes APIs en futuros proyectos.

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

Volamos ahora a la función donde recibimos mensajes nuevos de la API para introducirlos a la estructura que definimos en la variable `const monedas = [...]` anteriormente:

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
