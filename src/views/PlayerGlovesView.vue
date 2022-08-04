<script setup>
import HeroImage from "../components/HeroImage.vue";
import NftSearcher from "../components/NftSearcher.vue";
import NftList from "../components/NftList.vue";

import {playerGloveStore} from "@/stores/player_glove_store";
const store = playerGloveStore();
const imageUrl = new URL("../assets/player_glove/hero.png", import.meta.url).href
</script>

<template>
  <HeroImage :image=imageUrl></HeroImage>
  <NftSearcher :store=store></NftSearcher>
  <NftList :store=store></NftList>
</template>
