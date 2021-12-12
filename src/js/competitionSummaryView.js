import '../css/compSum.css';

const setLive = <span id = "live">LIVE</span>;

export function CompetitionSearch(){
return(<div>

</div>);
}
export function CompetitionSummary(props){
  console.log(props);
  var allMatches = props.match.matches;
  

  return(<div className="compSummary">

  <table>
  <thead>
    <tr>
    <th>{props.match.competition.name}</th>
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