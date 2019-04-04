import React from 'react';
import axios from 'axios';
import * as util from '../../utilities/utilities';

export default class SignUpForm extends React.Component{
    constructor(props) {
        super(props);

        this.state= {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPW: '',
            displayPWMatchError: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.togglePWMatchError = this.togglePWMatchError.bind(this);
    }

    handleInputChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    togglePWMatchError(e) {
        if(this.state.displayPWMatchError){
            this.setState({displayPWMatchError: false});
        } else {
            this.setState({displayPWMatchError: true});
        }
        
    }

    handleFormSubmit(e) {
        e.preventDefault();
        let user = Object.assign({}, this.state);
        if(user.confirmPW === user.password) {
            if(util.validatePassword(user.confirmPW)){
                axios.post('/api/auth/register', user).then((result) => {
                    console.log(result);
                })
            } else {
                alert('Password must contain at least 6 characters and must contain at least 1 number and 1 capital letter')
            }
        } else {
            this.togglePWMatchError();
        }
    }

    resetState(){
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPW: ''
        })
    }

    render(){
        return (
            <form onSubmit={(e)=>this.handleFormSubmit(e)}>
                <input required name='firstName' type='text' placeholder='First Name' 
                    onChange={(e)=>this.handleInputChange(e)}/>
                <input required name='lastName' type='text' placeholder='Last Name' 
                    onChange={(e)=>this.handleInputChange(e)}/>
                <input required name='email' type='email' placeholder='Email' 
                    onChange={(e)=>this.handleInputChange(e)}/>
                <input required name='password' type='password' placeholder='Password' 
                    onChange={(e)=>this.handleInputChange(e)}/>
                <input required name='confirmPW' type='password' placeholder='Confirm Password' 
                    onChange={(e)=>this.handleInputChange(e)}/>
                {
                    !this.state.displayPWMatchError ? null : <div>
                        Passwords Do Not Match
                    </div>
                }
                <button onClick={(e)=>this.handleFormSubmit(e)}>Submit</button>
            </form>
        )
    }
}