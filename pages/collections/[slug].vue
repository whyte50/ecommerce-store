<script setup>
import api from '~~/composables/SERVER';

const route = useRoute();
const filtered = ref({});
const brand = ref({});
const products = ref({});

const { data, pending, error, refresh } = await useAsyncData(`collectionsById-${useRoute().params.slug}`, async () => {
    const products = await api.database.listDocuments(PRODUCTS_COLLECTION_ID)
    const info = await api.database.getDocument("62750820bc5ef93a8152", route.params.slug)
    return {
        info: info,
        data: products
    }
})

useHead({
  title: `${capitalizeFirstLetter(data.value.info.name)}`,
  meta: [
    {
        name: 'description',
        content: `${ data.value.info.description !== null ? data.value.info.description : 'default description' }`
    }
  ]
})

// console.log(data.value)

filtered.value = data.value.data.documents.filter(item => item.category === useRoute().params.slug.replace(/-/g, ' '));
products.value = data.value.data.documents.filter(item => item.category === useRoute().params.slug.replace(/-/g, ' '));
// console.log(data.value.info)

brand.value = filtered.value.map(({brand}) => ({brand}));
// console.log(brand.value)

function findUnique(arr, predicate) {
  var found = {};
  arr.forEach(d => {
    found[predicate(d)] = d;
  });
  return Object.keys(found).map(key => found[key]); 
}

brand.value = findUnique(brand.value, item => item.brand);
// console.log(brand.value);
</script>

<template>
    <div style="display:flex; flex-direction:column; align-items:center;">
        <div class="rootFlex">
            <!-- <div class="tend">
                <h4>{{ capitalizeFirstLetter(data.info.name) }}</h4>
            </div> -->
            <div class="breadcrumbs">
                <div class="content maximum">
                    <NuxtLink to="/">Home Page</NuxtLink>
                    <span class="break"></span>
                    <NuxtLink :to="`/collections/${data.info.$id}`">{{ capitalizeFirstLetter(data.info.name) }}</NuxtLink>
                </div>
            </div>
            <div class="carousel">
                <img :src="fetchBaseImage('62750d23560ff568279b', data.info.image)" :alt="data.info.name">
            </div>
        </div>
        <div class="container maximum">
            <div class="wrapper">
                <NuxtLink 
                    :to="`/products/${$id}`" 
                    class="product" 
                    v-for="{ $id, image, title } in products" 
                    :key="$id"
                >
                    <img :src="fetchSingleImage(image)" :alt="title">
                    <h2>{{ title }}</h2>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
h1 { margin: .5em 1em; font-size: clamp(2em, 6vw + 1em, 3.2em);
    margin-top: 1.5em;
    @media (min-width: 768px) {
        margin: 1em;
    }
}
.container { width: 100% }
.wrapper {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    grid-gap: 2em; margin: 2em;
    .product {
        background: #c7c7c71f;
        img { width: 160px; height: 160px; object-fit: contain; }
        display: flex; flex-direction: column; justify-content: space-between;
        padding: 2em; border: 1px solid #ccc; border-radius: 1em;
        h2 { font-size: 1.2em; margin-top: 1em;}
        @media (min-width: 768px) { align-items: center; }
    }
}
.rootFlex {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
}
.carousel {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid rgba(204, 204, 204, 0.37);

    img {
        width: 100%;
        height: 20vh;
        object-fit: cover;

        @media (min-width: 600px) {height: 240px; width: 100%; border-radius: none;}
    }
    .flexit {
        display: flex;
        width: clamp( 280px, 75%, 1252px );
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 600px){background: #c7c7c71f; padding-bottom: 3em;}
}
.tend {
    width: 100%; min-height: 40px;
    padding: 1.5em 0;

    display: flex; align-items: center;
    justify-content: center; border-bottom: 1px solid #ccc;
    h4 {
        font-size: clamp(2em, 2vw + 1em, 10em);
        line-height: 1;
        font-family: 'Chonburi';
        font-weight: 300;
        // color: $brand;
        @media (min-width: 600px){margin-left: 1em;}
    }
    @media (min-width: 600px){background: #c7c7c71f; justify-content: unset;}
}
.breadcrumbs {
    height: 67px;
    width: 100%;

    display: flex;
    align-items: center;

    overflow-x: auto;
    border-bottom: 1px solid #ccc;
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

    @media (min-width: 1400px) {
      .content { margin: 0; width: 100%; }
      justify-content: center;
    }
}
</style>