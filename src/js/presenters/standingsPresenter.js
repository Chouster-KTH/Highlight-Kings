import React, { useState, useEffect } from 'react';
import MatchSource from '../apiSource/matchSource';
import { Navigate } from 'react-router-dom'
import Standings from '../standingsView';

const StandingsPresenter = ({ model, }) => {
  const [currentID, setCurrentID] = useState(undefined);
  const [standings, setStandings] = useState(null);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    async function getStands() {
      try{ 
      let data = await MatchSource.getStandings(currentID);
      setStandings(data);
      }
      catch(e){
      setError(e)
      }
    }
    if (currentID) {
      getStands();
    }
  }, [currentID]) 
  
  useEffect(() => {
    setCurrentID(model.currentComp?.id);
  }, [model])

  if (!model.currentComp) {
    return <Navigate to="/comp-standings" />
  }

  if (error) {
    return <Navigate to="/error" />
  }

  return (
    <React.Fragment>
    {standings && <Standings stands={standings}/>}
    </React.Fragment>
  );
}
export default StandingsPresenter;