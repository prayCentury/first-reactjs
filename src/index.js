import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Antd from './antd/antd';
import registerServiceWorker from './registerServiceWorker';


// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Antd />, document.getElementById('root'));
registerServiceWorker();
