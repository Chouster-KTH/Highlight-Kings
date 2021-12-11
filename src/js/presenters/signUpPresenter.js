import React from 'react';
import SignUp from "../signUpView";


function SignUpPresenter(props) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <React.Fragment>
            <SignUp
                onEmail={(x) => setEmail(x)}
                onPassword={(x) => setPassword(x)}
                onSubmit={() => props.model.addUser(email, password)}
            />

        </React.Fragment>
    )
}

export default SignUpPresenter;