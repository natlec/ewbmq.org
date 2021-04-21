export default {
  ssr: false,
  analyze: true,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'EWBMQ — Engineers Without Borders Macquarie University',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'We are EWBMQ, a newly-formed chapter of EWB at Macquarie University. We aim to bring awareness and create social value through humanitarian and sustainable engineering through a variety of events, including: School Outreach Programs, Hackathons, Design Summits and much more.' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'EWBMQ — Engineers Without Borders Macquarie University' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'We are EWBMQ, a newly-formed chapter of EWB at Macquarie University. We aim to bring awareness and create social value through humanitarian and sustainable engineering through a variety of events, including: School Outreach Programs, Hackathons, Design Summits and much more.' },
      { hid: 'twitter:image', name: 'twitter:image', content: '/social.png' },
      { hid: 'og:type', content: 'website' },
      { hid: 'og:title', name: 'og:title', content: 'EWBMQ — Engineers Without Borders Macquarie University' },
      { hid: 'og:description', name: 'og:description', content: 'We are EWBMQ, a newly-formed chapter of EWB at Macquarie University. We aim to bring awareness and create social value through humanitarian and sustainable engineering through a variety of events, including: School Outreach Programs, Hackathons, Design Summits and much more.' },
      { hid: 'og:image', name: 'og:image', content: '/social.png' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/typeface-red-hat-display@1.1.13/index.css', integrity: 'sha256-ufSNTM2+CubHCwLVvF5pW782ilMbGqkDF1WsaV3Td0s=', crossorigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/typeface-pt-serif@1.1.13/index.css', integrity: 'sha256-4WeerH+X1JEs+stpOplYmRe3xcPyuex8fmJxq9lOi18=', crossorigin: 'anonymous' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/ewb-favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/ewb-favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '64x64', href: '/ewb-favicon-64x64.png' }
    ],
    script: [
      { hid: 'hubspot', src: 'https://js.hsforms.net/forms/v2.js', defer: true }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/redirect-module',
    '@nuxtjs/robots'
  ],

  redirect: [
    { from: '^/join', to: '/', statusCode: 301 },
    { from: '^/meeting-notes', to: 'https://www.notion.so/e79473a92ddf4afd8b2c2b805b0c7bdd', statusCode: 301 },
    { from: '^/event-calendar', to: 'https://www.notion.so/b8fac119248948b08fd011f0712a7829', statusCode: 301 },
    { from: '^/constitution', to: 'https://www.notion.so/f9de2fec67544fce99c8dcb78f80f773', statusCode: 301 },
    { from: '^/forms', to: 'https://www.notion.so/a2f39258457d4bdca30d594912d39c28', statusCode: 301 },
    { from: '^/tasks', to: 'https://www.notion.so/58f48d6e6afa4b85bb54035aa8f3c5f7', statusCode: 301 },
    { from: '^/general-committee', to: 'https://www.notion.so/12bd15c9cc5a47d2b9d88611108c2d80', statusCode: 301 },
    { from: '^/event-plans', to: 'https://www.notion.so/2282ba7f33d743c0856a72f72cce3df1', statusCode: 301 },
    { from: '^/resources', to: 'https://www.notion.so/acd62c7881c14d7ab55c2f5941562a69', statusCode: 301 },
    { from: '^/join/general-committee', to: 'https://www.notion.so/dc92b8ff62ed489c8220f0951dc4184d', statusCode: 301 },
    { from: '^/finances', to: 'https://www.notion.so/275edb03d1694648bae8d3f94d673a75', statusCode: 301 }
  ],

  robots: {
    UserAgent: '*'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // eslint-disable-next-line no-empty-pattern
    extend (config, {}) {
      config.node = {
        fs: 'empty'
      }
    }
  }
}
