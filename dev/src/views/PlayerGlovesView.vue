<script setup>
import HeroImage from "../components/HeroImage.vue";
import NftSearcher from "../components/NftSearcher.vue";

import {playerGloveStore} from "@/stores/player_glove_store";
const store = playerGloveStore();
await store.fetchData();
</script>

<template>
  <HeroImage image="assets/player_gloves_hero.webp"></HeroImage>
  <NftSearcher :store=store></NftSearcher>
</template>
