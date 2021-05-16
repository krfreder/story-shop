<template>
  <section class="generate">
    <div class="container">
      <button class="button-generate"></button>
      <div class="wrapper">
        <table class="table-top">
        </table>
        <table class="table-bottom">
        </table>
      </div>
    </div>
  </section>
</template>

<style scoped>
#section {}
.container {}
.button-generate {}
.wrapper {}
.table-top {}
.table-bottom {}
</style>

<script>
import { genreList } from '../js/genreList';
import { settingList } from '../js/settingList';
import { genderList } from '../js/genderList';
import { charTraitList } from '../js/charTraitList';
import { promptsList } from '../js/promptsList';

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
      prompts: [],
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
    sentencerPrompts: function () {
      const tempArr = [];
      for(let i = 0; i < 31; i++) {
        tempArr.push(require('sentencer').make(require('randy').choice(promptsList)));
        this.prompts = tempArr;
      }
    },
    handler: function () {
      this.randyGenre();
      this.randySetting();
      this.randyAge();
      this.randyGender();
      this.randyCharTrait();
      this.sentencerPrompts();
      this.isGenerated = true;
    }
  }
}
</script>

