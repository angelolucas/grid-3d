import React, { Component } from "react";
import Axis from "./components/Axis";
import Rotate from "./components/Rotate";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Rotate className="object-container">
          <div style={{ width: 100, height: 100, backgroundColor: "black" }} />
          <Axis />
        </Rotate>
      </div>
    );
  }
}

export default App;
