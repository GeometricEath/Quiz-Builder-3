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
    CHANGE_QUESTION(state, payload) {
      state.questions.find((item) => {
        if (item.id === payload.id) {
          Object.assign(item, payload)
          return true
        }
      })
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
    getQuestionByID: state => id => {
      let result = state.questions.find(item => {
        if (item.id === id) return true
      })
      result.answers = [...result.answers]
      return { ...result }
    },
    quizName(state) {
      return state.quizName
    }
  },
  modules: {
  }
})
