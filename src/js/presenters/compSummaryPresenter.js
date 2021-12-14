import React, { useState, useEffect } from 'react';
import MatchSource from '../apiSource/matchSource';
import {CompetitionSummary, CompetitionSearch} from "../competitionSummaryView";

function CompSumPresenter(props){

  const [currentID, setCurrentID] = useState(props.model.currentComp.id);
  const [currentComp, setCurrentComp] = useState(null);
  const [matches, setMatches] = useState(props.model.allMatches);
  const [teamName, setTeamName] = useState("");
  const [teamMatch, setTeamMatch] = useState(null);

  console.log(props.model.currentComp);

  useEffect( ()=>{ async function getComp(){ 
      let data = await MatchSource.getStandings(currentID);
      setCurrentID(props.model.currentComp.id);
      setMatches(data);
      props.model.setMatches(data);
      setCurrentComp(data);
      }
      setCurrentID(props.model.currentComp.id);
      getComp();
    
  }, [props.model])

  return (<React.Fragment>
    { currentComp && <CompetitionSearch
    onText={txt => setTeamName(txt)}
    onSearch={()=>setTeamMatch(props.model.findMatches(teamName))}
    compTitle = {currentComp}/>}
    { currentComp && <CompetitionSummary 
    match = {matches} teamM = {teamMatch}/>}
    </React.Fragment>);
}
export default CompSumPresenter;