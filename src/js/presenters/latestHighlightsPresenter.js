import React, { useState, useEffect } from 'react';
import HighlightSource from '../apiSource/highlightSource';
import LatestHighlights from '../latestHighlightsView';


function LatestHighlightsPresenter(props){
  const [hLight, setHLight] = useState(null);
  const [upvoted, addUpvoted] = useState(props.model.upvoted)

  useEffect(()=>{
    async function getHLight(){
      let data = await HighlightSource.getHighlight();
      setHLight(data);
    }
    getHLight()
  }, [])
  

  return <React.Fragment>{hLight && <LatestHighlights highlights = {hLight}
  addUpvoted = {upvoted => props.model.addUpVote(upvoted)}/>}</React.Fragment>
}

export default LatestHighlightsPresenter;
