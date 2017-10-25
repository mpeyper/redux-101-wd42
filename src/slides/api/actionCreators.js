import React from 'react'
import CodeSlide from 'spectacle-code-slide';
import { example, locations } from './examples/actionCreators'

export default (
  <CodeSlide
    key="actionCreators"
    transition={["fade"]}
    lang="javascript"
    showLineNumbers={true}
    code={example}
    ranges={locations}
  />
)