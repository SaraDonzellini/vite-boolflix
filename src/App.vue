<script>
import { store } from './store.js'
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
    data() {
      return {
        store,
        

      }
    },
    methods: {
        searchApi(searchedText) {
            axios.get(" https://api.themoviedb.org/3/search/movie?api_key=4bc85001b5721a0ecbd19f8488e3f941", {
                params: {
                    query: searchedText,
                    page: 1,
                    include_adult : false,
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
    <AppHeader @searchMovie="searchApi(store.searchText)"/>
  </header>
  <main>
    <AppMain />
  </main>
</template>

<style>


</style>
