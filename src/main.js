import Vue from 'vue';
import App from './App.vue';
import Generate from './components/Generate.vue';

Vue.component('app-generate', Generate);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
