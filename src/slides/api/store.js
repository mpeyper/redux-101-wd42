import React from 'react'
import CodeSlide from 'spectacle-code-slide';
import { example, locations } from './examples/store'

export default (
  <CodeSlide
    key="store"
    transition={["fade"]}
    lang="javascript"
    showLineNumbers={true}
    code={example}
    ranges={locations}
  />
)