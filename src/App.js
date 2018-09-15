import React, { Component } from 'react';
import Axis from './components/Axis';
import './App.css';

class App extends Component {
  state = {
    startPoint: false, // horizontal, vertical
    rotate: [0, 0]
  };

  startRotate = e => {
    this.setState({ startPoint: [e.pageX, e.pageY] });
  };

  handleRotate = e => {
    const { startPoint } = this.state;

    if (startPoint) {
      const measureFromStartPoint = [
        e.pageX - startPoint[0],
        e.pageY - startPoint[1]
      ];

      const rotate = [
        this.state.startPoint[0] + measureFromStartPoint[0],
        this.state.startPoint[1] + measureFromStartPoint[1]
      ];

      this.setState({ rotate });
    }
  };

  stopRotate = () => {
    this.setState({ startPoint: false });
  };

  render() {
    return (
      <div
        className="App"
        onMouseDown={e => this.startRotate(e)}
        onMouseMove={e => this.handleRotate(e)}
        onMouseUp={() => this.stopRotate()}
      >
        <div
          ref={object => (this.object = object)}
          className="object-container"
          style={{
            transform: `rotateX(${this.state.rotate[1]}deg) rotateZ(${
              this.state.rotate[0]
            }deg) `
          }}
        >
          <Axis />
        </div>
      </div>
    );
  }
}

export default App;
