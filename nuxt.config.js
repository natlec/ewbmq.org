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
      { property: 'twitter:title', name: 'twitter:title', content: 'EWBMQ — Engineers Without Borders Macquarie University' },
      { property: 'twitter:description', name: 'twitter:description', content: 'We are EWBMQ, a newly-formed chapter of EWB at Macquarie University. We aim to bring awareness and create social value through humanitarian and sustainable engineering through a variety of events, including: School Outreach Programs, Hackathons, Design Summits and much more.' },
      { property: 'twitter:image', name: 'twitter:image', content: 'https://ewbmq.org/social.png' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', name: 'og:title', content: 'EWBMQ — Engineers Without Borders Macquarie University' },
      { property: 'og:description', name: 'og:description', content: 'We are EWBMQ, a newly-formed chapter of EWB at Macquarie University. We aim to bring awareness and create social value through humanitarian and sustainable engineering through a variety of events, including: School Outreach Programs, Hackathons, Design Summits and much more.' },
      { property: 'og:image', name: 'og:image', content: 'https://ewbmq.org/social.png' },
      { property: 'og:url', name: 'og:url', content: 'https://ewbmq.org' }
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
