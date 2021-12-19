import '../css/homePage.css'
import Logo from '../images/logo.png';
import up from '../images/up.png';
import neu from '../images/neu.png';
import { useEffect } from 'react';

function HomePage(props){
    useEffect(()=>{
        if(props.model.users[props.model.currentUser - 1] !== undefined)
            props.setUserUpvoted();
        }, []);
    function checkIfUpVoted(hl){
        var found = false;
        if(props.model.users[props.model.currentUser - 1] !== null && props.model.users[props.model.currentUser - 1] !== undefined){
            for(var i = 0; i < props.userUpvoted.length; i++){
                if(props.userUpvoted[i].title === hl.title){
                    found = true;
                    break;
                }
            }
        }
        return found;
    }
return (
    <div className = "homePage">
        <img src = {Logo} alt = "logo"/>
        <h1 className = "homePage-header">
            Welcome
        </h1>
        <h2 className = "homePage-text">
            On this page, most popular highlights can be seen.
        </h2>
        <div className="upvoted-grid">
                {props.upVoted.map((highLight, index) => (
                    <div className="upvoted" key={index}>
                        <p className="upvoted-header">{highLight.title} {"("+highLight.date.slice(0, 10)+")"}</p>
                        <p className="numberOfUpvotes">
                            <img src={checkIfUpVoted(highLight) ? up : neu} alt = "up" onClick={() => props.addUpVote(highLight)} width="25" height="25" />  
                            {"Upvotes: "+ highLight.upVotes}
                        </p>
                        <div className="iframeContainerUpVoted">
                            <iframe src={highLight.videos[0].embed.substring(90, 185)} frameBorder="0" width="100%" height="100%" allowFullScreen="" allow="autoplay; fullscreen"></iframe>
                        </div>
                        <br />
                    </div>
                ))}
        </div>
    </div>
);
}

export default HomePage;