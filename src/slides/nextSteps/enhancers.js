import React from 'react'
import CodeSlide from 'spectacle-code-slide';
import { example, locations } from './examples/enhancers'

export default (
  <CodeSlide
    key="enhancers"
    transition={["fade"]}
    lang="javascript"
    showLineNumbers={true}
    code={example}
    ranges={locations}
  />
)
