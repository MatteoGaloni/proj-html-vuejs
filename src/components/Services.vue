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
      <h6 class="mb-3 my_small_title">OUR BUSINESS AREAS</h6>
      <div class="title_box d-flex">
        <span class="full_title mb-3 me-2">Excellence in</span>
        <!-- inserito after element -->
      </div>
      <div class="d-flex justify-content-between mb-3">
        <p>We are leaders in providing consultancy services with a set of cutting-edge technologies and a team of
          experienced and renowned professionals. These are some options that you can hire.</p>
        <button class="my_button full_button">SEE ALL</button>
      </div>
      <div id="services_cards_container" class="d-flex justify-content-between flex-wrap">
        <div v-for="item in this.store.servicesList" class="service_card">
          <div class="d-flex justify-content-between">
            <img class="service_icon" :src="item.icon" alt="">
            <i class="my_arrow fa-solid fa-arrow-right" style="color: #058283;"></i>
          </div>
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

  .my_button {
    width: 9rem;
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

      .my_arrow {
        font-size: 1.6rem;
      }
    }
  }
}

.full_title::after {
  content: "Services";
  background-color: rgba(5, 131, 131, 0.199);
  color: rgb(5, 130, 131);
  padding: 0 2rem;
  margin-left: 1rem;
}
</style>
