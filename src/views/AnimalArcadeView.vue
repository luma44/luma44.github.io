<script setup>
import HeroImage from "../components/HeroImage.vue";
import NftSearcher from "../components/NftSearcher.vue";
import NftList from "../components/NftList.vue";

import {animalArcadeStore} from "@/stores/animal_arcade_store";
const store = animalArcadeStore();
const imageUrl = new URL("../assets/animal_arcade/hero.png", import.meta.url).href
</script>

<template>
  <HeroImage :image=imageUrl></HeroImage>
  <NftSearcher :store=store></NftSearcher>
  <NftList :store=store></NftList>
</template>
