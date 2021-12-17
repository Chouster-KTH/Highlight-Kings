import React, { useState, useEffect } from 'react';
import MatchSource from '../apiSource/matchSource';
import {MatchesSearch, MatchesSchedule} from "../matchView";
import { Navigate } from 'react-router-dom'

const MatchPresenter = ({ model, }) => {
  const [currentID, setCurrentID] = useState(undefined);
  const [currentComp, setCurrentComp] = useState(null);
  const [matches, setMatches] = useState(model.allMatches);
  const [teamName, setTeamName] = useState("");
  const [type, setType] = useState("ALL");
  const [teams, setTeam] = useState(null);

  useEffect(() => {
    async function getComp() { 
      let data = await MatchSource.getMatches(currentID);
      setMatches(data);
      model.setMatches(data);
      setCurrentComp(data);
    }
    
    async function getCrest() {
      let data = await MatchSource.getTeamCrests(currentID);
      setTeam(data);
    }
    
    if (currentID) {
      getComp();
      getCrest();
    }
  }, [currentID]) 
  
  useEffect(() => {
    setCurrentID(model.currentComp?.id);
  }, [model])

  if (!model.currentComp) {
    return <Navigate to="/comp-schedules" />
  }

  return (
    <React.Fragment>
      {currentComp && 
        (<MatchesSearch
            onText={txt => setTeamName(txt)}
            onType={tp => setType(tp)}
            onSearch={() => setMatches({ matches: model.findMatches(teamName, type) })}
            compTitle = {currentComp}/>
        )}
      {currentComp && <MatchesSchedule match={matches} teams={teams}/>}
    </React.Fragment>
  );
}
export default MatchPresenter;