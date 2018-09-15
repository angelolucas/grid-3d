import React, { Component } from 'react';
import './index.css';

class Axis extends Component {
  render() {
    return (
      <div>
        <span class="axis axis--test-container" />
        <div class="axis axis--x">
          <div class="axis axis--perpendicular" />
        </div>
        <div class="axis axis--y">
          <div class="axis axis--perpendicular" />
        </div>
        <div class="axis axis--z">
          <div class="axis axis--perpendicular" />
        </div>
      </div>
    );
  }
}

export default Axis;
