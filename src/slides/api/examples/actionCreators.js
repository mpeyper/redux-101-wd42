export const example = `
const increment = () => { type: 'INCREMENT' }
const decrement = () => { type: 'DECREMENT' }

const setMessage = (message) => {
  type: 'SET_MESSAGE',
  message
}
`.trim()

export const locations = [
  { loc: [0, 7], title: "action creators" },
  { loc: [0, 2] },
  { loc: [3, 7] }
]
