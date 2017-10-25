import React from 'react'
import { CodePane } from 'spectacle'

export const example = `
const helloWorld = () => 'hello world'
console.log(helloWorld())

const sum = (x, y) => x + y
console.log(sum(1, 2))

const square = x => x * x
console.log(square(3))
`.trim()

export const locations = [
  { loc: [0, 8], title: "lambdas (arrow functions)" },
  { loc: [0, 2], note: <CodePane lang="javascript" source="'hello world'" /> },
  { loc: [3, 5], note: <CodePane lang="javascript" source="3" /> },
  { loc: [6, 8], note: <CodePane lang="javascript" source="9" /> }
]
