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
    // filterProjects() {
    //   console.log("ciao")

    // }
  }
}

</script>

<template>
  <div class="general_container">
    <div id="project_container" class="my_container">
      <h6>WE DO MORE FOR EVERYONE</h6>
      <h1>Actions & Projects</h1>
      <div id="projects_fiter" class="d-flex justify-content-center">
        <ul>
          <li class="list-unstyled">
            <span class="link" href="#">ALL</span>
            <span class="link" href="#">INSTITUTIONAL</span>
            <span class="link" href="#">SOCIAL</span>
            <span class="link" href="#">EVENTS</span>
            <span class="link" href="#">INNOVATION</span>
            <span class="link" href="#">ENVIROMENT</span>
            <span class="link" href="#">TECNOLOGY</span>
          </li>
        </ul>
      </div>
      <div class="project_card_container d-flex flex-wrap">
        <div v-for="(project) in this.store.projects" class="project_card"
          :style="{ backgroundImage: 'url(' + project.backgroundImg + ')' }">
          <h3 class="text-white">{{ project.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.general_container {
  background-color: white;
}

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
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }

    .project_card:hover {
      transform: scale(1.01);
      cursor: pointer;
    }
  }

}
</style>
