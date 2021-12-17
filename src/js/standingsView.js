import '../css/standing.css';

const positive = (diff) => {return <div id = "pos">{diff}</div>;}
const negative = (diff) => {return <div id = "neg">{diff}</div>;}

function Standings(props){
  let table = props.stands.standings[0].table;
  return (
    <div className="stand">
      <h1>{props.stands.competition.name === "Primera Division" ? "La Liga" : props.stands.competition.name}</h1>
    <table>
      <tbody>
      <tr>
        <th>Position</th>
        <th>Team</th>
        <th>Matches played</th>
        <th>Won</th>
        <th>Lost</th>
        <th>Draw</th>
        <th>Scored</th>
        <th>Conceded</th>
        <th>Goal difference</th>
        <th>Points</th>
      </tr>
      {
        table.map(function(x) {
          return [
            <tr id = "tRow" key ={x.team.id}>
              <td>{x.position}</td>
              <td  width="450"><img id="teams" src ={x.team.crestUrl} alt="'team logo'" height={25}/>{x.team.name}</td>
              <td>{x.playedGames}</td>
              <td>{x.won}</td>
              <td>{x.lost}</td>
              <td>{x.draw}</td>
              <td>{x.goalsFor}</td>
              <td>{x.goalsAgainst}</td>
              <td>{x.goalDifference >= 0? positive(x.goalDifference) : negative(x.goalDifference)}</td>
              <td>{x.points}</td>
            </tr>
          ];})
        }
        </tbody>
    </table>
    </div>
  );
}

export default Standings;