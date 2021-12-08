import '../css/latestHighlights.css'
import upvoteButton from '../images/upvoteButton.png';
import downvoteButton from '../images/downvoteButton.png';



function LatestHighlights(props) {
    const hlArray = props.highlights.response;
    return (
        <div className="latestHighlights">
            <h1 className="latestHighlights-header">
                Latest Highlights</h1>
            <div className="highlights-grid">
                {hlArray.map((highLight, index) => (
                    <div className="highlights" key={index}>
                        <p className="highlight-header">{highLight.title}</p>
                        <div className="votingButtons">
                            <img src={upvoteButton} onClick={event => console.log("User upvoted game: " + highLight.title)} width="25" height="25" />
                            <img src={downvoteButton} onClick={event => console.log("User downvoted game: " + highLight.title)} width="25" height="25" />
                        </div>
                        <a href={highLight.matchviewUrl} target="_blank" rel="noreferrer">
                            <img src={highLight.thumbnail}
                                alt="highlight"
                                height='150'
                                width='200' />
                        </a>
                        <br />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LatestHighlights;