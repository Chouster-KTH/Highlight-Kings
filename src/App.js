import './App.css';
import React from 'react';
import LatestHighlights from './js/latestHighlightsView';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './js/homePageView';
import SideBar from './js/sidebarView';
import AboutUs from './js/aboutUsView';
import CompetitionPresenter from './js/presenters/competitionPresenter';
//import SignIn from './js/signInView';
//import SignUp from './js/signUpView';
import SignInPresenter from './js/presenters/signInPresenter';
import SignUpPresenter from './js/presenters/signUpPresenter';
import MyAccount from './js/myAccountView';
import CompSumPresenter from './js/presenters/compSummaryPresenter';
import LatestHighlightsPresenter from './js/presenters/latestHighlightsPresenter';






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
          <Route path="/home" element={<HomePage model={props.model} />} />
          <Route path="/" element={<HomePage model={props.model} />} />
          <Route path="/highlights" element={<LatestHighlightsPresenter model={props.model} />} />
          <Route path="/competitions" element={<CompetitionPresenter model={props.model} />} ></Route>
          <Route path="/selectedcompetition" element={<CompSumPresenter model={props.model} />}></Route>
          <Route path="/aboutUs" element={<AboutUs />}> </Route>
          <Route path="/myAccount" element={<MyAccount model={props.model} />}> </Route>
          <Route path="/signIn" element={<SignInPresenter model={props.model} />}> </Route>
          <Route path="/signUp" element={<SignUpPresenter model={props.model} />}> </Route>


        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
