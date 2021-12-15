import React from 'react';
import MyAccount from "../myAccountView";

function MyAccountPresenter(props) {

    const [voteCount, setVoteCount] = React.useState(null); 


    return ( 
        <React.Fragment>
            <MyAccount 
                model={props.model}
                onDeleteClick={x => { 
                    props.model.deleteUpvote(x);
                    setVoteCount(props.model.users[props.model.currentUser - 1].upvoteCount)
                }}
            />

        </React.Fragment>
    )
}

export default MyAccountPresenter;