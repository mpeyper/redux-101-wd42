import React from 'react'
import { createStore } from 'redux'
import { Slide, Heading, Text } from "spectacle"
import CodeSlide from 'spectacle-code-slide';
import { example, locations } from './examples/example'

export const usingTheStore = (
  <CodeSlide
    key="usingTheStore"
    transition={["fade"]}
    lang="javascript"
    showLineNumbers={true}
    code={example}
    ranges={locations}
  />
)

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

const phrases = [
  'Foo',
  'Yay, Redux!',
  'It never ends...',
  'Lorem ipsum...',
  'How am I doing?',
  'Who\'s going to PAX?',
  'Not long now, I promise...'
]

class Example extends React.Component {

  constructor() {
    super()
    this.store = createStore(reducer)
  }

  updateDisplay({ counter, message }) {
    document.getElementById('counter').innerText = counter
    document.getElementById('message').innerText = message || ""
  }

  componentDidMount() {
    this.updateDisplay(this.store.getState())
    this.unsubscribe = this.store.subscribe(() => this.updateDisplay(this.store.getState()))

    this.incrementInterval = setInterval(() => this.store.dispatch(increment()), 3000)
    this.decrementInterval = setInterval(() => this.store.dispatch(decrement()), 8000)
    this.messageInterval = setInterval(() => {
      const phrase = phrases[Math.floor(Math.random() * phrases.length)]
      this.store.dispatch(setMessage(phrase))
    }, 5000)

    setTimeout(() => this.store.dispatch(setMessage(phrases[0])), 1000)
  }

  componentWillUnmount() {
    this.unsubscribe()
    clearInterval(this.incrementInterval)
    clearInterval(this.decrementInterval)
    clearInterval(this.messageInterval)
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

export const runningExample = (
  <Slide key="runningExample" transition={["fade"]} bgColor="primary">
    <Heading lineHeight={1.5} textFont="secondary" textColor="secondary">
      example
    </Heading>
    <Example />
  </Slide>
)
