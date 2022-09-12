<script setup>
const changePlaceholders = (text) => document.getElementById('mobileSearch').placeholder = text;
const searchQuery = ref('');
const focuOut = () => searchQuery.value = '';

watch(searchQuery, () => {
  console.log(`query is ${searchQuery.value}`);
  queryProducts(searchQuery.value)
})

DB_PRODUCTS().$subscribe(() => {
    if (DB_PRODUCTS().SEARCH_RESULTS.length === 0 && searchQuery.value.length > 0) { document.getElementById('bounds').style.display = 'flex'}
    else if (DB_PRODUCTS().SEARCH_RESULTS.length !== 0 && searchQuery.value.length > 0) { document.getElementById('bounds').style.display = 'none'}
    else { document.getElementById('bounds').style.display = 'none'}
})

const viewAllResults = () => {

    if(searchQuery.value === '' && SITE_ACTIONS().alert.alert === false) {
        SITE_ACTIONS().updateAlert('Invalid Input Value',false,'Invalid Input');
        SITE_ACTIONS().toggleAlert();
        return
    } else if (searchQuery.value === '' && SITE_ACTIONS().alert.alert === true) {
        return
    }

    SITE_ACTIONS().updateQuery(searchQuery.value);
    console.log(SITE_ACTIONS().query)
    navigateTo({
        path: '/search-results',
        query: {
            search: SITE_ACTIONS().query
        }
    })

    focuOut();
}

</script>
<template>
    <div class="wrapping">
		<form class="container" @submit.prevent="viewAllResults()">
			<input
            type="search"
            placeholder="Enter Product"
            @focusin="changePlaceholders('Start Typing...')"
            @focusout="changePlaceholders('Enter product')"
            :value="searchQuery" @input="searchQuery = $event.target.value"
            id="mobileSearch"
            >
			<button @click="">
				<svg xmlns="http://www.w3.org/2000/svg" width="17.952" height="17.952" viewBox="0 0 17.952 17.952"><g transform="translate(0.6 0.6)"><path d="M19.17,11.835A7.335,7.335,0,1,1,11.835,4.5,7.335,7.335,0,0,1,19.17,11.835Z" transform="translate(-4.5 -4.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"/><path d="M28.963,28.963l-3.988-3.988" transform="translate(-12.46 -12.46)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"/></g></svg>
			</button>
		</form>
	</div>
    <div class="item">
        <NavigationSearchResult :search="searchQuery"/>
    </div>
</template>

<style lang="scss" scoped>
@import '../../assets/stylesheet/breakpoint.scss';
a:focus { border: 0;}
input[type=search], button {height: 52px;}
.container {display: flex;align-items: center;}
input[type=search] {border-top-right-radius: 0;border-bottom-right-radius: 0;background-image: none;width: clamp(45px, 60vw, 1024px);}
button {border-top-left-radius: 0;border-bottom-left-radius: 0;}
.wrapping {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    height: 100px; 
    border-bottom: 1px solid #ccc;
    background: #fff;
    @media (min-width: 1024px) { display: none }
}
.item { width: 100%; display: flex; justify-content: center; position: absolute;
@media (min-width: 1024px) { display: none }}
</style>