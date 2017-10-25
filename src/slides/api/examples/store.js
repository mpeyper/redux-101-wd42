export const example = `
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)
`.trim()

export const locations = [
  { loc: [0, 4], title: "createStore" },
  { loc: [0, 1] },
  { loc: [1, 2] },
  { loc: [3, 4] }
]
