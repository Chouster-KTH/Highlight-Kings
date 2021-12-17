import React, { useState, useEffect } from 'react';
import MatchSource from '../apiSource/matchSource';
import CompetitionMatches from '../competitionMatchView'


function CompetitionMatchPresenter(props){
  const [comp, setComp] = useState(null);

  useEffect(()=>{
    async function getComps(){
      let data = await MatchSource.getAllCompetitions();
      setComp(data);
    }
    getComps()
  }, [])
  
  

  return (<React.Fragment>
    {comp && <CompetitionMatches 
    comps = {comp} 
    chosenComp = {comp=>props.model.selectCompetition(comp)}/>}
    </React.Fragment>);
}

export default CompetitionMatchPresenter;