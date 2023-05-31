<script>
import { store } from "../data/store"

export default {
  name: "TheCompany",

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
  <div id="theCompany_general_container" class="d-flex">
    <div id="theCompany_info_container" class="my_container">
      <h1>The Company</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aliquid aperiam obcaecati ipsam a culpa amet, odio
        tenetur facilis nostrum ea tempore doloribus pariatur explicabo, iure dolores repellendus? Eligendi, impedit.</p>
      <div id="theCompany_cards_container" class="d-flex flex-wrap">
        <div v-for="item in this.store.companyValues" class="theCompany_card">
          <div class="d-flex">
            <i class="theCompany_icon" :class="item.iconClass"></i>
            <h3>{{ item.value }}</h3>
          </div>
          <p>{{ item.overview }}</p>
        </div>
      </div>
      <div class="d-flex">
        <button class="btn btn-secondary">GET IN TOUCH</button>
        <button class="btn btn-secondary">READ MORE</button>
      </div>
    </div>
    <div id="theCompany_img_container">
      <img src="../assets/images/img/about-4.jpg" alt="">
    </div>
  </div>
</template>

<style scoped lang="scss">
#theCompany_info_container {
  min-height: 500px;
  background-color: black;
  color: white;

  #theCompany_cards_container {
    gap: 1rem;

    .theCompany_card {
      width: calc(100% / 2 - 1rem);

      .theCompany_icon {
        width: 60px;
      }
    }
  }

}

#theCompany_img_container {
  width: 50%;

  img {
    width: 100%;
  }
}
</style>
