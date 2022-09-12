<script setup>
useHead({
  title: `Online Drinks Shop In Lagos`,
  meta: [
    { 
      name: 'description',
      content: 'Order drinks online at affordable prices and get them delivered to you doorstep! Browse our wide range of drinks from premium wines, to your favourite scotch whiskeys. Order for parties, restuarants, events etc. With uncompromised secured delivery'
    }
  ]
})
onMounted(() => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
})
</script>
<template>
  <div>
    <Caurosel />
    <SectionsSection1Page1 />
  </div>
</template>