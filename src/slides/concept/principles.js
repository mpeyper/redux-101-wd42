import React from 'react'
import { Slide, Heading, Appear, List, ListItem } from "spectacle"

export default (
  <Slide key="api" transition={["fade"]} bgColor="primary">
    <Heading fit textFont="secondary" textColor="secondary">
      three principles
    </Heading>
    <List ordered>
      <Appear><ListItem textFont="secondary" textColor="quartenary">single source of truth</ListItem></Appear>
      <Appear><ListItem textFont="secondary" textColor="quartenary">state is read-only</ListItem></Appear>
      <Appear><ListItem textFont="secondary" textColor="quartenary">changes are made with pure functions</ListItem></Appear>
    </List>
  </Slide>
)
