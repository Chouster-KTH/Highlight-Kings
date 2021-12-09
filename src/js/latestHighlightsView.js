import '../css/latestHighlights.css'
import upvoteButton from '../images/upvoteButton.png';
import downvoteButton from '../images/downvoteButton.png';

import upvote from '../images/upvote.png';
import downvote from '../images/downvote.png';





function LatestHighlights(props) {
    const hlArrayFull = props.highlights.response;
    const hlArray = hlArrayFull.slice(0, 20);
    return (
        <div className="latestHighlights">
            <h1 className="latestHighlights-header">
                Latest Highlights</h1>
            <div className="highlights-grid">
                {hlArray.map((highLight, index) => (
                    <div className="highlights" key={index}>
                        <p className="highlight-header">{highLight.title}</p>
                        <div className="votingButtons">
                            <img src={upvote} onClick={event => console.log("User upvoted game: " + highLight.title)} width="25" height="25" />
                            <img src={downvote} onClick={event => console.log("User downvoted game: " + highLight.title)} width="25" height="25" />
                        </div>
                        <div className="iframeContainer">
                            <iframe src={highLight.videos[0].embed.substring(90, 185)} frameBorder="0" width="100%" height="100%" allowFullScreen="" allow="autoplay; fullscreen"></iframe>
                        </div>
                        <br />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LatestHighlights;

