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
    // filterProjects() {
    //   console.log("ciao")

    // }
  }
}

</script>

<template>
  <div id="sponsors_container">
    <div class="my_container d-flex justify-content-between">
      <div v-for="logo in this.store.sponsorsLogoPath">
        <img class="logo_img" :src="logo" alt="#">
      </div>

    </div>

  </div>
</template>

<style scoped lang="scss">
#sponsors_container {
  background-color: #222;
  padding-bottom: 5rem
}

.logo_img {
  filter: invert(1);
}
</style>
