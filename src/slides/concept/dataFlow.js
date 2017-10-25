import React from 'react'
import { Slide, Heading, Image } from "spectacle"
import image from './assets/unidirectional-data-flow.svg'

export default (
  <Slide key="api" transition={["fade"]} bgColor="primary">
    <Heading fit textFont="secondary" textColor="secondary">
      unidirectional data flow
    </Heading>
    <Image width='75%' src={image} />
  </Slide>
)