import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FootballModel from './js/FootballModel';
import Firebase from './Firebase/firebase';
import persistModel from './Firebase/firebaseModel';

const fb = new Firebase();
const footballModel = new FootballModel();
persistModel(footballModel);
ReactDOM.render(
  <React.StrictMode>
    <App model = {footballModel} />   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
