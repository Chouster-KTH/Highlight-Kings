import Logo from '../images/logo.png';
import '../css/myAccount.css';
import SignIn from '../js/signInView';


function MyAccount(props) {

    let voteClass = "hidden";
    let tableClass = "hidden";
    let games = [];
    let key1 = 0;
    let message = "";
    let votingMessage = "";
    if (typeof props.model === "undefined") { message = "Internal error - footballModel not defined" }
    else
        if (typeof props.model.currentUser === "undefined" || props.model.currentUser === null) {
            message = "Please sign in to see this page.";
        }
        else {
            message = "Welcome " + props.model.users[props.model.currentUser - 1].email + "!";
            votingMessage = "You have made " + props.model.users[props.model.currentUser - 1].upvoteCount + " upvotes.";
            if (props.model.users[props.model.currentUser - 1].upvoteCount > 0) {
                games = props.model.users[props.model.currentUser - 1].upvotedGames;
                voteClass = "myUpvotedGames";
                tableClass = "listOfGames";
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
            <div className="infoText">{votingMessage}</div>
            <div className={voteClass}>
                History of upvoted games by me
            </div>
            <div className="listOfGames">
                <table className={tableClass}>
                    <tbody>
                        <tr>
                            <th>Game</th>
                            <th>Date played</th>
                        </tr>
                        {games.map(
                            function (opt) {
                                return (
                                    <tr key={key1++}>
                                        <td> <a href={opt.url} target="_blank">{opt.title}</a> </td>
                                        <td> {opt.date.slice(0, 10)} </td>
                                        <td> <button onClick={e => props.model.deleteUpvote(opt)}>X</button> </td>

                                    </tr>
                                )
                            }
                        )}</tbody></table></div>
        </div>


    )
}


export default MyAccount;
