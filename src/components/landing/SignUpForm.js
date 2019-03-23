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
    }

    handleInputChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
        return (
            <form>
                <div>
                    <input name='firstName' type='text' placeholder='First Name' 
                        onChange={(e)=>this.handleInputChange(e)}/>
                    <inpunt name='lastName' type='text' placeholder='Last Name' 
                        onChange={(e)=>this.handleInputChange(e)}/>
                </div>
            </form>
        )
    }
}