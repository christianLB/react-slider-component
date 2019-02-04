import React, { Component } from 'react';
import RangeSlider from './range-slider/range-slider';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <RangeSlider />
        </header>
      </div>
    );
  }
}

export default App;
