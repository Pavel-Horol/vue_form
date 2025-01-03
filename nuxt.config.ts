// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,
  modules: [
    '@ant-design-vue/nuxt',
    'maz-ui/nuxt',
    '@pinia/nuxt',
    '@vueuse/nuxt'
  ],
  pinia: {
    storesDirs: ['./stores/**']
  }
})