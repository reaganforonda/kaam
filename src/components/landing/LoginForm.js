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
            <form>

            </form>
        )
    }
}