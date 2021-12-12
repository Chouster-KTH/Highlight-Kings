import '../css/latestHighlights.css'

import upvote from '../images/upvote.png';
import downvote from '../images/downvote.png';





function LatestHighlights(props) {
    const hlArrayFull = props.highlights.response;
    var hlArray = hlArrayFull.slice(0, 20);
    return (
        <div className="latestHighlights">
            <h1 className="latestHighlights-header">
                Latest Highlights</h1>
            <div className="highlights-grid">
                {hlArray.map((highLight, index) => (
                    <div className="highlights" key={index}>
                        <p className="highlight-header">{highLight.title}</p>
                        <div className="votingButtons">
                            <img src={upvote} alt = "up" onClick={event => console.log("User upvoted game: " + highLight.title)} width="25" height="25" />
                            <img src={downvote} alt = "down" onClick={event => console.log("User downvoted game: " + highLight.title)} width="25" height="25" />
                        </div>
                        <div className="iframeContainer">
                            <iframe src={highLight.videos[0].embed.substring(90, 185)} frameBorder="0" width="100%" height="100%" allowFullScreen="" allow="autoplay; fullscreen"></iframe>
                        </div>
                        <br />
                    </div>
                ))}
                <div className="pageControls">
                    <button className="pageButton">Previous</button>
                    <a className="pageNumber">1</a>
                    <a className="pageNumber" onClick={hlArray=hlArrayFull.slice(20,40)}>2</a>
                    <a className="pageNumber">3</a>
                    <a className="pageNumber">4</a>
                    <button className="pageButton">Next</button>
                </div>
            </div>
        </div>
    );
}

export default LatestHighlights;

/*

<div className="votingButtons">
                            <img src={upvoteButton} onClick={event => console.log("User upvoted game: " + highLight.title)} width="25" height="25" />
                            <img src={downvoteButton} onClick={event => console.log("User downvoted game: " + highLight.title)} width="25" height="25" />
                        </div>

*/



/*

<div className="votingButtons">
                            <div id="upvote"></div><br />
                            <div id="downvote"></div>
                        </div>

*/