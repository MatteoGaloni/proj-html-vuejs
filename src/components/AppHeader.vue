<script>
export default {
  name: "AppHeader",

  components: {
  },

  props: {
    contacts: Array,
  },

  data() {
    return {

    }
  },

  methods: {
  },
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
        <ul class="d-flex list-unstyled">
          <li v-for="contact in contacts">
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
    <div class="general_container">
      <div id="nav_bar" class="my_container d-flex justify-content-between">
        <div class="nav_left">
          <img id="nextGen_logo" src="../assets/images/svg/svg-7.svg" alt="nav_logo">
        </div>
        <div class="nav_right">
          <ul class="list-unstyled d-flex align-items-center" id="nav_link">
            <li><a class="link" href="#">Home</a></li>
            <li><a class="link" href="#">Sevices</a></li>
            <li><a class="link" href="#">About</a></li>
            <li><a class="link" href="#">Projects</a></li>
            <li><a class="link" href="#">Results</a></li>
            <li><a class="link" href="#"><button class="my_button full_button">Get in touch</button></a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use '../styles/my_variables.scss' as *;

header {
  background-color: rgb(33, 51, 62);

  #top_bar {
    padding: 0.2rem 0;
    color: $link_color;
  }

  .general_container {
    background: white;


    #nav_bar {
      padding: 1.5rem 0;
      width: 100%;

      #nextGen_logo {
        height: 50px;
      }

      #nav_link {
        font-size: larger;

        a {
          color: black;
        }
      }

    }
  }
}
</style>
