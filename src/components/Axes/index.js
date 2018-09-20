import React, { Component } from 'react'
import Axis from './Axis'

class Axes extends Component {
  render() {
    return (
      <div>
        <Axis name="x" hexColor="#ff0000" />
        <Axis name="y" hexColor="#00ff00" />
        <Axis name="z" hexColor="#0000ff" />
      </div>
    )
  }
}

export default Axes
