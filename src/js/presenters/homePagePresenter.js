import React, { useState, useEffect } from 'react';
import HomePage from '../homePageView';

function HomePagePresenter (props){
    const[upVoted, setUpVoted] = useState(props.model.upVoted);

    useEffect(()=>{
        function getUpVoted(){
          let data = props.model.upVoted;
          setUpVoted(data);
        }
        getUpVoted()
      }, [])

    return (
        <HomePage 
        upVoted={upVoted} 
        addUpVote = {upvoted => props.model.addUpVote(upvoted)}/>
        );
}

export default HomePagePresenter;