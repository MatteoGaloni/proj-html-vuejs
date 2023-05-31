<script>
export default {
  name: "AppFooter",

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
        prova

      </div>
      <div class="col-3">
        prova

      </div>
      <div class="col-3">
        prova

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#nextGen_logo {
  width: 120px;
}
</style>
