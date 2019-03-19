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
    }    

    handleInputChange(e) {
        this.setState({[e.target.name]: e.target.value});
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
                        <div>
                            <input name='firstName' placeHolder='First Name' type='text' onChange={(e)=> this.handleInputChange(e)}/>
                            <input name='lastName' placeHolder='Last Name' type='text' onChange={(e)=> this.handleInputChange(e)}/>
                            <input name='email' placeholder='Email' type='password' onChange={(e)=> this.handleInputChange(e)} />
                            <input name='password' placeholder='Password'/>
                            <input name='password' placeholder='Confirm Password'/>
                            <button>Sign Up</button>
                        </div>
                    </div>
                </div>
            </Main>
        )
    }
}