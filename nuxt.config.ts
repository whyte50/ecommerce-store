import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ['~/assets/stylesheet/main.scss', '~/assets/stylesheet/breakpoint.scss'],
    meta: {
        link: [
            {
                rel: 'preconnect',
                href: "https://fonts.googleapis.com"
            },
            {
                rel: 'preconnect',
                href: "https://fonts.gstatic.com",
                crossOrigin: true
            },
            {
                rel: 'stylesheet',
                href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Poppins:wght@300;600;700;900&family=Chonburi&family=Seaweed+Script&display=swap"
            }
        ]
    },
    modules: ['@pinia/nuxt'],
    runtimeConfig: {
        endpoint: process.env.ENDPOINT,
        project: process.env.PROJECT
    }
})
