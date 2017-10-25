import React from 'react'
import { Slide, Heading } from "spectacle"
import devTools from './devTools'
import { combineReducers, bigTrees } from './combineReducers'
import extensions from './extensions'
import enhancers from './enhancers'
import { middleware, async, thunks } from './middleware'
import { question, answer } from './whyThunks'
import { title as higherOrderTitle, actions, reducers } from './higherOrder'
import ecosystem from './ecosystem'

const title = (
  <Slide key="nextSteps" transition={["fade"]} bgColor="primary">
    <Heading textFont="secondary" textColor="secondary">
      next steps
    </Heading>
  </Slide>
)

export default [
    title,
    devTools,
    combineReducers,
    bigTrees,
    extensions,
    enhancers,
    middleware,
    async,
    question,
    answer,
    thunks,
    higherOrderTitle,
    actions,
    reducers,
    ecosystem
]