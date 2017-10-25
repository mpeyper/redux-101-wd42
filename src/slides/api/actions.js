import React from 'react'
import CodeSlide from 'spectacle-code-slide';
import { example, locations } from './examples/actions'

export default (
  <CodeSlide
    key="actions"
    transition={["fade"]}
    lang="javascript"
    showLineNumbers={true}
    code={example}
    ranges={locations}
  />
)