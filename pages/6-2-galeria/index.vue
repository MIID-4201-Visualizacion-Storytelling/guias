<template>
  <article>
    <h1>{{ page.title }}</h1>
    <p>
      La siguiente galería de proyectos es una colección de casos que les pueden dar inspiración e ideas para su
      proyecto final. Todos están hechos en Looker Studio, lo que quiere decir que todos están al alcance de lo que
      ustedes pueden llegar a hacer.
    </p>

    <p>
      De los casos que les muestro a continuación resalto en cada uno <strong>"lo bueno"</strong> y
      <strong>"lo malo"</strong> para que lo tengan en cuenta. Pero pueden ver más proyectos en la amplia galería de
      Looker Studio
      <a href="https://lookerstudio.google.com/gallery?category=community" target="_blank"
        >https://lookerstudio.google.com/gallery?category=community</a
      >. ¿Pueden identificar cuales tienen Storytelling y cuales no?
    </p>

    <section>
      <div class="proyecto">
        <a
          href="https://lookerstudio.google.com/u/0/reporting/1MgYU4KA4gkQ_JlzghInhYsgYYHlsJi-U/page/58xV"
          target="_blank"
        >
          <h3>The Big Mac Index</h3>
          <img src="/guias/vysimgs/galeria-1.jpg" alt="The Big Mac Index" />
        </a>
        <div class="descripcion">
          <p>
            <strong>Lo bueno:</strong> Excelente uso de texto introductorio, ofrece contexto y describe un problema que
            ya se ha identificado en el análisis de datos. Las visualizaciones complementan este relato claramente.
            Pueden hacer clic en cada país para ampliar la información presentada en la página principal, un detalle
            valioso para satisfacer la curiosidad que genera la vista principal.
          </p>
        </div>
      </div>

      <div class="proyecto">
        <a
          href="https://lookerstudio.google.com/u/0/reporting/9e3ad5bc-c4f5-4e15-95a0-71dd7c5c60c6/page/3nn6B"
          target="_blank"
        >
          <h3>Databloo</h3>
          <img src="/guias/vysimgs/galeria-2.jpg" alt="The Big Mac Index" />
        </a>
        <div class="descripcion">
          <p>
            <strong>Lo bueno:</strong> Tiene una paleta de colores limpia, las visualizaciones son efectivas y hace una
            buena distribución de los módulos en la página.
          </p>

          <p>
            <strong>Lo malo:</strong> Es un buen dashboard pero le falta storytelling, es un buen ejemplo de lo que
            quiero que superen en sus proyectos. Textos descriptivos o algo de contexto podría ayudar.
          </p>
        </div>
      </div>

      <div class="proyecto">
        <a
          href="https://lookerstudio.google.com/u/0/reporting/1oJdNeXvwgSmCto8LD6KJLcVHt7BRz1iW/page/r6LM"
          target="_blank"
        >
          <h3>U.S. Household Income Distribution by State (2016)</h3>
          <img src="/guias/vysimgs/galeria-3.jpg" alt="The Big Mac Index" />
        </a>
        <div class="descripcion">
          <p><strong>Lo bueno:</strong> Un excelente ejemplo de cómo usar bien una paleta de colores.</p>

          <p>
            <strong>Lo malo:</strong> Las datos producen gráficas muy parecidas entre sí, lo que dificulta la lectura
            detallada. El orden en el que se presenta cada estado no es muy clara pues la línea de referencia (25%)
            aparece múltiples veces y no sabemos a simple vista a qué se refiere ni podemos comparar todos los estados
            en general.
          </p>
        </div>
      </div>

      <div class="proyecto">
        <a
          href="https://lookerstudio.google.com/u/0/reporting/123f932c-0e29-4487-9186-c4b7df88967d/page/G1grB"
          target="_blank"
        >
          <h3>50-Year Flood values (gauge data is up to 2017)</h3>
          <img src="/guias/vysimgs/galeria-4.jpg" alt="The Big Mac Index" />
        </a>
        <div class="descripcion">
          <p>
            <strong>Lo bueno:</strong> Las secciones están bien interconectadas y los filtros permiten revisar los datos
            en detalle.
          </p>

          <p>
            <strong>Lo malo:</strong> El uso del color es problemático, por ejemplo, las variables que tienen colores
            parecidos no parecen estar conectadas directamente. Los números de color naranja sobre barras rojas hacen que
            se confundan por falta de contraste. El mapa de color compite con el resto, principalmente con las barras
            azules que se parecen al color de los cuerpos de agua en el mapa sin que tengan ninguna relación entre sí.
          </p>
        </div>
      </div>

      <div class="proyecto">
        <a
          href="https://lookerstudio.google.com/u/0/reporting/1-b3ckzPZwOHlw2Gd0zZmjOfCy73d6fKL/page/K7J3"
          target="_blank"
        >
          <h3>My Email Habits</h3>
          <img src="/guias/vysimgs/galeria-5.jpg" alt="The Big Mac Index" />
        </a>
        <div class="descripcion">
          <p>
            <strong>Lo bueno:</strong> Un buen ejemplo de "Scrollytelling", cada sección es clara y va revelando poco a
            poco más detalles del personaje. Los títulos de cada sección nos indican la personalidad del personaje y por
            la forma en que están redactados nos invitan a ser parte de la historia, como si nos estuviera hablando
            directamente.
          </p>

          <p>
            <strong>Lo malo:</strong> Podría mejorar en el uso del color pues casi todas las gráficas usan un tono de
            verde y azul pero representan variables muy diferentes. Podría mejorar usando una paleta más amplia para que
            un mismo color no represente tantas cosas diferentes a lo largo de la historia.
          </p>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, route }) {
    const page = await $content(route.name).fetch();

    return { page };
  },
};
</script>
