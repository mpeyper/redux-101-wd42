import React from 'react'
import { CodePane } from 'spectacle'

export const example = `
const initial = {
  counter: 0
}

const reducer = (state = initial, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1
      }
    case 'SET_MESSAGE':
      return {
        ...state,
        message: action.message
      }
    default:
      return state
  }
}
`.trim()

const output1 = `
{
  counter: 1
}
`.trim()

const output2 = `
{
  counter: -1
}
`.trim()

const output3 = `
{
  counter: 0,
  message: 'Foo'
}
`.trim()

export const locations = [
  { loc: [0, 25], title: "reducers" },
  { loc: [0, 3] },
  { loc: [4, 5] },
  { loc: [5, 6] },
  { loc: [6, 11], note: <CodePane lang="javascript" source={output1} /> },
  { loc: [11, 16], note: <CodePane lang="javascript" source={output2} /> },
  { loc: [16, 21], note: <CodePane lang="javascript" source={output3} /> },
  { loc: [21, 23] }
]
