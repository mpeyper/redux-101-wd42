import React from 'react'
import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension';
import { Slide, Heading, Text } from "spectacle"

const increment = () => ({ type: 'INCREMENT' })
const decrement = () => ({ type: 'DECREMENT' })
const setMessage = (message) => ({ type: 'SET_MESSAGE', message })

const reducer = (state = { counter: 0 }, action) => {
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

class Example extends React.Component {

  constructor() {
    super()
    this.store = createStore(reducer, devToolsEnhancer())
  }

  updateDisplay({ counter, message }) {
    document.getElementById('counter').innerText = counter
    document.getElementById('message').innerText = message || ""
  }

  componentDidMount() {
    this.updateDisplay(this.store.getState())
    this.unsubscribe = this.store.subscribe(() => this.updateDisplay(this.store.getState()))

    this.timeouts = []
    this.timeouts.push(setTimeout(() => this.store.dispatch(setMessage('Foo')), 1000))
    this.timeouts.push(setTimeout(() => this.store.dispatch(increment()), 2000))
    this.timeouts.push(setTimeout(() => this.store.dispatch(increment()), 3000))
    this.timeouts.push(setTimeout(() => this.store.dispatch(setMessage('Yay, Redux!')), 4000))
    this.timeouts.push(setTimeout(() => this.store.dispatch(increment()), 5000))
    this.timeouts.push(setTimeout(() => this.store.dispatch(decrement()), 6000))
    this.timeouts.push(setTimeout(() => this.store.dispatch(increment()), 7000))
    this.timeouts.push(setTimeout(() => this.store.dispatch(setMessage('How am I doing?')), 8000))
    this.timeouts.push(setTimeout(() => this.store.dispatch(increment()), 9000))
    this.timeouts.push(setTimeout(() => this.store.dispatch(decrement()), 10000))
    this.timeouts.push(setTimeout(() => this.store.dispatch(setMessage('Not long now, I promise...')), 11000))
  }

  componentWillUnmount() {
    this.unsubscribe()
    this.timeouts.forEach(clearTimeout)
  }

  render() {
    return (
      <div>
        <Text textFont="secondary" textColor="quartenary">Counter: <span id="counter" /></Text>
        <Text textFont="secondary" textColor="quartenary">Message: <span  id="message" /></Text>
      </div>
    )
  }
}

export default (
  <Slide key="devTools" transition={["fade"]} bgColor="primary">
    <Heading lineHeight={1.5} textFont="secondary" textColor="secondary">
      dev tools
    </Heading>
    <Example />
  </Slide>
)
