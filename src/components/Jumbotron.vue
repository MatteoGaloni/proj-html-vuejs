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
    <div class="my_container d-flex justify-content-between">
      <img id="nextGen_logo" src="../assets/images/svg/svg-7.svg" alt="jumbotron">
      <div id="nav_left">
        <ul>
          <li class="list-unstyled">
            <a class="link" href="#">Home</a>
            <a class="link" href="#">Sevices</a>
            <a class="link" href="#">About</a>
            <a class="link" href="#">Projects</a>
            <a class="link" href="#">Results</a>
            <a class="link" href="#"><button class="btn btn-secondary">Get in touch</button></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="centered_container">
      <h1>READY TEAM</h1>
      <p>No matter what your company needs, we will be ready to assist you in teh best possible way.</p>
      <div class="my_buttons">
        <button class="btn btn-secondary">GET IN TOUCH</button>
        <button class="btn btn-secondary">READ MORE</button>
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

  .jumbo_img {
    width: 100%;
  }

  .my_container {
    background-color: lightcyan;
    width: 50%;
    margin: auto;
  }

  .centered_container {
    max-width: 600px;
    margin: 8rem auto;
    background-color: lightgreen;
    padding: 4rem;
    text-align: center;
  }
}

#nextGen_logo {
  width: 100px;
}
</style>
