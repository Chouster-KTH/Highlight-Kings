import React, { useState, useEffect } from 'react';
import HomePage from '../homePageView';

function HomePagePresenter(props) {
  const [upVoted, setUpVoted] = useState(props.model.upVoted);
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
      upVoted={upVoted}
      addUpVote={upvotedGame => { props.model.addUpVote(upvotedGame); setUpVoted(props.model.upVoted) }} />
  );
}

export default HomePagePresenter;