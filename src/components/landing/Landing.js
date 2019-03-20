import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Main = styled.div`

    height: 100vh;
`


export default class Landing extends React.Component{
    constructor(props ){
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPW: '',
            displayLoginForm: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetState = this.resetState.bind(this);
        this.displayLoginForm = this.displayLoginForm.bind(this);
    }    

    handleInputChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.password === this.state.confirmPW && (this.state.password !== '' && this.state.confirmPW !== '')) {
            let user = Object.assign({}, this.state);
            console.log(user);
            axios.post('/api/auth/register', user).then((result) => {
                // TODO:
                
            })
        } else {
            console.log("PW Do Not Match")
        }
    }

    resetState(){
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPW: '',
            displayLogin: false
        })
    }

    displayLoginForm(){
        if(!this.state.displayLoginForm) {
           this.setState({displayLoginForm : true}) 
        } else {
            this.setState({displayLoginForm: false})
        }
    }

    render(){
        return (
            <Main>
                <div>
                    <header>
                        <h1>Kaam</h1>
                    </header>
                </div>
                <div>
                    <div>
                        {
                            this.state.displayLoginForm ? <button onClick={(e)=>this.displayLoginForm()}>Sign Up</button> : 
                            <button onClick={(e)=>this.displayLoginForm()}>Sign In</button>
                        }
                        
                    </div>
                    {
                        this.state.displayLoginForm ? 
                        <div>
                            <form>
                                <input name='email' placeholder='Email' type='email' onChange={(e)=>this.handleInputChange(e)}/>
                                <input name='password' placeholder='Password' type='password' onChange={(e)=>this.handleInputChange(e)}/>
                            </form>
                        </div> :
                    
                        <div>
                            <div>
                                <p>Sign Up</p>
                                <p>or Sign In to your account</p>
                            </div>
                            <form>
                                <input name='firstName' placeholder='First Name' type='text' onChange={(e)=> this.handleInputChange(e)}/>
                                <input name='lastName' placeholder='Last Name' type='text' onChange={(e)=> this.handleInputChange(e)}/>
                                <input name='email' placeholder='Email' type='email' onChange={(e)=> this.handleInputChange(e)} />
                                <input required name='password' placeholder='Password' type='password' onChange={(e)=> this.handleInputChange(e)}/>
                                <input required name='confirmPW' placeholder='Confirm Password' type='password' onChange={(e)=>this.handleInputChange(e)}/>
                                <button type='button' onClick={(e)=>this.handleSubmit(e)}>Sign Up</button>
                            </form>
                        </div>
                    }
                </div>
            </Main>
        )
    }
}