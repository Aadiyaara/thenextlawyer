import React, { Component } from 'react'
import Login from './Login';
import Register from './Register';

export default class LoginSplitter extends Component {
    state = {
        'active': 'login'
    }

    displayLogin = () => {
        if(this.state.active == 'login'){
            console.log('Login on Display');
            return (
                <Login />
            )
        }
        else return null;
    }

    displayRegister = () => {
        if(this.state.active == 'register') {
            console.log('Register on Display');
            return (
                <Register />
            )
        }
        else return null;
    }

    setLoginState = () => {
        this.setState({
            'active': 'login',
        })
    }

    setRegisterState = () => {
        this.setState({
            'active': 'register',
        })
    }
    

    // changeSplitState = (arg) => {
    //     this.setState({
    //         'active': arg,
    //     });
    // }

    componentDidUpdate = () => {
        console.log(this.state);
    }

    render() {
        return (
            <div className='authbox-arena'>
                <div className='authbox-login'>
                    <div className='authbox-login-head'><button onClick={this.setLoginState}>Login</button></div>
                    {this.displayLogin()}
                </div>
                <div className='authbox-register'>
                    <div className='authbox-register-head'><button onClick={this.setRegisterState}>Register</button></div>
                    {this.displayRegister()}
                </div>
            </div>
        )
    }
}
