import React, { useState, useEffect } from 'react';
import MatchSource from '../apiSource/matchSource';
import {CompetitionSummary, CompetitionSearch} from "../competitionSummaryView";

function CompSumPresenter(props){

  const [currentID, setCurrentID] = useState(props.model.currentComp);
  const [currentComp, setCurrentComp] = useState(null);

  console.log(currentComp)
  console.log(props.model.currentComp);

  useEffect(()=>{ 
      setCurrentID(props.model.currentComp)
      async function getComp(){
      let data = await MatchSource.getStandings(currentID);
      setCurrentComp(data);
    }
    getComp()
  }, [props.model])

  return (<React.Fragment>
    <CompetitionSearch/>
    { currentComp && <CompetitionSummary match = {currentComp}/>}
    </React.Fragment>);
}
export default CompSumPresenter;