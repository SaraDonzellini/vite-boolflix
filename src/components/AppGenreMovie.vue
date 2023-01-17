<script>
import { store } from '../store';

export default {
  name: 'AppGenreMovie',
  data() {
    return {
      store,
      
    }
  },

}
</script>

<template>
  <div v-for="genre in store.searchedGenreMovie.slice(0, 5)">
    {{ genre.name }}
  </div>
</template>

<style lang="scss" scoped>

</style>