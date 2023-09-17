<script>
import { store } from "../data/store"

export default {
  name: "AppFooter",

  props: {
    contacts: Array,
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
  <footer>
    <div class="my_container">
      <div class="row">
        <div class="col-3">
          <div>
            <img id="nextGen_logo" class="mb-3" src="../assets/images/svg/svg-7.svg" alt="nav_logo">
            <p>A Functional Html Template For Corporate a Business</p>
            <ul v-for="contact in contacts" class="d-flex list-unstyled">
              <li>
                <i :class="contact.iconClass"></i>
                <a class="link" href="">{{ contact.contact }}</a>
              </li>
            </ul>
            <button class="my_button full_on_hover">GET IN TOUCH</button>
          </div>
        </div>
        <div class="col-3">
          <div class="list_container">
            <h5>About</h5>
            <ul v-for="action in this.store.actions" class="d-flex list-unstyled">
              <li>
                <i class="fa-solid fa-chevron-right"></i>
                <a class="link" href="">{{ action }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-3">
          <div class="list_container">
            <h5>Services</h5>
            <ul v-for="item in this.store.servicesList" class="d-flex list-unstyled">
              <li>
                <i class="fa-solid fa-chevron-right"></i>
                <a class="link" href="">{{ item.service }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-3">
          <div class="list_container">
            <h5>Support</h5>
            <ul v-for="link in this.store.supportLinks" class="d-flex list-unstyled">
              <li>
                <i class="fa-solid fa-chevron-right"></i>
                <a class="link" href="">{{ link }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="general_container">
      <!-- <i class="fa-solid fa-arrow-up"></i> -->
      <div id="bottom_bar" class="my_container d-flex justify-content-between">
        <div class="left_nav">
          <span>Enjoy the low price. We are tracking any intention of piracy.</span>
        </div>
        <div class="right_nav d-flex">
          <span>2020 NEXGEN is proudly Powered by</span>
          <span class="ms-1 my_small_title">Codings.</span>

        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use '../styles/my_variables.scss' as *;

footer {
  background-color: $dark_bg;
  color: white;
}

.general_container {
  background-color: rgb(13, 13, 17);
}

#bottom_bar {
  padding: 1rem;

}

.list_container {
  background-color: rgb(25, 25, 30);
  padding: 1rem;
  border-radius: 7px;
}

#nextGen_logo {
  width: 120px;
}
</style>
