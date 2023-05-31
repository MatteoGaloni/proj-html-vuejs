<script>
export default {
  name: "AppHeader",

  components: {
  },

  props: {
    contacts: Object,
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
  <header>
    <!-- top notification bar -->
    <div id="top_bar" class="my_container d-flex justify-content-between">
      <div class="left_nav">
        <span>Open Hours: Mon - Sat - 9:00 - 18:00</span>
      </div>
      <div class="right_nav d-flex">
        <ul v-for="contact in contacts" class="d-flex list-unstyled">
          <li>
            <i :class="contact.iconClass"></i>
            <a class="link" href="">{{ contact.contact }}</a>
          </li>
        </ul>
        <ul class="d-flex list-unstyled">
          <li><a class="link" href=""><i class="fa-brands fa-facebook-f"></i></a></li>
          <li><a class="link" href=""><i class="fa-brands fa-twitter"></i></a></li>
          <li><a class="link" href=""><i class="fa-brands fa-instagram"></i></a></li>
        </ul>
      </div>
    </div>
    <!-- ****************************************** -->
    <!-- navigation bar -->
    <div id="nav_bar" class="my_container d-flex justify-content-between">
      <div class="nav_left">
        <img id="nextGen_logo" src="../assets/images/svg/svg-7.svg" alt="nav_logo">
      </div>
      <div class="nav_right">
        <ul>
          <li class="list-unstyled">
            <a class="link" href="#">Home</a>
            <a class="link" href="#">Sevices</a>
            <a class="link" href="#">About</a>
            <a class="link" href="#">Projects</a>
            <a class="link" href="#">Results</a>
            <a class="link" href="#"><button class="touch_btn btn btn-secondary">Get in touch</button></a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  background-color: rgb(33, 51, 62);

  #top_bar {
    padding: 0.2rem 0;

    .left_nav {
      color: lightgray;
    }

    .right_nav {
      color: lightgray;
    }
  }

  #nav_bar {
    padding: 0;
    position: absolute;
    width: 100%;
    left: 16%;
    top: 55px;

    .touch_btn {
      background-color: rgb(5, 130, 131);
      padding: 0.5rem 1rem;
    }

    #nextGen_logo {
      height: 100%;
    }
  }
}
</style>
