<script>
import { store } from "../data/store"

export default {
  name: "Sponsors",

  data() {
    return {
      store

    }
  },

  methods: {
    getImageUrl(name) {
      return new URL(`../assets/images/img/${name}`, import.meta.url).href
    },
  }
}

</script>

<template>
  <div id="sponsors_container">
    <div class="my_container d-flex justify-content-between">
      <div v-for="logo in this.store.sponsorsLogoPath">
        <img class="logo_img" :src="getImageUrl(logo)" alt="#">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../styles/my_variables.scss' as *;

#sponsors_container {
  background-color: $dark_bg;
}

.logo_img {
  filter: invert(1);
}
</style>
