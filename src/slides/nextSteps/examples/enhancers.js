export const example = `
import { createStore } from 'redux'
import addDoThing from 'my-enhancer'
import reducer from './reducer'

const store = createStore(reducer, addDoThing)

store.doThing()
`.trim()

export const locations = [
  { loc: [0, 7], title: "enhancers" },
  { loc: [0, 1] },
  { loc: [1, 2] },
  { loc: [4, 5] },
  { loc: [6, 7] }
]
