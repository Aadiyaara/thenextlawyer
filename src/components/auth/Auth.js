import React, { Component } from 'react';
import LoginFlex from '../Flexes';
import LoginSplitter from './LoginSplitter';

export default class Auth extends Component {

    state = {
        'isLoggedIn': false,
        'isRegistering': false
    }

    render () {
        return(
            <div className='authbox'>
                <LoginFlex/ >
                <div className='authbox_pane'>
                    <LoginSplitter />
                </div>       
            </div>       
        )
    }
} 