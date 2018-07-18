import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {fetchPost} from "./axios/fetchPost";

fetchPost();

// window.addEventListener("storage", function(event) {
//   console.log(event)
//   console.log(event.key);
//   console.log(event.oldValue); 
//   console.log(event.newValue);
//   console.log(event.url);
//   console.log(JSON.stringify(event.storageArea));
// }, false);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
