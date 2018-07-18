import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {fetchPost} from "./axios/fetchPost";

const event = new Event('build');
fetchPost();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
