export const example = `
import {
  createStore,
  applyMiddleware
} from 'redux'
import mine from 'my-middleware'
import yours from 'your-middleware'
import reducer from './reducer'

const enhancer = applyMiddleware(mine, yours)

const store = createStore(reducer, enhancer)
`.trim()

export const locations = [
  { loc: [0, 11], title: "middleware" },
  { loc: [0, 4] },
  { loc: [4, 6] },
  { loc: [8, 9] },
  { loc: [10, 11] }
]
