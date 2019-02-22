import React, { Component } from 'react';

export default class AuthLog extends Component {
    
    render () {
        return(
            <div className='authlog-'>
                <div className='authlog-tag'>
                    You are Logged in as {this.props.userNameTag}
                </div>
            </div>
        )
    }
}