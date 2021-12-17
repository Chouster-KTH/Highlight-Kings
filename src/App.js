import './App.css';
import React from 'react';
import LatestHighlights from './js/latestHighlightsView';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './js/homePageView';
import SideBar from './js/sidebarView';
import AboutUs from './js/aboutUsView';
import CompetitionMatchPresenter from './js/presenters/competitionMatchPresenter';
//import SignIn from './js/signInView';
//import SignUp from './js/signUpView';
import SignInPresenter from './js/presenters/signInPresenter';
import SignUpPresenter from './js/presenters/signUpPresenter';
import MyAccountPresenter from './js/presenters/myAccountPresenter';
import MatchPresenter from './js/presenters/matchPresenter';
import LatestHighlightsPresenter from './js/presenters/latestHighlightsPresenter';
import HomePagePresenter from './js/presenters/homePagePresenter';
import CompStandsPresenter from './js/presenters/competitionStandPresenter';
import StandingsPresenter from './js/presenters/standingsPresenter';




function App(props) {

  const [signInTxt, setSignInTxt] = React.useState('Sign in');


  React.useEffect(function () {
    function obs() {
      if (props.model.currentUser === null) {
        setSignInTxt("Sign in");
      }
      else {
        setSignInTxt("Sign out");
      }

    }
    props.model.addObserver(obs);
    return function () { props.model.removeObserver(obs); }
  }, [props.model]);


  return (
    <BrowserRouter>
      <div className="flexParent">
        <SideBar signInTxt={signInTxt} model={props.model}  />
        <Routes>
          <Route path="/home" element={<HomePagePresenter model={props.model} />} />
          <Route path="/" element={<HomePagePresenter model={props.model} />} />
          <Route path="/highlights" element={<LatestHighlightsPresenter model={props.model} />} />
          <Route path="/comp-schedules" element={<CompetitionMatchPresenter model={props.model} />} ></Route>
          <Route path="/comp-standings" element={<CompStandsPresenter model={props.model} />}></Route>
          <Route path="/comp-schedules/matches" element={<MatchPresenter model={props.model} />}></Route>
          <Route path="/comp-standings/standing" element={<StandingsPresenter model={props.model} />}></Route>
          <Route path="/aboutUs" element={<AboutUs />}> </Route>
          <Route path="/myAccount" element={<MyAccountPresenter model={props.model} />}> </Route>
          <Route path="/signIn" element={<SignInPresenter model={props.model} />}> </Route>
          <Route path="/signUp" element={<SignUpPresenter model={props.model} />}> </Route>


        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
