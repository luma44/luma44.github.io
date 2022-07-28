<script setup>
defineProps({
  nft: {
    type: Object,
    required: true
  }
})

</script>

<template>
    <div v-if="nft">
      <h1>{{ nft.description }}</h1>
      <a id="marketplacelink" v-bind:href="nft.external_url">
        <img id="nftImage" class="nftImage" v-bind:src="nft.image">
        <p id="marketplaceurl">Find on Gamestop's Marketplace</p>
      </a>
      <table>
        <thead>
        <tr>
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

</template>

<style scoped>
img {
  width: 50%;
}
</style>
