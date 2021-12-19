import '../css/latestHighlights.css'
import up from '../images/up.png';
import neu from '../images/neu.png';





function LatestHighlights(props) {
    if(props.model.users[props.model.currentUser - 1] !== null && props.model.users[props.model.currentUser - 1] !== undefined)
        props.setUpvoted();
    const hlArrayFull = props.highlights.response;
    var hlArray;
    switch(props.pageNr){
        case 1: 
            hlArray = hlArrayFull.slice(0,20);
            break;
        case 2: 
            hlArray = hlArrayFull.slice(20,40);
            break;
        case 3: 
            hlArray = hlArrayFull.slice(40,60);
            break;
        case 4: 
            hlArray = hlArrayFull.slice(60,80);
            break;
        default:
            hlArray = hlArrayFull.slice(0,20);
    }
    function checkIfUpVoted(hl){
        var found = false;
        if(props.model.users[props.model.currentUser - 1] !== null && props.model.users[props.model.currentUser - 1] !== undefined){
            for(var i = 0; i < props.upvoted.length; i++){
                if(props.upvoted[i].title === hl.title){
                    found = true;
                    break;
                }
            }
        }
        return found;
    }
    return (
        <div className="latestHighlights">
            <h1 className="latestHighlights-header">
                Latest Highlights</h1>
            <div className="highlights-grid">
                <h3 id="top">Showing highlights {props.pageNr * 20 - 19} to {props.pageNr * 20}</h3>
                {hlArray.map((highLight, index) => (
                    <div className="highlights" key={index}>
                        <p className="highlight-header">{highLight.title}</p>
                        <div className="votingButtons">
                            <img src={checkIfUpVoted(highLight) ? up : neu} className="upvImg" alt = "up" onClick={() => {props.addUpVote(highLight); }}/>
                            <i>Upvote</i>
                        </div>
                        <div className="iframeContainer">
                            <iframe src={highLight.videos[0].embed.substring(90, 185)} title={highLight.title} frameBorder="0" allow="autoplay; fullscreen"></iframe>
                        </div>
                        <div className="matchData">
                            <p>{highLight.title}</p>
                            <p>{highLight.competition}</p>
                            <p>{["ENGLAND: Premier League","SPAIN: La Liga","FRANCE: Ligue 1","ITALY: Serie A","GERMANY: Bundesliga","NETHERLANDS: Eredivisie","PORTUGAL: Liga Portugal","CHAMPIONS LEAGUE"].includes(highLight.competition)}</p>
                            {"DATE: "+ highLight.date.slice(0, 10)}
                        </div>
                        <br />
                    </div>
                ))}
                <div className="pageControls">
                    <button className="pageButton" onClick={e=>{props.pageChange(props.pageNr - 1); }}><a href="#top">Back</a></button>
                    <a href="#top" onClick={e=>{props.pageChange(1);}}>1</a>
                    <a href="#top" onClick={e=>{props.pageChange(2);}}>2</a>
                    <a href="#top" onClick={e=>{props.pageChange(3);}}>3</a>
                    <a href="#top" onClick={e=>{props.pageChange(4);}}>4</a>
                    <button className="pageButton" onClick={e=>{props.pageChange(props.pageNr + 1); }}><a href="#top">Next</a></button>
                </div>
            </div>
        </div>
    );
}


export default LatestHighlights;

