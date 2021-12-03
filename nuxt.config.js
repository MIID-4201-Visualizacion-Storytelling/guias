function reemplazarUrlImgs(file) {
  return file.replace(/\/vysimgs\//g, '/guias/vysimgs/');
}

function customMarkdownParser(file) {
  const MarkdownParser = require('@nuxt/content/parsers').Markdown;
  const { getOptions } = require('@nuxt/content/lib');

  const markdownOptions = getOptions().markdown;
  const md = new MarkdownParser(markdownOptions);

  const fileWithoutPrettierIgnore = reemplazarUrlImgs(file);
  return md.toJSON(fileWithoutPrettierIgnore);
}

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/guias/',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'guias',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/sitio.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Material+Icons': true,
        },
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    extendParser: {
      '.md': customMarkdownParser,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
