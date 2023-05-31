<script>
import { store } from "../data/store"

export default {
  name: "Cards",

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
  <div id="project_container" class="my_container">
    <h6>WE DO MORE FOR EVERYONE</h6>
    <h1>Actions & Projects</h1>
    <div id="projects_fiter" class="d-flex justify-content-center">
      <ul>
        <li class="list-unstyled">
          <a class="link" href="#">ALL</a>
          <a class="link" href="#">INSTITUTIONAL</a>
          <a class="link" href="#">SOCIAL</a>
          <a class="link" href="#">EVENTS</a>
          <a class="link" href="#">INNOVATION</a>
          <a class="link" href="#">ENVIROMENT</a>
          <a class="link" href="#">TECNOLOGY</a>
        </li>
      </ul>
    </div>
    <div class="project_card_container d-flex flex-wrap">
      <div v-for="project in this.store.projects" class="project_card"
        :style="{ backgroundImage: 'url(' + project.backgroundImg + ')' }">
        <h3 class="text-white">{{ project.title }}</h3>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#project_container {
  text-align: center;

  .project_card_container {
    gap: 1rem;

    .project_card {
      border-radius: 7px;
      height: 350.65px;
      width: calc(100%/3 - 1rem);
      background-size: cover;
      display: flex;
      align-items: flex-end;
    }
  }

}
</style>
