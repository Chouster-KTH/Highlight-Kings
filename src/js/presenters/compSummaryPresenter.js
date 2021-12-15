import React, { useState, useEffect } from 'react';
import MatchSource from '../apiSource/matchSource';
import {CompetitionSummary, CompetitionSearch} from "../competitionSummaryView";

function CompSumPresenter(props){

  const [currentID, setCurrentID] = useState(props.model.currentComp.id);
  const [currentComp, setCurrentComp] = useState(null);
  const [matches, setMatches] = useState(props.model.allMatches);
  const [teamName, setTeamName] = useState("");
  const [teamMatch, setTeamMatch] = useState(null);
  const [type, setType] = useState("");
  const [teams, setTeam] = useState(null);

  console.log(props.model.currentComp);

  useEffect( ()=>{ async function getComp(){ 
      let data = await MatchSource.getMatches(currentID);
      setCurrentID(props.model.currentComp.id);
      setMatches(data);
      props.model.setMatches(data);
      setCurrentComp(data);
      }
      async function getCrest(){
        let data = await MatchSource.getTeamCrests(currentID);
        setTeam(data);

      }
      setCurrentID(props.model.currentComp.id);
      getComp();
      getCrest();
    
  }, [props.model])

  return (<React.Fragment>
    { currentComp && <CompetitionSearch
    onText={txt => setTeamName(txt)}
    onType={tp=>setType(tp)}
    onSearch={()=>setTeamMatch(props.model.findMatches(teamName, type))}
    compTitle = {currentComp}/>}
    { currentComp && <CompetitionSummary 
    match = {matches} teamM = {teamMatch} teams = {teams}/>}
    </React.Fragment>);
}
export default CompSumPresenter;