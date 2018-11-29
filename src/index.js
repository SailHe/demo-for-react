import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import TicTacToe from './TicTacToe';
import DefModalEs6 from './components/DefModalEs6'
// import Welcome from './components/Welcome'
import * as serviceWorker from './serviceWorker';

/*

const WelcomeElement = <Welcome name="React World!" />;

ReactDOM.render(
    WelcomeElement,
    document.getElementById('root')
);
*/

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<DefModalEs6 />, document.getElementById('root'));
// 可以在此处直接渲染 也可以在App内渲染
// ReactDOM.render(<TicTacToe />, document.getElementById("root"));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
