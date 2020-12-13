import Vue from 'vue'
import App from './App.vue'
import axios from 'axios' //追記
import VueAxios from 'vue-axios' //追記
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.use(VueAxios, axios) //追記

new Vue({
  el: '#app',
  vuetify,
  render: h => h(App)
})
