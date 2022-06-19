// import axios from 'axios'

// app-level data shared between components
const state = {
  todos: [
    {
      id: 1,
      title: 'Todo One'
    },
    {
      id: 2,
      title: 'Todo Two'
    }
  ]
}

// return a piece of state
const getters = {
  allTodos: (state) => state.todos
}

const actions = {}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
}
