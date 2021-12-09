import '../css/sidebar.css';
import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <div className="sideBar">

      <div id="sideTop">
        <Link to="/home">Home</Link>
        <Link to="/highlights">Highlights</Link>
        <Link to="/competitions">Competitions</Link>
        <a href="/latest games">Coming soon</a>
        <a href="/upcoming games">Coming soon</a>
      </div>

      <div className="sideFooter">
        <Link to="/aboutUs">About us</Link>
        <a href="#my account">My account</a>
        <a href="#sign in">Sign in</a>
        <div id="sideText">
          Don't have an account?
          <Link to="/signUp">Sign up for free</Link>
        </div>
      </div>

    </div>
  );
}
export default SideBar;

