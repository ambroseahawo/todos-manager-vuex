import { createStore } from 'vuex'
import todos from './modules/todos'

// load vuex
// create store
export const store = createStore({
  modules: {
    todos
  }
})
