// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    'nuxt-feather-icons',
    '@pinia/nuxt',
    '@nuxtjs/eslint-module',
    '@formkit/auto-animate',
    '@vueuse/nuxt'
  ]
})
