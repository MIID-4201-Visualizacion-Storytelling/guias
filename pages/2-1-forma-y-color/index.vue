<template>
  <article>
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
import * as d3 from 'd3';
export default {
  async asyncData({ $content, route }) {
    const page = await $content(route.name).fetch();

    return { page };
  },

  mounted() {
    const barras1 = document.getElementById('barras1');
    const burbujas1 = document.getElementById('burbujas1');
    const data = [8, 2];

    data.forEach((valor) => {
      // Barras
      const barra = document.createElement('span');
      const conteo = document.createElement('span');

      Object.assign(barra.style, {
        display: 'inline-block',
        width: `${valor * 10}px`,
        height: '350px',
        backgroundColor: 'rgba(67, 167, 67, 0.7)',
        marginRight: '20px',
      });

      Object.assign(conteo.style, {
        textAlign: 'center',
        width: '100%',
        display: 'block',
        fontSize: '0.8em',
        fontWeight: 'bold',
      });

      barra.appendChild(conteo);
      barras1.appendChild(barra);

      // Burbujas
      const burbuja = document.createElement('span');
      const conteo2 = document.createElement('span');

      Object.assign(burbuja.style, {
        display: 'inline-block',
        marginRight: '20px',
        width: '150px',
        height: `${valor * 10}px`,
        backgroundColor: 'rgba(60, 109, 165, 0.7)',
        borderRadius: '50%',
        verticalAlign: 'middle',
      });

      Object.assign(conteo2.style, {
        textAlign: 'center',
        width: '100%',
        display: 'block',
        fontSize: '0.8em',
        fontWeight: 'bold',
        height: ' 100%',
        transform: 'translateY(20%)',
      });

      burbuja.appendChild(conteo2);
      burbujas1.appendChild(burbuja);

      conteo.innerText = conteo2.innerText = valor;
    });
  },
};
</script>
