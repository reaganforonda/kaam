import React from 'react';

export default class AddPropertyForm extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            propertyName:'',
            acctSysCode: '',
            address:''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleFormSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render(){
        return (
            <form onSubmit={(e)=>this.handleFormSubmit(e)}>
                <div>
                    <input name='propertyName' placeholder='Property Name' type='text' onChange={(e)=>this.handleInputChange(e)}/>
                </div>
            </form>
        )
    }
}