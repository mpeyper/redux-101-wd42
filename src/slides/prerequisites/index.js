import React from 'react'
import { Slide, Heading } from "spectacle"
import lambdas from './lambdas'
import objectSpread from './objectSpread'

const title = (
  <Slide key="prerequisites" transition={["fade"]} bgColor="primary">
    <Heading fit lineHeight={2} textFont="secondary" textColor="secondary">
      before we start
    </Heading>
    <Heading fit textFont="secondary" textColor="quartenary">
      things you should know
    </Heading>
  </Slide>
)

export default [
    title,
    lambdas,
    objectSpread
]