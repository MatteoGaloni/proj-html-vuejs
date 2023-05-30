<script>
export default {
  name: "AppHeader",
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
    <div id="nav_bar" class="container d-flex justify-content-between">
      <div class="left_nav">
        <span>Open Hours: Mon - Sat - 9:00 - 18:00</span>
      </div>
      <div class="right_nav">
        <ul class="d-flex list-unstyled">
          <li><a class="nav_link" href="">{{ this.contacts.number }}</a></li>
          <li><a class="nav_link" href="">{{ this.contacts.mail }}</a></li>
          <li><a class="nav_link" href=""><i class="fa-brands fa-facebook-f"></i></a></li>
          <li><a class="nav_link" href=""><i class="fa-brands fa-twitter"></i></a></li>
          <li><a class="nav_link" href=""><i class="fa-brands fa-instagram"></i></a></li>
        </ul>
      </div>
    </div>

  </header>
</template>

<style scoped lang="scss">
header {
  background-color: teal;

  #nav_bar {
    padding: 0.2rem 0;
  }
}

.nav_link {
  text-decoration: none;
  padding: 1rem;
  color: grey
}
</style>
