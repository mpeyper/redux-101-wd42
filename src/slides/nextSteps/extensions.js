import React from 'react'
import { Slide, Heading, Appear, List, ListItem } from "spectacle"

export default (
  <Slide key="extensions" transition={["fade"]} bgColor="primary">
    <Heading fit textFont="secondary" textColor="secondary">
      extending redux
    </Heading>
    <List ordered>
      <Appear><ListItem textFont="secondary" textColor="quartenary">enhancers</ListItem></Appear>
      <Appear><ListItem textFont="secondary" textColor="quartenary">middleware</ListItem></Appear>
      <Appear><ListItem textFont="secondary" textColor="quartenary">higher-order things</ListItem></Appear>
    </List>
  </Slide>
)
