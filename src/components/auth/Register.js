import React, { Component } from 'react'

// For Register Form
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class Register extends Component {
    
    render() {
        return (
            <div className = 'authbox-register-interface'>
                <div className = 'authbox-register-interface-form'>

                    <TextField
                        id="register-outlined-email-input"
                        label="Email"
                        // className={classes.textField}
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                    />

                    <TextField
                        id="register-outlined-password-input"
                        label="Password"
                        // className={classes.textField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                    />
                    
                    <Button variant="contained" color="secondary" className = 'authbox-register-interface-form-submit'> Register </Button>

                </div>
            </div>
        )
    }
}
