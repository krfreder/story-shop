<template>
  <div id="generate">
    <button id="button" @click="handler()">Generate</button>
    <h1 v-show="isGenerated">Genre: {{ genres }}</h1>
    <h1 v-show="isGenerated">Setting: {{ settings }}</h1>
    <h1 v-show="isGenerated">Main Character: {{ age }} / {{ genders }} / {{ charTraits }}</h1>
  </div>
</template>

<script>
import { genreList } from '../js/genreList';
import { settingList } from '../js/settingList';
import { genderList } from '../js/genderList';
import { charTraitList } from '../js/charTraitList';

export default {
  name: 'generate',
  data () {
    return {
      isGenerated: false,
      genres: genreList,
      settings: settingList,
      age: 0,
      genders: genderList,
      charTraits: charTraitList,
    }
  },
  methods: {
    randyGenre: function () {
      this.genres = require('randy').choice(genreList);
    },
    randySetting: function () {
      this.settings = require('randy').choice(settingList);
    },
    randyAge: function () {
      this.age = require('randy').randInt(100);
    },
    randyGender: function () {
      this.genders = require('randy').choice(genderList);
    },
    randyCharTrait: function () {
      this.charTraits = require('randy').choice(charTraitList);
    },
    handler: function () {
      this.randyGenre();
      this.randySetting();
      this.randyAge();
      this.randyGender();
      this.randyCharTrait();
      this.isGenerated = true;
    }
  }
}
</script>

<style>
#generate {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#button {
  font-size: 80px;
  border-radius: 10px;
}
</style>
