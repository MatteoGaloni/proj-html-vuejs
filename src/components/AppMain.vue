<script>
import Services from './Services.vue'




export default {
  name: "AppMain",

  components: {
    Services,

  },

  props: {
    servicesList: Array,
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
    <Services :servicesList="servicesList" />
    <div class="test">
      <h2>CIAOOOOOOOOOOOOOOOOOOOOOOOOoooooo</h2>
      <div></div>

    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  background-color: pink;
}

.test {
  background-color: black;
  min-height: 200px;
}
</style>
