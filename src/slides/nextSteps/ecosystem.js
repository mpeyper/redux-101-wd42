import React from 'react'
import { Slide, Heading, List, ListItem, Link } from "spectacle"

export default (
  <Slide key="ecosystem" transition={["fade"]} bgColor="primary">
    <Heading textFont="secondary" textColor="secondary">
      ecosystem
    </Heading>
    <List>
      <Link href="https://redux.js.org/docs/introduction/Ecosystem.html" target="_blank">
        <ListItem textFont="secondary" textColor="quartenary">official ecosystem docs</ListItem>
      </Link>
      <Link href="https://github.com/markerikson/redux-ecosystem-links" target="_blank">
        <ListItem textFont="secondary" textColor="quartenary">redux-ecosystem-links</ListItem>
      </Link>
      <Link href="https://github.com/xgrommx/awesome-redux" target="_blank">
        <ListItem textFont="secondary" textColor="quartenary">awesome-redux</ListItem>
      </Link>
      <Link href="http://blog.isquaredsoftware.com/2017/09/presentation-might-need-redux-ecosystem/" target="_blank">
        <ListItem textFont="secondary" textColor="quartenary">react boston: you might need redux (and its ecosystem)</ListItem>
      </Link>
      <Link href="http://lmgtfy.com/?q=redux+libraries" target="_blank">
        <ListItem textFont="secondary" textColor="quartenary">the internet</ListItem>
      </Link>
    </List>
  </Slide>
)
