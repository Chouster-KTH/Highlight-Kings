import '../css/compSum.css';

function CompetitionSummary(props){
  var allMatches = props.stands.matches;
  console.log(props);
  

  return(<div className="compSummary">
  <table>
  <thead>
    <tr>
    <th>{props.stands.competition.name}</th>
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
        <td>Match status: {x.status}</td>
        <td>Score: {x.score.fullTime.homeTeam}-{x.score.fullTime.awayTeam}</td>
      </tr>
      ];})
      }
    </tbody>
  </table>
   
  </div>

  );
}

export default CompetitionSummary;