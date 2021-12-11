import Logo from '../images/logo.png';
import '../css/signUp.css';

function SignUp(props) {

    return (
        <div className='a'>
            <div id="p">
                <img src={Logo} alt="Highlight Kings" />
            </div>
            <h1 className="signUp-header">
                Sign up for free</h1>
            <div className="b">
                <div className="c">
                    <label htmlFor ="username">Email: </label><br />
                    <input type="text" id="username" name="username" onInput={e => props.onEmail(e.target.value)}></input><br /><br />
                </div>

                <div className="c">
                    <label htmlFor="pass">Password (8 characters minimum): </label><br />
                    <input type="password" id="pass" name="password" minLength="8" required onInput={e => props.onPassword(e.target.value)}></input><br /><br />
                </div>

                <input type="submit" value="Sign up" onClick={e => props.onSubmit()}></input>
            </div>
        </div>


    )
}

export default SignUp;
