import React from 'react'
import CodeSlide from 'spectacle-code-slide';
import { example, locations } from './examples/howReduxWorks'

export default (
  <CodeSlide
    key="reduxIsSimple"
    transition={["fade"]}
    lang="javascript"
    showLineNumbers={true}
    code={example}
    ranges={locations}
  />
)
