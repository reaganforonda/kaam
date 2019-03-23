import React from 'react';

export default class SignUpForm extends React.Component{
    constructor(props) {
        super(props);

        this.state= {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPW: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleFormSubmit(e) {
        e.preventDefault();

        console.log(this.state);
    }

    render(){
        return (
            <form onSubmit={(e)=>this.handleFormSubmit(e)}>
                <input name='firstName' type='text' placeholder='First Name' 
                    onChange={(e)=>this.handleInputChange(e)}/>
                <input name='lastName' type='text' placeholder='Last Name' 
                    onChange={(e)=>this.handleInputChange(e)}/>
                <input name='email' type='email' placeholder='Email' 
                    onChange={(e)=>this.handleInputChange(e)}/>
                <input name='password' type='password' placeholder='Password' 
                    onChange={(e)=>this.handleInputChange(e)}/>
                <input name='confirmPW' type='password' placeholder='Confirm Password' 
                    onChange={(e)=>this.handleInputChange(e)}/>
                <button onClick={(e)=>this.handleFormSubmit(e)}>Submit</button>
            </form>
        )
    }
}