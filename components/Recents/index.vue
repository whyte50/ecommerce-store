<script setup>
import api from '~~/composables/SERVER';

const current = ref(true);
const data = ref([]);

await api.database.listDocuments(PRODUCTS_COLLECTION_ID)
.then(response => data.value = response.documents)
.catch(error => console.log(error))

const currentProduct = ref({});
await api.database.getDocument(PRODUCTS_COLLECTION_ID, useRoute().params.slug)
.then(response => currentProduct.value = response)
.catch(error => console.log(error))

// const handler = document.querySelector('.margin');
const Aright = () => document.querySelector('.margin').scrollLeft += document.querySelector('.margin').clientWidth;
const Aleft = () => document.querySelector('.margin').scrollLeft -= document.querySelector('.margin').clientWidth;
</script>

<template>
    <div style="width: 100%; display:flex; flex-direction: column; align-items: center;">
        <!-- <div class="end"></div> -->
        <div class="container">
            <div class="content maximum">
                <div class="headers">
                    <h3 :class="{ fade: current === false }" @click="current = !current">Recently Viewed</h3>
                    <h3 :class="{ fade: current }" @click="current = !current">You may also like</h3>
                </div>
                <div class="controls">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" class="ho" @click="Aleft" height="34" viewBox="0 0 34 34">
                        <g id="Group_1097" data-name="Group 1097" transform="translate(-1193.223 -1148)">
                            <g id="Rectangle_1022" data-name="Rectangle 1022" transform="translate(1193.223 1148)" fill="none" stroke="#000" stroke-width="1" opacity="1">
                            <rect width="34" height="34" stroke="none"/>
                            <rect x="0.5" y="0.5" width="33" height="33" fill="none"/>
                            </g>
                            <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M13.055,11.441l3.971-3.968a.747.747,0,0,0,0-1.059.756.756,0,0,0-1.062,0l-4.5,4.5a.749.749,0,0,0-.022,1.034l4.518,4.527a.75.75,0,0,0,1.062-1.059Z" transform="translate(1194.477 1152.804)"/>
                        </g>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" class="ho" @click="Aright" height="34" viewBox="0 0 34 34">
                        <g id="Group_1098" data-name="Group 1098" transform="translate(-1227.223 -1148)">
                            <g id="Rectangle_795" data-name="Rectangle 795" transform="translate(1227.223 1148)" fill="none" stroke="#000" stroke-width="1">
                            <rect width="34" height="34" stroke="none"/>
                            <rect x="0.5" y="0.5" width="33" height="33" fill="none"/>
                            </g>
                            <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M15.438,11.441,11.467,7.473a.747.747,0,0,1,0-1.059.756.756,0,0,1,1.062,0l4.5,4.5a.749.749,0,0,1,.022,1.034l-4.518,4.527a.75.75,0,1,1-1.062-1.059Z" transform="translate(1229.477 1152.804)"/>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
        <div class="container b maximum">
            <div class="margin" v-show="current">
                <RecentsItem v-for="item in DB_CART().RECENTS.filter(item => item.item !== useRoute().params.slug)" :key="item.item" :uniqueId="item.item"/>
            </div>
            <div class="margin" v-show="current === false">
                <RecentsItem 
                v-for="item in data.filter(item => item.category === currentProduct.category).filter(item => item.$id !== useRoute().params.slug)" 
                :key="item.$id" :uniqueId="item.$id"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "~~/assets/stylesheet/main.scss";
.container {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    min-height: 91px;
    padding: 1em 0;

    border-top: 1px solid rgba(204, 204, 204, 0.37);
    border-bottom: 1px solid rgba(204, 204, 204, 0.37);
    @media (min-width: 768px) {padding: 0;}
    .content {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;
        margin: 0 3em;
        .controls {
            display: none;
            align-items: center;

            @media (min-width: 768px) {
                display: flex;
            }
            .ho:hover {
                cursor: pointer;
                rect {fill: $brand;}
                path, g {fill: #fff}
            }
        }
        .headers { display: flex; align-items: center;
            flex-direction: column;
            h3 {
                cursor: pointer;
            }
            @media (min-width: 768px) {
                flex-direction: row;
                h3:last-child { margin-left: 1em }
            }
        }
    }
}
.b {
    justify-content: flex-start; height: auto;
    border: 0; min-height: 400px;
    .margin {
        display: flex;
        margin: 3em 2em;
        margin-right: 0;
        margin-bottom: 1em;
        padding-bottom: 2em;

        scroll-behavior: smooth;

        overflow-x: auto;
        gap: 1em;

        &::-webkit-scrollbar {
            height: 3px;
            border-bottom: 1px solid #ccc;
            display: none;
        }
        &::-webkit-scrollbar-thumb {
            background: $primary; border-radius: 20em; display: none;
        }
    }
}
.fade { opacity: 0.5 }
</style>