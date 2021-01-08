import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";

Vue.use(Vuex);

// //to handle state
// const state = {
//   users: []
//   }
  
//   // //to handle state
//   // const mutations = {
//   // allUsers: (state) => state.users
//   // }
  
//   //to handle actions
//   const actions = {
//   getUsers({ commit }) {
//   axios.get('https://hirng-x2021.glitch.me/api')
//   .then(response => {
//   commit('SET_USERS', response.data)
//   })
//   }
//   }
  
//   //to handle mutations
//   const mutations = {
//   SET_USERS(state, users) {
//   state.users = users
//   }
//   }

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {}
});
