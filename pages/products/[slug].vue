<script setup>
import api from '~~/composables/SERVER.js';
import { createError } from 'h3';

const route = useRoute();
const router = useRouter();
const isInStock = ref(false);
const trimValue = ref(200);
const policy = ref(false);

const Shipping =  defineAsyncComponent({ loader: () => import('~~/components/ShippingPolicy.vue'), delay: 500 })

const { data, pending, error, refresh } = await useAsyncData(`fetchSingleProductSlug${route.params.slug}`, () => {
  return api.database.getDocument(PRODUCTS_COLLECTION_ID, route.params.slug)
})

if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: 'Could not find product' })
}

useHead({
  title: `Buy ${data.value.title } ${data.value.packsize !== null ? ' - ' + data.value.packsize : ''}`,
  meta: [
    { 
      name: 'description', 
      content: `${data.value.desc.substring(0, 78) + '...'} Buy ${data.value.title} today, with door-to-door delivery across Lagos, Nigeria`
    },
    { name: 'og:type', content: `website` },
    { name: 'og:url', content: `https://bottlesncans.ng/` },
    { 
      name: 'og:description', 
      content: `${data.value.desc.substring(0, 78) + '...'} Buy ${data.value.title} today, with door-to-door delivery across Lagos, Nigeria` 
    },
    { name: 'og:image', content: `${fetchSingleImage(data.value.image)}` }
  ],
})

const discountPercentage = () => {
  const price = Number(data.value.price);
  const discount = Number(data.value.sales);
  const answer = discount / price;
  const result = answer * 100;
  return result.toFixed(2) + '%';
};

const calc = () => {
  if (data.value.sales === null) return console.log('doesnt run sales');
  const sales = Number(data.value.price) - Number(data.value.sales);
  return sales.toLocaleString('en-US');
};


const buttonDisplay = (product) => {
  const check = DB_CART().CART.some((element) => element.$id === product.$id);
  if (product.inStock === true && check === false) {
    isInStock.value = check;
    return 'Add To Cart';
  }
  else if (product.inStock === false) {
    isInStock.value = true;
    return 'Out of Stock';
  } else if (check === true) {
    isInStock.value = check;
    return 'Added To Cart';
  }
};

const pushToCart = (product) => {
  const cartItem = {
    $id: product.$id,
    quantity: 1
  };
  DB_CART().addToCart(cartItem);
  SITE_ACTIONS().updateAlert(true,`Successfully added ${data.value.title} to cart`);
  SITE_ACTIONS().toggleAlert();
};

const trinDesc = (product) => {
  if(product.desc.length > 200) {
    return product.desc.substring(0, trimValue.value)
  } return product.desc
}

const viewAllText = (product) => {
  trimValue.value === 200 ? trimValue.value = product.desc.length + 200 : trimValue.value = 200
}

const seMore = () => {
  if(trimValue.value === 200) {
    return '... see more'
  }
  return 'see less'
}

const pushToRecents = () => {
  const exists = (element) => element.item === data.value.$id;
  if(DB_CART().RECENTS.some(exists)){
    return
  }
  DB_CART().addToRecents({item: data.value.$id})
}

onMounted(() => {
  pushToRecents();
})

</script>

