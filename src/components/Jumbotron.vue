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
        <span class="mb-3 me-2">Ready</span>
        <span class="title_full">Team</span>
      </div>
      <p>No matter what your company needs, we will be ready to assist you in teh best possible way.</p>
      <div class="my_buttons">
        <button class="my_button full_button">GET IN TOUCH</button>
        <button class="my_button text_green">READ MORE</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#jumbotron_container {
  width: 100%;
  min-height: 700px;
  background-image: url(../assets/images/img/bg-parallax.png);
  background-position: center;
  background-color: white;
  margin-top: -176px;

  .jumbo_img {
    width: 100%;
  }

  .centered_container {
    max-width: 600px;
    margin: 8rem auto;
    padding: 4rem;
    padding-top: 200px;
    text-align: center;

    .title_box {
      font-size: 5rem;
      font-weight: 900;
    }

    .my_buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;

      .text_green {
        color: rgb(5, 130, 131);
      }
    }

  }
}

#nextGen_logo {
  width: 100px;
}
</style>
