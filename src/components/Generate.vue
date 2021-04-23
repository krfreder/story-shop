<template>
  <section id="generate">
    <div>
      <button id="button" @click="handler()">Generate</button>
    </div>
    <div class="table">
      <table v-show="isGenerated">
        <tr>
          <td id="bold">Genre:</td>
          <td @click="randyGenre()">{{ genres }}</td>
        </tr>
        <tr>
          <td id="bold">Starting Setting:</td>
          <td @click="randySetting()">{{ settings }}</td>
        </tr>
        <tr>
          <td id="bold">Main Character:</td>
          <td>
          <ul class="list">
            <li @click="randyAge()">Age: {{ age }}</li>
            <li @click="randyGender()">Gender: {{ genders }}</li>
            <li @click="randyCharTrait()">Character Trait: {{ charTraits }}</li>
          </ul>
          </td>
        </tr>
      </table>
      <table v-show="isGenerated">
        <tr>
          <td id="bold">Prompts:</td>
          <td>
          <ul class="list" id="two-column-list">
            <li v-for="(prompt, index) in prompts" :key="index" @click="sentencerPrompts()">{{ index + 1 }}. {{ prompt }}</li>
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
/* general styles */
#generate {
  margin-top: 15%;
  height: 100%;
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
}
/* button styles */
#button {
  background-color: #76cef2;
  font-size: 12rem;
  text-align: center;
  text-shadow: 5px 5px 8px #93aef9;
  border: 6px solid #58efec;
  border-radius: 10px;
  padding: 20px 100px 20px 100px;
}
/* table styles */
.table {
  margin: 5%;
  font-size: 3rem;
  text-align: left;
  text-shadow: 1px 1px 2px #b18dff;
  border: 4px solid #000000;
  border-collapse: collapse;
  border-spacing: 0;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  table-layout: auto;
  width: auto;
}
.table tr:nth-child(even) {
  background-color: #93aef9;
}
.table tr:nth-child(odd) {
  background-color: #85bef6;
}
.table td {
  border: 4px solid #a29dfc;
  padding: 2%;
}
/* list styles */
.list {
  list-style-type: none;
  padding: 0;
  line-height: 1.6;
}
#two-column-list {
  columns: 3;
  -webkit-columns: 3;
  -moz-columns: 3;
}
#bold {
  font-weight: bold;
}
</style>
