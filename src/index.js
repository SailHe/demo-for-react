import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import TicTacToe from './TicTacToe';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// 可以在此处直接渲染 也可以在App内不渲染
// ReactDOM.render(<TicTacToe />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
