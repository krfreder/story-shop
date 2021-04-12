import Vue from 'vue';
import App from './App.vue';
import Generate from './components/Generate.vue';
import Button from './components/Button.vue';

Vue.component('app-generate', Generate);
Vue.component('app-button', Button);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
