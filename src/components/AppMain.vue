<script>
import Jumbotron from './Jumbotron.vue'
import Services from './Services.vue'

export default {
  name: "AppMain",

  components: {
    Jumbotron,
    Services,
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
    <!-- sto valutando l'idea di usare lo stesso componente sia per la sezione "Services" che per la sezione "About the company" -->
    <Services />
  </main>
</template>

<style scoped lang="scss">
main {
  background-color: lightgray;
}
</style>
