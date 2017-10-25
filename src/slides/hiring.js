import React from 'react'
import { Slide, Image, Heading, Link, Table, TableBody, TableRow, TableItem } from "spectacle"
import Twitter from 'react-icons/lib/fa/twitter'
import Github from 'react-icons/lib/fa/github'

export default (
  <Slide key="title" transition={["fade"]} bgColor="primary">
    <Image width="40%" src="https://www.ioofonline.com.au/images/logo.svg">
      ioof
    </Image>
    <Heading fit lineHeight={1.5} textFont="secondary" textColor="secondary">
      we are hiring
    </Heading>
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
  </Slide>
)
