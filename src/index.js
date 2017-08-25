import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './Hello';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App name='hehe'/>, document.getElementById('root'));
ReactDOM.render(<Hello date={new Date()} />, document.getElementById('root'));
registerServiceWorker();
