<script>
import { store } from "../data/store"

export default {
  name: "Cards",

  data() {
    return {
      store,
      projectArray: [],


    }
  },

  methods: {
    getImageUrl(name) {
      return new URL(`../assets/images/img/${name}`, import.meta.url).href
    },



    filterProjects(query) {
      console.log(query)
      let result = this.store.projects.filter((el, i) => {
        if (query == el.category) {
          return el
        } else if (query == 1) {
          return el
        }
      })
      this.projectArray = result
      console.log("il risultato è", this.projectArray)

    },

    initProjects() {
      this.projectArray = [...this.store.projects]
    }
  },
  mounted() {
    this.initProjects()
  }
}


</script>

<template>
  <div class="general_container">
    <div id="project_container" class="my_container">
      <div class="title_box d-flex justify-content-center">
        <span class="full_title mb-3 me-2">Actions &</span>
        <!-- inserito after element -->
      </div>
      <div id="projects_fiter">
        <ul class="d-flex justify-content-around list-unstyled">
          <li class="fw-bold" v-for="item in this.store.actionsCategories">
            <div class="projects_title full_on_hover_light">
              <span @click="filterProjects(item.category)">{{ item.action }}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="project_card_container d-flex flex-wrap">
        <div v-for="(project) in this.projectArray" class="project_card"
          :style="{ backgroundImage: 'url(' + getImageUrl(project.backgroundImg) + ')' }">
          <div class="blurImg">
          </div>
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
    justify-content: center;
    gap: 1rem;

    .project_card {
      border-radius: 7px;
      height: 350.65px;
      width: calc(100%/3 - 1rem);
      background-size: cover;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: white;
      padding: 2rem;
      position: relative;


      .blurImg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(5px);
        z-index: -1;
      }

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

.full_title::after {
  content: "Projects";
}
</style>
