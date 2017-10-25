import React from 'react'
import { Slide, Heading, List, ListItem, Link } from "spectacle"

export default (
  <Slide key="api" transition={["fade"]} bgColor="primary">
    <Heading fit textFont="secondary" textColor="secondary">
      other frameworks
    </Heading>
    <List>
      <Link href="https://github.com/wbuchwalter/ng-redux" target="_blank">
        <ListItem textFont="secondary" textColor="quartenary">angular => ng-redux</ListItem>
      </Link>
      <Link href="https://github.com/wbuchwalter/ng2-redux" target="_blank">
        <ListItem textFont="secondary" textColor="quartenary">angular2 => ng2-redux</ListItem>
      </Link>
      <Link href="https://github.com/redbooth/backbone-redux" target="_blank">
        <ListItem textFont="secondary" textColor="quartenary">backbone => backbone-redux</ListItem>
      </Link>
      <Link href="https://github.com/yang-wei/vue-redux" target="_blank">
        <ListItem textFont="secondary" textColor="quartenary">vuew => vue-redux</ListItem>
      </Link>
      <Link href="https://github.com/ekosz/redux-falcor" target="_blank">
        <ListItem textFont="secondary" textColor="quartenary">falcor => redux-falcor</ListItem>
      </Link>
      <Link href="https://github.com/troch/deku-redux" target="_blank">
        <ListItem textFont="secondary" textColor="quartenary">deku => deku-redux</ListItem>
      </Link>
      <Link href="https://github.com/tur-nr/polymer-redux" target="_blank">
        <ListItem textFont="secondary" textColor="quartenary">polymer => polymer-redux</ListItem>
      </Link>
      <Link href="https://github.com/toranb/ember-redux" target="_blank">
        <ListItem textFont="secondary" textColor="quartenary">ember => ember-redux</ListItem>
      </Link>
      <Link href="https://github.com/markerikson/redux-ecosystem-links/blob/master/library-integration.md" target="_blank">
        <ListItem textFont="secondary" textColor="quartenary">many, many more</ListItem>
      </Link>
    </List>
  </Slide>
)
