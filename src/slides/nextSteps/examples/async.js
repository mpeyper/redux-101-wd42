export const example = `
import {
  createStore,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

const enhancer = applyMiddleware(thunk)

const store = createStore(reducer, enhancer)
`.trim()

export const locations = [
  { loc: [0, 10], title: "async" },
  { loc: [0, 4] },
  { loc: [4, 5] },
  { loc: [7, 8] },
  { loc: [9, 10] }
]
