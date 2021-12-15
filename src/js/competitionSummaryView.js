import '../css/compSum.css';

const setLive = <span id = "live">LIVE</span>;
const noResult = <div className="compSummary">No matches could be found for that particular team</div>

export function CompetitionSearch(props) {
  const title = props.compTitle.competition;
  const date = props.compTitle.matches[0].season;
  const options = ["All", "Live", "Scheduled", "Finished"];

  return (
    <div className="compSummary">
      <h1>{title.name === "Primera Division" ? "La Liga" : title.name}</h1>
      <div style={{ display: 'flex' }}>
        <input onInput={e => props.onText(e.target.value) }placeholder = {props.placeholder || 'Enter team name'}/>
        <select onChange={e => props.onType(e.target.value) }>
          {options.map(x => <option key = {x.toString()} value ={x.toUpperCase()}>{x}</option>)}
        </select>
        <button onClick={() => props.onSearch()}>Find matches</button>
      </div>
      <div id="tDates">
        Start: {date.startDate} &nbsp;&nbsp; End: {date.endDate}
      </div>
    </div>
  );
}


export function CompetitionSummary(props) {
  if (!props.match.matches.length)
    return noResult;

  return (
    <div className="compSummary">
    <table>
      <thead>
        <tr>
        </tr>
      </thead>
      <tbody>
      {
        props.match.matches.map(function(x) {
          return [
            <tr id = "tRow" key ={x.id}>
              <td>Date: {x.utcDate}</td>
              <td id ="teamsTable">
                {props.teams.teams.filter(y => y.id === x.homeTeam.id).map(y => <img src={y.crestUrl} height ="50" key={y.id}/>)}
                {x.homeTeam.name} VS {x.awayTeam.name} 
              {props.teams.teams.filter(y => y.id === x.awayTeam.id).map(y => <img src={y.crestUrl} height ="50" key={y.id}/>)}
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

