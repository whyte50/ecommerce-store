<script setup>
const collectionDetails = ref( DB_PRODUCTS().COLLECTIONS.find(data => data.$id === DB_PRODUCTS().COLLECTIONS[0].$id ));

const visualCollection = (ID) => { collectionDetails.value = DB_PRODUCTS().COLLECTIONS.find(data => data.$id === ID )}

const parameter = computed(() => useRoute().params);
watch(parameter, () => {SITE_ACTIONS().$patch({ menu: false })})

onBeforeMount(() => { fetchProducts_ByCollection(DB_PRODUCTS().COLLECTIONS[0].$id) })
onMounted(() => { document.querySelector('body').style.overflowY = 'hidden' })
onBeforeUnmount(() => document.querySelector('body').style.overflowY = 'initial')

</script>
<template>
    <div class="menu-root-container">
		<div class="menu-container">
			<div class="quick-menu">
				<div>
					<h3>QUICK ACCESS</h3>
					<NuxtLink to="/faq">FAQs</NuxtLink>
					<NuxtLink to="/faq">Shipping & Delivery</NuxtLink>
					<NuxtLink to="/faq">Privacy Policy</NuxtLink>
					<NuxtLink to="/faq">Checkout</NuxtLink>
					<NuxtLink to="/faq">Find Us</NuxtLink>
				</div>
			</div>
			<div class="quick-menu">
				<div>
					<h3>INFORMATION</h3>
					<NuxtLink to="/faq">FAQs</NuxtLink>
					<NuxtLink to="/faq">Returns</NuxtLink>
					<span @click="SITE_ACTIONS().toggleFeedback()">Site Feedback</span>
					<NuxtLink to="/faq">Newsletter</NuxtLink>
					<NuxtLink to="/faq">My Account</NuxtLink>
				</div>
			</div>
			<div class="quick-menu collections">
				<div>
					<h3>COLLECTIONS</h3>
					<NuxtLink 
                        :to="`/collections/${$id}`" 
                        v-for="{ name, $id } in DB_PRODUCTS().COLLECTIONS" 
                        :key="$id"
                        @mouseenter="fetchProducts_ByCollection($id), visualCollection($id)"
                    >{{name}}</NuxtLink>
				</div>
			</div>
			<div class="render-collection">
				<h3>{{ collectionDetails.name }}</h3>
				<NuxtLink
                    :to="`/products/${$id}`"
                    v-for="{title, $id} in DB_PRODUCTS().COLLECTION_PRODUCTS"
                    :key="$id"
                >{{title}}</NuxtLink>
			</div>
            <div class="auth">
				<button @click="SITE_ACTIONS().toggleLogin()">Sign up</button>
				<button @click="SITE_ACTIONS().toggleLogin()">Log in</button>
			</div>
		</div>
		<div class="collection-image">
			<img :src="fetchBaseImage('62750d23560ff568279b', collectionDetails.image)">
		</div>
	</div>
</template>
<style lang="scss" scoped>
@import '../../assets/stylesheet/main.scss';
a:focus{ border: 0;}
.menu-root-container {
    width: 100%; display: flex; height: 100vh; border: 1px solid #ccc; max-width: 1400px;
	flex-direction: column; background-color: #fff; position: absolute; z-index: 1;
    .menu-container {
        height: 100%; display: flex;
        flex-direction: column; margin-left: 2em;
        overflow-y: auto; align-items: flex-start;
        padding-bottom: 9em;
    }

    @media (min-width: 1000px) {
        height: auto;
        .menu-container {
            align-items: center; border-bottom: .3px solid #ccc;
            flex-direction: row; padding: 0; border-bottom: 1px solid #ccc; margin: 0; overflow-y: initial;
            height: 270px; width: auto;
        }
    }
    @media (min-width: 1400px) { border-radius: 1em; margin-top: 2em;}
}
.quick-menu {
    height: auto; width: 100%; display: flex; border: 0;
    &:first-child{margin: 2em 0;}
    div {width: 85%; display: flex; flex-direction: column;}
    h3 {padding-bottom: 1.5em; border-bottom: 1px solid #ccc; width: 100%; font: 700 1em "Poppins"; margin-bottom: 1.3em;}
    a, span { font: 500 .9em "Montserrat"; text-decoration: none; margin-top: .5em; }

    @media (min-width: 1000px) {
        min-width: 180px; width: 18%; border-right: 1px solid #ccc;
		height: 100%; align-items: center; justify-content: center;
        &:first-child { margin: 0; margin-left: clamp(1em, 2vw + 1em, 3em) }
        div { width: initial; }
        h3 { padding: 0; border: 0; width: auto; }
    }
}
.render-collection {
    width: 42%; height: 100%; overflow-y: auto; overflow-x: hidden;
    display: none; flex-direction: column;
    h3 {
        padding-bottom: .5em;
        border-bottom: 1px solid #ccc;
        width: 100%;
        font: 600 1em "Poppins";
        margin-bottom: 1.3em;
        margin: 0;
        min-height: 55px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    a { font: 300 .9em "Montserrat"; text-decoration: none;margin-top: .5em; }
    h3, a {
        margin: 0; min-height: 55px;
        border-bottom: 1px solid #ccc;
        width: 100%; display: flex;
        align-items: center; padding-left: 2em;
    }
    &::-webkit-scrollbar {
        width: 20px;
        border-left: 1px solid #ccc;
    }
    &::-webkit-scrollbar-thumb {
        background: #EEAF2C;
    }
    @media (min-width: 1000px) {
        h3{padding: 0;}
        display: flex;
    }
}
.collections {
    a {margin-top: 1.2em; font-weight: 400;
        &:last-child { margin-bottom: 2em}
    }
    h3 { margin-top: 3em; }

    &::-webkit-scrollbar {
        width: 10px;
        border-left: 1px solid #ccc;
    }
    &::-webkit-scrollbar-thumb {
        background: #292929;
    }
    @media (min-width:1000px) {
        overflow-y: auto; width: 22%; min-width: 220px; align-items: flex-start;
    }
}

.collection-image {
    width: 100%; display: none; border-bottom: 1px solid #ccc;
    align-items: center; justify-content: center;
    img {
        width: 100%; height: 98px;
        object-fit: cover; margin: 2em 3em;
        border-radius: 6px;
    }
    @media (min-width: 1000px) { display: flex; }
}
.auth { 
    width: 100%; margin-top: 2em; margin-bottom: 2em;
    button { width: calc(100% - 2.5em); background: transparent;
        height: 60px; border-radius: 0; color: #292929;
        border: 0; border-top: 1px solid #707070; }
    button:last-child { background-color: #EEAF2C; border: 0; color: #fff; }
    @media (min-width: 1000px) { display: none; }
}
</style>