import colors from "vuetify/es5/util/colors";

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  ssr: false,
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: "%s Standardprofit",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0 maximum-scale=1.0, user-scalable=no",
      },
      {
        hid: "description",
        name: "description",
        content:
          process.env.npm_package_description ||
          "Standardprofit is where you trade Bitcoin and other cryptocurrencies without having prior knowledge of computers. Just create a one-time account, fund and cashout weekly.",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon" }],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: "@/plugins/aos", ssr: false },
    { src: "@/plugins/crypto", ssr: false },
    { src: "@/plugins/vue-cookies", ssr: false },
    { src: "@/plugins/axios", ssr: false },
    { src: "@/plugins/vue-json-excel", ssr: false },
    { src: "@/plugins/vidle", ssr: false },
    { src: "~/plugins/mono", ssr: false },
    { src: "~/plugins/vue-dragscroll", ssr: false },
    { src: "~/plugins/vue-social-sharing", ssr: false },
    { src: "~/plugins/vue-youtube", ssr: false },
    { src: "~/plugins/v-google-translate", ssr: false },
  ],
  /*
   ** Router Settings
   */
  router: {
    middleware: "authenticated",
  },

  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module",
    "@nuxtjs/vuetify",
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    "@nuxtjs/pwa",
    "@neneos/nuxt-animate.css",
  ],

  /*
   ** modifying the default loader
   */
  loadingIndicator: {
    name: "wandering-cubes",
    color: "#1a71f5",
    background: "white",
  },

  loading: {
    color: "#1a71f5",
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        light: {
          primary: "#06063d",
          dark: "#1A006B",
          secondary: "#1a71f5",
          accent: "#0094FF",
          text1: "#555A68",
          text3: "#0C1529",
          text2: "#373F53",
          light: "#F2F2F2",
          info: colors.teal.lighten1,
          warning: "#FF8F00",
          error: "#EB5757",
          success: "#0FC236",
        },

        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  // build: {
  //   extend(config, ctx) {
  //     if (ctx.isDev && ctx.isClient) {
  //       config.module.rules.push({
  //         enforce: "pre",
  //         test: /\.(js|vue)$/,
  //         loader: "eslint-loader",
  //         exclude: /(node_modules)/,
  //         options: {
  //           fix: true,
  //         },
  //       });
  //     }
  //   },
  // },
  generate: {
    fallback: true,
  },
};
