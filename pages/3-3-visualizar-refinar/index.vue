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
