import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import MatchSource from './js/apiSource/matchSource';
import HighlightSource from './js/apiSource/highlightSource.js';
//import LatestHighlights from './js/latestHighlightsView'
import FootballModel from './js/FootballModel';
import {initializeApp} from "firebase/app";
import firebase from 'firebase/compat/app';
import Firebase from './Firebase/firebase';
import persistModel from './Firebase/firebaseModel';

/*const firebaseConfig = {
  apiKey: "AIzaSyDVtpnoUGoVYTebaMPbD7N21XXqL5ibsTM",
  authDomain: "highlightkings-1d6b6.firebaseapp.com",
  databaseURL: "https://highlightkings-1d6b6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "highlightkings-1d6b6",
  storageBucket: "highlightkings-1d6b6.appspot.com",
  messagingSenderId: "182355394077",
  appId: "1:182355394077:web:d18296256369e1047f90f4"
}
//firebase.initializeApp(firebaseConfig);*/
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
