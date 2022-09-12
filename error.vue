<script setup>
const error = useError();
console.log(error.value)
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
    <div class="root">
        <h1>{{ error.statusMessage }}</h1>
        <p>url is broken: <b>{{ error.url }}</b> </p>
        <NuxtLink to="/">Back to home</NuxtLink>
    </div>
    <div class="end"></div>
    <Footer />
</div>
</template>
<style lang="scss" scoped>
@import '~/assets/stylesheet/breakpoint.scss';
@import '~/assets/stylesheet/main.scss';
.root {
    width: 100%;
    min-height: 40vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;
    padding: 2em 0;
    gap: 1em;

    a {
        padding: 1em 2em; border: 1px solid $border;
        border-radius: .5em;
    }
}
h1{
    font-family: 'Chonburi', sans-serif;
    line-height: 1;
	font-size: clamp(24px, 2vw + 2em, 64px);
    font-weight: 100;
}
</style>