import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'

class Rotate extends Component {
  state = {
    dragging: false,
    x: 0,
    z: 0,
  }

  componentDidMount() {
    this.handleRotate(this.object)
  }

  handleRotate = object => {
    object.onmousedown = e => {
      let prevX = e.pageX
      let prevY = e.pageY

      this.setState({ dragging: true })

      object.onmousemove = e => {
        if (this.state.dragging) {
          const measureFromStartX = this.reversePolarity(e.pageX - prevX)
          const measureFromStartY = this.reversePolarity(e.pageY - prevY)

          prevX = e.pageX
          prevY = e.pageY

          const x = this.state.x + measureFromStartY / 3
          const z = this.state.z + measureFromStartX / 3

          this.setState({
            x,
            z,
          })
        }
      }

      object.onmouseup = () => this.setState({ dragging: false })
    }
  }

  reversePolarity = value => value - value * 2

  render() {
    const { children } = this.props
    const { x, z } = this.state
    const rotation = { transform: `rotateX(${x}deg) rotateZ(${z}deg)` }
    const cursor = this.state.dragging ? '-webkit-grabbing' : '-webkit-grab'

    return (
      <div
        ref={object => (this.object = object)}
        className={css(styles.parentMeasures)}
        style={{ cursor }}
      >
        <div className={css(styles.parentMeasures)} style={rotation}>
          {children}
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  parentMeasures: {
    width: '100%',
    height: '100%',
  },
})

Rotate.propTypes = { children: PropTypes.node.isRequired }

export default Rotate
