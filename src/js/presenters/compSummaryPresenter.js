import MatchSource from "../apiSource/matchSource";
import CompetitionSummary from "../competitionSummaryView";
import ReactDOM from 'react-dom';
import SideBar from "../sidebarView";

function CompSumPresenter(id){

MatchSource.getStandings(id).then(dt=>ReactDOM.render(
      <CompetitionSummary match ={dt}/>
        ,
    document.getElementById('root'))
  );
}
export default CompSumPresenter;