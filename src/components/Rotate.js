import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Rotate extends Component {
  state = {
    x: 0,
    z: 0,
  }
  componentDidMount() {
    this.handleRotate(this.object)
  }

  handleRotate = object => {
    object.onmousedown = e => {
      let dragging = true
      let prevX = e.pageX
      let prevY = e.pageY

      object.onmousemove = e => {
        if (dragging) {
          const measureFromStartX = e.pageX - prevX
          const measureFromStartY = e.pageY - prevY

          prevX = e.pageX
          prevY = e.pageY

          const x = this.state.x + (measureFromStartY * 100) / 360
          const z = this.state.z + (measureFromStartX * 100) / 360

          this.setState({
            x,
            z,
          })
        }
      }

      object.onmouseup = () => {
        dragging = false
      }
    }
  }

  render() {
    const { children, ...rest } = this.props
    const { x, z } = this.state
    const transform = { transform: `rotateX(${x}deg) rotateZ(${z}deg)` }

    return (
      <div {...rest} ref={object => (this.object = object)}>
        <div style={transform}>{children}</div>
      </div>
    )
  }
}

Rotate.propTypes = { children: PropTypes.node.isRequired }

export default Rotate
