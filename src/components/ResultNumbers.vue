<script>
import { store } from "../data/store"

export default {
  name: "ResultNumbers",

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
  <div id="results_container">
    <div class="my_container">
      <h6>WHAT ARE WE DOING</h6>
      <h1>Results in Numbers</h1>
      <div id="numbers_container" class="d-flex justify-content-center">
        <div class="d-flex">
          <div v-for="item in this.store.resultsNumbers">
            <h5>{{ item.number }}</h5>
            <h5 class="link" href="#">{{ item.result }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#results_container {
  text-align: center;
  background-image: url(../assets/images/img/bg-7.jpg);
  background-size: cover;
  background-position: center;
  min-height: 400px;
  color: white;

}
</style>
