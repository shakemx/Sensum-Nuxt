export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Sensum Soluciones Inmobiliarias',
    htmlAttrs: {
      lang: 'es',
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
  css: [
    // CSS File in the project
    '@/assets/estilos.css',
    // SCSS File in the project
    '@/assets/estilos.scss',
    
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/myplugin.js', mode: 'client'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    'vue-scrollto/nuxt',
  ],

  buildModules: [
    '@nuxtjs/fontawesome',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  fontawesome:{
    icons:{
      solid:['faEnvelope', 'faHouse', 'faLocationDot', 'faPhoneFlip', 'faUserSecret', 'faMapMarkedAlt', 'faBed', 'faCubes', 'faBath', 'faCar', 'faPaw', 'faQuoteLeft', 'faQuoteRight', 'faExclamationCircle', 'faTimes', 'faUserCheck', 'faUser', 'faClipboardCheck', 'faAngleUp'],
      brands:['faAngellist', 'faFacebook', 'faFacebookF', 'faFacebookSquare', 'faInstagramSquare', 'faPagelines', 'faPinterestSquare', 'faTiktok',  'faWhatsapp',  'faYoutubeSquare']
    }
  },

  bootstrapVue: {
    icons: true,
    bootstrapCSS: true,
    bootstrapVueCSS: true, 
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
