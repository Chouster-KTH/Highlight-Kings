import './App.css';
import LatestHighlights from './js/latestHighlightsView';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './js/homePageView';
import SideBar from './js/sidebarView';
import Competitions from './js/competitionView';
import AboutUs from './js/aboutUsView';
import CompetitionSummary from './js/competitionSummaryView';
//import SignIn from './js/signInView';
//import SignUp from './js/signUpView';
import SignInPresenter from './js/presenters/signInPresenter';
import SignUpPresenter from './js/presenters/signUpPresenter';
import MyAccount from './js/myAccountView';






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
          <Route path="/myAccount" element={<MyAccount model = {props.model}/>}> </Route>
          <Route path="/signIn" element={<SignInPresenter model = {props.model}/>}> </Route>
          <Route path="/signUp" element={<SignUpPresenter model = {props.model}/>}> </Route>
      

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
