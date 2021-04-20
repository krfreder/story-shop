import Vue from 'vue';
import App from './App.vue';
import Generate from './components/Generate.vue';
import Header from './components/Header.vue';

Vue.component('app-generate', Generate);
Vue.component('app-header', Header);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
