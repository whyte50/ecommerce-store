<script setup>
const props  = defineProps([
    'image', 'title','category', 'productID', 'base'
])
const paragraph = () => {
    if (props.title.length > 92) return props.title.substr(0, 17) + '...';
    else return props.title
}
</script>
<template>
    <NuxtLink class="content" :to="`/products/${props.productID}`">
        <div class="product" @click="">
            <img :src="fetchBaseImage(props.base, props.image, 0, 190)" alt="">
            <p>{{ paragraph() }}</p>
        </div>
    </NuxtLink>
</template>
<style lang="scss" scoped>
@import '~~/assets/stylesheet/main.scss';
@import '~~/assets/stylesheet/breakpoint.scss';
a {
    height: 309px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid #ccc;
    background: #fff;
    border-radius: 12px;
    transition: .5s;
    overflow: hidden;
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
        background: transparent;border-radius: 0;
        border-bottom: 1px solid #ccc;
    }
}
</style>