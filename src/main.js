import Vue from 'vue';
import App from './App.vue';
import Message from './Message.vue';
import Generate from './Generate.vue';

Vue.component('app-hello', Message);
Vue.component('app-generate', Generate);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
