import '../css/comp.css'
import '../css/sidebar.css'
import {Link} from 'react-router-dom';
import CompSumPresenter from './presenters/compSummaryPresenter';

function Competitions(props){
  const ids = [2001, 2019, 2002, 2015, 2003, 2017, 2014, 2021];
  var compArr = props.comps.competitions.filter((cmp) => ids.includes(cmp.id) );
return(<div className ="comps">
  <ul>
  <h1>Competitions
  <div id ="subText">Click on a competition name or image to retrieve info about it</div>
  </h1>
  
    {
    compArr.map(function(x){return[
      <div key ={x.id} onClick={e=>{CompSumPresenter(x.id)}}>
        <Link className = "compLink" to = "/competitions">
      <img src = {x.id === 2001 ? x.emblemUrl: x.area.ensignUrl} height = {100}/>
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

export default Competitions;