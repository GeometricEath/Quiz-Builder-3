/* eslint-disable no-console */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    quizName: 'QuizBuilder 3',
    questions: [
      
    ]
  },
  mutations: {
    ADD_QUESTION(state, payload) {
      payload.id = state.questions.length
      state.questions.push(payload)
    },
    DELETE_QUESTION(state, id) {
      state.questions.splice(id, 1)
    },
  },
  actions: {
  },
  getters: {
    questions(state) {
      return state.questions
    },
    quizName(state) {
      return state.quizName
    }
  },
  modules: {
  }
})
