import React from 'react'
import { CodePane } from 'spectacle'

export const example = `
import { combineReducers } from 'redux'

const counter = (state = 0, action) => {
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
    default:
      return state
  }
}

const message = (state = null, action) => {
  switch(action.type) {
    case 'SET_MESSAGE':
      return {
        ...state,
        message: action.message
      }
    default:
      return state
  }
}

const app = combineReducers({
  counter,
  message
})

const rootReducer = combineReducers({
  app,
  admin,
  config
})





`.trimStart()

const combinedReducers1 = `
{
  counter: 0,
  message: null,
}
`.trim()

const combinedReducers2 = `
{
  counter: 1,
  message: "Foo",
}
`.trim()

const combinedReducers3 = `
{
  app: {
    counter: 1,
    message: "Foo",
  },
  admin: {},
  config: {}
}
`.trim()

export const locations = [
  { loc: [0, 47], title: "combineReducers" },
  { loc: [0, 1] },
  { loc: [2, 3] },
  { loc: [3, 4] },
  { loc: [4, 9], note: <CodePane lang="javascript" source="1" /> },
  { loc: [9, 14], note: <CodePane lang="javascript" source="-1" /> },
  { loc: [14, 16] },
  { loc: [19, 20] },
  { loc: [20, 21] },
  { loc: [21, 26], note: <CodePane lang="javascript" source="Foo" /> },
  { loc: [26, 28] },
  { loc: [31, 35], note: <CodePane lang="javascript" source={combinedReducers1} /> },
  { loc: [31, 35], note: <CodePane lang="javascript" source={combinedReducers2} /> },
  { loc: [36, 42], note: <CodePane lang="javascript" source={combinedReducers3} /> }
]
