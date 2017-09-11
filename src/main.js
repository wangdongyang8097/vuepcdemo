import Vue from 'vue'
import router from './router'
import VueResource from 'vue-resource'
import store from './store'

import Layout from './components/Layout.vue'

Vue.use(VueResource)

new Vue({
  el: '#app',
  router,
  store,
  // template: '<Layout/>',
  // components: { Layout }
  render:(h)=>h(Layout)
})
