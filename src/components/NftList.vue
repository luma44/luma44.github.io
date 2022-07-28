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
        <div class="card" data-bs-toggle="modal" :data-bs-target="'#exampleModal'+nft.name">
          <img v-bind:src="nft.thumbnail" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ nft.description }}</h5>
            <a v-bind:href="nft.external_url" class="card-link">Marketplace link</a>
          </div>

          <div class="modal fade" :id="'exampleModal'+nft.name" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-xl">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">{{ nft.description }}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <NftDetails :nft="nft" :thumbnail=false></NftDetails>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>
