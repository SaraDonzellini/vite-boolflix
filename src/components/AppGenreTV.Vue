<script>
import { store } from '../store';

export default {
  name: 'AppGenreTV',
  data() {
    return {
      store,

    }
  },

}
</script>

<template>
  <div v-for="genre in store.searchedGenreTV.slice(0,5)">
    {{ genre.name }}
  </div>
</template>

<style lang="scss" scoped>

</style>