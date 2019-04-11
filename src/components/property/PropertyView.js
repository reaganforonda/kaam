import React from 'react';
import PropertyViewMenu from './PropertyViewMenu';
import AddPropertyForm from './AddPropertyForm';

export default class PropertyView extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            displayAddPropertyForm: false
        }

        this.togglePropertyForm = this.togglePropertyForm.bind();
    }

    togglePropertyForm() {
        
        if(this.state.displayAddPropertyForm) {    
            this.setState({displayAddPropertyForm: false});
        } else {
            this.setState({displayAddPropertyForm: true});
        }
    }

    render(){
        return (
            <div>
                <PropertyViewMenu toggleForm={this.togglePropertyForm}/>
                <div>
                    {
                        this.state.displayAddPropertyForm ? <AddPropertyForm/> : null
                    }
                </div>
            </div>
        )
    }
}