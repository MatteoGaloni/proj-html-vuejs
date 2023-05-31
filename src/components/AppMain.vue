<script>
import Jumbotron from './Jumbotron.vue'
import Services from './Services.vue'
import TheCompany from './TheCompany.vue'
import Project from './Project.vue'


import { store } from "../data/store"

export default {
  name: "AppMain",

  components: {
    Jumbotron,
    Services,
    TheCompany,
    Project,
  },

  data() {
    return {
      store
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
    <TheCompany />
    <Project />

  </main>
</template>

<style scoped lang="scss">
main {
  background-color: lightgray;
}
</style>
