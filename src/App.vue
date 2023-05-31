<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'
import { store } from "./data/store"


export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },

  data() {
    return {
      store,

      // oggetto passato tramite props all'header per popolare la sezione top Header
      contacts: {
        number: "+1 (305) 1234-5678",
        mail: "hello@example.com",
        address: "Main Avenue, 987",
      },

    }
  },

  methods: {
  }
}

</script>

<template>
  <!-- divido in tre macro componenti per poi aggiungerne altri più specifici  -->
  <!-- ******************************************************************************** -->
  <!-- in AppHeader inserisco da html top header e navigation bar,
                 inoltre passo tramite props l'array contacts preso dai data -->
  <AppHeader :contacts="contacts" />
  <!-- ******************************************************************************** -->
  <!-- in AppMain inserisco il componente Jumbotron - Services - Cards -->
  <AppMain />
  <!-- ******************************************************************************** -->
  <!-- in AppFooter insrisco da html bottom footer e i classici contatti del footer passandone alcuni tramite props (contacts) -->
  <AppFooter :contacts="contacts" />
</template>

<style scoped lang="scss"></style>
