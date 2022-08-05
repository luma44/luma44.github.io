<script setup>
import NftDetails from "./NftDetails.vue";

defineProps({
  store: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="container">
    <nav class="navbar bg-light navbar-expand-lg">
      <div class="container-fluid">

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#filters"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle filters">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="filters">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 row">
            <li class="nav-item dropdown col" v-for="trait_type in store.traitTypes()"
                :class="{'bg-danger':store.hasFilter(trait_type)}">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                 aria-expanded="false">
                <span v-if="store.hasFilter(trait_type)">{{ store.getFilter(trait_type) }}</span>
                <span v-else>{{ trait_type }}</span>
              </a>
              <ul class="dropdown-menu">
                <li class="dropdown-item" @click="store.setFilter(trait_type, undefined)" v-if="store.hasFilter(trait_type)">
                  Clear filter
                </li>
                <li v-if="store.hasFilter(trait_type)">
                  <hr class="dropdown-divider">
                </li>

                <li class="dropdown-item" @click="store.setFilter(trait_type, trait_value)"
                    :class="{active: store.getFilter(trait_type) === trait_value}"
                    v-for="trait_value in store.traitValues(trait_type)">
                  {{ trait_value }}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>


    </nav>

    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
      <div class="col" v-for="nft in store.filtered()" :key="nft.name">
        <div class="card" data-bs-toggle="modal" :data-bs-target="'#nftModal'+nft.name">
          <img v-bind:src="nft.thumbnail" class="card-img-top" alt="Image of the NFT">
          <div class="card-body">
            <h5 class="card-title">{{ nft.description }}</h5>
            <a v-bind:href="nft.external_url" v-if="nft.external_url" class="card-link">Marketplace link</a>
            <span v-else class="card-link">Not available on Marketplace</span>
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
                  <NftDetails :nft="nft" :thumbnail=false :store="store"></NftDetails>
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
