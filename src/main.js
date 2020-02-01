import Vue from 'vue'
import App from './App'
import router from '@/router'
import store from '@/store'

new Vue({
  el: '#root',
  router,
  store,
  render: h => h(App)
})