import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DefModalEs6 from './modules/DefModalEs6'
import DefModalEs5 from './modules/DefModalEs5'
import TicTacToe from './modules/TicTacToe';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <TicTacToe />
        <DefModalEs5 />
        <DefModalEs6 />

      </div>
    );
  }
}

export default App;
