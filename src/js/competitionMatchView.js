import '../css/compMatch.css'
import '../css/sidebar.css'
import {Link} from 'react-router-dom';

function CompetitionMatches(props){
  const ids = [2019, 2002, 2015, 2003, 2017, 2014, 2021];
  var compArr = props.comps.competitions.filter((cmp) => ids.includes(cmp.id) );
return(<div className ="comps">
  <ul>
  <h1>Fixtures - Competitions</h1>
    <div id ="subText">Click on a competition name or image to retrieve info about matches</div>
  
    {
    compArr.map(function(x){return[
      <div key ={x.id} onClick={e=>{props.chosenComp(x)}}>
        <Link className = "compLink" to = "/comp-fixtures/matches">
        <img src = {x.area.ensignUrl} alt="Country flag" height = {100}/>
          <li>
          {x.id === 2014 ? "La Liga" : x.name}
          </li>
        </Link>
      </div>
    ];}
    )
    }
  </ul>
</div>);

}

export default CompetitionMatches;