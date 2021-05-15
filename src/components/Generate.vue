<template>
  <section>
    <div>
      <button @click="handler()" @keyup.enter="handler()">Generate</button>
    </div>
    <div>
      <table v-show="isGenerated">
        <tr>
          <td>Genre:</td>
          <td tabindex="0" @click="randyGenre()" @keyup.enter="randyGenre()">{{ genres }}</td>
        </tr>
        <tr>
          <td>Starting Setting:</td>
          <td tabindex="0" @click="randySetting()" @keyup.enter="randySetting()">{{ settings }}</td>
        </tr>
        <tr>
          <td>Main Character:</td>
          <td>
          <ul>
            <li tabindex="0" @click="randyAge()" @keyup.enter="randyAge()" >Age: {{ age }}</li>
            <li tabindex="0" @click="randyGender()" @keyup.enter="randyGender()">Gender: {{ genders }}</li>
            <li tabindex="0" @click="randyCharTrait()" @keyup.enter="randyCharTrait()">Character Trait: {{ charTraits }}</li>
          </ul>
          </td>
        </tr>
      </table>
      <table v-show="isGenerated">
        <tr>
          <td>Prompts:</td>
          <td tabindex="0" @click="sentencerPrompts()" @keyup.enter="sentencerPrompts()">
          <ul>
            <li v-for="(prompt, index) in prompts" :key="index">{{ index + 1 }}. {{ prompt }}</li>
          </ul>
          </td>
        </tr>
      </table>
    </div>
  </section>
</template>

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

<style scoped>
</style>
