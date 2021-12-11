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
        <Link to="/myAccount">My account</Link>
        <Link to="/signIn">Sign in</Link>
        <div id="sideText">
          <Link to="/signUp">Don't have an account? <br /> Sign up for free</Link>
        </div>
      </div>

    </div>
  );
}
export default SideBar;

