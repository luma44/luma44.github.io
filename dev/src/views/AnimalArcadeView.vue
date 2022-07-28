<script setup>
import HeroImage from "../components/HeroImage.vue";
import NftSearcher from "../components/NftSearcher.vue";

import {animalArcadeStore} from "@/stores/animal_arcade_store";
const store = animalArcadeStore();
await store.fetchData();
</script>

<template>
  <HeroImage image="assets/player_gloves_hero.webp"></HeroImage>
  <NftSearcher :store=store></NftSearcher>
</template>
