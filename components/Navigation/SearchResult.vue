<script setup>

</script>

<template>
    <div class="bound" id="bound">
        <NuxtLink class="result" v-for="search in DB_PRODUCTS().SEARCH_RESULTS" :key="search.$id" :to="`/products/${search.$id}`">
            <img :src="fetchSingleImage(search.image, 30, 30)" :alt="search.title">
            <p>{{ search.title }}</p>
        </NuxtLink>
        <div id="bounds">
            <p>No matching drinks <NuxtLink to="/">browse all</NuxtLink> </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
a:focus { border: 0;}
.bound {
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 6px;

    max-height: 300px;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    .result {
        width: 276px;
        min-height: 45px;

        display: flex;
        align-items: center;
        border-bottom: 1px solid #ccc;
        background: #fff;
        padding: .5em 1em;

        @media (min-width:1024px) {min-height: 30px;}
        img { border-radius: 30px; margin: 0 1em 0 1em }
        p { max-width: 200px; font-size: 14px;}

        // &:first-child { margin-top: .5em }
        &:last-child { border: 0;margin-bottom: .5em; }
        &:hover { background-color: rgba(204, 204, 204, 0.219); cursor: pointer;}
    }
    &::-webkit-scrollbar {
        width: 6px;
        border-top: 1px solid #ccc;
        background: #292929;
    }
    &::-webkit-scrollbar-thumb {
        background: #EEAF2C;
    }
}
#bounds {
    width: 283px;
    min-height: 38px;

    display: none;
    align-items: center;
    justify-content: center;
    p {font-size: 12px; }
}
</style>