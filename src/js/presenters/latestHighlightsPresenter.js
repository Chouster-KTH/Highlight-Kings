import React, { useState, useEffect } from 'react';
import HighlightSource from '../apiSource/highlightSource';
import LatestHighlights from '../latestHighlightsView';


function LatestHighlightsPresenter(props){
  const [hLight, setHLight] = useState(null);

  useEffect(()=>{
    async function getHLight(){
      let data = props.model.highlights;
      setHLight(data);
    }
    getHLight()
  }, [])
  
  
  console.log(hLight);

  return (<React.Fragment>
    {hLight && <LatestHighlights 
    highlights={hLight} />}
    </React.Fragment>);
}

export default LatestHighlightsPresenter;