import React, { Component } from 'react'
import Axes from './components/Axes'
import Rotate from './components/Rotate'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Rotate className="object-container">
          <Axes />
        </Rotate>
      </div>
    )
  }
}

export default App
