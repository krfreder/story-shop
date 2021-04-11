<template>
  <div id="msg">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
import { words } from './words';
export default {
  el: '#msg',
  data () {
    return {
      message: words,
    }
  }
}
</script>