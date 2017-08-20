import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BubbleChart from './components/bubblechart'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Awesome Bubble Chart Demo!</h2>
        </div>
        <BubbleChart />
        <p className="App-intro">
          Testing
        </p>
      </div>
    );
  }
}

export default App;
