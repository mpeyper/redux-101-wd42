import React from 'react'
import { CodePane } from 'spectacle'

export const example = `
const prefix = (value) => (action) => {
  return { 
    ...action,
    type: value + '/' + action.type
  }
}

const increment = { type: 'INCREMENT' }
const decrement = { type: 'DECREMENT' }

const prefixedIncrement =
  prefix('UNIQUE')(increment)

const prefixer = prefix('OTHER')

const prefixedDecrement =
  prefixer(decrement)
`.trim()

const action1 = `
{
  type: 'UNIQUE/INCREMENT'
}
`.trim()

const action2 = `
{
  type: 'OTHER/DECREMENT'
}
`.trim()

export const locations = [
  { loc: [0, 17], title: "higher-order actions" },
  { loc: [0, 7] },
  { loc: [7, 9] },
  { loc: [10, 12], note: <CodePane lang="javascript" source={action1} /> },
  { loc: [13, 14] },
  { loc: [15, 17], note: <CodePane lang="javascript" source={action2} /> }
]
