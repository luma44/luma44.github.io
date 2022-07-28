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

onMounted(async () => {
  randomize();
})
</script>

<template>
  <div class="container nftSearcher">
    <form style="background-color: #e9dcbe" @submit.prevent>
      <div class="form-group row">
        <label for="gloveId" class="col-sm-2 col-form-label">ID</label>
        <div class="col-sm-10">
          <input :value="nftName" @input="event => nft = store.findById(event.target.value)">
        </div>
      </div>
      <button type="button" class="btn btn--primary" @click="randomize">Random</button>
    </form>

    <NftDetails :nft="nft"></NftDetails>
  </div>
</template>

<style scoped>
img {
  width: 50%;
}
</style>
