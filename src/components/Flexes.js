import React, { Component } from 'react';

export default class LoginFlex extends Component {
    render() {
        return (
            <div className='loginpane_flex'>
                <div className='loginpane_flex_heading loginpane_flex_heading_primary'>
                    The Next Lawyer
                </div>
                <div className='loginpane_flex_heading loginpane_flex_heading_secondary'>
                    The Next Generation Lawyer
                </div>
                <div className='loginpane_flex_spacesized'></div>
                <div className='loginpane_flex_textbox'>
                    <div className='loginpane_flex_text loginpane_flex_text_primary'>
                        Get your documents hassle free within few easy steps.
                    </div>
                    <div className='loginpane_flex_text loginpane_flex_text_secondary'>
                        A platform that helps user to make documentation very easy on your finger tips. You need to go through a simple interview only and your document is ready.
                    </div>
                </div>
            </div>
        )
    }
}