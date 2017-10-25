import React from 'react'
import { CodePane } from 'spectacle'

export const example = `
const array = [1, 2, 3, 5, 8, 13]
const reducer =
  (current, value) => current + value

const total = array.reduce(reducer, 0)
`.trim()

export const locations = [
  { loc: [0, 5], title: "well, here's why" },
  { loc: [0, 3] },
  { loc: [4, 5], note: <CodePane lang="javascript" source="32" /> }
]
