import React, { useState, useEffect } from 'react';
import HomePage from '../homePageView';

function HomePagePresenter (props){
    const[upVoted, setUpVoted] = useState(props.model.upVoted);

    /*
    useEffect(()=>{
        function getUpVoted(){
          let data = props.model.upVoted;
          setUpVoted(data);
        }
        getUpVoted()
      }, [])
    */
   
    useEffect( function(){
        function obs(){ setUpVoted(props.model.upVoted);
        ;}
        props.model.addObserver(obs);                               
        return function(){ props.model.removeObserver(obs);}        
     }, [props.model])     

    return (
        <HomePage 
        upVoted={upVoted} 
        addUpVote = {upvoted => props.model.addUpVote(upvoted)}/>
        );
}

export default HomePagePresenter;