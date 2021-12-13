import Logo from '../images/logo.png';
import '../css/myAccount.css';
import SignIn from '../js/signInView';


function MyAccount(props) {

    let message = "";
    let votingMessage = "";
    if (typeof props.model === "undefined") { message = "Internal error - footballModel not defined" }
    else
        if (typeof props.model.currentUser === "undefined" || props.model.currentUser === null) {
            message = "Please sign in to see this page";
        }
        else {
            message = "Welcome " + props.model.currentUser + "!";
            votingMessage = "You have made " + props.model.currentUserUpvoteCount + " upvotes.";
        }


    return (
        <div className='picture'>
            <div id="pic">
                <img src={Logo} alt="Highlight Kings" />
            </div>
            <h1 className="myAccount-content">
                My account</h1>

            <div type='text' className='infoText'>{message}</div>
            <div className="infoText">{votingMessage}</div>
        </div>


    )
}


export default MyAccount;
