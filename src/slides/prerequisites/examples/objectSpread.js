import React from 'react'
import { CodePane } from 'spectacle'

export const example = `
const foo = { a: 1, b: 'this' }
const bar = { b: 'that', c: 2 }

const fooBar = { ...foo, ...bar }

const d = 4
const fooBarBaz = { ...fooBar, c: 3, d }
`.trim()

const output1 = `
{
  a: 1,
  b: 'that',
  c: 2
}
`.trim()

const output2 = `
{
  a: 1,
  b: 'that',
  c: 3,
  d: 4
}
`.trim()

export const locations = [
  { loc: [0, 7], title: "object spread" },
  { loc: [0, 2] },
  { loc: [3, 4], note: <CodePane lang="javascript" source={output1} /> },
  { loc: [5, 7], note: <CodePane lang="javascript" source={output2} /> }
]
