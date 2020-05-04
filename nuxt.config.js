import { yndxmetrica } from './config'

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Timeline | Alexander Katkov',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Timeline | Alexander Katkov' },
      { name: 'yandex-verification', content: '4d326bd5bf7a7a00' },
      { name: 'google-site-verification', content: 'deCx-bcP03tQEi9Fym7RzIYsdvZkBMZC77yhPfZdjMg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap' }
    ]
  },
  css: [
    '~assets/stylus/common.styl'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#5CE6CD',
    height: '3px'
  },
  plugins: [
    '~plugins/gtag-loader',
    '~plugins/vuescroll-loader',
    '~plugins/stylus-variables-loader'
  ],
  modules: [
    [
      '@nuxtjs/yandex-metrika',
      yndxmetrica
    ]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
