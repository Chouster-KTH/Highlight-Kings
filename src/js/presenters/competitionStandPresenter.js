import React, { useState, useEffect } from 'react';
import MatchSource from '../apiSource/matchSource';
import CompetitionStanding from '../competitionStandingView'


function CompStandsPresenter(props){
  const [comp, setComp] = useState(null);

  useEffect(()=>{
    async function getComps(){
      let data = await MatchSource.getAllCompetitions();
      setComp(data);
    }
    getComps()
  }, [])
  
  

  return (<React.Fragment>
    {comp && <CompetitionStanding
    comps = {comp} 
    chosenComp = {comp=>props.model.selectCompetition(comp)}/>}
    </React.Fragment>);
}

export default CompStandsPresenter;