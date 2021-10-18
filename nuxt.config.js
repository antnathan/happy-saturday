export default {
  target: 'static',
  ssr: false,
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/hamburguer.svg' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/styles/pre-style.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: ['@/assets/styles/_variables.scss', '@/assets/styles/_mixins.scss']
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    '@nuxtjs/pwa'
  ],

  pwa: {
    icon: {
      purpose: 'maskable'
    },
    meta: {
      name: 'Happy Saturday',
      title: 'Happy Saturday',
      description: 'É um aplicativo para sortear o que comer no sábado!',
      theme_color: '#8c67ef',
      lang: 'pt-BR'
    },
    manifest: {
      name: 'Happy Saturday',
      title: 'Happy Saturday',
      description: 'É um aplicativo para sortear o que comer no sábado!',
      lang: 'pt-BR'
    }
  },

  srcDir: 'src/',
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
