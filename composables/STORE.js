import { defineStore } from "pinia";
import api from "./SERVER";

export const DB_PRODUCTS = defineStore('PRODUCTS', {
    state: () => ({
        SEARCH_RESULTS: [], ALL_PRODUCTS: [],
        QUERY_RESULTS: [], COLLECTIONS: [], COLLECTION_PRODUCTS: [],
        SINGULAR: {},
        category: {
            RECOMMENDED: [],
            INSTOCK: [],
            FEATURED: [],
            NEWARRIVALS: []
        }, 
    }),

    actions: {
        PAGINATE_PRODUCTS(limit, offset) {
            api.database.listDocuments(PRODUCTS_COLLECTION_ID, [], limit, offset)
            .then(response => {
                this.ALL_PRODUCTS = response.documents;
                console.log(this.ALL_PRODUCTS)
            })
            .catch(err => console.log(err));
        },
        mutateTest(data) {
            this.SEARCH_RESULTS =  data;
            console.log(this.SEARCH_RESULTS);
        },
        mutateTestII(data) {
            this.QUERY_RESULTS =  data;
            console.log(this.QUERY_RESULTS);
        },
        mutateCategory(payload) {
            Object.assign(this.category, {
                RECOMMENDED: payload.R,
                INSTOCK: payload.I,
                FEATURED: payload.F,
                NEWARRIVALS: payload.N
            })
        },
        mutateCollection(payload){
            this.COLLECTIONS = payload
        },
        mutateProductByCollection(payload) {
            this.COLLECTION_PRODUCTS = payload
        }
    }
})