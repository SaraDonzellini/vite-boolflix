<script>
import { store } from '../store';

export default {
  name: 'AppActorsTV',
  data() {
    return {
      store,
    }
  },

}

</script>

<template>
  <div v-for="cast in store.searchedCastTV.slice(0,5)">
    {{ cast.name }}
  </div>
</template>

<style lang="scss" scoped>

</style>