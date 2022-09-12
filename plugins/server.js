import { Appwrite, Query } from "appwrite";

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig();
    return {
        provide: {
            api: () => {
                const sdk = new Appwrite();
                sdk
                    .setEndpoint(config.endpoint) // Your API Endpoint
                    .setProject(config.project) // Your API project ID
                ;
                return sdk
            }
        }
    }
})