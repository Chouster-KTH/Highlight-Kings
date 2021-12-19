import Logo from '../images/logo.png';
import '../css/myAccount.css';


function MyAccount(props) {

    let voteClass = "hidden";
    let tableClass = "hidden";
    let games = [];
    let key1 = 0;
    let message = "";
    let votingMessage = "";
    let secondMessage = "";
    if (typeof props.model === "undefined") { message = "Internal error - footballModel not defined" }
    else
        if (typeof props.model.currentUser === "undefined" || props.model.currentUser === null) {
            message = "Please sign in to see your upvoted games.";
        }
        else {
            message = "Welcome " + props.model.users[props.model.currentUser - 1].email + "!";
            if (props.model.users[props.model.currentUser - 1].upvoteCount === 1) {
                votingMessage = "You have made " + props.model.users[props.model.currentUser - 1].upvoteCount + " upvote.";
                secondMessage = "You can undo your upvote below.";
            }

            else if (props.model.users[props.model.currentUser - 1].upvoteCount === 0) {
                votingMessage = "You have made " + props.model.users[props.model.currentUser - 1].upvoteCount + " upvotes."; 
                secondMessage = "Please upvote a video for it to show on this page.";
            }
            else if (props.model.users[props.model.currentUser - 1].upvoteCount > 1) {
                votingMessage = "You have made " + props.model.users[props.model.currentUser - 1].upvoteCount + " upvotes.";
                secondMessage = "You can undo your upvotes below.";

            }
            if (props.model.users[props.model.currentUser - 1].upvoteCount > 0) {
                games = props.model.users[props.model.currentUser - 1].upvotedGames;
                voteClass = "myUpvotedGames";
                tableClass = "styled-table";
            }
        }


    return (
        <div className='name'>
            <div id="pic">
                <img src={Logo} alt="Highlight Kings" />
            </div>
            <h1 className="myAccount-content">
                My account</h1>

            <div type='text' className='infoText'>{message}</div>
            <div className="infoText">{votingMessage}<br />{secondMessage}</div>
            <div className={voteClass}>
                My upvoted games
            </div>
            <div className="listOfGames">
                <table className={tableClass}>
                   
                        <thead>
                            
                            <tr>
                                <th>Game</th>
                                <th>Date played</th><th></th>
                            </tr></thead> <tbody>
                        {games.map(
                            function (opt) {
                                return (
                                    <tr key={key1++} className="active-row">
                                       <span title = "Upvoted game - link to ScoreBat"> <td> <b><a className = "url-link" href={opt.url} target="_blank">{opt.title}</a></b> </td></span>
                                        <td> {opt.date.slice(0, 10)} </td>
                                        <span title = "Remove upvote"> <td> <button onClick={e => props.onDeleteClick(opt)}>x</button> </td></span>

                                    </tr>

                                )
                            }
                        )}</tbody></table></div>





        </div>


    )
}


export default MyAccount;

