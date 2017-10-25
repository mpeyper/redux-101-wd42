import React from 'react'
import CodeSlide from 'spectacle-code-slide';
import { example, locations } from './examples/lambdas'

export default (
  <CodeSlide
    key="lambdas"
    transition={["fade"]}
    lang="javascript"
    showLineNumbers={true}
    code={example}
    ranges={locations}
  />
)