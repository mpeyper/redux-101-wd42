import React from 'react'
import CodeSlide from 'spectacle-code-slide';
import { example, locations } from './examples/objectSpread'

export default (
  <CodeSlide
    key="spread"
    transition={["fade"]}
    lang="javascript"
    showLineNumbers={true}
    code={example}
    ranges={locations}
  />
)