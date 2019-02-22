import React, { Component } from 'react'
import Navbar from './Navbar';
import Auth from './auth/Auth';

export default class Landing extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className='loginpane'>
                    <Auth />
                </div>
            </div>
        )
    }
}