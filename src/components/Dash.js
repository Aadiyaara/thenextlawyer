import React, { Component } from 'react';
import Navbar from './Navbar';

export default class DashBoard extends Component {

    state = {
        'entries': [],
    }

    componentDidMount = () => {
        console.log(this.props.location.state);
        this.setState({
            'entries': this.props.location.state,
        })
    }

    componentDidUpdate = () => {
        console.log('Number of Entries: ', this.state.entries.length);
    }

    render () {
        const entries = this.state.entries.map( entry => {
            return(
                <div className='dash-list-entry'>
                    <div className='dash-list-entry-number'>  </div>    
                    <div className='dash-list-entry-text'> {entry.title.split('-')[0]} </div>
                </div>
            )
        });

        return (
            <div>
                <Navbar />
                <div className='dash'>
                    <div className='dash-list'>
                        {entries}
                    </div>
                </div>
            </div>
        )
    }
} 