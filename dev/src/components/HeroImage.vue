<script setup>
defineProps({
  image: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="hero-image">
    <div class="hero-text">

    </div>
  </div>
</template>

<style scoped>
.hero-image {
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("@/assets/player_gloves_hero.webp");
  flex-grow: 1;

  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  height: 30%;
  margin-bottom: -58px;
}

@media (min-width: 1024px) {
  .hero-image {
    height: 360px;
  }
}


</style>
