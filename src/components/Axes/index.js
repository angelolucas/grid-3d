import React, { Component } from 'react'
import Axis from './Axis'
import { StyleSheet, css } from 'aphrodite/no-important'

class Axes extends Component {
  render() {
    return (
      <div className={css(styles.root)}>
        <Axis name="x" hexColor="#ff0000" />
        <Axis name="y" hexColor="#00ff00" />
        <Axis name="z" hexColor="#0000ff" />
      </div>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
})

export default Axes
