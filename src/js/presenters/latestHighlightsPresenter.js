import React, { useState, useEffect } from 'react';
import HighlightSource from '../apiSource/highlightSource';
import LatestHighlights from '../latestHighlightsView';


function LatestHighlightsPresenter(props){
  const [hLight, setHLight] = useState(null);

  useEffect(()=>{
    async function getHLight(){
      let data = await HighlightSource.getHighlight();
      setHLight(data);
    }
    getHLight()
  }, [])
  

  return (<React.Fragment>
    {hLight && <LatestHighlights 
    highlights={hLight} />}
    </React.Fragment>);
}

export default LatestHighlightsPresenter;