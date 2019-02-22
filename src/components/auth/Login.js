import React, { Component } from 'react';

// For Login Form
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Axios from 'axios';

export default class Login extends Component {

    state = {
        'username': '',
        'password': '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Logging in with Login State:' , this.state);
        this.handleLogin();
    }

    handleLogin = () => {
        if (this.state.username == 'admin@admin.com' && this.state.password == 'Sahil1234') {
            Axios.get('http://legalzoom.docassemble.community.lawyer/api/user/interviews',{
                params: {
                    key: 'E9AL3N0FM1PAD5UIVK9I50X08DMYUEVK',
                }
            }).then((res) => {
                var res = res.data;
                console.log('Login Response: ', res);
            });
        }
    }

    render () {
        return(
            <div className = 'authbox-login-interface'>

                <form className = 'authbox-login-interface-form' onSubmit={this.handleSubmit}>

                    <TextField
                        id="login-outlined-email-input"
                        label="Email"
                        // className={classes.textField}
                        type="email"
                        name="username"
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleChange}
                    />

                    <TextField
                        id="login-outlined-password-input"
                        label="Password"
                        // className={classes.textField}
                        type="password"
                        name='password'
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleChange}
                    />
                    
                    <Button variant="contained" color="secondary" className = 'authbox-login-interface-form-submit' onClick={this.handleSubmit}> Login </Button>
                
                </form>
            </div>
        )
    }

} 