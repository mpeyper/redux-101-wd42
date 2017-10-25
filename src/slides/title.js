import React from 'react'
import { Slide, Heading, Image, Link, Table, TableBody, TableRow, TableItem, Notes } from "spectacle"
import Twitter from 'react-icons/lib/fa/twitter'
import Github from 'react-icons/lib/fa/github'

export default (
  <Slide key="title" transition={["fade"]} bgColor="primary">
    <Heading fit textFont="secondary" textColor="secondary">
      an introduction to
    </Heading>
    <Image width="80%" src="https://raw.githubusercontent.com/reactjs/redux/master/logo/logo-title-light.png">
      redux
    </Image>
    <Table>
      <TableBody>
        <TableRow>
          <TableItem>
            <Twitter style={{color: "#1DA1F2"}} />
          </TableItem>
          <TableItem textAlign="left">
            <Link textFont="secondary" textColor="quartenary" href="https://twitter.com/michaelpeyper" target="_blank">
              @michaelpeyper
            </Link>
          </TableItem>
        </TableRow>
        <TableRow>
          <TableItem>
            <Github style={{color: "#FFFFFF"}} />
          </TableItem>
          <TableItem textAlign="left">
            <Link textFont="secondary" textColor="quartenary" href="https://github.com/mpeyper" target="_blank">
              /mpeyper
            </Link>
          </TableItem>
        </TableRow>
        <TableRow>
          <TableItem>
            <Image style={{ verticalAlign: 'middle', margin: 0 }} height="0.9em" src="https://www.ioofonline.com.au/images/logo.svg" />
          </TableItem>
          <TableItem textAlign="left">
            <Link textFont="secondary" textColor="quartenary" href="mailto:mpeyper7@gmail.com" target="_blank">
              michael.peyper@ioof.com.au
            </Link>
          </TableItem>
        </TableRow>
      </TableBody>
    </Table>
    <Notes>
      <ul>
        <li>Created by Dan Abramov and Andrew Clark in 2015.</li>
        <li>Inspired by Facebook’s Flux</li>
        <li>Influenced by functional programming language Elm.</li>        
      </ul>
    </Notes>
  </Slide>
)
