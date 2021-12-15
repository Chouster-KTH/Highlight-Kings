import '../css/compSum.css';


export function CompetitionSearch(props){
  const title = props.compTitle.competition;
  const date = props.compTitle.matches[0].season;
  const options = ["All", "Live", "Scheduled", "Finished"];
return(<div className="compSummary">
  <h1>{title.name === "Primera Division" ? "La Liga" : title.name}</h1>
<span>
  <input onInput={ e=> props.onText(e.target.value) }placeholder = {props.placeholder || 'Enter team name'}/>
  <select onChange={ e=> props.onType(e.target.value) }>
             {
              options.map(function(x){return<option key = {x.toString()} value ={x.toUpperCase()}>{x}</option>})
             }
         </select>
  <button onClick={(event)=>props.onSearch()}>Find matches</button>
  </span>
  <div id="tDates">
  Start: {date.startDate} &nbsp;&nbsp; End: {date.endDate}
  </div>
</div>);
}
export function CompetitionSummary(props){
  console.log(props.teams);

  var allMatches;
  console.log(props);
  if(props.teamM)
  var allMatches = props.teamM;
  else
  allMatches = props.match.matches;
  

  return(<div className="compSummary">

  <table>
  <thead>
    <tr>
    </tr>
    </thead>
    <tbody>
    {
      allMatches.map(function(x){return[
      <tr id = "tRow" key ={x.id}>
        <td>Date: {x.utcDate}</td>
        <td id ="teamsTable">
          
          {x.homeTeam.name} VS {x.awayTeam.name} 
          
          Score: {x.score.fullTime.homeTeam}-{x.score.fullTime.awayTeam} </td>
        <td id ="p1">Match status: {x.status === "IN_PLAY" ? setLive : x.status}</td>
        
      </tr>
      ];})
      }
    </tbody>
  </table>
  </div>

  );
  
}

const setLive = <span id = "live">LIVE</span>;
const noResult = <div className="compSummary">No matches could be found for that particular team</div>