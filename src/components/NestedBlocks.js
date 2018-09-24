import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

class NestedBlocks extends Component {
  handleAddBlock = () => {
    const allBlocks = this.root.getElementsByClassName(css(styles.block))
    const lastBlock = allBlocks[allBlocks.length - 1]
    const newBlock = document.createElement('div')

    newBlock.className = css(styles.block)
    newBlock.setAttribute('data-last-block', 'true')

    if (lastBlock) lastBlock.appendChild(newBlock)
    else this.root.appendChild(newBlock)
  }

  handleRemoveBlock = () => {
    const allBlocks = this.root.getElementsByClassName(css(styles.block))
    const lastBlock = allBlocks[allBlocks.length - 1]

    if (lastBlock) lastBlock.remove()
  }

  render() {
    return (
      <div className={css(styles.root)} ref={root => (this.root = root)}>
        <div className={css(styles.block)} />

        <div className={css(styles.addButton)}>
          <button onClick={this.handleAddBlock}>add</button>
          <button onClick={this.handleRemoveBlock}>remove</button>
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    color: 'white',
  },

  block: {
    width: '30px',
    height: '30px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    boxShadow: '0 0 0.1px rgba(255, 255, 255, 0.07)',
    transform: 'translateX(100%)',
  },

  addButton: {
    position: 'absolute',
    top: -100,
    left: -100,
    padding: 10,
  },
})

export default NestedBlocks
