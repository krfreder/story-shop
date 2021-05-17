<template>
  <section class="generate">
    <div class="container">
      <button class="button-generate" @click="handler()" @keyup.enter="handler()">Generate</button>
      <div class="wrapper" v-show="isGenerated">
        <table class="table-left">
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
              <ul class="list">
                <li tabindex="0" @click="randyAge()" @keyup.enter="randyAge()" >Age: {{ age }}</li>
                <li tabindex="0" @click="randyGender()" @keyup.enter="randyGender()">Gender: {{ genders }}</li>
                <li tabindex="0" @click="randyCharTrait()" @keyup.enter="randyCharTrait()">Character Trait: {{ charTraits }}</li>
              </ul>
            </td>
          </tr>
        </table>
        <table class="table-right">
          <tr>
            <td>Prompts:</td>
            <td tabindex="0" @click="sentencerPrompts()" @keyup.enter="sentencerPrompts()">
              <ul class="list">
                <li v-for="(prompt, index) in prompts" :key="index">{{ index + 1 }}. {{ prompt }}</li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </section>
</template>

<style scoped>
#section {}
.container {
    padding: 0 8px;
    margin: auto;
    position: relative;
    width: 100%;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.button-generate {
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 12vw;
    text-align: center;
    margin: 15px auto;
    /* margin: 10px 0; */
    border: 6px solid;
    border-radius: 10px;
    padding: 10px 20px;
}
.wrapper {
    font-family:Baskerville, 'Arial Narrow', Arial, sans-serif;
    font-size: 6vw;
    text-align: left;
    border: 2px solid;
    border-collapse: collapse;
    border-spacing: 0;
    border-radius: 10px;
    table-layout: auto;
    width: auto;
}
.wrapper td {
  border: 1px solid;
  padding: 2%;
}
.wrapper tr:first-child td {
  border-top: 0;
}
.wrapper tr td:first-child {
  border-left: 0;
}
.wrapper tr:last-child td {
  border-bottom: 0;
}
.wrapper tr td:last-child {
  border-right: 0;
}
.table-left {
    /* text-align: left; */
}
.list {
    list-style-type: none;
    padding: 0;
    line-height: 1.6;
}
.table-right {
    /* text-align: left; */
}
.table-right tr td:first-child {
  padding: 10px;
}
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

