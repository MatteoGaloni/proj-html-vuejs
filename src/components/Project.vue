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
      <div class="title_box d-flex justify-content-center">
        <span class="mb-3 me-2">Actions &</span>
        <span class="title_full">Projects</span>
      </div>
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
          <div>
            <i class="arrow_container fa-solid fa-arrow-right"></i>
          </div>
          <div>
            <h3 class="text-white">{{ project.title }}</h3>
            <p class="show_on_hover">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
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
      flex-direction: column;
      justify-content: space-between;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      color: white;
      padding: 2rem;

      .arrow_container {
        font-size: 1.6rem;
        text-align: end;
        display: none;

      }
    }

    .show_on_hover {
      display: none;
    }

    .project_card:hover .show_on_hover {
      display: block;
    }

    .project_card:hover .arrow_container {
      display: block;
    }

    .project_card:hover {
      transform: scale(1.01);
      cursor: pointer;
    }
  }
}
</style>
