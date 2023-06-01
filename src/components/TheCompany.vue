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
      <div class="row">
        <div class="col-6">
          <h6 class="mb-3 my_small_title">ABOUT THE NETWORK</h6>
          <div class="title_box d-flex mb-3">
            <span class="title_full">The</span>
            <span class="ml-3 ms-2">Company</span>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aliquid aperiam obcaecati ipsam a culpa amet,
            odio
            tenetur facilis nostrum ea tempore doloribus pariatur explicabo, iure dolores repellendus? Eligendi, impedit.
          </p>
          <div id="theCompany_cards_container" class="d-flex flex-wrap mb-3">
            <div v-for="item in this.store.companyValues" class="theCompany_card">
              <div class="d-flex align-items-center mb-3">
                <i class="theCompany_icon" :class="item.iconClass"></i>
                <h3>{{ item.value }}</h3>
              </div>
              <p>{{ item.overview }}</p>
            </div>
          </div>
          <div class="d-flex">
            <button class="my_button full_button me-4">GET IN TOUCH</button>
            <button class="my_button full_on_hover">READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#theCompany_general_container {
  background-image: url(../assets/images/img/about-4.jpg);
  background-position: right;
  background-repeat: no-repeat;
  background-size: 50%;
}

#theCompany_info_container {
  min-height: 500px;
  color: white;

  .title_full {
    width: 7.4rem;
    color: white;
  }

  #theCompany_cards_container {
    gap: 1rem;

    i {
      color: rgb(5, 130, 131);
      font-size: 1.6rem;
    }

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
