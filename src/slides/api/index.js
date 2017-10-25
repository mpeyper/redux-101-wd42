import React from 'react'
import { Slide, Heading } from "spectacle"
import api from './api'
import store from './store'
import actions from './actions'
import actionCreators from './actionCreators'
import reducers from './reducers'
import { usingTheStore ,runningExample } from './example'
import { question, answer } from './whyReducer'
import howReduxWorks from './howReduxWorks'

const title = (
  <Slide key="api" transition={["fade"]} bgColor="primary">
    <Heading textFont="secondary" textColor="secondary">
      the api
    </Heading>
  </Slide>
)

export default [
    title,
    api,
    store,
    actions,
    actionCreators,
    reducers,
    usingTheStore,
    runningExample,
    question,
    answer,
    howReduxWorks
]