import React from 'react'
import { Slide, Appear, BlockQuote, Quote, Cite, Link } from "spectacle"

export const question = (
  <Slide key="whyThunksQuestion" transition={["fade"]} bgColor="primary">
    <Appear>
      <BlockQuote>
        <Quote textFont="primary" textColor="secondary" style={{ borderLeft: '3px solid #EE8D51' }}>
          what the f@#k is a thunk?!?!
        </Quote>
        <Cite textFont="secondary" textColor="tertiary">
          everyone
        </Cite>
      </BlockQuote>
    </Appear>
  </Slide>
)

export const answer = (
  <Slide key="whyThunksAnswer" transition={["fade"]} bgColor="primary">
    <BlockQuote>
      <Quote textFont="primary" textColor="secondary" style={{ borderLeft: '3px solid #EE8D51' }}>
        In computer programming, a thunk is a subroutine used to inject an additional calculation into another subroutine
      </Quote>
      <Link href="https://en.wikipedia.org/wiki/Thunk" target="_blank">
        <Cite textFont="secondary" textColor="tertiary">
          wikipedia
        </Cite>
      </Link>
    </BlockQuote>
  </Slide>
)