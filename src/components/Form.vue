<script>
import { store } from "../data/store"

export default {
  name: "Form",

  props: {
    contacts: Object,
  },

  data() {
    return {
      store

    }
  },

  methods: {
    // filterProjects() {
    //   console.log("ciao")

    // }
  }
}

</script>

<template>
  <div id="form_container">
    <div class="my_container">
      <div class="row">
        <div class="col-8">
          <h6>SEND A MESSAGE</h6>
          <h1>Get in Touch</h1>
          <p>We will respond to your message as soon as possible.</p>
          <div class="row">
            <div class="col mb-3">
              <input type="text" class="form-control" placeholder="Name" aria-label="First name">
            </div>
            <div class="col mb-3">
              <input type="email" class="form-control" placeholder="Email" aria-label="Email">
            </div>
          </div>
          <div class="row">
            <div class="col mb-3">
              <input type="text" class="form-control" placeholder="Name" aria-label="First name">
            </div>
            <div class="col mb-3">
              <select class="form-select" aria-label="Default select example">
                <option selected>More info</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="mb-3">
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
          </div>
          <button class="my_button full_button">SEND</button>
        </div>
        <div class="col-4">
          <h4>Example Inc.</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <ul v-for="contact in contacts" class="d-flex list-unstyled">
            <li>
              <i :class="contact.iconClass"></i>
              <a class="link" href="">{{ contact.contact }}</a>
            </li>
          </ul>
          <button class="my_button">VIEW MAP</button>
        </div>
      </div>
    </div>


  </div>
</template>

<style scoped lang="scss">
#form_container {
  background-color: white;

}
</style>
