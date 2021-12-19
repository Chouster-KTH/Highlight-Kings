import '../css/compStand.css'
import '../css/matches.css'
import '../css/sidebar.css'
import {Link} from 'react-router-dom';

function CompetitionStanding(props){
  const ids = [2019, 2002, 2015, 2003, 2017, 2014, 2021];
  var compArr = props.comps.competitions.filter((cmp) => ids.includes(cmp.id) );
  
return(<div className ="compStand">
  <h1>Competition - Standings</h1>
    <table>
      <tbody>
      <tr>
        <th>Country</th>
        <th>Tournament </th>
        <th>Start</th>
        <th>End</th>
        <th>Standings</th>
      </tr>
    {
    compArr.map(function(x){return[
      <tr key ={x.id}>
          <td width={85}>
          <img src = {x.area.ensignUrl} alt="Country flag" height = {35}/>
          </td>
          <td>
          {x.id === 2014 ? "La Liga" : x.name}
          </td>
          <td width="125">
          {x.currentSeason.startDate}
          </td>
          <td width="125">
          {x.currentSeason.endDate}
          </td>
          <td>
            <Link className = "compLink" to = "/comp-standings/standing">
            <button className = "mButton" onClick={()=>{props.chosenComp(x)}} >Get table</button>
            </Link>
          </td>
    </tr>
    ];}
    )
    }
    </tbody>
    </table>
</div>);
}

export default CompetitionStanding;