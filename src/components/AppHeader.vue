<script>
import { store } from '../store.js'

export default {
  name: 'AppHeader',
  data() {
    return {
      store,
    }
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
  margin-right: 50%;
  padding-top: 1rem;
}
</style>