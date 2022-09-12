import { Appwrite, Query } from "appwrite";

const api = new Appwrite();

api
    .setEndpoint('http://146.190.226.105/v1') // Your API Endpoint
    .setProject('625ffecff09322eac07f') // Your project ID
;

export const PRODUCTS_COLLECTION_ID = '625fff454e3c0e43d6b8';
export const PRODUCTS_COLLECTION_IMAGE_BUCKET_ID = 'featured-products';
export default api

// Register User
export const createNewUser = (MAIL, PASSWORD, NAME) => {
    api.account.create('unique()', MAIL, PASSWORD, NAME)
    .then(response => { console.log(response);},
    error => { console.log(error);});
}

export const fetchSingleProduct = (query) => {
    return api.database.getDocument(PRODUCTS_COLLECTION_ID, query)
}

export const queryProducts = (query) => {
    api.database.listDocuments(PRODUCTS_COLLECTION_ID, [ Query.search('title', query) ]).then (response => {
        DB_PRODUCTS().mutateTest(response.documents);
    }) .catch(err => console.log(err))
}

export const searchResults = (query) => {
    api.database.listDocuments(PRODUCTS_COLLECTION_ID, [ Query.search('title', query) ]).then (response => {
        DB_PRODUCTS().mutateTestII(response.documents);
    }) .catch(err => console.log(err))
}

export const fetchSingleImage = (drinks, width, height) => {
    const imageURL = api.storage.getFilePreview(PRODUCTS_COLLECTION_IMAGE_BUCKET_ID, drinks, width, height);
    return imageURL.href
}

export const fetchBaseImage = (source, image, width, height) => {
    const imageURL = api.storage.getFilePreview(source, image, width, height);
    return imageURL.href
}

export const queryProductsByCategory = () => {
    api.database.listDocuments(PRODUCTS_COLLECTION_ID)
    .then(response => {
        const payload = { R: null, F: null, I: null, N: null }
        payload.R = response.documents.filter(doc => doc.recommended === true);
        payload.F = response.documents.filter(doc => doc.featured === true);
        payload.I = response.documents.filter(doc => doc.inStock === true);
        payload.N = response.documents.filter(doc => doc.newArrival === true)

        DB_PRODUCTS().mutateCategory(payload);
    })
    .catch(err => console.log(err));
}

export const fetchCollections = () => {
    api.database.listDocuments('62750820bc5ef93a8152')
    .then(response => DB_PRODUCTS().mutateCollection(response.documents))
    .catch(err => console.log(err));
}

export const fetchProducts_ByCollection = (collection) => {
    api.database.listDocuments(PRODUCTS_COLLECTION_ID)
    .then(response => {
        const data = response.documents.filter(doc => doc.category.toLowerCase().replace(/\s/g, '-') === collection);
        DB_PRODUCTS().mutateProductByCollection(data)
    })
    .catch(error => console.log(error))
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}