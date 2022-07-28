<script setup>
import {ref} from 'vue';

import NftDetails from "./NftDetails.vue";

const props = defineProps({
  store: {
    type: Object,
    required: true
  }
})

const filters = ref([])

function addFilter(trait_type, trait_value) {
  filters.value.push({trait_type: trait_type, value: trait_value});
}

function removeFilter(filter) {
  filters.value = filters.value.filter(f => f !== filter)
}


</script>

<template>
  <div class="container nftSearcher">
    <div>
      <div class="btn-group">
        <div class="col" v-for="trait_type in store.traitTypes()">
          <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
            {{ trait_type }}
          </button>
          <ul class="dropdown-menu">
            <li class="dropdown-item" @click="addFilter(trait_type, trait_value)"
                v-for="trait_value in store.traitValues(trait_type)">
              {{ trait_value }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div>
      <span class="badge rounded-pill text-bg-success" v-for="filter in filters" >
        {{filter.trait_type}}: {{filter.value}}
        <button type="button" class="btn-close" aria-label="Close" @click="removeFilter(filter)"></button>
      </span>
    </div>

    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
      <div class="col" v-for="nft in store.filtered(filters)" :key="nft.name">
        <div class="card" data-bs-toggle="modal" :data-bs-target="'#nftModal'+nft.name">
          <img v-bind:src="nft.thumbnail" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ nft.description }}</h5>
            <a v-bind:href="nft.external_url" class="card-link">Marketplace link</a>
          </div>
          <div class="modal fade" :id="'nftModal'+nft.name" tabindex="-1" aria-labelledby="exampleModalLabel"
               aria-hidden="true">
            <div class="modal-dialog modal-xl">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="nftModalLabel">{{ nft.description }}</h5>
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
