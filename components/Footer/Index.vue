<script setup>

const route = useRoute();

</script>
<template>
    <div class="foot">
        <div class="end"></div>
        <template v-if="route.path === '/'"> <FooterNewsletter id="mail2"/> </template>
        <div> <FooterPromote /> </div>
        <FooterMobile />
        <FooterDesktop />
        <div id="mail"> <FooterNewsletter/> </div>
    </div>
</template>

<style lang="scss">
#mail {
    display: none;
    @media (min-width: 768px) and (orientation: landscape) { display: flex; }
}
#mail2 {
    display: flex;
    @media (min-width: 768px) and (orientation: landscape) { display: none; }
}
// .foot { position: fixed; bottom: 0; left: 0; right: 0;}
</style>