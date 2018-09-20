import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import PropTypes from 'prop-types'

class Axis extends Component {
  styles = StyleSheet.create({
    axis: {
      position: 'absolute',
      left: 0,
      top: 0,
      height: 200,
      width: 2,
      transformOrigin: 'top center',
      backgroundImage: `
        linear-gradient(
          transparent,
          ${this.props.hexColor}33 50%,
          ${this.props.hexColor} 50%,
          transparent)
      `,
    },

    x: {
      transform: 'rotateZ(90deg) rotateX(180deg) translateY(-50%)',
      marginLeft: -1,
    },

    y: {
      transform: 'rotateY(-90deg) translateY(-50%)',
      marginLeft: -1,
    },

    z: {
      transform: 'rotateX(90deg) translateY(-50%)',
      marginLeft: -1,
    },

    perpendicular: {
      transform: 'rotateY(90deg)',
      transformOrigin: 'center',
    },
  })

  render() {
    return (
      <div className={css(this.styles.axis, this.styles[this.props.name])}>
        <div className={css(this.styles.axis, this.styles.perpendicular)} />
      </div>
    )
  }
}

Axis.propTypes = {
  hexColor: PropTypes.string,
  name: PropTypes.string,
}

export default Axis
