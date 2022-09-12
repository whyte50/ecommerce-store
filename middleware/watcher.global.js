export default defineNuxtRouteMiddleware((to, from) => {
    const nuxt = useNuxtApp();
    nuxt.hook('page:start', () => {
        if (to.fullPath !== from.fullPath) {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        }
    })
})