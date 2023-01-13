<script>

import axios from 'axios';
import AppHeader from './components/AppHeader.vue';

export default {
    methods: {
        searchApi() {
            axios.get("https://api.themoviedb.org/3/search/movie?api_key=4bc85001b5721a0ecbd19f8488e3f941&", {
                params: {
                    language: "en-US",
                    page: 1,
                    include_adult = false,
                }
            })
                .then(function (response) {
                console.log(response);
            })
                .catch(function (error) {
                console.log(error);
            });
        }
    },
    components: { 
      AppHeader 
    }
}
</script>

<template>
  <header>
    <AppHeader />
  </header>
</template>

<style>


</style>
