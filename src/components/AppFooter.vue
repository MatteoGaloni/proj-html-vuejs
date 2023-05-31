<script>
import { store } from "../data/store"

export default {
  name: "AppFooter",

  props: {
    contacts: Object,
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
          <img id="nextGen_logo" src="../assets/images/svg/svg-7.svg" alt="nav_logo">
          <p>A Functional Html Template For Corporate a Business</p>
          <ul v-for="contact in contacts" class="d-flex list-unstyled">
            <li>
              <i :class="contact.iconClass"></i>
              <a class="link" href="">{{ contact.contact }}</a>
            </li>
          </ul>
          <button class="btn btn-primary">Get in Touch</button>
        </div>
        <div class="col-3">
          <h5>About</h5>
          <ul v-for="action in this.store.actions" class="d-flex list-unstyled">
            <li>
              <i class="fa-solid fa-chevron-right"></i>
              <a class="link" href="">{{ action }}</a>
            </li>
          </ul>
        </div>
        <div class="col-3">
          <h5>Services</h5>
          <ul v-for="item in this.store.servicesList" class="d-flex list-unstyled">
            <li>
              <i class="fa-solid fa-chevron-right"></i>
              <a class="link" href="">{{ item.service }}</a>
            </li>
          </ul>
        </div>
        <div class="col-3">
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
    <div id="top_bar" class="my_container d-flex justify-content-between">
      <div class="left_nav">
        <span>Enjoy the low price. We are tracking any intention of piracy.</span>
      </div>
      <div class="right_nav d-flex">
        <span>2020 NEXGEN is proudly Powered by Codings</span>
      </div>
    </div>

  </footer>
</template>

<style scoped lang="scss">
footer {
  background-color: #222;
  color: white;
}

#nextGen_logo {
  width: 120px;
}
</style>
