import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listaUsuarios: [{
      nome:'',
      sobrenome:'',
      dataNascimento:'',
      email:'',
      cpf:'',
  }] 
  },
  getters: {
  },
  mutations: {
    adicionaNovaUsuario(state, novoUsuario) {
      state.listaUsuarios.push(novoUsuario);
    }

  },
  actions: {
  },
  modules: {
  }
})
