<script setup>
import {ref, onBeforeMount, computed, onMounted} from 'vue';
import NftDetails from "./NftDetails.vue";

const props = defineProps({
  store: {
    type: Object,
    required: true
  }
})

let nft = ref()
const nftName = computed(() => {
  if (nft.value) {
    return nft.value.name
  } else {
    return undefined
  }
})

function randomize() {
  nft.value = props.store.random(nftName);
}

randomize();

</script>

<template>
  <div class="container nftSearcher">
    <div class="row  row-cols-1 row-cols-sm-2 row-cols-md-10">
      <h1 class="col col-md-3">
        <label for="nftId" class="col-form-label">ID</label>
        <input id="nftId" class="col-6" :value="nftName"
               @input="event => nft = store.findById(event.target.value)">
      </h1>
      <div class="col mb-3 mt-sm-3">
        <button type="button" class="btn btn-primary" @click="randomize">Random</button>
      </div>
    </div>

    <NftDetails :nft=nft :store="store"></NftDetails>
  </div>
</template>

<style scoped>
</style>
