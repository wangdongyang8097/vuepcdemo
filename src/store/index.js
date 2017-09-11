import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// const state = {
//   totalPrice:10
// }
// const getters = {}
// const actions = {
//   // add(content,price){
//   //   content.commit('add',price)
//   // }
// }
// const mutations = {
//   add(state,price){
//     state.totalPrice += price
//   }
// }
//
// export default new Vuex.Store({
//   state,
//   getters,
//   actions,
//   mutations
// })


// const moduleUSER = {
//   state: {
//     totalPrice: 0
//   },
//   getters: {},
//   actions: {},
//   mutations: {}
// }
// const moduleCAR = {
//   state: {
//     totalPrice: 10
//   },
//   getters: {},
//   actions: {},
//   mutations: {}
// }
// export default new Vuex.Store({
//   modules: {
//     user: moduleUSER,
//     car: moduleCAR
//   }
// })

import cart from './modules/cart'
import user from './modules/user'

export default new Vuex.Store({
  modules: {
    user,
    cart
  }
})
