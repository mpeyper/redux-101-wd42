import React from 'react'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { devToolsEnhancer } from 'redux-devtools-extension';
import { Slide, Heading, Text, Layout, Fill } from "spectacle"
import CodeSlide from 'spectacle-code-slide';
import { example as reactExample, locations as reactLocations } from './examples/react'
import { example as reactReduxExample, locations as reactReduxLocations } from './examples/reactRedux'

export const reactCode = (
  <CodeSlide
    key="reactCode"
    transition={["fade"]}
    lang="javascript"
    showLineNumbers={true}
    code={reactExample}
    ranges={reactLocations}
  />
)

export const reactReduxCode = (
  <CodeSlide
    key="reactReduxCode"
    transition={["fade"]}
    lang="javascript"
    showLineNumbers={true}
    code={reactReduxExample}
    ranges={reactReduxLocations}
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

const ExampleView = ({
  counter,
  message,
  increment,
  decrement,
  setMessage
}) => (
  <div>
    <Text textFont="secondary" textColor="quartenary">Counter: {counter}</Text>
    <Text textFont="secondary" textColor="quartenary">Message: {message}</Text>

    <div style={{ marginTop: "1.5em" }}>
      <Layout>
        <Fill>
          <button onClick={decrement}>decrement</button>
        </Fill>
      <Fill>
        <button onClick={increment}>increment</button>
      </Fill>
    </Layout>
    </div>

    <div style={{ marginTop: "1.5em" }}>
      <input onChange={(e) => setMessage(e.target.value)} />
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  counter: state.counter,
  message: state.message
})

const mapDispatchToProp = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  setMessage: (message) => dispatch(setMessage(message)),
})

const Example = connect(mapStateToProps, mapDispatchToProp)(ExampleView)

class ExampleWrapper extends React.Component {
  constructor() {
    super()
    this.store = createStore(reducer, devToolsEnhancer())
  }

  render() {
    return (
      <Provider store={this.store}>
        <Example />
      </Provider>
    )
  }
}

export const runningExample = (
  <Slide key="reactReduxExample" transition={["fade"]} bgColor="primary">
    <Heading fit lineHeight={1.5} textFont="secondary" textColor="secondary">
      react-redux example
    </Heading>
    <ExampleWrapper />
  </Slide>
)
