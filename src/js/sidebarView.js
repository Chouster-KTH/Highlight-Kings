import '../css/sidebar.css';
import { Link } from 'react-router-dom';
import React from 'react';


function SideBar(props) {

  const [signOutClass, setSignOutClass] = React.useState('');


  React.useEffect(function () {
    function obs() {
      if (props.model.currentUser === null) {
        setSignOutClass("");
      }
      else {
        setSignOutClass("hidden");
      }

    }
    props.model.addObserver(obs);
    return function () { props.model.removeObserver(obs); }
  }, [props.model]);

  return (
    <div className="sideBar">

      <div id="sideTop">
        <Link to="/home">Home</Link>
        <Link to="/highlights">Highlights</Link>
        <Link to="/competitions">Matches</Link>
      </div>

      <div className="sideFooter">
        <Link to="/aboutUs">About us</Link>
        <Link to="/myAccount">My account</Link>
        <Link to="/signIn">{props.signInTxt}</Link>
        <div id="sideText" class = {signOutClass}>
          <Link to="/signUp">Don't have an account? <br /> Sign up for free</Link>
        </div>
      </div>

    </div>
  );
}

export default SideBar;

