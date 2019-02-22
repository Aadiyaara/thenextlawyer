import React, { Component } from 'react'

export default class Navbar extends Component {
    render () {
        return (
            <div className='navbar'>
                <div className='navbar_interact'>
                    <button className='navbar_interact_home_button'>TNL</button>
                    <ul className='navbar_interact_list'>
                        <li className='navbar_interact_listitem'><button>Home</button></li>
                        <li className='navbar_interact_listitem'><button>Why Choose Us</button></li>
                        <li className='navbar_interact_listitem'><button>Our Services</button></li>
                        <li className='navbar_interact_listitem'><button>Contact Us</button></li>
                    </ul>
                </div>
            </div>
        )
    }
}