import React, { Component } from 'react';
import './index.css';

class Axis extends Component {
  render() {
    return (
      <div>
        <div className="axis axis--x">
          <div className="axis axis--perpendicular" />
        </div>
        <div className="axis axis--y">
          <div className="axis axis--perpendicular" />
        </div>
        <div className="axis axis--z">
          <div className="axis axis--perpendicular" />
        </div>
      </div>
    );
  }
}

export default Axis;
