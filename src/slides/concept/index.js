import React from 'react'
import { Slide, Heading } from "spectacle"
import dataFlow from './dataFlow'
import principles from './principles'

const title = (
  <Slide key="concept" transition={["fade"]} bgColor="primary">
    <Heading textFont="secondary" textColor="secondary">
      the concept
    </Heading>
  </Slide>
)

export default [
    title,
    dataFlow,
    principles
]