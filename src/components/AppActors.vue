<script>
export default {
  name: AppActors,
  data() {
    return {
      apiKey: "4bc85001b5721a0ecbd19f8488e3f941",
      apiUri: "https://api.themoviedb.org/3/movie/155/credits"
    }
  },
  methods: {
    searchActors(movieId) {
      axios.get(this.apiUri + 'movie', {
        params: {
          api_key: this.apiKey,
          movie_id: movieId,
        }
      })
        .then((response) => {
          console.log(response.data.results);
          store.searchedMovie = response.data.results
        })
        .catch(function (error) {
          console.log(error);
        });
    },

  },
}
</script>

<template>
  <div>
    
  </div>
</template>

<style lang="scss" scoped>
  
</style>