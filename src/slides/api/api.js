import React from 'react'
import { Slide, BlockQuote, Quote, Cite, Link } from "spectacle"

export default (
  <Slide key="api" transition={["fade"]} bgColor="primary">
    <BlockQuote>
      <Quote textFont="primary" textColor="secondary" style={{ borderLeft: '3px solid #EE8D51' }}>
        The best API is often no API
      </Quote>
      <Link href="https://github.com/reactjs/redux/pull/195#issuecomment-119224276" target="_blank">
        <Cite textFont="secondary" textColor="tertiary">
          Andrew Clark
        </Cite>
      </Link>
    </BlockQuote>
    <BlockQuote>
      <Quote textFont="primary" textColor="secondary" style={{ borderLeft: '3px solid #EE8D51' }}>
        I want as little API as possible
      </Quote>
      <Link href="https://github.com/reactjs/redux/issues/216#issuecomment-118682938" target="_blank">
        <Cite textFont="secondary" textColor="tertiary">
          Dan Abramov
        </Cite>
      </Link>
    </BlockQuote>
  </Slide>
)
