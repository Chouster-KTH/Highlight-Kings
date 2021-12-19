import React, { useState, useEffect } from 'react';
import HomePage from '../homePageView';

function HomePagePresenter(props) {
  const [upVoted, setUpVoted] = useState(props.model.upVoted);
  const [userUpvoted, setUserUpvoted] = useState([]);
  props.model.filterUpVote(); //remove videos from homepage that have no votes
  useEffect(() => {
    function getUpVoted() {
      let data = props.model.upVoted;
      setUpVoted(data);
    }
    getUpVoted()
  }, [])

  return (
    <HomePage
      model={props.model}
      upVoted={upVoted}
      setUserUpvoted={()=> setUserUpvoted(props.model.users[props.model.currentUser - 1].upvotedGames)}
      userUpvoted={userUpvoted}
      addUpVote={upvotedGame => { props.model.addUpVote(upvotedGame); setUpVoted(props.model.upVoted) }} />
  );
}

export default HomePagePresenter;