import React from 'react'
import { Slide, Heading } from "spectacle"
import CodeSlide from 'spectacle-code-slide';
import { example as actionsExample, locations as actionsLocations } from './examples/higherOrderActions'
import { example as reducersExample, locations as reducersLocations} from './examples/higherOrderReducers'

export const title = (
  <Slide key="higherOrderTitle" transition={["fade"]} bgColor="primary">
    <Heading textFont="secondary" textColor="secondary">
      higher-order things
    </Heading>
  </Slide>
)


export const actions = (
  <CodeSlide
    key="higherOrderActions"
    transition={["fade"]}
    lang="javascript"
    showLineNumbers={true}
    code={actionsExample}
    ranges={actionsLocations}
  />
)

export const reducers = (
  <CodeSlide
    key="higherOrderReducers"
    transition={["fade"]}
    lang="javascript"
    showLineNumbers={true}
    code={reducersExample}
    ranges={reducersLocations}
  />
)
