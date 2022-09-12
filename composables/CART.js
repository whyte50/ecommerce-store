import { defineStore } from "pinia";
import api from "./SERVER";

export const DB_CART = defineStore("cart", {
    state: () => ({
        CART: [], RECENTS: [], TOTAL: {
            sum: 0,
            item: []
        }
    }),
    
    actions: {
        // INCREMENT PRODUCT QUANTITY IN CART
        incrementCartQuantity(itemID) {
            const cartItem = this.CART.find(item => item.$id === itemID);
            cartItem.quantity++;
        },
        // DECREMENT PRODUCT QUANTITY IN CART
        decrementCartQuantity(itemID) {
            const cartItem = this.CART.find(item => item.$id === itemID);
            if (cartItem.quantity === 1) return
            cartItem.quantity--;
        },
        // ADD PRODUCT TO CART
        addToCart(item) {
            this.CART.push(item);
            console.log(this.CART)
        },
        removeItem(data) {
            this.CART = this.CART.filter((value) => value.$id != data)
        },
        addToRecents(item) {
            this.RECENTS.push(item);
            console.log(this.RECENTS)
        },
        totalCart() {
            for(let i = 0; i < this.CART.length; i++) {
              api.database.getDocument(PRODUCTS_COLLECTION_ID, this.CART[i].$id)
              .then(response => {
                  response.sales === null ? this.TOTAL.item.push(response.price * this.CART[i].quantity)  : this.TOTAL.item.push((response.price - response.sales) * this.CART[i].quantity) 
              })
            }
            console.log(this.TOTAL.item);
            this.TOTAL.sum = this.TOTAL.item.reduce((a, b) => parseInt(a) + parseInt(b), 0);
            console.log(this.TOTAL.sum);
            return
        }
    },
    persist: true
})