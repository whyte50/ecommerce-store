<script setup>
const Alert =  defineAsyncComponent({ loader: () => import('~~/components/Alerts.vue') })
const route = useRoute()

useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} | Bottles 'N' Cans | Capstonbee` : `Bottles 'N' Cans | Capstonbee`;
    }
})
</script>

<template>
    <div>
        <template v-if="SITE_ACTIONS().alert.alert">
            <Alert />
        </template>
        <template v-if="SITE_ACTIONS().login">
            <AuthLogin />
        </template>
        <div id="cart" style="position:fixed; z-index:11; width: 100%;"></div>
        <!-- <NuxtLoadingIndicator /> -->
        <NavigationTop />
        <NavigationBottom />
        <NavigationMobile />
        <slot />
        <Footer />
    </div>
</template>