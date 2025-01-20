---
title: Estado de las herramientas BI y su paralelo con código
description: '...'
---

## Introducción

Hasta este momento del curso nos hemos enfocado en la creación de dashboards con herramientas prediseñadas. En particular con _Looker Studio_, el cual nos permite:

- Conectar una base de datos estática con facilidad.
- Modelar los datos en una interfaz amigable.
- Crear visualizaciones con mínimo esfuerzo.

Pero hay dos tipos de problemas comunes con estas herramientas que nos obligan a programar una propia: No podemos conectar nuestra fuente de datos, o el tipo de visualización que quisiéramos usar no está disponible en la galería de gráficas. Incluso en el modelado de datos dentro de _Looker Studio_, a veces tenemos que programar scripts para producir una nueva estructura de datos (tal cual lo vimos la semana pasada).

En su vida profesional, idealmente ustedes pueden llegar a ser lo suficientemente versátiles para resolver cualquier problema de visualización y es por lo que esta semana vamos a revisar los principios fundamentales para programar una herramienta propia. Específicamente vamos a crear un dashboard con datos en vivo de los cambios en precio de algunas criptomonedas populares: Bitcoin, Ethereum, Monero y Litecoin. Para eso vamos a usar una fuente de datos gratuita llamada CoinCap (https://docs.coincap.io/) la cual ofrece datos en tiempo real por medio de una API. Si quisiéramos trabajar con datos de criptomonedas en _Looker Studio_, tendríamos que usar datos históricos, pero vamos a ir un poco más lejos con el desarrollo de una aplicación con datos en vivo.

Para simplificar el proceso y darles insumos para su proyecto final, vamos a usar una de las librerías más populares de visualización de datos en páginas web que se llama D3. Pero antes de entrar al código, vamos a hacer un paralelo entre lo que ya conocen de Looker Studio y las partes de una aplicación en código.

### Conectar Datos

En _Looker Studio_ ya vimos que la primera opción cuando creamos un reporte es decidir el conector a la fuente de datos. Hemos usado archivos estáticos en .csv y también el de “Google Sheets”. Otras fuentes populares serían “PostgreSQL” o “MySQL”, las cuales deben estar alojadas en algún servidor con el cual hacer la conexión. En todos estos casos, _Looker Studio_ importa una instancia de los datos y actualiza la fuente al ritmo que definamos en **“Data freshness”**.

Para definir cada cuanto debe actualizar _Looker Studio_ nuestros datos, van a **“Resources -> Manage added data sources -> EDIT”**. En la parte superior van a ver que por lo general está predeterminado para actualizar cada 15 minutos:

<img src="/vysimgs/refresh-rate.jpg" alt="Refresh Rate" />

> **Figura 1**  
> _Frecuencia con la que Looker Studio actualiza la fuente de datos_

Al seleccionarla, les aparecen diferentes opciones que van desde 15 minutos hasta 12 horas, con la advertencia de que actualizaciones muy frecuentes pueden volver lenta la aplicación o incurrir en altos gastos si nuestro conector es de pago (por ejemplo: BigQuery o Amazon Redshift).

<img src="/vysimgs/opciones-refresh-rate.jpg" alt="Opciones Refresh Rate" />

> **Figura 2**  
> _Opciones de frecuencia para actualizar los datos en Looker Studio_

Esta puede ser una gran limitación considerando el mercado actual de fuentes de datos en internet. Hay una creciente disponibilidad de fuentes, incluso gratuitas, que nos abren espacios de investigación potentes a los profesionales de “Analytics”. Sobre todo, si el fenómeno que estamos estudiando cambia constantemente. Consideren por ejemplo los datos de redes sociales, sensores, mercados de valores o criptomonedas, los cuales contienen información que está cambiando constantemente, cada segundo incluso (muy por encima de los 15 minutos que nos permite _Looker Studio_).

<!--div id="api">
  <div class="icono">
    <span class="material-icons servicio">storage</span>
    <p>Base de datos</p>
  </div>
  <span class="material-icons">settings_ethernet</span>

  <div class="icono">
    <span class="material-icons servicio">dns</span>
    <p>Servicio Web</p>
  </div>
  <span class="material-icons">settings_ethernet</span>
  <span class="texto">API</span>
  <span class="material-icons">sync_alt</span>
  <div class="icono">
    <span class="material-icons servicio">wifi</span>
    <p>Internet</p>
  </div>
  <span class="material-icons">sync_alt</span>
  <div class="icono">
    <span class="material-icons servicio">devices</span>
    <p>Nuestra Aplicación</p>
  </div>
</div-->

En estos casos, se vuelve necesario acudir a las fuentes de datos a medida que van cambiando por medio de APIs. API o Aplication Programming Interface (Interfaz de Programación de Aplicaciones) es, como su nombre lo indica, una interfaz que permite conectar una aplicación con otra por medio de la programación. La siguiente gráfica resume la forma como conectamos nuestras aplicaciones propias a una fuente de datos por medio de una API:

<img src="/vysimgs/api.jpg" alt="API" />

> **Figura 3**  
> _¿Qué es una API?_

Una API tiene acceso exclusivo a una base de datos por medio de un servicio web. Nosotros, desde nuestra aplicación, únicamente tenemos acceso a las partes de la base de datos que la API nos ofrece por medio de su interfaz programable. La API puede ofrecer dos tipos de protocolos para hacer la transferencia de los datos: **RESTful API** o **WebSockets**. La diferencia principal es que en RESTful tenemos que pedir los datos en el momento que los necesitamos, mientras que con WebSockets, la API nos va mandando nuevos datos a medida que se vuelven disponibles.

### RESTful API

Los RESTful son útiles cuando necesitamos unos datos en específico, por ejemplo, datos de contexto o que no cambian con tanta frecuencia. Veamos por ejemplo cómo pedir una lista de criptomonedas (con sus metadatos) a la API CoinCap. En JavaScript podemos usar la función nativa `fetch()` para esto:

```js
// La función fetch recibe como parámetro una URL que contiene nuestra petición
fetch('https://api.coincap.io/v2/assets')
  // fetch() es una función asincrónica pues no sabemos cuánto se demoran los datos en volver.
  // El método then() espera la respuesta y ejecuta la función que pasamos como parámetro:
  .then(function (respuesta) {
    // Las API envían los datos en bloques de texto que debemos interpretar. Casi siempre ese bloque de texto representa unos datos en formato JSON.
    // La respuesta del servidor tiene un método que hace esta conversión de texto (string) a JSON.
    return respuesta.json();
  })
  // Cuando termina de convertir el texto a JSON, ya tenemos nuestros datos listos para usar en nuestra aplicación.
  .then(function (datos) {
    // ¡Listo! tenemos datos en la aplicación :)
    console.log(datos);
  });
```

Para hacer un paralelo con _Looker Studio_, cuando decimos en la programación:

```js
fetch('https://api.coincap.io/v2/assets');
```

Es igual a elegir el conector a la fuente de datos cuando creamos un nuevo reporte ("File Upload", "Google Sheets", etc.):

<img src="/vysimgs/gds-fuentes-datos.jpg" alt="Fuentes de datos" />

> **Figura 4**  
> _Fuentes de datos en Looker Studio_

Luego, cuando decimos:

```js
.then(function (respuesta) {
  return respuesta.json();
})
```

Es lo que hace _Looker Studio_ cuando define nuestras variables iniciales estructuradamente:

<img src="/vysimgs/modelado-source.jpg" alt="Fuentes de datos" />

> **Figura 5**  
> _Variables disponibles en la fuente de datos dentro de Looker Studio_

La última parte del código:

```js
.then(function (datos) {
  console.log(datos);
});
```

Es donde podemos procesar, modelar y visualizar los datos. Por ejemplo, los datos que nos llegan de _CoinCap_ con esta petición se ven así en formato JSON:

```json
{
"data": [
  {
  "id": "bitcoin",
  "rank": "1",
  "symbol": "BTC",
  "name": "Bitcoin",
  "supply": "18951743.0000000000000000",
  "maxSupply": "21000000.0000000000000000",
  "marketCapUsd": "839966409696.2923833657177708",
  "volumeUsd24Hr": "15244239444.1089104089268283",
  "priceUsd": "44321.3275790143620756",
  "changePercent24Hr": "3.4617717617476872",
  "vwap24Hr": "43471.5923631324538537",
  "explorer": "https://blockchain.info/"
  },
  {
  "id": "ethereum",
  "rank": "2",
  "symbol": "ETH",
  "name": "Ethereum",
  "supply": "119490782.6240000000000000",
  "maxSupply": null,
  "marketCapUsd": "377350905855.5371618621227082",
  "volumeUsd24Hr": "9735280903.0386220208339932",
  "priceUsd": "3157.9917510703905946",
  "changePercent24Hr": "2.5142105047782295",
  "vwap24Hr": "3122.9230499003399223",
  "explorer": "https://etherscan.io/"
  },
  // ...
]
```

### WebSockets

Mientras que con RESTful hacemos peticiones a la API para que nos envíe datos, con WebSockets lo que pedimos es abrir un canal de comunicación entre la API y nuestra aplicación. Este protocolo es muy liviano y se usa normalmente en aplicaciones de tiempo-real como un chat, actualizaciones pequeñas a una interfaz, o en nuestro caso, para recibir cambios de precio en criptomonedas. Veamos cómo se ve esto en JavaScript:

```js
// El explorador (Chrome, Firefox, etc.) abre el canal de comunicación (o Socket) con la API.
// Pueden ver la documentación de la API en: https://docs.coincap.io/#37dcec0b-1f7b-4d98-b152-0217a6798058
var preciosEndPoint = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero,litecoin');

// Como no sabemos cuándo van a llegar los datos, creamos un evento (Event en JavaScript) para que ejecute una función cuando lleguen mensajes por el Socket.
preciosEndPoint.onmessage = function (mensaje) {
  // Al igual que en RESTful, los datos llegan en formato texto y debemos convertirlos a JSON.
  var mensajeJson = JSON.parse(mensaje.data);
  // ¡Listo! ya tenemos datos, podemos procesarlos y visualizarlos.
};
```

Con WebSockets, los datos llegan de la API a una frecuencia indeterminada, en nuestro caso llegan cuando se produce un cambio de precio en alguna de las criptomonedas que registramos al crear el WebSocket `new Websocket(....assets=bitcoin,ethereum,monero,litecoin)`, que como van a ver más adelante, oscila entre 1 y 15 segundos.

## Conclusión

Mientras que en _Looker Studio_ trabajamos principalmente con datos estáticos, con programación podemos aprovechar las APIs para crear aplicaciones que pueden usar datos estáticos (con RESTful) o datos en tiempo real (con WebSockets). Hasta ahora vimos las bases de cómo conectar la fuente de datos a una aplicación en JavaScript, en el siguiente tutorial vamos a construir una aplicación completa usando la API de _CoinCap_.
