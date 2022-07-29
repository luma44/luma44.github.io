<script setup>
import {ref} from 'vue';

import NftDetails from "./NftDetails.vue";

const props = defineProps({
  store: {
    type: Object,
    required: true
  }
})

const filters = ref(new Map())

function setFilter(trait_type, trait_value) {
  if (trait_value) {
    filters.value.set(trait_type, trait_value);
  } else {
    filters.value.delete(trait_type);
  }
  console.log(filters.value)
}

</script>

<template>
  <div class="container nftSearcher">
    <div>
      <div class="btn-group">
        <div class="col" v-for="trait_type in store.traitTypes()">
          <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
            <span v-if="filters.has(trait_type)">{{ filters.get(trait_type) }}</span>
            <span v-else>{{ trait_type }}</span>
          </button>
          <ul class="dropdown-menu">
            <li class="dropdown-item" @click="setFilter(trait_type, undefined)" v-if="filters.has(trait_type)">
              Clear filter
            </li>
            <li v-if="filters.has(trait_type)"><hr class="dropdown-divider"></li>
            <li class="dropdown-item" @click="setFilter(trait_type, trait_value)" :class="{active: filters.get(trait_type) === trait_value}"
                v-for="trait_value in store.traitValues(trait_type)" >
              {{ trait_value }}
            </li>
          </ul>
        </div>
      </div>
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
