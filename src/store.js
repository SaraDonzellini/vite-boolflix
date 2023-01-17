import { reactive } from "vue";

export const store = reactive({
  searchText: '',
  searchedMovie: [],
  searchedTvshow: [],
  searchedCastMovie: [],
  searchedCastTV: [],
  searchedGenreMovie: [],
  searchedGenreTV: [],
  getGenreMovie: [],
  getGenreTV: [],
})