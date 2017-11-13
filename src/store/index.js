/* eslint-disable no-trailing-spaces */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  nav: [],
  index: '',
  navigationArticle: [
    {
      title: 'Факт про меня',
      src: '/main'
    },
    {
      title: 'Правила жизни',
      src: '/nav'
    }
  ]
}

const getters = {
  getInfo: state => state.nav,
  getIndex: state => state.index,
  navigationArticle: state => state.navigationArticle
}

const actions = {
  addNav: function ({commit}, product) {
    commit('ADD_NAV', product)
  },
  setIndex: function ({commit}, product) {
    commit('SET_INDEX', product)
  }
}

const mutations = {
  ADD_NAV: function (state, main) {
    state.nav = main
  },
  SET_INDEX: function (state, index) {
    state.index = index
  }
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store
