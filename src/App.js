import React, { Component } from 'react'; // React and Frameworks
import Navbar from './components/Home';
import Landing from './components/Landing';
import { BrowserRouter, Route } from 'react-router-dom';
import DashBoard from './components/Dash';

// Custom Styling
import './styles/main.scss'

export default class App extends Component {
    render () {
        return(
            <BrowserRouter>
                <div>
                    <Route exact path='/' component = { Landing } />
                    <Route path='/dash' component = { DashBoard } />
                </div>
            </BrowserRouter>
        )
    }
}