import './App.css';
import LatestHighlights from './js/latestHighlightsView';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './js/homePageView';
import SideBar from './js/sidebarView';

function App(props) {
  return (
    <BrowserRouter>   
     <div className = "flexParent">
    <SideBar/>
    <Routes> 
    <Route path="/home" element={<HomePage />} ></Route>
    <Route path="/" element={<HomePage />}  ></Route>
    <Route path="/highlights" element={<LatestHighlights highlights={props.highlights}/>} ></Route>
  </Routes>
  </div>
  </BrowserRouter>
  );
}

export default App;
