import React from 'react';
import SignIn from "../signInView";
import { useNavigate } from 'react-router-dom';

function SignInPresenter(props) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [message, setMessage] = React.useState('');

    let text = "";
    let navigate = useNavigate();


    return (
        <React.Fragment>
            <SignIn
                message={message}
                onEmail={(x) => setEmail(x)}
                onPassword={(x) => setPassword(x)}
                onSubmit={() => {
                    text = props.model.logInUser(email, password);
                    setMessage(text);
                    let f1 = function (text) {
                        if (text === "")
                            navigate('/myAccount')
                    };

                    f1(text);
                }
                }
            />

        </React.Fragment>
    )
}

export default SignInPresenter;