import React, { Component } from 'react'
import Axes from './components/Axes'
import Rotate from './components/Rotate'
import NestedBlocks from './components/NestedBlocks'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Rotate>
          <Axes />
          <NestedBlocks />
        </Rotate>
      </div>
    )
  }
}

export default App
