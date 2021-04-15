<template>
  <section id="generate">
    <div>
      <button id="button" @click="handler()">Generate</button>
    </div>
    <div id="table">
      <table v-show="isGenerated">
        <tr>
          <td>Genre:</td>
          <td>{{ genres }}</td>
        </tr>
        <tr>
          <td>Starting Setting:</td>
          <td>{{ settings }}</td>
        </tr>
        <tr>
          <td>Main Character:</td>
          <td>
          <ul>
            <li>Age: {{ age }}</li>
            <li>Gender: {{ genders }}</li>
            <li>Character Trait: {{ charTraits }}</li>
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
      prompts: "",
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
      this.prompts = require('sentencer').make("{{ noun }}");
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
#generate {
  /* text-align: center; */
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  justify-content: space-between;
}
#button {
  font-size: 80px;
  border-radius: 10px;
  background-color: #76cef2;
  border: 4px solid #58efec;
}
#table {
  /* table-layout: fixed; */
  /* width: 50%; */
  font-size: 40px;
  /* margin-left: auto;
  margin-right: auto; */
  border-collapse:collapse;
  border:4px solid #000000;
  border-spacing: 0;
}
tr:nth-child(even) {
  background-color: #93aef9;
}
tr:nth-child(odd) {
  background-color: #85bef6;
}
table td {
  /* border:4px solid #b18dff; */
  border: 4px solid #a29dfc;
  padding: 8px;
}
</style>
