<template>
  <div id="generate">
    <h1>Genre: {{ genres }}</h1>
    <h1>Setting: {{ settings }}</h1>
    <h1>Main Character: {{ genders }} / {{ charTraits }}</h1>
    <button>Randomize It!</button>
  </div>
</template>

<script>
import { genreList } from '../js/genreList';
import { settingList } from '../js/settingList';
import { genderList } from '../js/genderList';
import { charTraitList } from '../js/charTraitList';
// import { randomize } from './js/randomize';
export default {
  el: '#generate',
  data () {
    return {
      genres: genreList,
      settings: settingList,
      genders: genderList,
      charTraits: charTraitList,
    }
  },
//   methods: {
//       randomizeGenre: randomize(genres)
//   }
}
</script>