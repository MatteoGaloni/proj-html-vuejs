<script>

import Jumbotron from './Jumbotron.vue'



export default {
  name: "AppMain",

  components: {
    Jumbotron,
  },

  data() {
    return {

    }
  },

  methods: {
  }
}

</script>

<template>
  <main>
    <Jumbotron />
  </main>
</template>

<style scoped lang="scss">
main {
  background-color: pink;
}
</style>
