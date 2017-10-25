import React from 'react'
import CodeSlide from 'spectacle-code-slide';
import { example, locations } from './examples/reducers'

export default (
  <CodeSlide
    key="reducers"
    transition={["fade"]}
    lang="javascript"
    showLineNumbers={true}
    code={example}
    ranges={locations}
  />
)
