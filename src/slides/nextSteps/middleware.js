import React from 'react'
import CodeSlide from 'spectacle-code-slide';
import { example as middlewareExample, locations as middlewareLocations } from './examples/middleware'
import { example as asyncExample, locations as asyncLocations } from './examples/async'
import { example as thunksExample, locations as thunksLocations } from './examples/thunks'

export const middleware = (
  <CodeSlide
    key="middleware"
    transition={["fade"]}
    lang="javascript"
    showLineNumbers={true}
    code={middlewareExample}
    ranges={middlewareLocations}
  />
)

export const async = (
  <CodeSlide
    key="async"
    transition={["fade"]}
    lang="javascript"
    showLineNumbers={true}
    code={asyncExample}
    ranges={asyncLocations}
  />
)

export const thunks = (
  <CodeSlide
    key="async"
    transition={["fade"]}
    lang="javascript"
    showLineNumbers={true}
    code={thunksExample}
    ranges={thunksLocations}
  />
)