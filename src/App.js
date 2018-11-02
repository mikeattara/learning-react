import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import ColoredBlock from './ColoredBlock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My React App</h1>
        </header>
        <div className='main-content'>
          <ColoredBlock />
          <Clock />
        </div>
      </div>
    );
  }
}

export default App;
