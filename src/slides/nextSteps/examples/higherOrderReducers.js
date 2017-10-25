export const example = `
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

const ignoring = (type) => (reducer) => {
  return (state, action) => {
    if (action.type !== type) {
      return reducer(state, action)
    }
    return state
  }
}

const onlyUp = ignoring('DECREMENT')(counter)

const useless = compose(
  ignoring('INCREMENT'),
  ignoring('DECREMENT')
)(counter)
`.trim()

export const locations = [
  { loc: [0, 32], title: "higer-order reducers" },
  { loc: [0, 16] },
  { loc: [17, 25] },
  { loc: [26, 27] },
  { loc: [28, 32] }
]
