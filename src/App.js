import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BubbleChart from './components/bubblechart'
let circleData = [20,30,40,50]

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Awesome Bubble Chart Demo!</h2>
        </div>
        <BubbleChart data = {circleData}/>
      </div>
    );
  }
}

export default App;
