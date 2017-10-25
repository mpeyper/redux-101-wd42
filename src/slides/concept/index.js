import React from 'react'
import { Slide, Heading, Notes } from "spectacle"
import dataFlow from './dataFlow'
import principles from './principles'

const title = (
  <Slide key="concept" transition={["fade"]} bgColor="primary">
    <Heading textFont="secondary" textColor="secondary">
      the concept
    </Heading>
    <Notes>
      <ul>
        <li>Created by Dan Abramov and Andrew Clark in 2015.</li>
        <li>Inspired by Facebook’s Flux</li>
        <li>Influenced by functional programming language Elm.</li>        
      </ul>
    </Notes>
  </Slide>
)

export default [
    title,
    dataFlow,
    principles
]