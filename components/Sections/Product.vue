<script setup>
const props  = defineProps([
    'image', 'title','category', 'productID', 'base', 'sales'
])
const paragraph = () => {
    if (props.title.length > 37) return props.title.substr(0, 30) + '...';
    else return props.title
}
</script>
<template>
    <NuxtLink class="content" :to="`/products/${props.productID}`">
        <div class="onsale" v-if="props.sales !== null">
            <p>on sale</p>
        </div>
        <div class="product" @click="">
            <img :src="fetchBaseImage(props.base, props.image, 0, 190)" :alt="props.title">
            <p>{{ paragraph() }}</p>
        </div>
    </NuxtLink>
</template>
<style lang="scss" scoped>
@import '../../assets/stylesheet/main.scss';
@import '../../assets/stylesheet/breakpoint.scss';
a {
    height: 309px;
    min-width: 298px;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;

    border-right: 1px solid rgba(204, 204, 204, 0.664);
    border-top: 1px solid rgba(204, 204, 204, 0.664);
    transition: .5s;
    overflow: hidden;
    .onsale {
        display: flex; width: 100%;
        justify-content: flex-end;
        p { width: 70px; height: 30px; border-radius: 40em;
            display: flex; align-items: center; justify-content: center;
            background: rgb(121, 3, 3); color: #fff; margin-right: 2em;
        }
    }
    .product {
        display: flex;
        align-items: center;
        flex-direction: column;

        img {
            transition: .5s;

            object-fit: contain;
        }
        p {
            width: 130px;
            text-align: center;
            margin-top: 1em;
            font-family: 'Poppins';
            font-size: 1.1em;
        }
    }
    
    &:hover {
        cursor: pointer;
        background: $brand;
        .product {
            opacity: 1;
            p {color:#fff}
        }
    }
    @include desktop {
        max-height: 400px;height: 50vh;
    }
}
</style>