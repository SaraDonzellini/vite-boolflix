<script>
import axios from 'axios'
import { store } from '../store';

export default {
  name: 'AppActorsMovie',
  props: {
    movieID : Number,
  },
  data() {
    return {
      store,
      apiKey: "4bc85001b5721a0ecbd19f8488e3f941",
      apiUri: "https://api.themoviedb.org/3/"
    }
  },
  methods: {
    searchActorsMovie(movieId) {
      axios.get(this.apiUri + 'movie/' + movieId + '/credits', {
        params: {
          api_key: this.apiKey,
        }
      })
        .then((response) => {
          console.log(response.data.cast);
          this.store.searchedCastMovie = response.data.cast;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    
    

  },
}
</script>

<template>
  <div v-for="cast in store.searchedCastMovie" @click="$emit('actorsList')">
    {{ cast.name }}
  </div>
</template>

<style lang="scss" scoped>
  
</style>