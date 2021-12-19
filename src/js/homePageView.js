import '../css/homePage.css'
import Logo from '../images/logo.png';
import upvote from '../images/upvote.png';

function HomePage(props){
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
                            <img src={upvote} alt = "up" onClick={() => props.addUpVote(highLight)} width="25" height="25" />  
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