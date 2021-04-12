import { genreList } from './genreList';
import { settingList } from './settingList';
import { genderList } from './genderList';
import { charTraitList } from './charTraitList';

// const randy = require('randy');

function randyGenre () {
    this.genres = require('randy').choice(genreList);
  };
function randySetting () {
    this.settings = require('randy').choice(settingList);
  };
function randyAge () {
    this.age = require('randy').randInt(100);
  };
function randyGender () {
    this.genders = require('randy').choice(genderList);
  };
function randyCharTrait () {
    this.charTraits = require('randy').choice(charTraitList);
  };
export function handler () {
    this.randyGenre();
    this.randySetting();
    this.randyAge();
    this.randyGender();
    this.randyCharTrait();
  };
