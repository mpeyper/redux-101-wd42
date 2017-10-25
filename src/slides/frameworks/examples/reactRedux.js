export const example = `
import React from 'react'
import { render } from 'react-dom'
import {
  Provider,
  connect
} from 'react-redux'
import store from './store'

const ExampleView = ({
  counter,
  message,
  increment,
  decrement,
  setMessage
}) => (
  <div>
    <p>Counter: {counter}</p>
    <p>Message: {message}</p>

    <button onClick={decrement}>
      decrement
    </button>
    <button onClick={increment}>
      increment
    </button>

    <input onChange={(e) => {
      setMessage(e.target.value)} 
    }/>
  </div>
)

const mapStateToProps = (state) => ({
  counter: state.counter,
  message: state.message
})

const mapDispatchToProp = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  setMessage: (message) => {
    dispatch(setMessage(message))
  }
})

const Example = connect(
  mapStateToProps,
  mapDispatchToProp
)(ExampleView)

const App = () => {
  <Provider store={this.store}>
    <Example />
  </Provider>
}

const root = document.getElementById('root')
render(<App />, root)
`.trim()

export const locations = [
  { loc: [0, 58], title: "react-redux" },
  { loc: [0, 2] },
  { loc: [2, 6] },
  { loc: [6, 7] },
  { loc: [8, 15] },
  { loc: [15, 32] },
  { loc: [16, 18] },
  { loc: [19, 25] },
  { loc: [26, 29] },
  { loc: [32, 36] },
  { loc: [37, 44] },
  { loc: [45, 49] },
  { loc: [50, 55] },
  { loc: [56, 58] }
]
