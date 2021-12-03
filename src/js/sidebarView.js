import './sidebar.css';


function SideBar(){
  return(
<div className = "sideBar">

  <div id = "sideTop">
  <a href="#home">Home</a>
  <a href="#competitions">Competitions</a>
  <a href="#standings">Standings</a>
  <a href="#latest games">Latest games</a>
  <a href="#upcoming games">Upcoming games</a>
  </div>

  <div className = "sideFooter">
  <a href="#about us">About us</a>
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