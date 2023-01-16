<script>
import { store } from '../store.js'
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default {
  name: 'AppMain',
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
        <p>Language: <span class='fi fi-{{movie.original_language}}'></span> </p>
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
        <p>Language: <span class='fi fi-{{tvShow.original_language}}'></span> </p>
        <p>Rating: {{ tvShow.vote_average }}</p>

      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>