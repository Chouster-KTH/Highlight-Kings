import './App.css';
import LatestHighlights from './js/latestHighlightsView';
import {Routes, Route} from 'react-router-dom';
import HomePage from './js/homePageView';


function App(props) {
  return (
    <div className = "flexParent">
    <Routes> 
    <Route path="/home" element={<HomePage />} />
    <Route path="/" element={<HomePage />}  />
    <Route path="/home" element={<LatestHighlights highlights={props.highlights}/>} />
  </Routes>
  </div>
  );
}

export default App;
