<script setup>
import api from '~~/composables/SERVER';

const props = defineProps({
    uniqueId: {
        type: String,
        required: true,
  }
})

const data = ref({});
await api.database.getDocument(PRODUCTS_COLLECTION_ID, props.uniqueId)
.then(response => data.value = response)
.catch(error => console.log(error))

</script>
<template>
    <NuxtLink :to="`/products/${data.$id}`" class="item">
        <div class="img"><img :src="fetchSingleImage(data.image)" :alt="data.title"></div>
        <h4>{{ data.title }}</h4>
        <p>
            <span v-if="data.sales !== null">₦{{ (Number(data.price) - Number(data.sales)).toLocaleString('en-US') }}</span>
            <span :class="{ discounted: data.sales !== null }">₦{{ Number(data.price).toLocaleString('en-US') }}</span>
        </p>
        <div class="container">
            <div class="quantity">
                <button style="border-right: 1px solid #ccc" @click=""> - </button>
                <p>{{ props.quantity }}</p>
                <button style="border-left: 1px solid #ccc" @click=""> + </button>
            </div>
            <button class="button">Add to cart</button>
        </div>
    </NuxtLink>
</template>
<style lang="scss" scoped="true">
@import "~~/assets/stylesheet/main.scss";

.item {
    min-width: 225px;
    max-width: 225px;

    display: flex;
    flex-direction: column;
    font-weight: 100;

    &:last-child { margin-right: 2em }
    .img { height: 197px; background: #c7c7c71f; transition: all 0.3s;
        display: flex; align-items: center; justify-content: center;
        img{ width: 170px; object-fit: contain; height: 147px;}
    }
    h4 { font-size: 16px; font-weight: inherit; margin: .5em; color: inherit; }
    p { display: flex; align-items: center; margin-left: .5em;
        span {
            font-size: 20px; padding: .4em .5em; background: #f8f8f8;
            &:first-child {color: rgb(189, 10, 10); margin-right: 1em;}
        }
        .discounted { color: #CACACB; text-decoration: line-through; }
    }
    &:focus { border: 0; padding: 0}
}
.router-link-exact-active {
    color: $brand;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    .item h4 { font-weight: 600; }
}
.container { width: 100%; display: none }
.quantity {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    justify-content: space-between;
    margin-top: 1em;
    p { color: #292929; }
    button {
      width: 31px;
      height: 31px;
      padding: 0;
      min-width: unset;
      border: 0;
      background: #fff;
      color: #292929;
      border-radius: 0;

      &:hover {
        background: #ccc;
        color: #fff;
      }
    }
}
.button { width: 100%; border-radius: 0; margin-top: 1em;}
</style>