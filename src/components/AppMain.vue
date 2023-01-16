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

}
</script>

<template>
  <section class="container">
    <div class="row">

      <h2>Movies</h2>
      <div class="col-4" v-for="movie in store.searchedMovie">
        <h4>
          {{ movie.title }}
        </h4>
        <h5>
          <em>{{ movie.original_title }}</em>
        </h5>
        <p>Language: <lang-flag :iso="movie.original_language" /></p>
        <p>Rating: {{ movie.vote_average }}</p>
      </div>

      <h2>Tv shows</h2>
      <div class="col-4" v-for="tvShow in store.searchedTvshow">
        <h4>
          {{ tvShow.name }}
        </h4>
        <h5>
          <em>{{ tvShow.original_name }}</em>
        </h5>
        <p>Language: <lang-flag :iso="tvShow.original_language" /> </p>
        <p>Rating: {{ tvShow.vote_average }}</p>
      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>