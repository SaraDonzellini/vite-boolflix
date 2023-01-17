<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
  name: 'AppHeader',
  data() {
    return {
      store,
      apiKey: "4bc85001b5721a0ecbd19f8488e3f941",
    }
  },
  methods: {
    getGenreMovie() {
      axios.get('https://api.themoviedb.org/3/genre/movie/list', {
        params: {
          api_key: this.apiKey,
        }
      })
        .then((response) => {
          console.log(response.data.genres);
          this.store.getGenreMovie = response.data.genres;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getGenreTV() {
      axios.get('https://api.themoviedb.org/3/genre/tv/list', {
        params: {
          api_key: this.apiKey,
        }
      })
        .then((response) => {
          console.log(response.data.genres);
          this.store.getGenreTV = response.data.genres;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  created() {
    this.getGenreTV()
    this.getGenreMovie()
  },
}
</script>

<template>
  <section class="container">
    <div class="row">
      <div class="col-12">
        <div class="box">
          <h1>Boolflix</h1>
          <div class="input-group mb-3">
            <input type="text" class="my_form" placeholder="Cerca un film o una serie tv"
              aria-label="Recipient's username" aria-describedby="button-search" v-model="store.searchText"
              @keyup.enter="$emit('search')">
            <button class="btn btn-outline-secondary" type="button" id="button-search"
              @click="$emit('search')">Cerca</button>
          </div>
          <select name="generi" id="genres" @change="getGenreMovie">
            <option value="">Scegli un genere di film</option>
            <option v-for="genre in store.getGenreMovie" :value=genre.name>{{ genre.name }}</option>
          </select>
          <select name="generi" id="genres" @change="getGenreTV">
            <option value="">Scegli un genere di serie tv</option>
            <option v-for="genretv in store.getGenreTV" :value=genretv.name>{{ genretv.name }}</option>
          </select>
        </div>


      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.box {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.my_form {
  width: 50%;
  border: 1px solid black
}

h1 {
  margin-right: 20%;
  padding-top: 1rem;
}
</style>