/* eslint-disable no-console */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: [
      {
        id:0,
        image: require('@/assets/logo.png'),
        questionText:
          "Какое из ниже перечисленных утверждений верно? Какое из ниже перечисленных утверждений верно? Какое из ниже перечисленных утверждений верно?",
        answers: [
          "В космической отрасли невозможно проведение тренировок на реальном изделии тренировок на реальном изделии",
          "В космической отрасли не используются бортовые тренажёры",
          "В сельском хозяйстве не используются комплексные тренажёры",
          "Все утверждения верны"
        ],
        trueAnswer: 3
      },
      {
        id:1,
        image: undefined,
        questionText:
          "Какое из ниже перечисленных утверждений верно? Какое из ниже перечисленных утверждений верно? Какое из ниже перечисленных утверждений верно?",
        answers: [
          "В космической отрасли невозможно проведение тренировок на реальном изделии тренировок на реальном изделии",
          "В космической отрасли не используются бортовые тренажёры",
          "В сельском хозяйстве не используются комплексные тренажёры",
          "Все утверждения верны"
        ],
        trueAnswer: 1
      }
    ]
  },
  mutations: {
    ADD_QUESTION (state, payload){
      payload.id = state.questions.length
      state.questions.push(payload)
    },
    DELETE_QUESTION (state, id){
      state.questions.splice(id, 1)
    },
  },
  actions: {
  },
  getters: {
    questions(state) {
      return state.questions
    }
  },
  modules: {
  }
})
