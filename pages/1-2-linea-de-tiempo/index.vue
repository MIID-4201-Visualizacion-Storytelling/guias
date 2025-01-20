<template>
  <article>
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page" />
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

<!-- <template>
  <article>
    <iframe
      id="lineaDeTiempo"
      src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1YHvMqAdKJmeaid-zL3G3SAk1oK8zqNLqyAvFzesOtcY&font=Default&lang=en&initial_zoom=2"
      frameborder="0"
    ></iframe>
  </article>
</template>

<style lang="scss" scoped>
article {
  margin: 0;
}

#lineaDeTiempo {
  width: 100vw;
  height: 98vh;
}
</style> -->
