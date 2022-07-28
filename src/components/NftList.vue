<script setup>
import NftDetails from "./NftDetails.vue";

const props = defineProps({
  store: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <div class="container nftSearcher">
    <ul v-for="nft in store.all()">
      <li>{{nft}}</li>
    </ul>

    <!--    <NftDetails :nft="nft"></NftDetails>-->
  </div>
</template>

<style scoped>

</style>
