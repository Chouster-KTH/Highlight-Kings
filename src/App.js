import './App.css';
import LatestHighlights from './js/latestHighlightsView';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './js/homePageView';
import SideBar from './js/sidebarView';
import CompetitionSummary from './js/competitionSummaryView';
import AboutUs from './js/aboutUsView';

function App(props) {
  return (
    <BrowserRouter>
      <div className="flexParent">
        <SideBar />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/highlights" element={<LatestHighlights highlights={props.highlights} />} />
          <Route path="/matches" element={<CompetitionSummary match={props.match} />} ></Route>
          <Route path="/aboutUs" element={<AboutUs />}> </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
