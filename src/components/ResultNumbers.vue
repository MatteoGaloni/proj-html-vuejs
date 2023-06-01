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
      <h6 class="mb-3 my_small_title">WHAT ARE WE DOING</h6>
      <div class="title_box d-flex justify-content-center">
        <span class="title_full">Results</span>
        <span class="ml-3 ms-2">in Numbers</span>
      </div>
      <div id="numbers_container" class="mt-5 d-flex">
        <div v-for="item in this.store.resultsNumbers">
          <span class="my_small_title title_box">{{ item.number }}</span>
          <h5 class="link" href="#">{{ item.result }}</h5>
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
