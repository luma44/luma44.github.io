# Luma44's NFT Collections

Static page built with vue.js, vite and bootstrap

`raw_animal_arcade` and `raw_player_glove` are magic directories: json-files in there are added to the "database" 
of the corresponding NFT collection. Using the github website, you can drop your NFT description files with the 
corresponding image and they will be automatically used for the page.

Images you're dropping will be used for their NFT and thumbnails are automatically generated.

Since unpublished NFTs (i.e. without an `external_url` entry in the JSON file) aren't displayed anyway, their images
aren't used and don't need to be added. 

## Project Setup

```sh
npm ci
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
