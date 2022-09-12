<script setup>
import api from '~~/composables/SERVER';

const cart = DB_CART();
const totalCartPrice = ref([])
// RESTRICT BACKGROUND SCROLL : FOCUSED MOSTLY ON MOBILE BREAKPOINT
// onMounted(() => {document.querySelector('body').style.overflowY = 'hidden'});
// onBeforeUnmount(() => { document.querySelector('body').style.overflowY = 'initial'; });

const parameter = computed(() => useRoute().params);
watch(parameter, () => {
  setTimeout(SITE_ACTIONS().$patch({ cart: false }), 1500)
})

function totalCart() {
  for(let i = 0; i < cart.CART.length; i++) {
    api.database.getDocument(PRODUCTS_COLLECTION_ID, cart.CART[i].$id)
    .then(response => {
        response.sales === null ? totalCartPrice.value.push(response.price * cart.CART[i].quantity)  : totalCartPrice.value.push((response.price - response.sales) * cart.CART[i].quantity) 
    })
  }
  console.log(totalCartPrice.value)
}
totalCart()

cart.$subscribe(() => {
  totalCartPrice.value = [];
  totalCart()
})

const totalSum = () => {
  const final = totalCartPrice.value.reduce((a, b) => parseInt(a) + parseInt(b), 0);
  return final.toLocaleString('en-US');
};

</script>

<template>
  <div class="pArent">
    <div class="Div1">
      <div class="head">
        <div class="text"><h1>Your Shopping Bag</h1></div>
        <div class="icon" @click="SITE_ACTIONS().toggleCart()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13.435"
            height="13.436"
            viewBox="0 0 13.435 13.436"
          >
            <g
              id="Group_920"
              data-name="Group 920"
              transform="translate(-1314.368 -143.783)"
            >
              <line
                id="Line_442"
                data-name="Line 442"
                y2="18"
                transform="translate(1327.449 144.137) rotate(45)"
                fill="none"
                stroke="#292929"
                stroke-width="1"
              />
              <line
                id="Line_443"
                data-name="Line 443"
                y2="18"
                transform="translate(1327.449 156.865) rotate(135)"
                fill="none"
                stroke="#292929"
                stroke-width="1"
              />
            </g>
          </svg>
        </div>
      </div>
      <div class="body">
        <div class="body-content">
          <ModalsCartbitsItem
            v-for="cart in DB_CART().CART"
            :key="cart.$id"
            :quantity="cart.quantity"
            :uniqueId="cart.$id"
          />
          <div v-if="DB_CART().CART.length === 0" class="empty-state">
            <img src="~~/assets/img/empty-cart.png" alt="">
            <h3>Nothing to see here</h3>
          </div>
        </div>
        <div class="seeCart">
            <div class="subtotal">
              <h1>Total:</h1>
              <p>₦{{ totalSum() }}</p>
            </div>
            <button @click="">{{ 'proceed()' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/stylesheet/main.scss';
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 90%;

  img { width: 90%;}
  h3 { font-family: 'Chonburi'; font-weight: 100;}
}
.pArent {
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  grid-template-rows: auto 100vh;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  position: absolute;
  // max-height: 100vh;
  background: #2929291e;
  z-index: 10; width: 100%;
  top: 0; bottom:0;
  place-content: first baseline;
}

.Div1 {
  grid-area: 2 / 1 / 3 / 4;
  margin: 90px 1em 0 1em;
  .head {
    width: 100%;
    height: 90px;
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 1em 1em 0 0;
    background: #fff;
    // background: #f8f8f8;

    .text {
      width: 85%;
      height: 100%;
      display: flex;
      align-items: center;
      h1 {
        margin-left: calc(3vw + 1em);
        font-family: 'Chonburi';
        font-size: clamp(1em, 3vw + 0.5em, 1.5em);
        font-weight: 100;
        @media (min-width: 768px) and (orientation: landscape) { margin: calc(1vw + 1em); }
      }
    }
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80px;
      height: 100%;
      border-left: 1px solid #ccc;

      @media (min-width: 768px) and (orientation: landscape) {  }
      &:hover {
        cursor: pointer;
        background: #ccc;
      }
    }
  }
  @media (min-width: 768px) and (orientation: landscape) { margin: 1em; }
}
.body {
    width: 100%;
    height: calc(100% - 90px);
    background: #fff;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border: 1px solid #ccc;
    border-top: 0;
    border-radius: 0 0 1em 1em;
  .body-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em 0;
    overflow-y: auto;
    height: 100%;
    margin: 0 calc(3vw + 1em);
    @media (min-width: 768px) and (orientation: landscape){
      margin: 0 calc(1vw + 1em);
      height: 100%;
    }
    &::-webkit-scrollbar { display: none; }
  }
  .seeCart {
      width: 100%;
      padding-bottom: 1em;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (min-width: 768px) and (orientation: landscape) { padding-bottom: 2em; }
      
      .subtotal {
        width: 85%;
        // margin-top: 1em;
        padding-top: 1em;

        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: 1px solid #ccc;

        h1 {
          font-size: 1.5em;
          font-family: 'Chonburi';
          font-weight: 100;
        }
        p {
          font-family: 'Montserrat';
          font-size: 1.2em;
        }
      }
      button {
        width: 85%;
        border-radius: 0;
        height: 53px;
        font-family: 'Montserrat';
        font-weight: 500;
        margin-top: 2em;
        font-size: 0.8em;
        transition: all 0.5s;
        &:hover {background-color: darken($brand, 10%); color: #fff}
        
      }
    }
    @media (min-width: 768px) and (orientation: landscape){ border-radius: 0; }
}
@media (min-width: 768px) and (orientation: landscape) {
  .pArent {
    display: grid;
    grid-template-columns: repeat(2, 1fr) repeat(3, auto);
    grid-template-rows: repeat(3, 1fr);
    width: auto;
    right: 0; margin: 1em; bottom: 0;
    background: transparent; align-items: flex-end;
    height: 100vh;
  }

  .Div1 {
    grid-area: 1 / 3 / 4 / 6;
    width: 430px;
    height: 100vh; max-height: 600px;
    border-radius: 0;

    @media (min-height: 1300px) {
      max-height: 400px;
    }
    .head {
      height: 90px;
    }
  }
}
</style>