import '../css/latestHighlights.css'

function LatestHighlights(props){
    const hlArray = props.highlights.response;
    return (
    <div className = "latestHighlights">
        <h1 className="latestHighlights-header">
            Latest Highlights</h1>
        <div className = "highlights-grid">
        {hlArray.map(highLight => (
        <div className="highlights">
          <p className = "highlight-header">{highLight.title}</p>    
          <a href={highLight.matchviewUrl} target="_blank" rel="noreferrer">
            <img src={highLight.thumbnail} 
            alt="highlight"
            height='150'
            width='200'/>
            </a>
            <br/>
            </div>
            ))}
    </div>
    </div>
        );
}

export default LatestHighlights;