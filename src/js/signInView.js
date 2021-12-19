import Logo from '../images/logo.png';
import '../css/signIn.css';

function SignIn(props) {
    return (
        <div className='aa'>
            <div id="pp">
                <img src={Logo} alt="Highlight Kings" />
            </div>
            <h1 className="signIn-header">
                Sign in to enjoy all features</h1>
            <div className="bb">
                <div className="message">{props.message}</div>
                <div className="cc">
                    <label htmlFor="username">Email: </label><br />
                    <input type="text" id="username" name="username" onInput={e => props.onEmail(e.target.value)}></input><br /><br />
                </div>

                <div className="cc">
                    <label htmlFor="pass">Password: </label><br />
                    <input type="password" id="pass" name="password" minLength="8" required onInput={e => props.onPassword(e.target.value)}></input><br /><br />
                </div>
                <body>
                    <input className="signInButton" type="submit" value="Sign in" onClick={e => props.onSubmit()}></input>
                </body>
                <div><br />
                    Don't have an account? Sign up <a href="/signUp">here</a> for free.
                </div>
            </div>
        </div>
    )
}

export default SignIn;