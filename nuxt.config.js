function reemplazarUrlImgs(file) {
  const ret = file.replace(/\/vysimgs\//g, '/guias/vysimgs/');

  return ret.replace(/\/vysvideos\//g, '/guias/vysvideos/');
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
  target: 'static',
  router: {
    base: '/guias/',
  },

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

  css: ['@/assets/scss/sitio.scss'],
  plugins: [],
  components: true,
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

  modules: ['@nuxt/content'],

  content: {
    extendParser: {
      '.md': customMarkdownParser,
    },
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-coldark-dark.css',
      },
    },
  },

  build: {
    standalone: true,
  },
};
