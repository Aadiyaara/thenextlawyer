import React, { Component } from 'react'; // React and Frameworks
import Navbar from './components/Home';
import Landing from './components/Landing';

// Custom Styling
import './styles/main.scss'

export default class App extends Component {
    render () {
        return(
            <Landing />
        )
    }
}