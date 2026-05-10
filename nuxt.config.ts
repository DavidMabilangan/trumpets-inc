export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: "Trumpets Inc",
      meta: [
        { name: 'description', content: '' }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap'
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/logo.svg'
        }
      ]
    }
  },
  compatibilityDate: '2025-07-15',
  components: [
    {
      path: '~/components/templates',
      pathPrefix: false
    }
  ],
  css: ['@/assets/stylus/default.styl'],
  devtools: { enabled: false },
  modules: [
    '@nuxt/image',
    '@nuxt/scripts',
    '@pinia/nuxt'
  ]
})