<script setup>
</script>

<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top" style="background: rgba(0,0,0,0.5);">
    <div class="container">
      <RouterLink class="navbar-brand" to="/">Luma44</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/playergloves">Player Gloves</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/animalarcade">Animal Arcade</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
</style>
