<script setup>
import api from '~~/composables/SERVER'
const { data, pending, error, refresh } = useAsyncData('fetchingCollectionsPage', () => {
    return api.database.listDocuments('62750820bc5ef93a8152')
})

useHead({
  title: `Our Collection`,
  meta: [
    {
        name: 'description',
        content: `Bottles 'N' Cans is your one-stop store for your favourite brands of drinks, from whiskeys to liqueur, to bitters and rum. Browse our wide range of drinks from premium wines, to your favourite scotch whiskeys. Order for parties, restuarants, events etc.`
    }
  ]
})

</script>
<template>
    <div>
        <div class="notice">
            <h1>Timeless Sellection</h1>
            <NuxtLink to="tel:+23409019381921">Give us a call</NuxtLink>
        </div>
        <div class="end"></div>
        <div class="container">
            <div class="margin">
                <NuxtLink :to="`/collections/${item.$id}`" class="item" v-for="item in data.documents" :key="item.$id">
                    <img :src="fetchBaseImage('62750d23560ff568279b', item.image)" :alt="item.name" loading="lazy">
                    <h2>{{item.name}}</h2>
                </NuxtLink>
            </div> 
        </div>
    </div>
</template>
<style lang="scss" scoped>
.notice {
	display: flex;
	align-items: center;
	justify-content: center;
    flex-direction: column;
    
	width: 100%; margin-top: 3em;
    padding-bottom: 40px;
	h1 {
        font-family: 'Chonburi';
        font-size: clamp(44px, 5vw + 2em, 184px);
        line-height: .8;
        // font-weight: 100;
        text-align: center;
        @media (min-width: 395px) {
            font-size: clamp(44px, 8vw + 2em, 184px);   
        }
    }
    a {
        margin-top: 3em; text-decoration: underline;
    }
}
.container {
    
    .margin {
        display: grid; grid-template-columns: repeat(auto-fit, minmax(clamp(180px, 20vw, 360px), 1fr));
        grid-gap: 4em; margin: 2em; justify-content: flex-start;
        .item {
            img { height: 250px; width: 100%;
                object-fit: cover; max-width: -webkit-fill-available;
                border: 1px solid #ccc; border-radius: 1em;
            }
            h2 { font-size: 34px; font-weight: light; color: inherit; margin: 0; font-family: 'Chonburi'; margin-top: .5em;}
            &:focus {padding: 0; border: 0;}
        }
    }
}
</style>