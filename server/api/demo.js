export default defineEventHandler((event) => {
    return {
      api: () => {
        const { $api } = useNuxtApp();
        const data = $api().database.listDocuments('62750820bc5ef93a8152');
        return data
      }
    }
  })