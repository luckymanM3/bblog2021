export default {
  env: {
    strapiBaseUri: process.env.API_URL || "http://localhost:1337"
  },

  head: {
    title: "balalaika",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Staatliches"
      }
    ]
  },

  css: ["~/assets/styles/shared.css"],

  plugins: [{ src: "@/plugins/click-outside", mode: "client" }],

  components: true,

  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss"
  ],

  modules: ["@nuxtjs/apollo", "@nuxtjs/markdownit"],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.BACKEND_URL || "http://localhost:1337/graphql"
      }
    }
  },
  markdownit: {
    preset: "default",
    linkify: true,
    breaks: true,
    injected: true,
    runtime: true
  },

  loadingIndicator: {
    name: "chasing-dots",
    color: "purple",
    background: "green"
  },

  // loading: {
  //   color: "blue",
  //   height: "55px"
  // },

  build: {
    extend(config, ctx) {} // blah blah
  },

  server: {
    host: "0.0.0.0"
  }
};
