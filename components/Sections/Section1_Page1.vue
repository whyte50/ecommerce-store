<script setup>
import api from '~~/composables/SERVER';


const right = () => document.getElementById("featured-products").scrollLeft += (document.getElementById("featured-products").clientWidth - 200);
const left = () => document.getElementById("featured-products").scrollLeft -= (document.getElementById("featured-products").clientWidth - 200);

const Aright = () => document.getElementById("arrivals").scrollLeft += (document.getElementById("arrivals").clientWidth - 200);
const Aleft = () => document.getElementById("arrivals").scrollLeft -= (document.getElementById("arrivals").clientWidth - 200);

const split =  ref(5)
const MORE_LESS = ref('see more')
const showAll = () => {
    if(split.value === 5) {
        split.value = 200;
        MORE_LESS.value = 'see less'
        return
    }
    split.value = 5;
    MORE_LESS.value = 'see more'
    
}

const { data, pending, error, refresh } = await useAsyncData('products',() => {
    const promise = api.database.listDocuments(PRODUCTS_COLLECTION_ID);
    return promise
})

</script>

<template>
    <div>
        <div class="root-container">
        <div class="roort">
           <div class="navigator maximum">
            <h3>featured</h3>
            <div class="button">
                <input type="button" value="see all collections" style="color: black" @click="navigateTo('/collections')">
                <div class="bits">
                    <svg class="ho" @click="left" xmlns="http://www.w3.org/2000/svg" width="6" height="10.494" viewBox="0 0 6 10.494">
                        <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M13.055,11.441l3.971-3.968a.747.747,0,0,0,0-1.059.756.756,0,0,0-1.062,0l-4.5,4.5a.749.749,0,0,0-.022,1.034l4.518,4.527a.75.75,0,0,0,1.062-1.059Z" transform="translate(-11.246 -6.196)" fill="#000"/>
                    </svg>
                    <svg id="Component_47_4" @click="right" class="ho" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
                        <g id="Rectangle_795" data-name="Rectangle 795" fill="none" stroke="#000" stroke-width="1">
                            <rect width="34" height="34" stroke="none"/>
                            <rect x="0.5" y="0.5" width="33" height="33" fill="none"/>
                        </g>
                        <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M15.438,11.441,11.467,7.473a.747.747,0,0,1,0-1.059.756.756,0,0,1,1.062,0l4.5,4.5a.749.749,0,0,1,.022,1.034l-4.518,4.527a.75.75,0,1,1-1.062-1.059Z" transform="translate(2.253 4.804)" fill="#000"/>
                    </svg>
                </div>
            </div>
        </div> 
    </div>
    <div class="featured-products maximum" id="featured-products">
        <SectionsProduct
        v-for="product in data.documents.filter(doc => doc.featured === true).slice(0, split)"
        :key="product.$id"
        :image="product.image"
        :title="product.title"
        :category="product.category"
        :productID="product.$id"
        :base="'featured-products'"
        :sales="product.sales"
        id="product"/>
        <div class="seeMore" v-show="data.documents.length > 8" @click="showAll"><p>{{ MORE_LESS }}</p></div>
    </div>
    <div class="contactsales" id="contactsales">
        <a href="tel:+23409019381921" id="contactsales-button">contact a sales representative</a>
    </div>
    </div>
    <div class="roort">
        <div class="navigator second maximum">
            <NuxtLink to="/collections">Collections</NuxtLink>
            <div class="button">
                <input type="button" value="see all collections" style="color: black" @click="navigateTo('/collections')">
                <div class="bits">
                    <svg class="ho" @click="Aleft" xmlns="http://www.w3.org/2000/svg" width="6" height="10.494" viewBox="0 0 6 10.494">
                        <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M13.055,11.441l3.971-3.968a.747.747,0,0,0,0-1.059.756.756,0,0,0-1.062,0l-4.5,4.5a.749.749,0,0,0-.022,1.034l4.518,4.527a.75.75,0,0,0,1.062-1.059Z" transform="translate(-11.246 -6.196)" fill="#000"/>
                    </svg>
                    <svg id="Component_47_4" @click="Aright" class="ho" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
                        <g id="Rectangle_795" data-name="Rectangle 795" fill="none" stroke="#000" stroke-width="1">
                            <rect width="34" height="34" stroke="none"/>
                            <rect x="0.5" y="0.5" width="33" height="33" fill="none"/>
                        </g>
                        <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M15.438,11.441,11.467,7.473a.747.747,0,0,1,0-1.059.756.756,0,0,1,1.062,0l4.5,4.5a.749.749,0,0,1,.022,1.034l-4.518,4.527a.75.75,0,1,1-1.062-1.059Z" transform="translate(2.253 4.804)" fill="#000"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    <div class="roort">
        <div class="no-grid maximum" id="arrivals">
            <SectionsCollection />
        </div>
    </div>
    
</div>
</template>
<style lang="scss" scoped>
@import "../assets/stylesheet/main.scss";
input[type=button] {
    width: 181px;
    height: 37px;

    border-radius: 5px;
    border: 1.6px solid #ccc;
    padding-left: 1em;

    font-family: "Montserrat";
    font-weight: 500;
    color: $secondary;

    background-color: transparent;
    background-image: url('~~/assets/img/arrow-right.svg');
    background-repeat: no-repeat;
    background-size: 7px;
    background-position: 152px 11px;

    display: flex;
    justify-content: flex-start;
    
    cursor: pointer;
    
    &:hover { background-color:$brand; }

}
.root-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    border-top: 1px solid #ccc;

    @media (min-width: 768px) {
        background: #c7c7c71f;
    }
}
.navigator{
    width: 100%;
    min-height: 43px;
    padding: 1em 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h3, a{ margin-left: 1.6em; font-family: 'Chonburi'; font-size: 24px; }
    .button {
        display: flex;
        align-items: center;
        margin-right: 2em;
        
        input { display:none }
        @media (min-width: 768px) {
            input {color: #fff; display: flex;}
            path {fill: #000}
            g {stroke: #000}
        }
        .bits {
            display: flex;
            align-items: center;
            justify-content: space-between;

            width: 60px;
            margin-left: 2em;
            .ho:hover {
                cursor: pointer;
                rect {fill: $brand;}
            }
        }
    }
}
.contactsales {
    width: 100%;
    height: 123px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    // background: #fff;
    @media (min-width: 768px) and (orientation: landscape) {
        height: 73px;
    }
    a {
        width: 273px;
        height: 37px;

        background: transparent;
        transition: background 0.3s;
        border: 1px solid #ccc;
        border-radius: 6px;

        color: $secondary;

        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {background: $brand; color: #fff; border: 0;}
        @media (min-width: 768px) {
            border: 0;
        }
    }
}
.off {
    @media (min-width: 768px) and (orientation: landscape) {
        display: none;
    }
}
.roort{
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #ccc;
}
</style>

<style lang="scss" scoped>
.featured-products{
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow-x: scroll;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
        display: none;
    }

}
.no-grid{
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow-x: scroll;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        display: none;
    }
}
.seeMore {
    height: 309px;
    min-width: 298px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #fff;
    border-top: 1px solid rgba(204, 204, 204, 0.664);
    border-right: 1px solid rgba(204, 204, 204, 0.664);
    cursor: pointer;
    @media (min-width: 768px) { min-width: 298px; }
}
</style>