<template>
  <div v-if="data">
    <div class="breadcrumbs">
      <div class="content maximum">
          <NuxtLink to="/">Home Page</NuxtLink>
          <span class="break"></span>
          <NuxtLink :to="`/collections/${data.category.toLowerCase().replace(/ /g, '-')}`">{{ capitalizeFirstLetter(data.category) }}</NuxtLink>
          <span class="break"></span>
          <a href="#">{{ data.title }}</a>
      </div>
    </div>

    <!-- <div class="root">
      <div class="details">
        <div class="brand">
          <p>Product Brand: <span id="title">{{ data.brand }}</span> </p>
        </div>
        <div class="category">
          <p>Category:
              <NuxtLink :to="`/`">{{data.category.substring(0, 1).toUpperCase() + data.category.substring(1, data.category.length) }}
              </NuxtLink>
          </p>
        </div>
        <div class="return">
          <input type="button" value="Continue Shopping" @click="router.push('/')" />
        </div>
      </div>
    </div> -->

    <div class="roort">
      <div class="container maximum" >
      <div class="cover">
        <div class="banner">
          <h2>{{ data.brand.length > 15 ? data.brand.substring(0, 12) + '...' : data.brand }}</h2>
        </div>
        <div class="image">
          <img :src="fetchSingleImage(data.image, 0, 450)" :alt="data.title" />
        </div>
        <div class="product">
          <div class="wrapper">
            <h1>{{ data.title }}</h1>
            <div class="sales" v-if="data.sales !== null">
              <p>{{ discountPercentage() + ' Off' }}</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="2" viewBox="0 0 1366 1">
                <line id="Line_130" data-name="Line 130" x2="70%" transform="translate(0 0.5)" fill="none" stroke="#707070" stroke-width="32" opacity="1"/>
              </svg>
            </div>
            <div class="additional-data">
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7"><circle id="Ellipse_213" data-name="Ellipse 213" cx="3.5" cy="3.5" r="3.5" fill="#707070" opacity="0.3"/></svg>
                {{ data.brand }}
              </p>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7"><circle id="Ellipse_213" data-name="Ellipse 213" cx="3.5" cy="3.5" r="3.5" fill="#707070" opacity="0.3"/></svg>
                {{ data.packsize }}
              </p>
            </div>
            <div class="price">
              <h2 v-if="data.sales !== null" class="discount">{{ '₦' + calc() }}</h2>
              <h2 :class="{ discounted: data.sales !== null }">
                {{ '₦' + Number(data.price).toLocaleString('en-US') }}
              </h2>
            </div>
            <p class="desc">
              {{ trinDesc(data) }}
              <span class="seemore" @click="viewAllText(data)" v-if="data.desc.length > 200">{{ seMore() }}</span>
            </p>
            <div class="page-button">
              <button class="cart-button" :disabled="isInStock" @click="pushToCart(data)">
                {{ buttonDisplay(data) }}
              </button>
              <div class="buttons">
                <button @click="policy = !policy">view shipping policy
                  <svg xmlns="http://www.w3.org/2000/svg" width="7.818" height="13.674" viewBox="0 0 7.818 13.674">
                    <path id="Icon_ionic-ios-arrow-down" data-name="Icon ionic-ios-arrow-down" d="M13.027,16.708l5.17-5.174a.973.973,0,0,1,1.38,0,.985.985,0,0,1,0,1.384L13.719,18.78a.975.975,0,0,1-1.348.028l-5.9-5.887a.977.977,0,0,1,1.38-1.384Z" transform="translate(-11.246 19.861) rotate(-90)" />
                  </svg>
                </button>
                <button> <NuxtLink to="tel:+23409019381921">buy bulk</NuxtLink> </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <template v-if="DB_CART().RECENTS.length > 1" class="maximum"><Recents /></template>
    <Transition name="ship">
      <template v-if="policy"><Shipping @toggle="policy = !policy"/></template>
    </Transition>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '~~/assets/stylesheet/main.scss';

