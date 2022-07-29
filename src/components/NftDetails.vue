<script setup>
import {ref, onBeforeMount, computed, onMounted} from 'vue';


const props = defineProps({
  nft: {
    type: Object,
    required: true
  },
  thumbnail: {
    type: Boolean,
    required: false,
    default: true
  }
})

const imageUrl = computed(() => {
  if (props.thumbnail) {
    return props.nft.thumbnail;
  } else {
    return props.nft.image;
  }
})

</script>

<template>
  <div class="container" v-if="nft">
    <div class="row row-cols-1 g-4" :class="{'row-cols-md-2': thumbnail}">
      <div class="col">
        <a :href="nft.external_url" v-if="nft.external_url">
          <img class="img-fluid rounded float-left mx-auto" :src="imageUrl" :class="{thumbnail: thumbnail}">
          <p>Find on Gamestop's Marketplace</p>
        </a>
        <span v-else>
          <img class="img-fluid rounded float-left mx-auto" :src="imageUrl" :class="{thumbnail: thumbnail}">
          <p>Not available on Marketplace</p>
        </span>
      </div>
      <div class="col">
        <div class="table-responsive">
          <table class="table table-hover">
            <thead>
            <tr class="table-dark">
              <th scope="col">Trait Name</th>
              <th scope="col">Trait Value</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="trait in nft.attributes">
              <th scope="row">{{ trait.trait_type }}</th>
              <td>{{ trait.value }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.thumbnail {
  max-height: 400px;
}
</style>
