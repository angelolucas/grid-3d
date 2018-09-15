import React, { Component } from 'react';
import Axis from './components/Axis';
import './App.css';
import rotate from './rotate';

class App extends Component {
  componentDidMount() {
    rotate({ object: this.object, dragArea: this.app });
  }
  render() {
    return (
      <div className="App" ref={app => (this.app = app)}>
        <div
          ref={object => (this.object = object)}
          className="object-container"
        >
          <Axis />
        </div>
      </div>
    );
  }
}

export default App;
