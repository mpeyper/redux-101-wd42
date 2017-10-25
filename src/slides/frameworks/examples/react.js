import React from 'react'
import { CodePane } from 'spectacle'

export const example = `
import React from 'react'
import { render } from "react-dom"

const Header = props => <h1>{props.title}</h1>

const Content = ({ message }) => {
  return <p>{message}</p>
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header title="Web Developer 42" />
        <Content message="Show me Redux!" />
      </div>
    )
  }
}

const root = document.getElementById('root')
render(<App />, root)
`.trim()

const output = `
<div>
  <h1>Web Developer 42</h1>
  <p>Show me Redux!</p>
</div>
`.trim()

export const locations = [
  { loc: [0, 22], title: "react" },
  { loc: [0, 2] },
  { loc: [3, 4] },
  { loc: [5, 8] },
  { loc: [9, 19] },
  { loc: [20, 22], note: <CodePane lang="html" source={output} /> }
]
