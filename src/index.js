import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './Hello';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App name='hehe'/>, document.getElementById('root'));
const props = {firstName:'bingo',lastName:'li'}
ReactDOM.render(<Hello {...props} date={new Date()} />, document.getElementById('root'));
registerServiceWorker();
