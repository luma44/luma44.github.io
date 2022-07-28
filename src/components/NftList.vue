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
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">

      <div class="col" v-for="nft in store.all()">

        <div class="card">
          <img v-bind:src="nft.thumbnail" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ nft.description }}</h5>
            <a v-bind:href="nft.external_url" class="card-link">Marketplace link</a>
          </div>
        </div>
      </div>

    </div>

    <!--    <NftDetails :nft="nft"></NftDetails>-->
  </div>
</template>

<style scoped>

</style>
