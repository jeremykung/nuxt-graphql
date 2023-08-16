// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    'nuxt-icon',
    '@nuxtjs/apollo',
  ],
  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN
  },
  content: {
    highlight: {
      theme: 'nord',
      preload: ['ts', 'js', 'css', 'java', 'json', 'bash', 'vue']
    }
  },
  apollo: {
    clients: {
      default: {
        tokenName: 'github-token',
        httpEndpoint: 'https://api.github.com/graphql'
      }
    },
  },
})