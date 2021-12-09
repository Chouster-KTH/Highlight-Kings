import './App.css';
import LatestHighlights from './js/latestHighlightsView';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './js/homePageView';
import SideBar from './js/sidebarView';
import Competitions from './js/competitionView';
import AboutUs from './js/aboutUsView';
import CompetitionSummary from './js/competitionSummaryView';

function App(props) {
  return (
    <BrowserRouter>
      <div className="flexParent">
        <SideBar />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/highlights" element={<LatestHighlights highlights={props.highlights} />} />
          <Route path="/competitions" element={<Competitions comps={props.comps} />} ></Route>
          <Route path="/aboutUs" element={<AboutUs />}> </Route>
          <Route path="/competitions" element={<CompetitionSummary />}> </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
