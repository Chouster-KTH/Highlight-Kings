import React from 'react';
import SignIn from "../signInView";


function SignInPresenter(props) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <React.Fragment>
            <SignIn
                onEmail={(x) => setEmail(x)}
                onPassword={(x) => setPassword(x)}
                onSubmit={() => props.model.logInUser(email, password)}
            />

        </React.Fragment>
    )
}

export default SignInPresenter;