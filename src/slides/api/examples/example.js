export const example = `
import store from './store'
import {
  increment,
  decrement,
  setMessage
} from './actions'

const counterElement =
  document.getElementById('counter')
const messageElement =
  document.getElementById('message')

store.subscribe(() => {
  const state = store.getState()
  counterElement.innerHtml = state.counter
  messageElement.innerHtml = state.message
})

setInterval(() => {
  store.dispatch(increment()), 3000)
}
setInterval(() => {
  store.dispatch(decrement()), 8000)
}
setInterval(() => {
  store.dispatch(setMessage('Foo')), 5000)
}
`.trim()

export const locations = [
  { loc: [0, 28], title: "using the store" },
  { loc: [0, 6] },
  { loc: [7, 11] },
  { loc: [12, 17] },
  { loc: [18, 27] }
]
