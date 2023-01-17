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

    }
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