<script setup>
import { Query } from 'appwrite';
import api from '~~/composables/SERVER';

const query = computed(() => useRoute().query.search);
const { data, pending, error, refresh } = await useAsyncData(
    'mountains',
    () => {
        return api.database.listDocuments(PRODUCTS_COLLECTION_ID, [ Query.search('title', useRoute().query.search) ])
    }
)
watch(query, refresh)

</script>
<template>
    <div style="background: #c7c7c71f;">
        <div class="top-wrapper">
            <div class="breadcrumbs">
                <div class="content">
                    <NuxtLink to="/">Home Page</NuxtLink>
                    <span class="break"></span>
                    <NuxtLink to="/search-results">Search Result</NuxtLink>
                    <span class="break"></span>
                    <a href="#">"{{ useRoute().query.search }}"</a>
                </div>
            </div>
            <div class="hero">
                <h1>Showing results for:</h1>
            </div>
            <div class="breadcrumbs query">
                <p>"{{ useRoute().query.search }}"</p>
            </div>
            <div class="collections">
                <div class="featured-products" v-if="pending === false">
                    <ResultCard
                    v-for="product in data.documents"
                    :key="product.$id"
                    :image="product.image"
                    :title="product.title"
                    :category="product.category"
                    :productID="product.$id"
                    :base="'featured-products'"
                    />
                </div>
                <div class="nothing" v-if="data.documents.length === 0">
                  <p>Nothing found</p>
                </div>
                <div class="head"></div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>

.breadcrumbs {
    height: 67px;
    width: 100%;

    display: flex;
    align-items: center;
    // border-bottom: 1px solid #ccc;

    overflow-x: auto;
    &::-webkit-scrollbar { display: none; }
    .content {
        margin-left: 3em;
        display: flex;
        align-items: center;
        white-space: nowrap;

        .break {
            width: 24px;
            border-bottom: 2px solid #ccc;
            margin: 0 0.8em;
            border-radius: 20em
        }
    }
}
.hero {
    height: 200px;

    display: flex;
    align-items: center;
    justify-content: center;
    h1 { font-size: clamp(44px, 3vw + 2em, 104px); text-align: center; font-weight: 100;}
}
.query{
    border: 1px solid #ccc;
    justify-content: center;
    p { font-size: 18px }
}
.featured-products{
    display: grid; grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
    justify-content: flex-start; margin: 1em; grid-gap: 1em;

    @media (min-width: 768px) {
      display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); justify-content: flex-start; margin: 2em; grid-gap: 1em;
    }

    &::-webkit-scrollbar {
        display: none;
    }

}
.collections {
    width: 100%;
    // border-bottom: 1px solid #ccc;
    // border: 1px solid #ccc;
    .head{
        width: 100%;
        height: 50px;

        display: flex;
        align-items: center;

        border-bottom: 1px solid #ccc;

        p { margin-left: 3em; }
    }
    .nothing {
        height: 100px; background: #c7c7c71f;

        border-radius: 12px; margin: 0 3em;
        display: flex; align-items: center;
        justify-content: center; border: 1px solid #ccc;
    }    
}

</style>