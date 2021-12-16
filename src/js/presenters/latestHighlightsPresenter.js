import React, { useState, useEffect } from 'react';
import HighlightSource from '../apiSource/highlightSource';
import LatestHighlights from '../latestHighlightsView';


function LatestHighlightsPresenter(props){
  const [hLight, setHLight] = useState(null);
  const [upvoted, addUpvoted] = useState([]);//useState(props.model.users[props.model.currentUser - 1].upvotedGames);
  const [page, setPage] = useState(1);
  
  useEffect(()=>{
    async function getHLight(){
      let data = await HighlightSource.getHighlight();
      setHLight(data);
    }
    getHLight()
  }, [])
 
  return (<React.Fragment>
    {hLight && <LatestHighlights 
    pageChange={nr=>{if(nr > 0 && nr < 5)setPage(nr)}}
    pageNr={page} 
    highlights={hLight} 
    upvoted = {upvoted}
    model={props.model}
    setUpvoted = {()=>addUpvoted(props.model.users[props.model.currentUser - 1].upvotedGames)}
    addUpVote = {upvoted => {props.model.addUpVote(upvoted);addUpvoted(props.model.users[props.model.currentUser - 1].upvotedGames);}}/>}
    </React.Fragment>);
}

export default LatestHighlightsPresenter;
