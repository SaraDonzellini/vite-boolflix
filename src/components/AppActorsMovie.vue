<script>
import { store } from '../store';

export default {
  name: 'AppActorsMovie',
  data() {
    return {
      store,

    }
  },

}
</script>

<template>
  <div v-for="cast in store.searchedCastMovie.slice(0,5)">
    {{ cast.name }}
  </div>
</template>

<style lang="scss" scoped>

</style>