<script setup>
import api from '~~/composables/SERVER';

const { data, pending, error, refresh } = await useAsyncData('recommended',() => {
    const promise = api.database.listDocuments(PRODUCTS_COLLECTION_ID);
    return promise
})
</script>

<template>
    <div class="container">
       <div class="scrollHorizontal" id="scrollHorizontal">
            <!-- <div class="item_container"> -->
                <CauroselItems v-for="item in data.documents.filter(doc => doc.recommended === true)" :key="item.$id" :description="item.desc" :name="item.title" :image="item.display" :category="item.category" :productId="item.$id"/>
            <!-- </div> -->
       </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/stylesheet/breakpoint.scss';
@import '../assets/stylesheet/main.scss';
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    // background: #c7c7c71f;
    width: 100%;

    .sect {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: space-between;
        align-items: center;
        margin-top: 3.5em;

        h1 {
            line-height: .9em;
            margin-bottom: 10px;
            font-size: clamp(54px, 6vw + 2em, 215px);
            font-weight: 900;
            font-family: 'Chonburi';
            span { color: $brand; }
            @media(max-width: 768px) {
                font-size: calc(5vw + 1em);
                font-weight: 900;
            }
        }      
        p {
            text-align: center;
            max-width: 347px;
            line-height: 1.7;
            margin-top: 10px;
            margin-bottom: 1.4em;
            padding: 0 1em;
            font-size: .9em;

            @include M-landscape {
                max-width: 500px;
                font-size: 16px;
            }
        }
        button {
            height: 45px;
            border-radius: 12px;
        }

        @media (min-width: 768px) and (orientation: landscape) { display: none; }
    }
}
.scrollHorizontal {
    display: flex;
    width: 100%;
    scroll-behavior: smooth;
    overflow-x: auto;
    padding-bottom: 3em;
    @media (min-width: 1024px) { padding-bottom: 1em;margin-bottom: 1.5em}
    &::-webkit-scrollbar {
        display: none;
    }
}
.carousel {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    img{
        width: clamp( 280px, 90vw, 1252px );
        height: 200px;
        object-fit: cover;

        border-radius: 12px;
        margin-bottom: 2em;
        @media (max-width: 600px) {height: 295px; width: 80vw; border-radius: 4em;}
    }
}
</style>