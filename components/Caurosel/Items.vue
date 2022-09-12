<script setup>
const props = defineProps([
    'image', 'description', 'name', 'category', 'productId'
])

const Aright = () => document.getElementById("scrollHorizontal").scrollLeft += document.getElementById("scrollHorizontal").clientWidth;
const Aleft = () => document.getElementById("scrollHorizontal").scrollLeft -= document.getElementById("scrollHorizontal").clientWidth;

</script>

<template>
    <div class="rootFlex">
        <div class="carousel">
            <div class="bits v">
                <svg id="Component_47_4" @click="Aleft" class="ho" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
                    <g id="Rectangle_795" data-name="Rectangle 795" fill="none" stroke="#000" stroke-width=".1">
                        <rect width="34" height="34" stroke="none"/>
                        <rect x="0.5" y="0.5" width="33" height="33" fill="none"/>
                    </g>
                    <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M13.055,11.441l3.971-3.968a.747.747,0,0,0,0-1.059.756.756,0,0,0-1.062,0l-4.5,4.5a.749.749,0,0,0-.022,1.034l4.518,4.527a.75.75,0,0,0,1.062-1.059Z" transform="translate(2.253 4.804)" fill="#000"/>
                </svg>
                <svg id="Component_47_4" @click="Aright" class="ho" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
                    <g id="Rectangle_795" data-name="Rectangle 795" fill="none" stroke="#000" stroke-width="1">
                        <rect width="34" height="34" stroke="none"/>
                        <rect x="0.5" y="0.5" width="33" height="33" fill="none"/>
                    </g>
                    <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M15.438,11.441,11.467,7.473a.747.747,0,0,1,0-1.059.756.756,0,0,1,1.062,0l4.5,4.5a.749.749,0,0,1,.022,1.034l-4.518,4.527a.75.75,0,1,1-1.062-1.059Z" transform="translate(2.253 4.804)" fill="#000"/>
                </svg>
            </div>
            <img :src="fetchBaseImage('6269ba2a7487ffd50fa0', props.image)" :alt="props.name">
            <div class="flexit">
                <h4>{{ props.name }}</h4>
                <span class="p">
                    <NuxtLink :to="`/products/${props.productId}`">{{ props.description.substring(0, 50) + '...' }}buy now</NuxtLink>
                    <div class="bits">
                        <svg id="Component_47_4" @click="Aleft" class="ho" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
                            <g id="Rectangle_795" data-name="Rectangle 795" fill="none" stroke="#000" stroke-width=".1">
                                <rect width="34" height="34" stroke="none"/>
                                <rect x="0.5" y="0.5" width="33" height="33" fill="none"/>
                            </g>
                            <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M13.055,11.441l3.971-3.968a.747.747,0,0,0,0-1.059.756.756,0,0,0-1.062,0l-4.5,4.5a.749.749,0,0,0-.022,1.034l4.518,4.527a.75.75,0,0,0,1.062-1.059Z" transform="translate(2.253 4.804)" fill="#000"/>
                        </svg>
                        <svg id="Component_47_4" @click="Aright" class="ho" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
                            <g id="Rectangle_795" data-name="Rectangle 795" fill="none" stroke="#000" stroke-width="1">
                                <rect width="34" height="34" stroke="none"/>
                                <rect x="0.5" y="0.5" width="33" height="33" fill="none"/>
                            </g>
                            <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M15.438,11.441,11.467,7.473a.747.747,0,0,1,0-1.059.756.756,0,0,1,1.062,0l4.5,4.5a.749.749,0,0,1,.022,1.034l-4.518,4.527a.75.75,0,1,1-1.062-1.059Z" transform="translate(2.253 4.804)" fill="#000"/>
                        </svg>
                    </div>
                </span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../assets/stylesheet/main.scss';
*:focus { border: 0;}
.bits {
    display: none;
    margin-top: 1em;
    @media (min-width: 1024px) {
        display: flex; align-items: center;
        margin-left: 2em; margin-top: 0;
    }
    .ho:hover {
        cursor: pointer;
        rect {fill: $brand;}
        path, g {fill: #fff}
    }
}
.rootFlex {
    display: flex;
    min-width: 100%;
    justify-content: center;
}
.carousel {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 3em;
    width: 100%;

    transition: all 5s;

    img{
        width: 80%;
        height: 325px;
        object-fit: cover;

        border-radius: 2em;
        margin: 2em 0;
        @media (min-width: 600px) {height: 180px; width: clamp( 280px, 95%, 1252px ); border-radius: 412px; margin-top: 0;}
    }
    .p {
        max-width: 400px;
        line-height: 1.5;
        margin: 1em 0;
        a { font-size: 16px; color: rgb(247, 135, 7);
            &:focus { border: 0;}
        }
        @media (min-width: 600px) {
            text-align: right;
            // margin: 0;
        }
    }
    h4 {
        font-size: clamp(2em, 4vw, 3em);
        line-height: 1;
        margin-right: .5em;
        font-family: 'Chonburi';
        // color: $brand;
    }
    .flexit {
        display: flex;
        width: clamp( 280px, 75%, 1252px );
        justify-content: space-between;
        flex-direction: column;
        .p {
            @media (min-width: 1024px) {
                display: flex;
                justify-content: flex-end;
            }
            a { color: #292929; font-weight: 500;
                &:hover { color: $brand }
            }
        }
        @media (min-width: 600px) {
            flex-direction: row;
            align-items: center;
        }
    }
    @media (min-width: 600px) {
        flex-direction: column;
    }
}
.v {
    display: flex; width: 80%; justify-content: center;
    @media (min-width: 600px) { display: none; }
}
</style>