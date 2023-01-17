<script>
import { store } from './store.js'
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  data() {
    return {
      store,
      apiKey: "4bc85001b5721a0ecbd19f8488e3f941"


    }
  },
  methods: {
    searchMovie(searchedText) {
      axios.get(" https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key : this.apiKey,
          query: searchedText,
          page: 1,
          include_adult: false,
        }
      })
        .then((response) => {
          console.log(response.data.results);
          store.searchedMovie = response.data.results
          console.log(store.searchedMovie);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    searchTvshow(searchedText) {
      axios.get(" https://api.themoviedb.org/3/search/tv", {
        params: {
          api_key : this.apiKey,
          query: searchedText,
          page: 1,
          include_adult: false,
        }
      })
        .then((response) => {
          console.log(response.data.results);
          store.searchedTvshow = response.data.results
          console.log(store.searchedTvshow);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  components: {
    AppHeader,
    AppMain
  },
}
</script>

<template>
  <header>
    <AppHeader @search="[searchMovie(store.searchText), searchTvshow(store.searchText)]" />
  </header>
  <main>
    <AppMain />
  </main>
</template>

<style lang="scss">
header {
  background-color: #0b0b0b;
  color: red;
  position: fixed;
  width: 100%;
  z-index: 2;
}
main {
  padding-top: 4rem;
}
</style>
