import React from 'react';
import SignUp from "../signUpView";
import { useNavigate } from 'react-router-dom';

function SignUpPresenter(props) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [message, setMessage] = React.useState('');

    let text = "";
    let navigate = useNavigate();


    return (
        <React.Fragment>
            <SignUp
                message={message}
                onEmail={(x) => setEmail(x)}
                onPassword={(x) => setPassword(x)}
                onSubmit={() => {
                    text = props.model.addUser(email, password);
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

export default SignUpPresenter;