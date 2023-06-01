<script>
import { store } from "../data/store"

export default {
  name: "Services",

  props: {

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
  <div id="full_container">
    <div id="services_container" class="my_container">
      <h6 class="mb-3">OUR BUSINESS AREAS</h6>
      <h1 class="mb-3">Excellence in Services</h1>
      <div class="d-flex justify-content-between mb-3">
        <p>We are leaders in providing consultancy services with a set of cutting-edge technologies and a team of
          experienced and renowned professionals. These are some options that you can hire.</p>
        <button class="my_button full_button">SEE ALL</button>
      </div>
      <div id="services_cards_container" class="d-flex justify-content-between flex-wrap">
        <div v-for="item in this.store.servicesList" class="service_card">
          <img class="service_icon" :src="item.icon" alt="">
          <h3 class="">{{ item.service }}</h3>
          <p class="pr-3">{{ item.overview }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#full_container {
  background-color: rgb(238, 244, 237);
}


#services_container {
  min-height: 500px;

  h1 {
    color: rgb(89, 23, 147);
  }

  #services_cards_container {
    gap: 1rem;

    .service_card {
      border-radius: 6px;
      padding: 3rem 2rem;
      background-color: white;
      width: calc(100% / 3 - 1rem);

      .service_icon {
        width: 50px;
        margin-bottom: 1rem;
      }

    }

  }
}
</style>
