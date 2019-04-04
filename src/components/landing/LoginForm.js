import React from 'react';
import axios from 'axios';

export default class LoginForm extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password:''
        }
    }

    handleInputChange(e) {
        this.setState({[e.target.name] : e.target.value});
    }

    hanleFormSubmit(e) {
        e.preventDefault();

        
    }

    render(){
        return (
            <form onSubmit={(e)=>this.hanleFormSubmit(e)}>
                <input name='email' type='email' placeholder='Email' 
                    onChange={(e)=>this.hanleFormSubmit(e)} />
                <input name='password' type='password' placeholder='Password' 
                    onChange={(e)=>this.handleInputChange(e)} />
                <button onClick={(e)=>this.hanleFormSubmit(e)}>Log In</button>
            </form>
        )
    }
}