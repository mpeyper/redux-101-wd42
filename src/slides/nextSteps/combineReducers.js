import React from 'react'
import CodeSlide from 'spectacle-code-slide';
import { Slide, Layout, Fill, Image, Appear } from "spectacle"
import { example, locations } from './examples/combineReducers'
import bigImage from './assets/big.png'
import reallyBigImage from './assets/reallyBig.png'

export const combineReducers = (
  <CodeSlide
    key="combineReducers"
    transition={["fade"]}
    lang="javascript"
    showLineNumbers={true}
    code={example}
    ranges={locations}
  />
)

export const bigTrees = (
  <Slide key="bigTrees" transition={["fade"]} bgColor="primary">
    <Layout>
      <Fill>
        <Image height="20em" src={bigImage}>
          big tree
        </Image>
      </Fill>
      <Fill>
        <Appear>
          <Image height="20em" src={reallyBigImage}>
            big tree
          </Image>
        </Appear>
      </Fill>
    </Layout>
  </Slide>
)