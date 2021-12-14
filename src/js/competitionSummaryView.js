import '../css/compSum.css';


export function CompetitionSearch(props){
  const title = props.compTitle.competition.name;
return(<div className="compSummary">
  <h1>{title === "Primera Division" ? "La Liga" : title}</h1>
<span>
  <input onInput={ e=> props.onText(e.target.value) }placeholder = {props.placeholder || 'Enter date: "yyyy-mm-dd"'}/>
  <button onClick={event=>props.onSearch()}>Find matches</button>
  </span>
</div>);
}
export function CompetitionSummary(props){
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
    <tr id="tDates">
    <td>Start: {allMatches[0].season.startDate} &nbsp;&nbsp; End: {allMatches[0].season.endDate}</td>
    </tr>
    </thead>
    <tbody>
    {
      allMatches.map(function(x){return[
      <tr id = "tRow" key ={x.id}>
        <td>Date: {x.utcDate}</td>
        <td id ="teamsTable">{x.homeTeam.name} VS {x.awayTeam.name} </td>
        <td id ="p1">Match status: {x.status === "IN_PLAY" ? setLive : x.status}</td>
        <td>Score: {x.score.fullTime.homeTeam}-{x.score.fullTime.awayTeam}</td>
      </tr>
      ];})
      }
    </tbody>
  </table>
  </div>

  );
  
}

const setLive = <span id = "live">LIVE</span>;