import Logo from '../images/logo.png';
import '../css/signUp.css';
import { Link } from 'react-router-dom';

function SignUp(props) {


    return (

        //<form>
        <div className='a'>
            <div id="p">
                <img src={Logo} alt="Highlight Kings" />
            </div>
            <h1 className="signUp-header">
                Sign up for free (do not use your real email and password)</h1>
            <div className="b">
                <div className="message">{props.message}</div>
                <div className="c">
                    <label htmlFor="email">Email: </label><br />
                    <input type="email" id="email" name="email" onInput={e => props.onEmail(e.target.value)}></input><br /><br />
                </div>

                <div className="c">
                    <label htmlFor="pass">Password (8 characters minimum): </label><br />
                    <input type="password" id="pass" name="password" minLength="8" required onInput={e => props.onPassword(e.target.value)}></input><br /><br />
                </div>

                <input type="submit" value="Sign up" onClick={e => props.onSubmit()}></input>
                <h2 id="result"></h2>
            </div>
        </div>
        //</form>
    )
}

export default SignUp;


