<script setup>
const props = defineProps({
  image: {
    type: String,
    required: true
  }
})
</script>

<template>
  <header class="masthead" :style="'background-image: url('+image+'); background-color: rgb(125,125,125); '">
  </header>
</template>

<style scoped>
.masthead {
  height: 30vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
