<script setup>
import api from '~~/composables/SERVER';

const changePlaceholders = (text) => document.querySelector('input[type=search]').placeholder = text;
const searchQuery = ref('');
const address = ref(null)
const route = useRoute();
const focuOut = () => {
    setTimeout(() => {DB_PRODUCTS().$patch({ SEARCH_RESULTS: [] })}, 500)
};

watch(searchQuery, () => {
  console.log(`query is ${searchQuery.value}`);
  queryProducts(searchQuery.value)
})

DB_PRODUCTS().$subscribe(() => {
    if (DB_PRODUCTS().SEARCH_RESULTS.length === 0 && searchQuery.value.length > 0) { document.getElementById('bounds').style.display = 'flex'}
    else if (DB_PRODUCTS().SEARCH_RESULTS.length !== 0 && searchQuery.value.length > 0) { document.getElementById('bounds').style.display = 'none'}
    else { document.getElementById('bounds').style.display = 'none'}
})

api.locale.get().then(response => {address.value = response;})
.catch(err => console.log(err))

const viewAllResults = () => {

    if(searchQuery.value === '' && SITE_ACTIONS().alert.alert === false) {
        SITE_ACTIONS().updateAlert(false,'Invalid Input');
        SITE_ACTIONS().toggleAlert();
        return
    } else if (searchQuery.value === '' && SITE_ACTIONS().alert.alert === true) {
        return
    }

    SITE_ACTIONS().updateQuery(searchQuery.value);
    focuOut()
    console.log(SITE_ACTIONS().query)
    navigateTo({
        path: '/search-results',
        query: {
            search: SITE_ACTIONS().query
        }
    })

}
</script>

<template>
    <div>
        <div class="roort">
            <div class="notice theme show maximum" ref="">
                <h5>Delivery charges vary on location.</h5>
                <img src="../../assets/img/arrow-right.svg" alt="">
            </div>
        </div>
        
        <div class="roort">
            <nav class="topNav show maximum">
                <div><NuxtLink to="tel:+23409019381921"><span>Give us a</span> call.</NuxtLink></div>
                <div>
                    <form class="top-search" @submit.prevent="viewAllResults()">
                        <input
                            type="search"
                            placeholder="Enter product"
                            id="topnav-search"
                            @focusin="changePlaceholders(`Start Typing...`)"
                            @focusout="changePlaceholders(`Enter product`), focuOut()"
                            :value="searchQuery" @input="searchQuery = $event.target.value"
                            >
                        <button @click="">search</button>
                    </form>
                    <div style="margin-top:2em; position:absolute;" v-show="route.path !== '/search-results'">
                        <NavigationSearchResult :search="searchQuery"/>
                    </div>
                </div>

                <div class="flex">
                    <h5>{{ address === null ? 'waiting...' : address.country + ' ' + address.countryCode }}</h5>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14.159" height="22.655" viewBox="0 0 14.159 22.655">
                        <path id="Icon_metro-location" data-name="Icon metro-location" d="M15.434,1.928a7.08,7.08,0,0,0-7.08,7.08c0,7.08,7.08,15.575,7.08,15.575s7.08-8.5,7.08-15.575a7.08,7.08,0,0,0-7.08-7.08Zm0,11.416a4.336,4.336,0,1,1,4.336-4.336A4.336,4.336,0,0,1,15.434,13.344ZM12.691,9.008a2.743,2.743,0,1,1,2.743,2.743A2.743,2.743,0,0,1,12.691,9.008Z" transform="translate(-8.355 -1.928)" fill="#aa0a0a"/>
                    </svg>
                </div>
            </nav>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import '../../assets/stylesheet/breakpoint.scss';
@import '../../assets/stylesheet/main.scss';
span {
    color: darken($color: red, $amount: 14);
    font-weight: 700;
}
.flex {
    display: flex;
    align-items: center;
    svg {margin-left: 1em;}
}
.top-search{
    display: flex;
    align-items: center;
    input { color: #EEAF2C}
    
    button {
        margin-left: 16px;
    }
}
.topNav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;

    width: 100%;
    
    height: 89.5px;
    padding: 0 3em;

    // box-shadow: rgba(255, 255, 255, 0.014) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.116) 0px 50px 100px -20px, rgba(0, 0, 0, 0.096) 0px 30px 60px -30px;
}
.show {
    display: none;
    @include desktop {
        display: flex;
        position: relative;
        z-index: 2;
    }
}
.theme { background: #f8f8f8; color: #EEAF2C;border-bottom: 1px solid rgba(204, 204, 204, 0.37); }
.theme-2 { background: $brand; color: #fff; }

.notice {
    h5 {
        cursor: pointer; margin-left: clamp(0em, 9vw, 3.5em); font-size: 12px;
        @media ( min-width: 1440px ) { margin: 0; }
    }
    img { transform: rotate(90deg); margin-left: .5em; }
    width: 100%;
    height: 50px;

    align-items: center;

    position: relative;
    // top: 0;
    z-index: 3;
}
.roort{
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid rgba(204, 204, 204, 0.37);
    &:first-child { background: #f8f8f8; border: 0; }
}
</style>