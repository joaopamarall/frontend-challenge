import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listUser: [] 
  },
  getters: {
  },
  mutations: {
    addNewUser(state, newUser) {
      state.listUser.push(newUser);
    },
  },
  actions: {
  },
  modules: {
  }
})
