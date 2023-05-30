<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import Cards from './components/Cards.vue'
import AppFooter from './components/AppFooter.vue'


export default {
  components: {
    AppHeader,
    AppMain,
    Cards,
    AppFooter,
  }
}

</script>

<template>
  <AppHeader />
  <AppMain />
  <Cards />
  <AppFooter />
</template>

<style scoped lang="scss"></style>
