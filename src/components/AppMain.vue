<script>
import { store } from '../store.js'
import LangFlag from 'vue-lang-code-flags';


export default {
  name: 'AppMain',
  components : {
    LangFlag,
  },
  data() {
    return {
      store,
    }
  },
  methods: {

  },

}
</script>

<template>
  <section class="container">
    <div class="row">
      <div class="col-4" v-for="movie in store.searchedMovie">
        <img :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`" :alt="movie.title">
        <h4>
          {{ movie.title }}
        </h4>
        <h6>
          <em>{{ movie.original_title }}</em>
        </h6>
        <p>Language: <lang-flag :iso="movie.original_language" /></p>
        <p>Rating: {{ Math.ceil(movie.vote_average / 2) }}</p>
      </div>

      <div class="col-4" v-for="tvShow in store.searchedTvshow">
        <img :src="`https://image.tmdb.org/t/p/w342/${tvShow.poster_path}`" :alt="tvShow.name">
        <h4>
          {{ tvShow.name }}
        </h4>
        <h6>
          <em>{{ tvShow.original_name }}</em>
        </h6>
        <p>Language: <lang-flag :iso="tvShow.original_language" /> </p>
        <p>Rating: {{ Math.ceil(tvShow.vote_average / 2) }}</p>
      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>