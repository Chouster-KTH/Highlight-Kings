import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import MatchSource from './js/apiSource/matchSource';
//import HighlightSource from './js/apiSource/highlightSource.js';
import SideBar from './js/sidebarView';
import LatestHighlights from './js/latestHighlightsView'
import CompetitionSummary from './js/competitionSummaryView'

MatchSource.getStandings(2019).then(data => 
ReactDOM.render(
  <React.StrictMode>
    <div className = "flexparent">
    <SideBar/>
    <CompetitionSummary stands= {data}/>
    </div>
  </React.StrictMode>,
  document.getElementById('root'))
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
