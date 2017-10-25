import React from 'react'
import { Slide, Heading } from "spectacle"
import { reactCode, reactReduxCode, runningExample } from './react'
import others from './others'

const title = (
  <Slide key="frameworks" transition={["fade"]} bgColor="primary">
    <Heading textFont="secondary" textColor="secondary">
      the api
    </Heading>
  </Slide>
)

export default [
    title,
    reactCode,
    reactReduxCode,
    runningExample,
    others
]