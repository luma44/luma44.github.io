<script setup>
import {RouterLink, RouterView} from 'vue-router'
import HeroImage from "./components/HeroImage.vue";
import Navigation from "./components/Navigation.vue";
import NftSearcher from "./components/NftSearcher.vue";
</script>

<template>
  <Navigation></Navigation>
  <RouterView/>
</template>

<style scoped>

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
