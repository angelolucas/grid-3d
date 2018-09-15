import React, { Component } from 'react';
import Axis from './components/Axis';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="object-container">
          <Axis />
        </div>
      </div>
    );
  }
}

export default App;
