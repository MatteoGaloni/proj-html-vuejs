<script>
import AppHeader from './components/AppHeader.vue'
import Jumbotron from './components/Jumbotron.vue'
import AppMain from './components/AppMain.vue'
import Cards from './components/Cards.vue'
import AppFooter from './components/AppFooter.vue'


export default {
  components: {
    AppHeader,
    AppMain,
    Cards,
    AppFooter,
  },

  data() {
    return {
      contacts: {
        number: "+1 (305) 1234-5678",
        mail: "hello@example.com",
        address: "Main Avenue, 987",
      },

      servicesList: ["Audit & assurance", "Financial Advisory", "Analytics and M&A", "Middle Marketing", "Legal Consulting", "Regulatory Risk"]

    }
  },

  methods: {
  }
}

</script>

<template>
  <AppHeader :contacts="contacts" />
  <AppMain :servicesList="servicesList" />
  <Cards />
  <AppFooter />
</template>

<style scoped lang="scss"></style>
