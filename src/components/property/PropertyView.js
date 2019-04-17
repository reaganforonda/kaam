import React from 'react';
import PropertyViewMenu from './PropertyViewMenu';
import AddPropertyForm from './AddPropertyForm';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getProperties} from '../../ducks/propertiesReducers';

export class PropertyView extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            displayAddPropertyForm: false
        }

        this.togglePropertyForm = this.togglePropertyForm.bind(this);
    }

    togglePropertyForm() {
        
        if(this.state.displayAddPropertyForm) {    
            this.setState({displayAddPropertyForm: false});
        } else {
            this.setState({displayAddPropertyForm: true});
        }
    }

    componentDidMount(){
        this.props.getProperties();
    }

    render(){
        return (
            <div>
                <PropertyViewMenu toggleForm={this.togglePropertyForm}/>
                <div>
                    {
                        this.state.displayAddPropertyForm ? <AddPropertyForm toggleForm={this.togglePropertyForm}/> : null
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps, {getProperties})(withRouter(PropertyView));