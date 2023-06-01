<script>
import Jumbotron from './Jumbotron.vue'
import Services from './Services.vue'
import TheCompany from './TheCompany.vue'
import Project from './Project.vue'
import ResultNumbers from './ResultNumbers.vue'
import Sponsors from './Sponsors.vue'
import Form from './Form.vue'


import { store } from "../data/store"

export default {
  name: "AppMain",

  components: {
    Jumbotron,
    Services,
    TheCompany,
    Project,
    ResultNumbers,
    Sponsors,
    Form,
  },

  props: {
    contacts: Object,
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
    <Services />
    <TheCompany />
    <Project />
    <ResultNumbers />
    <Sponsors />
    <!-- passo tramite props gli stessi contacts dell'header -->
    <Form :contheaderacts="contacts" />
  </main>
</template>

<style scoped lang="scss">
main {
  background-color: rgb(17, 17, 23);
}
</style>
