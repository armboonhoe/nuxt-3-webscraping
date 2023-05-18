// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
    nitro: {
        devProxy: {
            "/api": {
                target: "http://localhost:3001",
                changeOrigin: true,
                prependPath: true,
            },
        },
    },
})
