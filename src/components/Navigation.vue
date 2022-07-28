
<script setup>
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/luma44">Luma44</RouterLink>
    <RouterLink to="/playergloves">Player Gloves</RouterLink>
    <RouterLink to="/animalarcade">Animal Arcade</RouterLink>
  </nav>
</template>

<style scoped>

nav {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  list-style: none;
  margin: 0;
  position: absolute;
  z-index: 10;
}
nav a {
  text-decoration: none;
  display: block;
  padding: 1em;
  color: white;
}


@media all and (max-width: 800px) {
  nav {
    /* When on medium sized screens, we center it by evenly distributing empty space around items */
    justify-content: space-around;
  }
}

/* Small screens */
@media all and (max-width: 500px) {
  nav {
    flex-flow: column wrap;
    padding: 0;
  }
  nav a {
    background-color: rgba(100, 100, 255, 0.7);
    text-align: center;
    padding: 10px;
    border-top: 1px solid rgba(255, 255, 255,0.3);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  nav li:last-of-type a {
    border-bottom: none;
  }
}

</style>
