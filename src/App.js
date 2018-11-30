import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DefModalEs6 from './components/DefModalEs6'
import DefModalEs5 from './components/DefModalEs5'
import TicTacToe from './components/TicTacToe';
import Onents from './components/Onents';

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
        <Onents />

      </div>
    );
  }
}

export default App;
