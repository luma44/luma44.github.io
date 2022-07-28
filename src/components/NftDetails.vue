<script setup>
defineProps({
  nft: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <div class="container" v-if="nft">
    <div class="row">
      <div class="col">
        <a id="marketplacelink" v-bind:href="nft.external_url">
          <img class="img-fluid rounded float-left mx-auto d-block" v-bind:src="nft.thumbnail">
          <p id="marketplaceurl">Find on Gamestop's Marketplace</p>
        </a>
      </div>
      <div class="col">
        <table class="table table-hover">
          <thead>
          <tr class="table-dark">
            <th scope="col">Trait Name</th>
            <th scope="col">Trait Value</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="trait in nft.attributes">
            <th scope="row">{{ trait.trait_type }}</th>
            <td>{{ trait.value }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

</template>

<style scoped>
img {
  max-height: 400px;
}
</style>
