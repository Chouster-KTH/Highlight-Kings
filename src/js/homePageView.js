import '../css/homePage.css'
import Logo from '../images/logo.png';

function HomePage(props){
return (
    <div className = "homePage">
        <img src = {Logo} alt = "logo"/>
    
        <h1 className = "homePage-header">
            Welcome
        </h1>
        <h2 className = "homePage-text">
            Use the sidebar to navigate. 
            <br></br>
            On this page, most upvoted highlights can be seen (under construction).
        </h2>
        <div className = "homePage-content">
            <div>Highlight</div><div>Highlight</div><div>Highlight</div><div>Highlight</div><div>Highlight</div>
            <div>Highlight</div><div>Highlight</div><div>Highlight</div><div>Highlight</div><div>Highlight</div>
        </div>
    </div>
);
}

export default HomePage;