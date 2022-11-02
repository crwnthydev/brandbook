export default {
  ssr: true,

  /*
  ** Headers of the page
  */
  head: {
    title: '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-32.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Resources for components
  */
  styleResources: {
    scss: [
      '@/assets/scss/variables/_index.scss',
      '@/assets/scss/_mixins.scss'
    ]
  },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/index.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/modal'
  ],

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    'vue-ssr-carousel/nuxt'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-user-agent'
  ],

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },

  router: {
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
          return { selector: to.hash, offset: { x: 0, y: 800 } }
        } else {
          return { x: 0, y: 0 }
        }
    }
  },
  /* Layout Transitions */
  layoutTransition: {
    name: "switchlayout",
    mode: ""
  },
  /* Page Transitions */
  pageTransition: {
    name: "switchpage",
    mode: ""
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config) {
        config.module.rules.push({
          test: /\.(ai|zip|rar)$/,
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          },
        });
    }
  }
}
