import React, { Component } from 'react';
import Navbar from './Navbar';

export default class DashBoard extends Component {

    produceEntries = () => {
        for ( entry in props.entries ) {
            return(
                <div className='dash-list-entry'>
                    
                </div>
            )
        }
    }

    render () {
        return (
            <div>
                <Navbar />
                <div className='dash'>
                    <div className='dash-list'>
                        {this.produceEntries}
                    </div>
                </div>
            </div>
        )
    }
} 