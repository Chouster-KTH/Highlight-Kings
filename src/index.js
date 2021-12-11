import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import MatchSource from './js/apiSource/matchSource';
import HighlightSource from './js/apiSource/highlightSource.js';
//import SideBar from './js/sidebarView';
//import LatestHighlights from './js/latestHighlightsView'
//import CompetitionSummary from './js/competitionSummaryView'
//import HomePage from './js/homePageView'
import MatchSource from './js/apiSource/matchSource';
import FootballModel from './js/FootballModel';
const footballModel = new FootballModel();
Promise.all([HighlightSource.getHighlight(), 
            MatchSource.getAllCompetitions()]).then((dt) => 
ReactDOM.render(
  <React.StrictMode>
    <App highlights ={dt[0]} comps = {dt[1]} model = {footballModel} />   
  </React.StrictMode>,
  document.getElementById('root'))
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
