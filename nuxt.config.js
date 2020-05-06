const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/garment-decor-nuxt/'
  }
} : {}

export default {
  ...routerBase,

  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    {src: '@assets/js/plugins/owlcarousel/owl.carousel.min.css',  lang:'css'},
    {src: '@assets/js/plugins/owlcarousel/owl.theme.default.min.css',  lang:'css'},
    {src: '@assets/js/plugins/select2/select2.min.css',  lang:'css'},
    {src: '@assets/js/plugins/slider/nouislider.min.css',  lang:'css'},
    {src: '@assets/js/plugins/magnificpopup/magnific-popup.css',  lang:'css'},
    {src: '@assets/styles/style.css',  lang:'css'},
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@plugins/vue-see-on-github'},
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
  ],
  'google-gtag':{
    id: 'UA-165421608-1',

    config:{
      anonymize_ip: false, // anonymize IP
      send_page_view: false, // might be necessary to avoid duplicated page track on page reload
      linker:{
        domains:['yudin-s.github.io']
      }
    },
    debug: false, // enable to track in dev mode
    disableAutoPageTrack: false,
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