.roort {
  display: flex;
  align-items: center;
  flex-direction: column;
  border-top: 1px solid rgba(204, 204, 204, 0.37);
}
.container { width: 100%; }
.breadcrumbs {
    height: 67px;
    width: 100%;

    display: flex;
    align-items: center;

    overflow-x: auto;
    &::-webkit-scrollbar { display: none; }
    .content {
        margin-left: 3em;
        display: flex;
        align-items: center;
        white-space: nowrap;

        .break {
            width: 24px;
            border-bottom: 2px solid #ccc;
            margin: 0 0.8em;
            border-radius: 20em
        }
    }
    @media (min-width: 1400px) {
      .content { margin: 0; width: 100%; }
      justify-content: center;
    }
}
.root {
  width: 100%; display: flex;
  align-items: center;
  height: 70px;

  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 10px; height: 0px;
    border-top: 1px solid #ccc;
  }
  @media (min-width: 840px) {
    justify-content: center;
    height: 90px;
  }

  .details {
    display: flex;
    align-items: center;
    margin: 0 2em;

      span, a {
        margin-left: 0.4em;
        font-weight: 500;
        font-size: 1em;
        &:focus { border: 0; padding: 0}
      }
      p{ white-space: nowrap; }

      .brand, .category { margin-right: 50px; }
      .return input[type='button'] {
        padding: 0.5em 1.2em;

        font-family: 'Poppins';
        font-size: 12px;
        color: #fff;

        width: 170px;
        border-radius: 6px;
        transition: all 0.5s;

        display: flex;
        align-items: center;
        justify-content: flex-end;

        background-image: url('~~/assets/img/arrow-left.svg');
        background-repeat: no-repeat;
        background-color: #eeaf2c;
        background-position: 10px 8px;

        &:hover {
          cursor: pointer;
          background-color: darken(#eeaf2c, 50%);
        }
      }

      @media (min-width: 840px) and (orientation: landscape) {
        margin: 0; min-width: auto;
      }
  }
}
.cover {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    width: 100%;
    
    .banner {
        min-width: 230px; display: none; border-right: 1px solid rgba(204, 204, 204, 0.308);
        align-items: center; justify-content: center; height: 100%; position: relative; z-index: -1;
        // background: #c7c7c71f;
        
        h2 {
          transform: rotate(-90deg); white-space: nowrap;
          font-size: 75px; font-weight: bold; 
          // font-family: 'Chonburi';
          }
        @media (min-width: 1000px) {
          display: flex; height: auto; flex: 1;
        }
    }
    .image {
        display: flex; width: 100%;
        align-items: center; justify-content: center;
        height: 570px; background: #c7c7c71f;
        background-image: url(~~/assets/img/overlay.png);
        @media (min-width: 1000px) {
            height: auto; border-right: 1px solid rgba(204, 204, 204, 0.308);
            min-width: 355px; flex: 2;
        }
        img { object-fit: contain; max-width: 100%;
          transition: all 0.5s;
          @media (min-width: 1000px) {
            &:hover {transform: scale(1.4)}
          }
        }
    }
    .product {
        height: 100%; width: 100%;
        display: flex;
        // background: #c7c7c71f;
        .wrapper{ margin: 2em; max-width: 650px;
            @media (min-width: 1000px) {
              max-width: 400px; margin-top: 4.5em;
            }
        }
        h1 { font-size: 42px; font-weight: 900; margin-bottom: .5em; }
        .sales { display: flex; align-items: center;
            margin-bottom: 1em;
            svg { margin-left: 1em }
            p { font-weight: 900; color: #F90606; }
        }
        .additional-data {
            display: flex; align-items: center;
            margin-bottom: .3em;
            p { 
                &:first-child { margin-right: 2em}
                display: flex; align-items: center;
                svg { margin-right: .7em}
            }
        }
        .price {
            display: flex;margin: 1.3em 0; flex-direction: column;
            h2 { font-family: 'Chonburi'; margin-right: 1em; color: $brand; font-size: 30px; margin-bottom: .5em; }
            .discounted { color: #CACACB; text-decoration: line-through; }
            @media (min-width: 1000px) {
              flex-direction: row;
              h2 { margin-bottom: 0; }
            }
        }
        .desc { 
            font-weight: 100; line-height: 1.7; margin-bottom: 2em;
         }
         @media (min-width: 1000px) {
          height: auto; flex: 2;
        }
    }

    @media (min-width: 1000px) {
      flex-direction: row; min-height: 655px;
    }
}

.seemore {
  font-weight: 500; cursor: pointer;
  &:hover { color: $brand }
}
.cart-button, .buttons {
  max-width: 614px;
  width: 100%;
  min-height: 51px;
  margin: 0;
}
.cart-button {
  font-size: 0.9em;
  font-weight: 500;
  border-radius: unset;
  background-color: #292929;
  color: #ffffff;

  &:hover {
    background-color: #505050;
    color: #ffffff;
  }

  &:disabled {
    background-color: #505050;
    cursor: not-allowed;
  }
}
.buttons {
  display: flex;
  flex-direction: column;
}
.buttons button {
  width: 100%;
  border: 0;
  border-radius: unset;
  background-color: transparent;
  color: #292929;
  justify-content: unset;
  min-height: 55px;
  margin: 0;
}
.buttons button:hover {
  background-color: #c5c5c5;
  border: 0;
}
.buttons button svg {
  margin-left: 1.5em;
}

@media (min-width: 480px) {
  .buttons {
    flex-direction: row;
  }
  .buttons button {
    width: 50%;
    justify-content: center;
    height: inherit;
    min-height: auto;
  }
  .buttons button:first-child {
    border-right: 1px solid #707070;
  }
}
</style>

<style lang="scss" scoped>
.ship-enter-from, .ship-leave-to {
  // transform: translate(0, 80vh);
  opacity: 0;
  transition: all 0.5s;

  @media (min-width: 768px) {
    // transform: translate(0, 100vh);
    opacity: 0;
  }
}
.ship-enter-to, .ship-leave-from {
  // transform: translate(0, 0);
  opacity: 1;
  transition: all 0.5s;
}
</style>