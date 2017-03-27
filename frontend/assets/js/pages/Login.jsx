/**
 * Created by altair on 28.03.17.
 */

import React from 'react';

import LoginForm from 'grommet/components/LoginForm';

class Login extends React.Component {

    state = {
        login: '',
        password: '',
    };

    onSubmit = (data) => {
        let body = new FormData();
        body.append('username', data.username);
        body.append('password', data.password);
        console.log(data);
        let options = {
            method: 'POST',
            body: body,
            mode: "same-origin",
            credentials: "same-origin",
            redirect: "follow"
        };
        fetch('/api/auth/login/', options).then(response => console.log(response))
    };

    render() {
        return (
            <LoginForm usernameType='text' onSubmit={this.onSubmit}/>
        );
    }
}

export default Login;