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
    <div class="row">

      <h1 class="col-3">
        <label for="nftId" class="col-form-label">ID</label>
        <input id="nftId" class="col-sm-5" :value="nftName" @input="event => nft = store.findById(event.target.value)">
      </h1>
      <div class="col-3 mt-3">
      <button type="button" class="btn btn-primary" @click="randomize">Random</button>
      </div>
    </div>

    <NftDetails :nft=nft></NftDetails>
  </div>
</template>

<style scoped>
</style>
