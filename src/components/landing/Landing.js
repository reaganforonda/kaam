import React from 'react';
import styled from 'styled-components';


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
            displayLogin: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetState = this.resetState.bind(this);
    }    

    handleInputChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.password === this.state.confirmPW) {
            
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
                        <div></div>
                        <div>
                            <p>Sign Up</p>
                            <p>or Sine In to your account</p>
                        </div>
                        <form>
                            <input name='firstName' placeholder='First Name' type='text' onChange={(e)=> this.handleInputChange(e)}/>
                            <input name='lastName' placeholder='Last Name' type='text' onChange={(e)=> this.handleInputChange(e)}/>
                            <input name='email' placeholder='Email' type='email' onChange={(e)=> this.handleInputChange(e)} />
                            <input name='password' placeholder='Password' type='password' onChange={(e)=> this.handleInputChange(e)}/>
                            <input name='password' placeholder='Confirm Password' type='password' onChange={(e)=>this.handleInputChange(e)}/>
                            <button type='button' onClick={(e)=>this.handleSubmit(e)}>Sign Up</button>
                        </form>
                    </div>
                </div>
            </Main>
        )
    }
}