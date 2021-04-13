<template>
  <div id="generate">
    <h1>Genre: {{ genres }}</h1>
    <h1>Setting: {{ settings }}</h1>
    <h1>Main Character: {{ age }} / {{ genders }} / {{ charTraits }}</h1>
    <button v-on:click="handler()">Generate</button>
  </div>
</template>

<script>
import { genreList } from '../js/genreList';
import { settingList } from '../js/settingList';
import { genderList } from '../js/genderList';
import { charTraitList } from '../js/charTraitList';
import { handler } from '../js/randomize';

export default {
  name: 'generate',
  data () {
    return {
      genres: genreList,
      settings: settingList,
      age: 0,
      genders: genderList,
      charTraits: charTraitList,
    }
  },

  // methods: {
  //   randyGenre: function () {
  //     this.genres = require('randy').choice(genreList);
  //   },
  //   randySetting: function () {
  //     this.settings = require('randy').choice(settingList);
  //   },
  //   randyAge: function () {
  //     this.age = require('randy').randInt(100);
  //   },
  //   randyGender: function () {
  //     this.genders = require('randy').choice(genderList);
  //   },
  //   randyCharTrait: function () {
  //     this.charTraits = require('randy').choice(charTraitList);
  //   },
  //   handler: function () {
  //     this.randyGenre();
  //     this.randySetting();
  //     this.randyAge();
  //     this.randyGender();
  //     this.randyCharTrait();
  //   }
  // }
//   methods: {
//       randomizeGenre: randomize(genres)
//   }
}
</script>