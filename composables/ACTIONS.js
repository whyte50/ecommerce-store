import { defineStore } from "pinia";

export const SITE_ACTIONS = defineStore('actions', {
    state: () => ({
        cart: false, menu: false, feedback: false,
        login: false, signup: false, query: '', alert: { data:{
            STATE: false, HEADER: ''
        }, alert: false },
    }),
    actions: {
        toggleCart() { this.cart = !this.cart },
        toggleMenu() { this.menu = !this.menu },
        toggleFeedback() { this.feedback = !this.feedback; },
        toggleLogin() { this.login = !this.login; },
        updateQuery(input) { this.query = input },
        toggleAlert() { this.alert.alert = !this.alert.alert; },
        updateAlert( state, header) {
            const data = this.alert.data;
            data.STATE = state;
            data.HEADER = header;
        }
    },
    persist: true
})