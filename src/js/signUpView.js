import Logo from '../images/logo.png';
import '../css/signUp.css';

function SignUp(props) {

    return (
        <div className='a'>
            <div id="pic">
                <img src={Logo} />
            </div>
            <h1 className="signUp-header">
                Sign up for free</h1>
                <div className = "b">
            <div className = "c">
                <label for="username">Email: </label><br/>
                <input type="text" id="username" name="username"></input><br/><br/>
            </div>

            <div className = "c">
                <label for="pass">Password (8 characters minimum): </label><br/>
                <input type="password" id="pass" name="password" minlength="8" required></input><br/><br/>
            </div>

            <input type="submit" value="Sign up"></input>
            </div>
        </div>


    )
}

export default SignUp;
