<template>
  <div id="genre">
    <h1>{{ genres }}</h1>
    <button v-on:click="randomizeGenre">Randomize It!</button>
  </div>
</template>

<script>
import { genreList } from './js/genreList';
import { randomize } from './js/randomize';
export default {
  el: '#genre',
  data () {
    return {
      genres: genreList,
    }
  },
  methods: {
      randomizeGenre: randomize(genres)
  }
}
</script>