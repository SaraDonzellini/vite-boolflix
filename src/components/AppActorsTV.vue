<script>
import axios from 'axios'
import { store } from '../store';

export default {
  name: 'AppActorsTV',
  props: {
    tvID : Number,
  },
  data() {
    return {
      store,
    }
  },

}

</script>

<template>
  <div v-for="cast in store.searchedCastTV">
    {{ cast.name }}
  </div>
</template>

<style lang="scss" scoped>
  
</style>