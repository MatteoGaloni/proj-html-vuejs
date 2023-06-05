<script>
export default {
  name: "Jumbotron",

  data() {
    return {

    }
  },

  methods: {
  }
}
</script>
<template>
  <div id="jumbotron_container">
    <div class="centered_container">
      <div class="title_box d-flex">
        <span class="full_title mb-3 me-2">Ready</span>
        <!-- inserito after element -->
      </div>
      <p>No matter what your company needs, we will be ready to assist you in the best possible way.</p>
      <div class="my_buttons">
        <button class="my_button full_button">GET IN TOUCH</button>
        <button class="my_button text_green full_on_hover">READ MORE</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../styles/my_variables.scss' as *;

#jumbotron_container {
  width: 100%;
  min-height: 700px;
  background-image: url(../assets/images/img/bg-parallax.png);
  background-position: center;
  background-color: white;
  margin-top: -176px;

  .centered_container {
    max-width: 600px;
    margin: 8rem auto;
    padding: 4rem;
    padding-top: 200px;
    text-align: center;

    .title_box {
      font-size: 5rem;
      font-weight: 900;

      .full_title::after {
        content: "Team";
      }
    }

    .my_buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }

  }
}
</style>
