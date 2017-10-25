import React from 'react'
import CodeSlide from 'spectacle-code-slide';
import { Slide, Appear, BlockQuote, Quote, Cite } from "spectacle"
import { example, locations } from './examples/whyReducer'

export const question = (
  <Slide key="whyReducersQuestion" transition={["fade"]} bgColor="primary">
    <Appear>
      <BlockQuote>
        <Quote textFont="primary" textColor="secondary" style={{ borderLeft: '3px solid #EE8D51' }}>
          why the f@#k is it called a reducer?!?!
        </Quote>
        <Cite textFont="secondary" textColor="tertiary">
          everyone
        </Cite>
      </BlockQuote>
    </Appear>
  </Slide>
)

export const answer = (
  <CodeSlide
    key="whyReducersAnswer"
    transition={["fade"]}
    lang="javascript"
    showLineNumbers={true}
    code={example}
    ranges={locations}
  />
)