import React, { useState, useEffect } from 'react';
import MatchSource from '../apiSource/matchSource';
import CompetitionStanding from '../competitionStandingView'
import { Navigate } from 'react-router-dom'


function CompStandsPresenter(props){
  const [comp, setComp] = useState(null);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    async function getComps() {
      try {
        let data = await MatchSource.getAllCompetitions();
        setComp(data);
      } catch (e) {
        setError(e)
      }
    }

    getComps()
  }, [])
  
  if (error) {
    return <Navigate to="/error" />
  }
  
  

  return (<React.Fragment>
    {comp && <CompetitionStanding
    comps = {comp} 
    chosenComp = {comp=>props.model.selectCompetition(comp)}/>}
    </React.Fragment>);
}

export default CompStandsPresenter;