import '../css/sidebar.css';
import {Link} from 'react-router-dom';

function SideBar(){
  return(
<div className = "sideBar">

  <div id = "sideTop">
  <Link className = "sideLink" to="/home">Home</Link>
  <Link className ="sideLink" to="/highlights">Highlights</Link>
  <Link className ="sideLink" to="/matches">Test Matches</Link>
  <a href="/latest games">Coming soon</a>
  <a href="/upcoming games">Coming soon</a>
  </div>

  <div className = "sideFooter">
  <a href="#about us">Coming soon</a>
  <a href="#my account">My account</a>
  <a href="#sign in">Sign in</a>
  <div id = "sideText">
    Don't have an account?
  <a href="#sign up">Sign up for free</a>
  </div>
  </div>

</div>
  );
}
export default SideBar;