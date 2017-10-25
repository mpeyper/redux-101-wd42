import React from 'react'
import { Text, Link } from "spectacle"

export const example = `
function createStore(reducer) {
  var state;
  var listeners = []

  function getState() {
    return state
  }
    
  function subscribe(listener) {
    listeners.push(listener)
    return unsubscribe() {
      var index = listeners.indexOf(listener)
      listeners.splice(index, 1)
    }
  }
    
  function dispatch(action) {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }

  dispatch({})

  return { dispatch, subscribe, getState }
}
`.trim()

const credit = (
  <Text textSize={16} textColor="white">
    Source: Mark Erikson. 
    {" "}
    <Link textSize={16} textColor="white" href="http://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/#the-core-of-redux-createstore" target="_blank">
      "Idiomatic Redux: The Tao of Redux, Part 1 - Implementation and Intent"
    </Link>
  </Text>
)

export const locations = [
  { loc: [0, 25], title: "how redux works", note: credit  },
  { loc: [0, 1] },
  { loc: [16, 20] },
  { loc: [1, 3] },
  { loc: [4, 7] },
  { loc: [8, 15] },
  { loc: [21, 22] },
  { loc: [23, 24]}
]
