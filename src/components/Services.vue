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
  <div id="services_container" class="container">
    <h1>Excellence in Services</h1>
    <div class="d-flex">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aliquid aperiam obcaecati ipsam a culpa amet, odio
        tenetur facilis nostrum ea tempore doloribus pariatur explicabo, iure dolores repellendus? Eligendi, impedit.</p>
      <button class="btn btn-primary">SEE ALL</button>
    </div>
    <div id="services_cards_container" class="d-flex flex-wrap">
      <div v-for="item in this.store.servicesList" class="service_card">
        <img class="service_icon" :src="item.icon" alt="">
        <h3>{{ item.service }}</h3>
        <p>{{ item.overview }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#services_container {
  min-height: 500px;

  h1 {
    color: rgb(89, 23, 147);
  }

  #services_cards_container {
    gap: 1rem;

    .service_card {
      background-color: white;
      width: calc(100% / 3 - 1rem);

      .service_icon {
        width: 60px;
      }

    }
  }
}
</style>
