<script setup>
import api from '~~/composables/SERVER';

const props = defineProps({
  uniqueId: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
})

const data = ref({});
await api.database.getDocument(PRODUCTS_COLLECTION_ID, props.uniqueId)
.then(response => data.value = response)
.catch(error => console.log(error))

const confirmPrice = () => {
  const discountPrice = Number(data.value.price) - Number(data.value.sales);
  if ( data.value.sales !== null ) return discountPrice
  return Number(data.value.price)
}

</script>
<template>
  <div class="cart-product">
    <div>
      <NuxtLink :to="`/products/${data.$id}`"><img :src="fetchSingleImage(data.image)" :alt="data.title"/></NuxtLink>
      <p class="remove" @click="DB_CART().removeItem(props.uniqueId)">remove</p>
    </div>
    <div class="details">
      <NuxtLink :to="`/products/${data.$id}`">{{ data.title }}</NuxtLink>
      <p> ₦{{ confirmPrice().toLocaleString('en-US') }}</p>
      <span>{{ data.packsize }}</span>
      <div class="quantity">
        <button style="border-right: 1px solid #ccc"
        @click="DB_CART().decrementCartQuantity(props.uniqueId)"
        > - </button>
        <p>{{ props.quantity }}</p>
        <button style="border-left: 1px solid #ccc"
        @click="DB_CART().incrementCartQuantity(props.uniqueId)"
        > + </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart-product {
  display: flex;
  align-items: center;
  font-size: 16px;
  width: 100%;
  padding: 1em 0;

  img {
    max-width: 150px;
    width: 35vw;
    height: 140px;
    object-fit: contain;
    background: #e7e8e9;
    margin-right: 1em;
    padding: 1em 0;

    &:hover {
      border-radius: 12px;
    }
  }
  a {
    font-size: 1.2em;
    line-height: 1;
    font-weight: 600;
    font-family: 'Chonburi';
    margin-bottom: 0.6em;
    max-width: 150px;
  }
  p {
    color: #292929;
    font-family: 'Montserrat';
    font-weight: 500;
  }
  span {
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 1em;
    margin-bottom: 0.6em;
  }
}
.details {
  display: flex;
  flex-direction: column;
  position: relative;
  top: -15px;
  .quantity {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    max-width: 130px;
    justify-content: space-between;
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
}
.remove {
  padding-left: 0.5em;
  padding-bottom: 0.5em;
  margin-top: 0.5em;
  border-bottom: 1px solid #ccc;
  width: 65%;
  transition: all 0.5s;

  &:hover {
    color: #eeaf2c;
    cursor: pointer;
    width: 85%;
  }
}
</style>
