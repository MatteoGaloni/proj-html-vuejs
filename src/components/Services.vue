<script>
export default {
  name: "Services",

  props: {
    servicesList: Array,
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
  <div id="services_container" class="container">
    <h1>Excellence in Services</h1>
    <div class="d-flex">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aliquid aperiam obcaecati ipsam a culpa amet, odio
        tenetur facilis nostrum ea tempore doloribus pariatur explicabo, iure dolores repellendus? Eligendi, impedit.</p>
      <button class="btn btn-primary">SEE ALL</button>
    </div>
    <div id="services_cards_container" class="d-flex flex-wrap">
      <div class="service_card">
        <div>Immagine</div>
        <h3>{{ this.servicesList[0] }}</h3>
        <p>lorem ipsum upsius pudsad</p>
      </div>
      <div class="service_card">
        <div>Immagine</div>
        <h3>{{ this.servicesList[1] }}</h3>
        <p>lorem ipsum upsius pudsad</p>
      </div>
      <div class="service_card">
        <div>Immagine</div>
        <h3>{{ this.servicesList[2] }}</h3>
        <p>lorem ipsum upsius pudsad</p>
      </div>
      <div class="service_card">
        <div>Immagine</div>
        <h3>{{ this.servicesList[3] }}</h3>
        <p>lorem ipsum upsius pudsad</p>
      </div>
      <div class="service_card">
        <div>Immagine</div>
        <h3>{{ this.servicesList[4] }}</h3>
        <p>lorem ipsum upsius pudsad</p>
      </div>
      <div class="service_card">
        <div>Immagine</div>
        <h3>{{ this.servicesList[5] }}</h3>
        <p>lorem ipsum upsius pudsad</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#services_container {
  background-color: green;
  min-height: 500px;

  h1 {
    color: rgb(89, 23, 147);
  }

  #services_cards_container {
    gap: 1rem;

    .service_card {
      background-color: aliceblue;
      width: calc(100% / 3 - 1rem);
    }

  }
}
</style>
