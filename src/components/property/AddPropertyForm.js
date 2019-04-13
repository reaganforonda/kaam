import React from 'react';
import axios from 'axios';

export default class AddPropertyForm extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            propertyName:'',
            acctSysCode: '',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleResetForm = this.handleResetForm.bind(this);
    }

    handleInputChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleFormSubmit(e) {
        e.preventDefault();
        axios.post('/api/property', this.state).then(()=> {
            // TODO:
            console.log('Added OK');
            this.handleResetForm();
            this.props.toggleForm();
        }).catch((err)=> {
            // TODO:
            console.log(`Error: ${err}`);
        })
    }

    handleResetForm(){
        this.setState({
            propertyName:'',
            acctSysCode: '',
        })
    }

    render(){
        return (
            <form onSubmit={(e)=>this.handleFormSubmit(e)}>
                <div>
                    <input name='propertyName' placeholder='Property Name' type='text' onChange={(e)=>this.handleInputChange(e)} 
                        value={this.state.propertyName}/>
                </div>
                <div>
                    <input name='acctSysCode' placeholder='Accounting System ID' type='text' onChange={(e)=>this.handleInputChange(e)} 
                        value={this.state.acctSysCode}/>
                </div>
                <div>
                    <button onClick={(e)=>this.handleFormSubmit(e)}>Submit</button>
                </div>
            </form>
        )
    }
}