<script setup>
import HeroImage from "../components/HeroImage.vue";
import NftSearcher from "../components/NftSearcher.vue";

const aa = new URL("../assets/animal_arcade/card.png", import.meta.url).href
const pg = new URL("../assets/player_glove/card.png", import.meta.url).href

</script>

<template>
  <HeroImage></HeroImage>

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 g-4 mt-4">
      <div class="col">
        <RouterLink class="nav-link" to="/animalarcade">
          <div class="card text-bg-dark">
            <img :src="aa" class="card-img" alt="...">
          </div>
        </RouterLink>
      </div>

      <div class="col">
        <RouterLink class="nav-link" to="/playergloves">
          <div class="card text-bg-dark">
            <img :src="pg" class="card-img" alt="...">
          </div>
        </RouterLink>
      </div>
    </div>
  </div>

</template>
