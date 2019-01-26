import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const level = require('level');

const db = level('./db');

new Vue({
  render: h => h(App),
}).$mount('#app')
