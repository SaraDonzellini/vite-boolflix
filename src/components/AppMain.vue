<script>
import { store } from '../store.js';
import axios from 'axios';
import LangFlag from 'vue-lang-code-flags';
import AppActorsMovie from './AppActorsMovie.vue';
import AppActorsTV from './AppActorsTV.vue';


export default {
  name: 'AppMain',
  components: {
    LangFlag,
    AppActorsMovie,
    AppActorsTV,
},
  data() {
    return {
      store,
      apiKey: "4bc85001b5721a0ecbd19f8488e3f941",
      apiUri: "https://api.themoviedb.org/3/"
    }
  },
  methods: {
    getImagePath(imgName) {
      if (imgName !== 'da' && imgName !== 'de' && imgName !== 'en' && imgName !== 'fr' && imgName !== 'hi' && imgName !== 'it' && imgName !== 'ja' && imgName !== 'zh') {
        imgName = 'nc'
        return new URL(`../assets/imgs/${imgName}.png`, import.meta.url).href;
      } else {
        return new URL(`../assets/imgs/${imgName}.png`, import.meta.url).href;
      }
    },
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
    searchActorsTvShows(seriesId) {
      axios.get(this.apiUri + 'tv/' + seriesId + '/credits', {
        params: {
          api_key: this.apiKey,
        }
      })
        .then((response) => {
          console.log(response.data.cast);
          this.store.searchedCastTV = response.data.cast;
        })
        .catch(function (error) {
          console.log(error);
        });
    },

  },
  created() {

  },

}
</script>

<template>
  <section class="container">
    <div class="row">
      <div class="col-3" v-for="movie in store.searchedMovie">
        <div class="img-wrapper">
          <img :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`" :alt="movie.title">
          <div class="card-box" @click=searchActorsMovie(movie.id)>
            <h4>
              {{ movie.title }}
            </h4>
            <h6>
              <em>{{ movie.original_title }}</em>
            </h6>
            <p>Language: <img class="flag" :src="getImagePath(movie.original_language)" alt="Non disponibile"></p>
            <p>Rating: <i class="fa-solid fa-star" v-for="n in Math.ceil(movie.vote_average / 2)"></i><i
              class="fa-regular fa-star" v-for="n in Math.floor(5 - (movie.vote_average / 2))"></i></p>
              <p class="overview">
                Overview: {{ movie.overview }}
              </p>
              <p><AppActorsMovie :movieID="movie.id" /></p>

            
          </div>
        </div>
      </div>

      <div class="col-3" v-for="tvShow in store.searchedTvshow">
        <div class="img-wrapper">
          <img :src="`https://image.tmdb.org/t/p/w342/${tvShow.poster_path}`" :alt="tvShow.name">
          <div class="card-box" @click=searchActorsTvShows(tvShow.id)>
            <h4>
              {{ tvShow.name }}
            </h4>
            <h6>
              <em>{{ tvShow.original_name }}</em> 
            </h6>
            <p>Language: <img class="flag" :src="getImagePath(tvShow.original_language)" alt="Non disponibile">
              <!-- <lang-flag :iso="tvShow.original_language" />  -->
            </p>
            <p>Rating: <i class="fa-solid fa-star" v-for="n in Math.ceil(tvShow.vote_average / 2)"></i><i
                class="fa-regular fa-star" v-for="n in Math.floor(5 - (tvShow.vote_average / 2))"></i></p>
            <p class="overview">
              Overview: {{ tvShow.overview }}
            </p>
            <p  ><AppActorsTV :tvID="tvShow.id"/></p>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>
.overview {
  font-size: 0.8rem;
}

div.col-3 {
  margin: 2rem;

  .img-wrapper {
    position: relative;


  }

  .img-wrapper:hover .card-box {
    display: inline-block;

  }
}

.card-box {
  filter: none;
  width: 342px;
  height: 513px;
  overflow-y: scroll;
  text-align: center;
  position: absolute;
  bottom: 0px;
  left: 0px;
  display: none;
  color: white;
  background-color: black;
  // color: black;
}

.flag {
  height: 50px;
}
</style>