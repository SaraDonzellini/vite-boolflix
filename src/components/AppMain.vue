<script>
import { store } from '../store.js'
import LangFlag from 'vue-lang-code-flags';


export default {
  name: 'AppMain',
  components: {
    LangFlag,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    onMouseEnter() {

    }
  },

}
</script>

<template>
  <section class="container">
    <div class="row">
      <div class="col-3" v-for="movie in store.searchedMovie">
        <div class="img-wrapper">
          <img :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`" :alt="movie.title">
          <div class="card-box">
            <h4>
              {{ movie.title }}
            </h4>
            <h6>
              <em>{{ movie.original_title }}</em>
            </h6>
            <p>Language: <lang-flag :iso="movie.original_language" /></p>
            <p>Rating: <i class="fa-solid fa-star" v-for="n in Math.ceil(movie.vote_average / 2)"></i><i
                class="fa-regular fa-star" v-for="n in Math.floor(5 - (movie.vote_average / 2))"></i></p>
            <p class="overview">
              Overview: {{ movie.overview }}
            </p>
          </div>
        </div>
      </div>

      <div class="col-3" v-for="tvShow in store.searchedTvshow">
        <div class="img">
          <img :src="`https://image.tmdb.org/t/p/w342/${tvShow.poster_path}`" :alt="tvShow.name">
          <div class="card-box">
            <h4>
              {{ tvShow.name }}
            </h4>
            <h6>
              <em>{{ tvShow.original_name }}</em>
            </h6>
            <p>Language: <lang-flag :iso="tvShow.original_language" /> </p>
            <p>Rating: <i class="fa-solid fa-star" v-for="n in Math.ceil(tvShow.vote_average / 2)"></i><i
                class="fa-regular fa-star" v-for="n in Math.floor(5 - (tvShow.vote_average / 2))"></i></p>
            <p class="overview">
              Overview: {{ tvShow.overview }}
            </p>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>
.overview {
  font-size: 0.8rem;
}

div.col-3 {
  margin: 2rem;

  .img-wrapper {
    position: relative;

  }

  .img-wrapper:hover .card-box {

    display: inline-block;

  }
}

.card-box {
  width: 330px;
  text-align: center;
  position: absolute;
  bottom: 0px;
  left: 0px;
  display: none;
  color: white;
  // color: black;
}
</style>