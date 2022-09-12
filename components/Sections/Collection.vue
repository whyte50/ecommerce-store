<script setup>
import api from '~~/composables/SERVER';

const { data, pending, error, refresh } = await useAsyncData('category',() => {
    const promise = api.database.listDocuments('62750820bc5ef93a8152')
    return promise
})
</script>
<template>
    <div class="content" v-for="{ image, name, $id } in data.documents">
        <router-link
            class="product"
            :to="`/collections/${$id}`"
        >
            <img :src="fetchBaseImage('62750d23560ff568279b', image, 200, 221)" :alt="name" />
            <p>{{ name }}</p>
        </router-link> 
    </div>
</template>

<style lang="scss" scoped>
@import '~~/assets/stylesheet/breakpoint.scss';
.content {
  min-width: 328px;
  max-width: 328px;
  height: 369px;

  @include desktop {
    min-width: 378px;
    height: 339px;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  border-right: 1px solid #ccc;
  transition: 0.5s;
  overflow: hidden;

  a { border-radius: 12px; }

  .product {
    display: flex;
    align-items: center;
    flex-direction: column;

    img {
      transition: 0.5s;
      border-radius: 5px;
      border: 1px solid #ccc;

      object-fit: cover;
    }
    p {
      width: 130px;
      text-align: center;
      margin-top: 1em;
      font-family: 'Poppins';
    }
  }

  &:hover {
    cursor: pointer;
    img {
      box-shadow: 26px 35px 125px -40px rgba(0, 0, 0, 0.65);
    }
  }
}
</style>