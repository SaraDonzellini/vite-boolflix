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
      <div class="col-4" v-for="movie in store.searchedMovie">
        {{ movie.title }} - {{ movie.original_title }} - {{ movie.original_language }} - {{ movie.vote_average }}

      </div>
      <div class="col-4" v-for="tvShow in store.searchedTvshow">
        {{ tvShow.name }} - {{ tvShow.original_name }} - {{ tvShow.original_language }} - {{ tvShow.vote_average }}

      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>