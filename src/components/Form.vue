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
  }
}
</script>

<template>
  <div id="form_container">
    <div class="my_container">
      <div class="row">
        <div class="col-8">
          <h6 class="mb-3 my_small_title">WHAT ARE WE DOING</h6>
          <div class="title_box d-flex">
            <span class="full_title mb-3 me-2">Get in</span>
            <!-- inserito after element -->
          </div>
          <p class="mb-3">We will respond to your message as soon as possible.</p>
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
          <ul class="list-unstyled">
            <li id="form_contact_list" v-for="contact in contacts">
              <a href="#">
                <span class="my_rounded"><i :class="contact.iconClass"></i></span>
              </a>
              <a class="link" href="#">{{ contact.contact }}</a>
            </li>
          </ul>
          <button class="my_button text_green full_on_hover">VIEW MAP</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../styles/my_variables.scss' as *;

#form_container {
  background-color: white;

  .form-control,
  .form-select {
    background-color: $form_bg;
    border: none;
  }

  #form_contact_list {
    display: flex;
    align-items: center;

    .my_rounded {
      width: 2rem;
      height: 2rem;
      background-color: $title_bg;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      i {
        color: $main_color;
      }
    }

    a {
      text-decoration: none;
      color: rgb(5, 130, 131);
    }
  }
}

.full_title::after {
  content: "Touch";
}
</style>
