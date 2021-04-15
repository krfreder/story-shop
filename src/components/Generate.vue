<template>
  <div id="generate">
    <button id="button" @click="handler()">Generate</button>
    <table v-show="isGenerated">
      <tr>
        <td>Genre:</td>
        <td>{{ genres }}</td>
      </tr>
      <tr>
        <td>Setting:</td>
        <td>{{ settings }}</td>
      </tr>
            <tr>
        <td>Main Character:</td>
        <td>{{ age }} / {{ genders }} / {{ charTraits }}</td>
      </tr>
    </table>
    <!-- <h1 v-show="isGenerated">Genre: {{ genres }}</h1>
    <h1 v-show="isGenerated">Setting: {{ settings }}</h1>
    <h1 v-show="isGenerated">Main Character: {{ age }} / {{ genders }} / {{ charTraits }}</h1> -->
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
  margin-top: 60px;
}
#button {
  font-size: 80px;
  border-radius: 10px;
  background-color: #76cef2;
  border: 4px solid #58efec;
}
table {
  font-size: 40px;
  margin-left: auto;
  margin-right: auto;
  border-collapse:collapse;
  border:4px solid #b18dff;
  margin-top: 60px;
}
tr:nth-child(even) {
  background-color: #93aef9;
}
tr:nth-child(odd) {
  background-color: #85bef6;
}
table td {
  border: 4px solid #a29dfc;
  /* border:4px solid #b18dff; */
}
</style>
